// Server-only: reads the runs written by scripts/fetch-ci.mjs before `next build`,
// or the committed snapshot when that file is missing or unreadable.

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import savedSnapshot from './ci-snapshot.json';
import { bundleFrom, snapshotPanels, type CiBundle, type CiPanelData, type CiSnapshot } from './ci';

/** Written by scripts/fetch-ci.mjs; gitignored. */
export const BUILD_FILE = join(process.cwd(), 'lib', 'data', 'ci-build.json');

export function loadCiBundle(options: { buildFile?: string; snapshot?: CiSnapshot } = {}): CiBundle {
  const { buildFile = BUILD_FILE, snapshot = savedSnapshot as unknown as CiSnapshot } = options;

  if (existsSync(buildFile)) {
    try {
      const parsed = JSON.parse(readFileSync(buildFile, 'utf8')) as {
        panels?: Record<string, CiPanelData | null>;
      };
      if (parsed.panels && typeof parsed.panels === 'object') return bundleFrom(parsed.panels);
    } catch {
      console.warn('[ci] ci-build.json is unreadable, using snapshot');
    }
  }
  return bundleFrom(snapshotPanels(snapshot));
}
