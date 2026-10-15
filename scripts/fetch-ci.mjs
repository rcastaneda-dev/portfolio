// Runs before `next build` (npm "prebuild"). Fetches the latest GitHub Actions
// runs for every repo in ciSources() and writes lib/data/ci-build.json
// (gitignored), which the page reads at build time. Anything that fails falls
// back to lib/data/ci-snapshot.json, so the build never fails because of CI data.
// With --refresh-snapshot it also stores fresh GitHub results in the snapshot.
//
// Environment: GITHUB_TOKEN (optional, raises the rate limit),
// CI_API_BASE (testing only, e.g. http://127.0.0.1:9 to force the fallback).
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const SNAPSHOT_FILE = 'lib/data/ci-snapshot.json';
const BUILD_FILE = 'lib/data/ci-build.json';
const refreshSnapshot = process.argv.includes('--refresh-snapshot');

const require = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), 'portfolio-ci-'));
execFileSync(
  process.execPath,
  [
    require.resolve('typescript/bin/tsc'),
    'lib/data/ci.ts', 'lib/data/projects.ts',
    '--rootDir', 'lib', '--outDir', out,
    '--module', 'commonjs', '--target', 'es2020', '--strict', '--skipLibCheck',
  ],
  { stdio: 'inherit' },
);
const ci = require(join(out, 'data', 'ci.js'));

const snapshot = JSON.parse(readFileSync(SNAPSHOT_FILE, 'utf8'));
const panels = {};

for (const source of ci.ciSources()) {
  const panel = await ci.resolveRuns(source.repo, {
    snapshot,
    branch: source.branch,
    workflow: source.workflow,
    completedOnly: source.completedOnly,
    event: source.event,
    perPage: source.perPage,
    token: process.env.GITHUB_TOKEN || undefined,
    apiBase: process.env.CI_API_BASE || undefined,
  });
  panels[source.repo] = panel;
  console.log(
    `[ci] ${source.repo}: ${panel ? `${panel.runs.length} run(s) from ${panel.source}` : 'no data, panel omitted'}`,
  );
  if (refreshSnapshot && panel?.source === 'github') {
    snapshot[source.repo] = { fetchedAt: panel.fetchedAt, runs: panel.runs };
  }
}

writeFileSync(BUILD_FILE, `${JSON.stringify({ generatedAt: new Date().toISOString(), panels }, null, 2)}\n`);
if (refreshSnapshot) writeFileSync(SNAPSHOT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`);
