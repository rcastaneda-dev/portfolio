// Pipeline results for the project panels and the footer. GitHub Actions runs
// are fetched before each build by scripts/fetch-ci.mjs; the committed
// ci-snapshot.json is the fallback, so a rate limit or outage never fails the
// build. Nothing here touches Node APIs, so client components can import it.

import { projects, type ProjectId } from './projects';

export type RunStatus = 'passed' | 'failed' | 'running' | 'cancelled';

export interface CiRun {
  id: number;
  workflow: string;
  runNumber: number;
  branch: string;
  status: RunStatus;
  /** Seconds from start to last update; null while running or when timestamps are unusable. */
  durationSec: number | null;
  startedAt: string;
  url: string;
}

export interface CiPanelData {
  repo: string;
  /** `github` when fetched for this build, `snapshot` when read from ci-snapshot.json. */
  source: 'github' | 'snapshot';
  fetchedAt: string;
  runs: CiRun[];
}

export type CiSnapshot = Record<string, { fetchedAt: string; runs: CiRun[] }>;

export interface CiSource {
  repo: string;
  projectId?: ProjectId;
  branch?: string;
  /** Workflow file to read runs from (e.g. 'ci.yml'); all workflows when omitted. */
  workflow?: string;
  /** Only finished runs, so a build never reports its own in-progress run. */
  completedOnly?: boolean;
  /** Only runs triggered by this event (e.g. 'push'), so fork pull requests never count. */
  event?: string;
  perPage: number;
}

export interface CiBundle {
  projects: Partial<Record<ProjectId, CiPanelData>>;
  site: CiPanelData | null;
}

export const SITE_REPO = 'rcastaneda-dev/portfolio';

/** Every project with a `ciRepo` (last 5 runs), then the site itself (latest finished ci.yml run on main). */
export function ciSources(): CiSource[] {
  const fromProjects: CiSource[] = projects
    .filter((p) => p.ciRepo)
    .map((p) => ({ repo: p.ciRepo as string, projectId: p.id, perPage: 5 }));
  return [...fromProjects, { repo: SITE_REPO, workflow: 'ci.yml', branch: 'main', completedOnly: true, event: 'push', perPage: 1 }];
}

interface RawRun {
  id: number;
  name: string | null;
  display_title?: string;
  run_number: number;
  head_branch: string | null;
  status: string | null;
  conclusion: string | null;
  run_started_at: string | null;
  created_at: string;
  updated_at: string;
  html_url: string;
}

function isRawRun(value: unknown): value is RawRun {
  if (typeof value !== 'object' || value === null) return false;
  const run = value as Record<string, unknown>;
  return (
    typeof run.id === 'number' &&
    typeof run.run_number === 'number' &&
    typeof run.html_url === 'string' &&
    typeof run.created_at === 'string' &&
    typeof run.updated_at === 'string'
  );
}

export function mapRun(raw: RawRun): CiRun {
  const completed = raw.status === 'completed';
  let status: RunStatus = 'running';
  if (completed) {
    if (raw.conclusion === 'success' || raw.conclusion === 'neutral') status = 'passed';
    else if (raw.conclusion === 'cancelled' || raw.conclusion === 'skipped' || raw.conclusion === 'stale') {
      status = 'cancelled';
    } else status = 'failed';
  }
  const startedAt = raw.run_started_at ?? raw.created_at;
  const elapsed = Date.parse(raw.updated_at) - Date.parse(startedAt);

  return {
    id: raw.id,
    workflow: raw.name ?? raw.display_title ?? 'Workflow',
    runNumber: raw.run_number,
    branch: raw.head_branch ?? '',
    status,
    durationSec: completed && Number.isFinite(elapsed) ? Math.max(0, Math.round(elapsed / 1000)) : null,
    startedAt,
    url: raw.html_url,
  };
}

/** Runs from a GitHub "list workflow runs" body, or null when the body is not one. */
export function parseRuns(body: unknown): CiRun[] | null {
  if (typeof body !== 'object' || body === null) return null;
  const list = (body as { workflow_runs?: unknown }).workflow_runs;
  if (!Array.isArray(list)) return null;
  return list.filter(isRawRun).map(mapRun);
}

export function snapshotPanels(snapshot: CiSnapshot): Record<string, CiPanelData | null> {
  const panels: Record<string, CiPanelData | null> = {};
  Object.keys(snapshot).forEach((repo) => {
    const saved = snapshot[repo];
    panels[repo] =
      saved.runs.length > 0 ? { repo, source: 'snapshot', fetchedAt: saved.fetchedAt, runs: saved.runs } : null;
  });
  return panels;
}

interface ResolveOptions {
  snapshot: CiSnapshot;
  fetchImpl?: typeof fetch;
  token?: string;
  branch?: string;
  workflow?: string;
  completedOnly?: boolean;
  event?: string;
  perPage?: number;
  now?: Date;
  apiBase?: string;
}

/** Latest runs for one repo: GitHub first, then the snapshot, else null. Never throws. */
export async function resolveRuns(repo: string, options: ResolveOptions): Promise<CiPanelData | null> {
  const {
    snapshot,
    fetchImpl = fetch,
    token,
    branch,
    workflow,
    completedOnly,
    event,
    perPage = 5,
    now = new Date(),
    apiBase = 'https://api.github.com',
  } = options;

  const query = new URLSearchParams({ per_page: String(perPage) });
  if (branch) query.set('branch', branch);
  if (completedOnly) query.set('status', 'completed');
  if (event) query.set('event', event);
  const runsPath = workflow ? `actions/workflows/${workflow}/runs` : 'actions/runs';
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetchImpl(`${apiBase}/repos/${repo}/${runsPath}?${query.toString()}`, { headers, signal: AbortSignal.timeout(10_000) });
    if (response.ok) {
      const runs = parseRuns(await response.json());
      if (runs && runs.length > 0) return { repo, source: 'github', fetchedAt: now.toISOString(), runs };
      console.warn(`[ci] ${repo}: no runs returned, using snapshot`);
    } else {
      console.warn(`[ci] ${repo}: GitHub responded ${response.status}, using snapshot`);
    }
  } catch (error) {
    console.warn(`[ci] ${repo}: ${error instanceof Error ? error.message : String(error)}, using snapshot`);
  }

  return snapshotPanels(snapshot)[repo] ?? null;
}

/** Sorts panels keyed by repo into project panels and the site panel. */
export function bundleFrom(panels: Record<string, CiPanelData | null | undefined>): CiBundle {
  const bundle: CiBundle = { projects: {}, site: null };
  ciSources().forEach((source) => {
    const panel = panels[source.repo] ?? null;
    if (source.projectId) {
      if (panel) bundle.projects[source.projectId] = panel;
    } else {
      bundle.site = panel;
    }
  });
  return bundle;
}

/** GitHub-style duration: 11s, 1m 5s, 1h 2m. */
export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ${seconds % 60}s`;
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}
