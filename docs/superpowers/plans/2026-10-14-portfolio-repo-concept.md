# Portfolio Repo Concept Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present Ricardo's career and projects like a software repository: a versioned branch graph under the hero, Experience as a changelog, real GitHub Actions results for projects, and the site's own changelog, CI workflow and build status.

**Architecture:** Career facts stay in typed, language-neutral data modules (`lib/data/*`), with pure helpers for versions, graph geometry and CI mapping. A `prebuild` script fetches GitHub Actions runs and writes a gitignored JSON file that the static page reads at build time; a committed snapshot is the fallback. Client components render the light document layout with two dark "instrument" panels (branch graph, pipeline runs).

**Tech Stack:** Next.js 14.1 (App Router, `output: 'export'`), React 18, TypeScript 5, Tailwind CSS 3, lucide-react, Node 20+ for scripts, GitHub REST API, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-10-14-portfolio-repo-concept-design.md`

## Global Constraints

- Static export (`output: 'export'` in `next.config.js`): no API routes, no server at runtime. "Static means the panels refresh on redeploy, not live."
- No new runtime dependencies. No test framework is added; checks run through a throwaway script (`scripts/verify-data.mjs`) compiled with the existing `typescript`.
- Headings and nav stay "Plain: About, Experience, Skills, Projects, Contact."
- Versions: "`major` = 1 + the order in which the role's employer first appears. `minor` = number of earlier roles at the same employer. Display as `v{major}.{minor}`." Expected: Sherwin-Williams v1.0, Synergyca v2.0, Rulesware QA v3.0, Rulesware Pega developer v3.1, Encora v4.0, Avenue Code v5.0, Lumenalta v6.0.
- "The overlap, 05/2018 to 07/2018, is accurate and intentional … the data keeps both date ranges as they are."
- "Every status shown on the page (pass, fail, in progress) is real, fetched from GitHub or clearly marked as a saved snapshot." "The build never fails because of CI data."
- Copy: "wording changed as little as possible, no new claims or numbers." "Empty groups are not rendered." Group labels: Added / Changed / Fixed, Añadido / Cambiado / Corregido, Ajouté / Modifié / Corrigé.
- Accessibility: "status never relies on color alone"; text contrast ≥ 4.5:1; visible focus on dark panels; `prefers-reduced-motion` shows the final state. The only non-user-triggered motion is the graph draw-in.
- Dark panel tokens (exact): `panel #0E1A23`, `panel-ink #E8EEF1`, `panel-muted #9FB0BB`, `pass-dark #3DBE82`, `fail-dark #F2877A`, `run-dark #E5A04A`.
- i18n: `en.ts` is the source of truth; `es.ts` and `fr.ts` have the same shape and the same number of items per list. Every new string ships in all three languages.
- Copy style (from the redesign): sentence case, no all-caps labels, no middle-dot joins, no `→` appended to links.
- Git: work on branch `feat/portfolio-redesign-plan-a83c67`; never push. End every commit message with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Approving this plan and choosing an execution method counts as the go-ahead to commit on this branch.

## Deviations from the spec (decided while planning)

1. **CI fetch moves from the page to a `prebuild` script.** Next 14 caches `fetch` responses made during render in `.next/cache`, and Vercel restores that cache between builds, so an in-page fetch could keep serving old runs. Opting out (`cache: 'no-store'`) makes the route dynamic, which `output: 'export'` does not allow. `scripts/fetch-ci.mjs` runs before `next build`, uses the same TypeScript mapping code, and writes `lib/data/ci-build.json` (gitignored); the page reads that file, or the committed snapshot. Behavior matches the spec: fresh at every build, snapshot fallback, build never fails.
2. **Extra small files:** `lib/data/changelog.ts` (group helpers), `lib/data/graph.ts` (graph geometry), `lib/data/ci-load.ts` (server-side reader), `scripts/fetch-ci.mjs`, a `.gitignore` entry, and npm scripts `prebuild` and `ci:snapshot`. Each exists so a pure piece can be checked in isolation.
3. **`app/page.tsx` stays synchronous**: it reads a file instead of awaiting a fetch.

## Review Focus

1. **GitHub returns 200 with zero runs** (Actions never ran, which is the portfolio repo today): the project panel falls back to the snapshot or is omitted, and the footer shows the version without a status. Tests: Task 3 "empty workflow_runs falls back to snapshot", "no snapshot and no runs gives null", "site panel is null when the site has no runs".
2. **A run is still in progress at build time** (`status: in_progress`, `conclusion: null`): shown as Running, with no duration and never a negative one. Test: Task 3 "in-progress run is running with no duration".
3. **Rate limit (403), bad token (401), network error or a non-JSON body**: the snapshot is used and the build continues. Tests: Task 3 "403 falls back", "401 falls back", "network error falls back", "non-JSON body falls back".
4. **Overlapping and same-month roles** (Rulesware 05/2018 to 07/2018 on two lanes; Sherwin-Williams and Synergyca both in 03/2015 on the dev lane): both are visible, nodes stay distinct and in time order, nothing leaves the view box, and same-lane tags don't collide at the 375px phone width. Tests: Task 5 graph checks.
5. **A role whose change groups are partly or fully empty in any language**: no empty group headings render, and every translation keeps English's item counts. Tests: Task 2 "visibleGroups drops empty groups", "translations keep English item counts", "every role has at least one change".

---

### Task 0: Preflight and baseline commits

**Files:** none changed. Commits the uncommitted redesign and the docs.

- [ ] **Step 1: Confirm the branch and working tree**

Run: `git branch --show-current && git status --short`
Expected: `feat/portfolio-redesign-plan-a83c67`, modified redesign files under `app/`, `components/`, `lib/`, plus untracked `docs/`, `components/CareerStrip.tsx`, `components/ContactForm.tsx`, `components/Section.tsx`, `lib/data/`, `.env.example`, `.claude/launch.json`.

- [ ] **Step 2: Confirm the baseline type-checks**

Run: `npx tsc --noEmit`
Expected: no output, exit 0.

- [ ] **Step 3: Commit the redesign baseline (without `.claude/`)**

```bash
git add README.md app components lib package.json package-lock.json tailwind.config.ts .env.example
git commit -m "$(cat <<'EOF'
feat: redesign portfolio in a light document style

Archivo and Source Serif 4 type, career strip, ledger-style experience
and projects, Formspree contact form with email fallback, EN/ES/FR copy,
content rendered in static HTML, unused animation and icon packages removed.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 4: Commit the spec and this plan**

```bash
git add docs/superpowers
git commit -m "$(cat <<'EOF'
docs: add repo-concept design spec and implementation plan

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 5: Keep the throwaway check script out of git**

Run: `echo "scripts/verify-data.mjs" >> "$(git rev-parse --git-path info/exclude)"`
Expected: no output. (`git status` will not list the script in later tasks.)

---

### Task 1: Career versions

**Files:**
- Modify: `lib/data/career.ts` (full rewrite below)
- Create: `scripts/verify-data.mjs` (throwaway, never committed)

**Interfaces:**
- Consumes: nothing new.
- Produces (from `lib/data/career.ts`):
  - `type EmployerId = 'sherwin' | 'synergyca' | 'rulesware' | 'encora' | 'avenueCode' | 'lumenalta'`
  - `Role` gains `employer: EmployerId`
  - `chronological(list: Role[]): Role[]`, which is stable for equal start months
  - `chronologicalRoles: Role[]` (oldest first)
  - `versionOf(role: Role, list?: Role[]): string` returns `'v3.1'`, for example
  - `versionById: Record<RoleId, string>`
  - Unchanged: `roles`, `qaRoles`, `devRoles`, `monthIndex`, `formatMonth`, `RoleId`, `RoleKind`, `WorkMode`

- [ ] **Step 1: Write the check script with the career checks**

Create `scripts/verify-data.mjs`:

```js
// Throwaway data checks for the repo-concept work. Not committed.
// Usage: compile lib/ with tsc into a temp dir, then: node scripts/verify-data.mjs <dir>
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const out = process.argv[2];
if (!out) {
  console.error('usage: node scripts/verify-data.mjs <compiled-dir>');
  process.exit(2);
}
const require = createRequire(import.meta.url);
const has = (rel) => existsSync(join(out, `${rel}.js`));
const load = (rel) => require(join(out, `${rel}.js`));

let failures = 0;
async function check(name, fn) {
  try {
    await fn();
    console.log(`ok   ${name}`);
  } catch (error) {
    failures += 1;
    console.log(`FAIL ${name}\n     ${error.message.split('\n').join('\n     ')}`);
  }
}

// --- career -----------------------------------------------------------------
{
  const career = load('data/career');
  const role = (id, employer, start, end = start) => ({
    id, employer, start, end, kind: 'qa', shortName: id, workMode: 'remote', stack: [],
  });

  await check('versions follow employer order', () => {
    const got = Object.fromEntries(career.roles.map((r) => [r.id, career.versionOf(r)]));
    assert.deepEqual(got, {
      lumenalta: 'v6.0', avenueCode: 'v5.0', encora: 'v4.0', pegaDev: 'v3.1',
      ruleswareQa: 'v3.0', synergyca: 'v2.0', sherwin: 'v1.0',
    });
  });

  await check('versionById matches versionOf', () => {
    for (const r of career.roles) assert.equal(career.versionById[r.id], career.versionOf(r));
  });

  await check('chronologicalRoles runs oldest to newest', () => {
    assert.deepEqual(career.chronologicalRoles.map((r) => r.id), [
      'sherwin', 'synergyca', 'ruleswareQa', 'pegaDev', 'encora', 'avenueCode', 'lumenalta',
    ]);
  });

  await check('same-month starts keep list order', () => {
    const list = [role('a', 'x', '2020-01'), role('b', 'x', '2020-01')];
    assert.equal(career.versionOf(list[0], list), 'v1.0');
    assert.equal(career.versionOf(list[1], list), 'v1.1');
  });

  await check('a new employer becomes the next major', () => {
    const next = role('next', 'acme', '2026-01');
    assert.equal(career.versionOf(next, [...career.roles, next]), 'v7.0');
  });

  await check('Rulesware overlap is kept as real data', () => {
    const qa = career.roles.find((r) => r.id === 'ruleswareQa');
    const dev = career.roles.find((r) => r.id === 'pegaDev');
    assert.equal(qa.end, '2018-07');
    assert.equal(dev.start, '2018-05');
  });
}

// --- more checks are inserted above this line ---------------------------------

if (failures > 0) {
  console.log(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log('\nall checks passed');
```

- [ ] **Step 2: Run it to see it fail**

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: `FAIL versions follow employer order` with `career.versionOf is not a function`, and the other new checks failing too. Exit 1.

- [ ] **Step 3: Rewrite `lib/data/career.ts`**

```ts
// Language-neutral career data. Titles, companies and changelog entries live in
// the i18n dictionaries under `experience.jobs[id]`.

export type RoleId =
  | 'lumenalta'
  | 'avenueCode'
  | 'encora'
  | 'ruleswareQa'
  | 'pegaDev'
  | 'synergyca'
  | 'sherwin';

export type EmployerId =
  | 'sherwin'
  | 'synergyca'
  | 'rulesware'
  | 'encora'
  | 'avenueCode'
  | 'lumenalta';

export type RoleKind = 'qa' | 'dev';
export type WorkMode = 'remote' | 'hybrid' | 'onsite';

export interface Role {
  id: RoleId;
  /** Groups roles at the same company; drives the major version. */
  employer: EmployerId;
  kind: RoleKind;
  /** Short company name used in the branch graph and its readout. */
  shortName: string;
  /** First month worked, as YYYY-MM. */
  start: string;
  /** Last month worked, as YYYY-MM. */
  end: string;
  workMode: WorkMode;
  /** Country shown next to on-site and hybrid roles. */
  country?: string;
  stack: string[];
}

// Newest first, which is the order the changelog reads in. The Rulesware QA and
// Pega developer dates overlap on purpose: both roles ran in parallel during the
// transition (05/2018 to 07/2018).
export const roles: Role[] = [
  {
    id: 'lumenalta',
    employer: 'lumenalta',
    kind: 'qa',
    shortName: 'Lumenalta',
    start: '2023-05',
    end: '2025-11',
    workMode: 'remote',
    stack: ['Cypress', 'TypeScript', 'Azure DevOps', 'Docker', 'Postman', 'SQL', 'Nx', 'React Testing Library'],
  },
  {
    id: 'avenueCode',
    employer: 'avenueCode',
    kind: 'qa',
    shortName: 'Avenue Code',
    start: '2022-03',
    end: '2023-02',
    workMode: 'remote',
    stack: ['Playwright', 'TestCafe', 'TypeScript', 'Node.js', 'Jenkins', 'GitHub Actions', 'API testing', 'JIRA'],
  },
  {
    id: 'encora',
    employer: 'encora',
    kind: 'qa',
    shortName: 'Encora',
    start: '2019-11',
    end: '2022-03',
    workMode: 'remote',
    stack: ['TestCafe', 'JavaScript', 'Python', 'PyTest', 'Postman', 'Docker', 'Kubernetes', 'TeamCity'],
  },
  {
    id: 'pegaDev',
    employer: 'rulesware',
    kind: 'dev',
    shortName: 'Rulesware',
    start: '2018-05',
    end: '2019-10',
    workMode: 'hybrid',
    country: 'El Salvador',
    stack: ['Pega PRPC', 'BPM', 'Java', 'JAXB', 'JSON', 'XML', 'SoapUI', 'Unit testing'],
  },
  {
    id: 'ruleswareQa',
    employer: 'rulesware',
    kind: 'qa',
    shortName: 'Rulesware',
    start: '2015-08',
    end: '2018-07',
    workMode: 'onsite',
    country: 'El Salvador',
    stack: ['Selenium WebDriver', 'Java', 'TestNG', 'Postman', 'SoapUI', 'SQL', 'Jenkins', 'Git'],
  },
  {
    id: 'synergyca',
    employer: 'synergyca',
    kind: 'dev',
    shortName: 'Synergyca',
    start: '2015-03',
    end: '2015-07',
    workMode: 'onsite',
    country: 'El Salvador',
    stack: ['Java', 'JPA', 'PrimeFaces', 'JSON', 'JSP', 'SQL', 'Bash', '.NET'],
  },
  {
    id: 'sherwin',
    employer: 'sherwin',
    kind: 'dev',
    shortName: 'Sherwin-Williams',
    start: '2013-12',
    end: '2015-03',
    workMode: 'onsite',
    country: 'El Salvador',
    stack: ['Java EE5', 'JPA', 'JMS', 'JSF', 'PrimeFaces', 'JavaScript', 'PL/SQL', 'Oracle'],
  },
];

export const qaRoles = roles.filter((r) => r.kind === 'qa');
export const devRoles = roles.filter((r) => r.kind === 'dev');

/** Months since year 0 for a YYYY-MM string, so spans are plain subtraction. */
export function monthIndex(ym: string): number {
  const [year, month] = ym.split('-').map(Number);
  return year * 12 + (month - 1);
}

/** Display form used in the changelog and the graph readout: MM/YYYY. */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split('-');
  return `${month}/${year}`;
}

/** Roles ordered by first month worked. The sort is stable, so ties keep list order. */
export function chronological(list: Role[]): Role[] {
  return [...list].sort((a, b) => monthIndex(a.start) - monthIndex(b.start));
}

export const chronologicalRoles = chronological(roles);

/**
 * Release version for a role. Major is 1 + the order in which its employer first
 * appears in the career; minor counts the earlier roles at the same employer.
 */
export function versionOf(role: Role, list: Role[] = roles): string {
  const ordered = chronological(list);
  const employers: EmployerId[] = [];
  ordered.forEach((r) => {
    if (!employers.includes(r.employer)) employers.push(r.employer);
  });
  const major = employers.indexOf(role.employer) + 1;
  const minor = ordered.filter((r) => r.employer === role.employer).findIndex((r) => r.id === role.id);
  return `v${major}.${minor}`;
}

export const versionById = roles.reduce(
  (acc, role) => {
    acc[role.id] = versionOf(role);
    return acc;
  },
  {} as Record<RoleId, string>,
);
```

- [ ] **Step 4: Run the checks again**

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: six `ok` lines, then `all checks passed`.

- [ ] **Step 5: Type-check the app**

Run: `npx tsc --noEmit`
Expected: exit 0 (existing `CareerStrip.tsx` still compiles; it ignores `employer`).

- [ ] **Step 6: Commit**

```bash
git add lib/data/career.ts
git commit -m "$(cat <<'EOF'
feat: derive release versions for each role

Major version per employer, minor per role change within it.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Experience as a changelog

**Files:**
- Create: `lib/data/changelog.ts`
- Modify: `lib/i18n/translations/en.ts` (imports, a `jobs` constant, and the `experience` block)
- Modify: `lib/i18n/translations/es.ts` and `lib/i18n/translations/fr.ts` (the `experience` block)
- Modify: `components/Experience.tsx` (full rewrite)
- Test: `scripts/verify-data.mjs` (insert a block)

**Interfaces:**
- Consumes: `versionById`, `qaRoles`, `devRoles`, `formatMonth`, `Role`, `RoleId` from Task 1.
- Produces:
  - `lib/data/changelog.ts`: `type ChangeGroup = 'added' | 'changed' | 'fixed'`, `type Changes = Record<ChangeGroup, string[]>`, `CHANGE_GROUPS: ChangeGroup[]`, `visibleGroups(changes: Changes): ChangeGroup[]`
  - Dictionaries: `t.experience.groups: Record<ChangeGroup, string>`
  - Dictionaries: `t.experience.jobs[id]: { title: string; company: string; changes: Changes }`. The old `highlights` key is removed.

- [ ] **Step 1: Insert the changelog checks**

In `scripts/verify-data.mjs`, insert above `// --- more checks are inserted above this line`:

```js
// --- changelog ----------------------------------------------------------------
if (has('data/changelog')) {
  const { visibleGroups } = load('data/changelog');
  const career = load('data/career');
  const langs = ['en', 'es', 'fr'].map((code) => [code, load(`i18n/translations/${code}`)[code]]);
  const en = langs[0][1];

  await check('visibleGroups drops empty groups', () => {
    assert.deepEqual(visibleGroups({ added: [], changed: ['x'], fixed: [] }), ['changed']);
    assert.deepEqual(visibleGroups({ added: [], changed: [], fixed: [] }), []);
    assert.deepEqual(visibleGroups({ added: ['a'], changed: ['b'], fixed: ['c'] }), ['added', 'changed', 'fixed']);
  });

  await check('every role has at least one change in every language', () => {
    for (const [code, dict] of langs) {
      for (const r of career.roles) {
        const total = Object.values(dict.experience.jobs[r.id].changes).flat().length;
        assert.ok(total > 0, `${code}.${r.id} has no changes`);
      }
    }
  });

  await check('translations keep English item counts', () => {
    for (const [code, dict] of langs.slice(1)) {
      for (const r of career.roles) {
        for (const group of ['added', 'changed', 'fixed']) {
          assert.equal(
            dict.experience.jobs[r.id].changes[group].length,
            en.experience.jobs[r.id].changes[group].length,
            `${code}.${r.id}.${group}`,
          );
        }
      }
    }
  });

  await check('group labels exist in every language', () => {
    for (const [code, dict] of langs) {
      for (const group of ['added', 'changed', 'fixed']) {
        assert.ok(dict.experience.groups[group], `${code} missing ${group}`);
      }
    }
  });

  await check('old highlights key is gone', () => {
    for (const r of career.roles) assert.equal(en.experience.jobs[r.id].highlights, undefined);
  });
}
```

- [ ] **Step 2: Create `lib/data/changelog.ts`**

```ts
// Changelog groups for each role, in the order they render.

export type ChangeGroup = 'added' | 'changed' | 'fixed';
export type Changes = Record<ChangeGroup, string[]>;

export const CHANGE_GROUPS: ChangeGroup[] = ['added', 'changed', 'fixed'];

/** Groups with at least one entry. Empty groups are never rendered. */
export function visibleGroups(changes: Changes): ChangeGroup[] {
  return CHANGE_GROUPS.filter((group) => changes[group].length > 0);
}
```

- [ ] **Step 3: Change the English dictionary shape and run tsc to see the failures**

In `lib/i18n/translations/en.ts`, add at the very top of the file:

```ts
import type { RoleId } from '../../data/career';
import type { Changes } from '../../data/changelog';

interface Job {
  title: string;
  company: string;
  changes: Changes;
}

// Typed explicitly so a role can have an empty group in any language.
const jobs: Record<RoleId, Job> = {
  lumenalta: {
    title: 'Senior QA Automation Engineer',
    company: 'Lumenalta LLC (formerly Clevertech)',
    changes: {
      added: [
        'End-to-end automation platform with Cypress and TypeScript, covering E2E and component tests for business-critical React applications.',
        'Test data strategy, with integrations for conditional testing, data mocking and test filtering.',
        'Contributions to performance testing with Postman, and data consistency checks between new and legacy systems with SQL and Databricks, on a large transportation and logistics platform.',
      ],
      changed: [
        'Containerized the framework and moved it into Azure Pipelines with parallel execution and consolidated reporting.',
      ],
      fixed: ['Flaky pipelines stabilized.'],
    },
  },
  avenueCode: {
    title: 'Senior QA Automation Engineer',
    company: 'Avenue Code',
    changes: {
      added: [
        'Reliable automated suites with Playwright and TestCafe, raising automation maturity and release confidence for an established e-commerce team.',
      ],
      changed: ['Automation and code quality standards enforced through pull-request reviews.'],
      fixed: [
        'Jenkins-based CI pipelines stabilized to support consistent releases.',
        'Defects triaged across environments.',
      ],
    },
  },
  encora: {
    title: 'QA Automation Engineer',
    company: 'Encora (formerly Avantica)',
    changes: {
      added: [
        'UI and API automation with TestCafe, PyTest and Postman for a new, production-critical cybersecurity platform, working with engineering, product and DevOps.',
        'Test plans and test cases for coverage and traceability.',
        'Validation of asynchronous workflows across distributed services.',
        'Quality gates for bi-weekly production deployments, as QA release captain.',
        'Docker and Kubernetes, introduced to improve test environments.',
      ],
      changed: [
        'Automation suites refactored continuously for reliability and maintainability.',
        'TeamCity pipelines optimized for fast, reliable feedback.',
      ],
      fixed: ['TeamCity pipelines stabilized.'],
    },
  },
  pegaDev: {
    title: 'PEGA Developer | PEGA System Architect',
    company: 'Rulesware LLC',
    changes: {
      added: [
        'Functional technical requirements from business requirements, using the PegaSystems SmartBPM methodology, with implementation tasks managed for on-time, on-budget delivery.',
        'Features coded and unit-tested with Pega out-of-the-box capabilities, from the Lead System Architect’s designs.',
      ],
      changed: [],
      fixed: ['Technical issues troubleshot across the project lifecycle.'],
    },
  },
  ruleswareQa: {
    title: 'QA Automation Engineer',
    company: 'Rulesware LLC',
    changes: {
      added: [
        'Automated regression suites with Selenium WebDriver and TestNG for Java and Pega-based applications.',
        'Data-driven testing.',
        'Traceable test plans and test cases aligned with functional and business requirements, for disputes and digital payments platforms.',
      ],
      changed: ['Page Object Model and configuration layers refactored to cut duplication.'],
      fixed: [],
    },
  },
  synergyca: {
    title: 'Java Developer',
    company: 'Synergyca SA de CV (Project: Davivienda Bank)',
    changes: {
      added: [
        'Java applications for a bank on an SOA architecture, developed and unit-tested across multiple environments.',
        'Functional mockups, produced with team leads and project managers from analyzed requirements.',
      ],
      changed: [],
      fixed: [],
    },
  },
  sherwin: {
    title: 'Java EE Developer (Internship)',
    company: 'Sherwin Williams',
    changes: {
      added: [
        'Work across every phase of the software lifecycle, with developers, managers and stakeholders.',
        'RESTful web services, low-latency Java Enterprise Beans and Java web components (managed beans, XHTML/HTML5), with client-side and server-side validation.',
        'Tests for the components I built, kept aligned with specifications.',
      ],
      changed: [],
      fixed: [],
    },
  },
};

```

Then replace the whole `experience: { … }` block inside `export const en = { … }` (from `// Experience` through the closing `},` before `// Skills`) with:

```ts
  // Experience
  experience: {
    title: 'Experience',
    to: 'to',
    showDev: 'Show development roles',
    hideDev: 'Hide development roles',
    groups: {
      added: 'Added',
      changed: 'Changed',
      fixed: 'Fixed',
    },
    workMode: {
      remote: 'Remote',
      hybrid: 'Hybrid',
      onsite: 'On-site',
    },
    jobs,
  },
```

Run: `npx tsc --noEmit`
Expected: FAIL. Errors in `es.ts` and `fr.ts` (`highlights` does not exist / `changes` and `groups` missing) and in `components/Experience.tsx` (`highlights` does not exist).

- [ ] **Step 4: Replace the Spanish `experience` block**

In `lib/i18n/translations/es.ts`, replace the whole `experience: { … }` block with:

```ts
  // Experience
  experience: {
    title: 'Experiencia',
    to: 'a',
    showDev: 'Mostrar roles de desarrollo',
    hideDev: 'Ocultar roles de desarrollo',
    groups: {
      added: 'Añadido',
      changed: 'Cambiado',
      fixed: 'Corregido',
    },
    workMode: {
      remote: 'Remoto',
      hybrid: 'Híbrido',
      onsite: 'Presencial',
    },
    jobs: {
      lumenalta: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Lumenalta LLC (anteriormente Clevertech)',
        changes: {
          added: [
            'Plataforma de automatización end-to-end con Cypress y TypeScript, que cubre pruebas E2E y de componentes para aplicaciones React críticas para el negocio.',
            'Estrategia de datos de prueba, con integraciones para pruebas condicionales, simulación de datos y filtrado de pruebas.',
            'Contribuciones a pruebas de rendimiento con Postman y verificación de la consistencia de datos entre sistemas nuevos y heredados con SQL y Databricks, en una plataforma grande de transporte y logística.',
          ],
          changed: [
            'Framework containerizado y trasladado a Azure Pipelines con ejecución en paralelo y reportes consolidados.',
          ],
          fixed: ['Pipelines inestables estabilizados.'],
        },
      },
      avenueCode: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Avenue Code',
        changes: {
          added: [
            'Suites automatizadas confiables con Playwright y TestCafe, que elevaron la madurez de la automatización y la confianza en los releases de un equipo de comercio electrónico establecido.',
          ],
          changed: ['Estándares de automatización y calidad de código aplicados mediante revisiones de pull request.'],
          fixed: [
            'Pipelines de CI en Jenkins estabilizados para sostener releases consistentes.',
            'Triaje de defectos en distintos entornos.',
          ],
        },
      },
      encora: {
        title: 'Ingeniero de Automatización QA',
        company: 'Encora (anteriormente Avantica)',
        changes: {
          added: [
            'Automatización de UI y API con TestCafe, PyTest y Postman para una nueva plataforma de ciberseguridad crítica para producción, junto a ingeniería, producto y DevOps.',
            'Planes y casos de prueba para asegurar cobertura y trazabilidad.',
            'Validación de flujos asíncronos entre servicios distribuidos.',
            'Puertas de calidad para despliegues quincenales a producción, como capitán de release de QA.',
            'Docker y Kubernetes, incorporados para mejorar los entornos de prueba.',
          ],
          changed: [
            'Suites de automatización refactorizadas continuamente para mejorar su confiabilidad y mantenibilidad.',
            'Pipelines de TeamCity optimizados para un feedback rápido y confiable.',
          ],
          fixed: ['Pipelines de TeamCity estabilizados.'],
        },
      },
      pegaDev: {
        title: 'Desarrollador PEGA | Arquitecto de Sistemas PEGA',
        company: 'Rulesware LLC',
        changes: {
          added: [
            'Requisitos técnicos funcionales a partir de requisitos de negocio, con la metodología SmartBPM de PegaSystems, y tareas de implementación gestionadas para entregar a tiempo y dentro del presupuesto.',
            'Funcionalidades programadas y probadas unitariamente con capacidades estándar de Pega, según los diseños del Arquitecto de Sistemas Líder.',
          ],
          changed: [],
          fixed: ['Problemas técnicos resueltos durante todo el ciclo de vida del proyecto.'],
        },
      },
      ruleswareQa: {
        title: 'Ingeniero de Automatización QA',
        company: 'Rulesware LLC',
        changes: {
          added: [
            'Suites de regresión automatizadas con Selenium WebDriver y TestNG para aplicaciones Java y basadas en Pega.',
            'Pruebas basadas en datos.',
            'Planes y casos de prueba trazables, alineados con requisitos funcionales y de negocio, para plataformas de disputas y pagos digitales.',
          ],
          changed: ['Page Object Model y capas de configuración refactorizados para reducir la duplicación.'],
          fixed: [],
        },
      },
      synergyca: {
        title: 'Desarrollador Java',
        company: 'Synergyca SA de CV (Proyecto: Banco Davivienda)',
        changes: {
          added: [
            'Aplicaciones Java para un banco sobre una arquitectura SOA, desarrolladas y probadas unitariamente en múltiples entornos.',
            'Mockups funcionales, elaborados con líderes de equipo y gerentes de proyecto a partir del análisis de requisitos.',
          ],
          changed: [],
          fixed: [],
        },
      },
      sherwin: {
        title: 'Desarrollador Java EE (Pasantía)',
        company: 'Sherwin Williams',
        changes: {
          added: [
            'Participación en todas las fases del ciclo de vida del software, junto a desarrolladores, gerentes y stakeholders.',
            'Servicios web RESTful, Enterprise Beans Java de baja latencia y componentes web Java (managed beans, XHTML/HTML5), con validaciones del lado del cliente y del servidor.',
            'Pruebas de los componentes que desarrollé, alineadas con las especificaciones.',
          ],
          changed: [],
          fixed: [],
        },
      },
    },
  },
```

- [ ] **Step 5: Replace the French `experience` block**

In `lib/i18n/translations/fr.ts`, replace the whole `experience: { … }` block with:

```ts
  // Experience
  experience: {
    title: 'Expérience',
    to: 'à',
    showDev: 'Afficher les postes de développement',
    hideDev: 'Masquer les postes de développement',
    groups: {
      added: 'Ajouté',
      changed: 'Modifié',
      fixed: 'Corrigé',
    },
    workMode: {
      remote: 'À distance',
      hybrid: 'Hybride',
      onsite: 'Sur site',
    },
    jobs: {
      lumenalta: {
        title: 'Ingénieur senior en automatisation QA',
        company: 'Lumenalta LLC (anciennement Clevertech)',
        changes: {
          added: [
            "Plateforme d'automatisation de bout en bout avec Cypress et TypeScript, couvrant les tests E2E et de composants pour des applications React critiques pour l'entreprise.",
            'Stratégie de données de test, avec des intégrations pour les tests conditionnels, la simulation de données et le filtrage des tests.',
            'Contributions aux tests de performance avec Postman, et contrôles de cohérence des données entre systèmes récents et anciens avec SQL et Databricks, sur une grande plateforme de transport et de logistique.',
          ],
          changed: [
            'Framework conteneurisé et déplacé dans Azure Pipelines, avec exécution parallèle et rapports consolidés.',
          ],
          fixed: ['Pipelines instables stabilisés.'],
        },
      },
      avenueCode: {
        title: 'Ingénieur senior en automatisation QA',
        company: 'Avenue Code',
        changes: {
          added: [
            "Suites automatisées fiables avec Playwright et TestCafe, qui ont fait progresser la maturité de l'automatisation et la confiance dans les releases d'une équipe e-commerce établie.",
          ],
          changed: ["Normes d'automatisation et de qualité du code appliquées par des revues de pull request."],
          fixed: [
            'Pipelines CI sous Jenkins stabilisés pour garantir des releases régulières.',
            'Défauts triés dans plusieurs environnements.',
          ],
        },
      },
      encora: {
        title: 'Ingénieur en automatisation QA',
        company: 'Encora (anciennement Avantica)',
        changes: {
          added: [
            "Automatisation UI et API avec TestCafe, PyTest et Postman pour une nouvelle plateforme de cybersécurité critique en production, avec l'ingénierie, le produit et le DevOps.",
            'Plans et cas de test pour assurer la couverture et la traçabilité.',
            'Validation de workflows asynchrones entre services distribués.',
            'Portes de qualité pour les déploiements en production toutes les deux semaines, en tant que capitaine de release QA.',
            'Docker et Kubernetes, introduits pour améliorer les environnements de test.',
          ],
          changed: [
            "Suites d'automatisation refactorisées en continu pour plus de fiabilité et de maintenabilité.",
            'Pipelines TeamCity optimisés pour un retour rapide et fiable.',
          ],
          fixed: ['Pipelines TeamCity stabilisés.'],
        },
      },
      pegaDev: {
        title: 'Développeur PEGA | Architecte de Systèmes PEGA',
        company: 'Rulesware LLC',
        changes: {
          added: [
            "Exigences techniques fonctionnelles tirées des exigences métier, avec la méthodologie SmartBPM de PegaSystems, et tâches d'implémentation gérées pour livrer à temps et dans le budget.",
            "Fonctionnalités codées et testées unitairement avec les capacités natives de Pega, d'après les conceptions de l'architecte système principal.",
          ],
          changed: [],
          fixed: ['Problèmes techniques résolus tout au long du cycle de vie du projet.'],
        },
      },
      ruleswareQa: {
        title: 'Ingénieur en automatisation QA',
        company: 'Rulesware LLC',
        changes: {
          added: [
            'Suites de régression automatisées avec Selenium WebDriver et TestNG pour des applications Java et basées sur Pega.',
            'Tests pilotés par les données.',
            'Plans et cas de test traçables, alignés sur les exigences fonctionnelles et métier, pour des plateformes de litiges et de paiements numériques.',
          ],
          changed: ['Page Object Model et couches de configuration refactorisés pour réduire la duplication.'],
          fixed: [],
        },
      },
      synergyca: {
        title: 'Développeur Java',
        company: 'Synergyca SA de CV (Projet: Banco Davivienda)',
        changes: {
          added: [
            'Applications Java pour une banque, sur une architecture SOA, développées et testées unitairement dans plusieurs environnements.',
            "Maquettes fonctionnelles, réalisées avec les responsables d'équipe et les chefs de projet à partir de l'analyse des exigences.",
          ],
          changed: [],
          fixed: [],
        },
      },
      sherwin: {
        title: 'Développeur Java EE (Stage)',
        company: 'Sherwin Williams',
        changes: {
          added: [
            'Participation à toutes les phases du cycle de vie logiciel, avec les développeurs, les managers et les parties prenantes.',
            'Services web RESTful, Enterprise Beans Java à faible latence et composants web Java (managed beans, XHTML/HTML5), avec validation côté client et côté serveur.',
            "Tests des composants que j'ai développés, alignés sur les spécifications.",
          ],
          changed: [],
          fixed: [],
        },
      },
    },
  },
```

- [ ] **Step 6: Rewrite `components/Experience.tsx`**

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { qaRoles, devRoles, formatMonth, versionById, type Role } from '@/lib/data/career';
import { visibleGroups } from '@/lib/data/changelog';
import Section from './Section';

// One release entry: version and branch, dates, then Added / Changed / Fixed.
const RoleRow = ({ role }: { role: Role }) => {
  const { t } = useI18n();
  const job = t.experience.jobs[role.id];
  const mode = t.experience.workMode[role.workMode];
  const place = role.country ? `${role.country}, ${mode.toLowerCase()}` : mode;

  return (
    <li
      id={`exp-${role.id}`}
      className="grid gap-3 border-t border-rule py-8 md:grid-cols-[11rem_1fr] md:gap-10"
    >
      <div className="text-[0.9375rem] tabular-nums text-graphite">
        <p className="flex items-center gap-2">
          <span className="font-display text-[1.125rem] font-semibold text-ink">
            {versionById[role.id]}
          </span>
          <span className="rounded-[2px] border border-rule px-1.5 text-[0.75rem] leading-5">
            {role.kind}
          </span>
        </p>
        <p className="mt-2">
          {formatMonth(role.start)} {t.experience.to} {formatMonth(role.end)}
        </p>
        <p className="mt-1">{place}</p>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-[1.125rem] font-semibold leading-snug">{job.title}</h3>
        <p className="mt-0.5 text-[0.9375rem] font-medium">{job.company}</p>
        <dl className="mt-4 grid max-w-[68ch] gap-y-3 sm:grid-cols-[6.5rem_1fr] sm:gap-x-4">
          {visibleGroups(job.changes).map((group) => (
            <div key={group} className="contents">
              <dt className="pt-0.5 text-[0.875rem] font-medium text-graphite">
                {t.experience.groups[group]}
              </dt>
              <dd>
                <ul className="space-y-2 font-serif text-[1.0625rem] leading-[1.65]">
                  {job.changes[group].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.875rem] text-graphite">{role.stack.join(', ')}</p>
      </div>
    </li>
  );
};

// The first row of each list sits flush under the heading or the button.
const listClass = '[&>li:first-child]:border-t-0 [&>li:first-child]:pt-0';

const Experience = () => {
  const { t } = useI18n();
  const [showDev, setShowDev] = useState(false);
  const pendingScrollId = useRef<string | null>(null);

  // Graph nodes link to `#exp-<id>`. Development roles start collapsed, so
  // open them when the URL hash points at one.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (!devRoles.some((role) => `exp-${role.id}` === id)) return;
      pendingScrollId.current = id;
      setShowDev(true);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  // The row only exists once the list has rendered, so scroll after the commit.
  useEffect(() => {
    if (!showDev || !pendingScrollId.current) return;
    document.getElementById(pendingScrollId.current)?.scrollIntoView();
    pendingScrollId.current = null;
  }, [showDev]);

  return (
    <Section id="experience" title={t.experience.title}>
      <ol className={listClass}>
        {qaRoles.map((role) => (
          <RoleRow key={role.id} role={role} />
        ))}
      </ol>

      <button
        type="button"
        onClick={() => setShowDev((open) => !open)}
        aria-expanded={showDev}
        aria-controls="dev-roles"
        className="link mt-4 inline-flex min-h-11 items-center font-medium"
      >
        {showDev ? t.experience.hideDev : `${t.experience.showDev} (${devRoles.length})`}
      </button>

      {showDev && (
        <ol id="dev-roles" className="mt-4">
          {devRoles.map((role) => (
            <RoleRow key={role.id} role={role} />
          ))}
        </ol>
      )}
    </Section>
  );
};

export default Experience;
```

- [ ] **Step 7: Run the type check and the data checks**

Run: `npx tsc --noEmit`
Expected: exit 0.

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: all career and changelog checks `ok`, `all checks passed`.

- [ ] **Step 8: Look at it**

Run `npm run dev` (in this harness: `preview_start` with the existing `.claude/launch.json` config `portfolio-dev`) and open `http://localhost:3000/#experience`.
Expected: each QA role shows `v6.0`, `v5.0`, `v4.0`, `v3.0` with a `qa` chip, dates and place, then labeled Added / Changed / Fixed lists; Rulesware QA shows no Fixed heading. "Show development roles (3)" reveals v3.1, v2.0, v1.0 with `dev` chips. Switch to FR and ES: labels read Ajouté / Modifié / Corrigé and Añadido / Cambiado / Corregido.

- [ ] **Step 9: Commit**

```bash
git add lib/data/changelog.ts lib/i18n/translations/en.ts lib/i18n/translations/es.ts lib/i18n/translations/fr.ts components/Experience.tsx
git commit -m "$(cat <<'EOF'
feat: render experience as a versioned changelog

Each role is a release with Added, Changed and Fixed groups in EN, ES and FR.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: CI data layer, prebuild fetch and snapshot

**Files:**
- Modify: `lib/data/projects.ts` (add `ciRepo`)
- Create: `lib/data/ci.ts`, `lib/data/ci-load.ts`, `lib/data/ci-snapshot.json`, `scripts/fetch-ci.mjs`
- Modify: `package.json` (scripts), `.gitignore`, `.env.example`
- Test: `scripts/verify-data.mjs` (insert a block)

**Interfaces:**
- Consumes: `projects`, `ProjectId` from `lib/data/projects.ts`.
- Produces (from `lib/data/ci.ts`; nothing in it touches Node APIs, so client code can import it):
  - `type RunStatus = 'passed' | 'failed' | 'running' | 'cancelled'`
  - `interface CiRun { id: number; workflow: string; runNumber: number; branch: string; status: RunStatus; durationSec: number | null; startedAt: string; url: string }`
  - `interface CiPanelData { repo: string; source: 'github' | 'snapshot'; fetchedAt: string; runs: CiRun[] }`
  - `type CiSnapshot = Record<string, { fetchedAt: string; runs: CiRun[] }>`
  - `interface CiSource { repo: string; projectId?: ProjectId; branch?: string; perPage: number }`
  - `interface CiBundle { projects: Partial<Record<ProjectId, CiPanelData>>; site: CiPanelData | null }`
  - `SITE_REPO = 'rcastaneda-dev/portfolio'`
  - Functions: `ciSources(): CiSource[]`, `mapRun(raw): CiRun`, `parseRuns(body: unknown): CiRun[] | null`
  - Functions: `resolveRuns(repo, options): Promise<CiPanelData | null>`, `snapshotPanels(snapshot): Record<string, CiPanelData | null>`, `bundleFrom(panels): CiBundle`, `formatDuration(seconds: number): string`
- Produces (from `lib/data/ci-load.ts`, server only): `BUILD_FILE` and `loadCiBundle(options?: { buildFile?: string; snapshot?: CiSnapshot }): CiBundle`.

- [ ] **Step 1: Insert the CI checks**

In `scripts/verify-data.mjs`, insert above `// --- more checks are inserted above this line`:

```js
// --- ci -------------------------------------------------------------------------
if (has('data/ci')) {
  const ci = load('data/ci');
  const ciLoad = load('data/ci-load');
  const silence = console.warn;
  console.warn = () => {};

  const raw = (over = {}) => ({
    id: 1, name: 'E2E', display_title: 'E2E', run_number: 7, head_branch: 'main',
    status: 'completed', conclusion: 'success',
    run_started_at: '2025-12-13T03:06:50Z', created_at: '2025-12-13T03:06:50Z',
    updated_at: '2025-12-13T03:07:55Z', html_url: 'https://github.com/o/r/actions/runs/1',
    ...over,
  });
  const snapshot = { 'o/r': { fetchedAt: '2025-12-01T00:00:00.000Z', runs: [ci.mapRun(raw())] } };
  const respond = (status, body) => async () =>
    new Response(typeof body === 'string' ? body : JSON.stringify(body), { status });

  await check('passed run maps with duration', () => {
    const run = ci.mapRun(raw());
    assert.equal(run.status, 'passed');
    assert.equal(run.durationSec, 65);
    assert.equal(run.runNumber, 7);
    assert.equal(run.branch, 'main');
    assert.equal(run.url, 'https://github.com/o/r/actions/runs/1');
  });

  await check('failure and timed_out map to failed', () => {
    assert.equal(ci.mapRun(raw({ conclusion: 'failure' })).status, 'failed');
    assert.equal(ci.mapRun(raw({ conclusion: 'timed_out' })).status, 'failed');
  });

  await check('cancelled and skipped map to cancelled', () => {
    assert.equal(ci.mapRun(raw({ conclusion: 'cancelled' })).status, 'cancelled');
    assert.equal(ci.mapRun(raw({ conclusion: 'skipped' })).status, 'cancelled');
  });

  await check('in-progress run is running with no duration', () => {
    const run = ci.mapRun(raw({ status: 'in_progress', conclusion: null }));
    assert.equal(run.status, 'running');
    assert.equal(run.durationSec, null);
  });

  await check('missing run_started_at falls back to created_at', () => {
    const run = ci.mapRun(raw({ run_started_at: null }));
    assert.equal(run.startedAt, '2025-12-13T03:06:50Z');
  });

  await check('parseRuns rejects bodies without workflow_runs', () => {
    assert.equal(ci.parseRuns({ message: 'Not Found' }), null);
    assert.equal(ci.parseRuns(null), null);
  });

  await check('parseRuns skips malformed entries', () => {
    assert.equal(ci.parseRuns({ workflow_runs: [raw(), { id: 'x' }] }).length, 1);
  });

  await check('formatDuration reads like GitHub', () => {
    assert.equal(ci.formatDuration(11), '11s');
    assert.equal(ci.formatDuration(65), '1m 5s');
    assert.equal(ci.formatDuration(514), '8m 34s');
    assert.equal(ci.formatDuration(3720), '1h 2m');
  });

  await check('fresh runs come from GitHub', async () => {
    const panel = await ci.resolveRuns('o/r', {
      snapshot, fetchImpl: respond(200, { workflow_runs: [raw()] }), now: new Date('2026-10-14T00:00:00Z'),
    });
    assert.equal(panel.source, 'github');
    assert.equal(panel.fetchedAt, '2026-10-14T00:00:00.000Z');
    assert.equal(panel.runs.length, 1);
  });

  await check('empty workflow_runs falls back to snapshot', async () => {
    const panel = await ci.resolveRuns('o/r', { snapshot, fetchImpl: respond(200, { workflow_runs: [] }) });
    assert.equal(panel.source, 'snapshot');
    assert.equal(panel.fetchedAt, '2025-12-01T00:00:00.000Z');
  });

  await check('403 falls back to snapshot', async () => {
    const panel = await ci.resolveRuns('o/r', { snapshot, fetchImpl: respond(403, { message: 'rate limit' }) });
    assert.equal(panel.source, 'snapshot');
  });

  await check('401 falls back to snapshot', async () => {
    const panel = await ci.resolveRuns('o/r', { snapshot, token: 'bad', fetchImpl: respond(401, { message: 'Bad credentials' }) });
    assert.equal(panel.source, 'snapshot');
  });

  await check('network error falls back to snapshot', async () => {
    const panel = await ci.resolveRuns('o/r', {
      snapshot, fetchImpl: async () => { throw new TypeError('fetch failed'); },
    });
    assert.equal(panel.source, 'snapshot');
  });

  await check('non-JSON body falls back to snapshot', async () => {
    const panel = await ci.resolveRuns('o/r', { snapshot, fetchImpl: respond(200, '<html>oops</html>') });
    assert.equal(panel.source, 'snapshot');
  });

  await check('no snapshot and no runs gives null', async () => {
    assert.equal(await ci.resolveRuns('x/y', { snapshot: {}, fetchImpl: respond(200, { workflow_runs: [] }) }), null);
  });

  await check('request asks for the right page, branch and auth', async () => {
    const calls = [];
    const fetchImpl = async (url, init) => {
      calls.push({ url, headers: init.headers });
      return new Response(JSON.stringify({ workflow_runs: [raw()] }), { status: 200 });
    };
    await ci.resolveRuns('o/r', { snapshot: {}, fetchImpl, token: 't0k', branch: 'main', perPage: 1 });
    await ci.resolveRuns('o/r', { snapshot: {}, fetchImpl });
    assert.equal(calls[0].url, 'https://api.github.com/repos/o/r/actions/runs?per_page=1&branch=main');
    assert.equal(calls[0].headers.Authorization, 'Bearer t0k');
    assert.equal(calls[1].url, 'https://api.github.com/repos/o/r/actions/runs?per_page=5');
    assert.equal(calls[1].headers.Authorization, undefined);
  });

  await check('ciSources lists k6, testcafe and the site', () => {
    assert.deepEqual(ci.ciSources().map((s) => s.projectId ?? s.repo), ['k6', 'testcafe', 'rcastaneda-dev/portfolio']);
    const site = ci.ciSources().at(-1);
    assert.equal(site.branch, 'main');
    assert.equal(site.perPage, 1);
  });

  const k6Repo = 'rcastaneda-dev/k6-typescript-portfolio';
  const saved = { [k6Repo]: { fetchedAt: '2025-12-01T00:00:00.000Z', runs: [ci.mapRun(raw())] } };
  const dir = mkdtempSync(join(tmpdir(), 'ci-load-'));

  await check('missing build file falls back to snapshot', () => {
    const bundle = ciLoad.loadCiBundle({ buildFile: join(dir, 'missing.json'), snapshot: saved });
    assert.equal(bundle.projects.k6.source, 'snapshot');
    assert.equal(bundle.projects.testcafe, undefined);
  });

  await check('build file wins over snapshot', () => {
    const file = join(dir, 'build.json');
    const panel = { repo: k6Repo, source: 'github', fetchedAt: '2026-10-14T00:00:00.000Z', runs: [ci.mapRun(raw())] };
    writeFileSync(file, JSON.stringify({ generatedAt: panel.fetchedAt, panels: { [k6Repo]: panel } }));
    assert.equal(ciLoad.loadCiBundle({ buildFile: file, snapshot: saved }).projects.k6.source, 'github');
  });

  await check('unreadable build file falls back to snapshot', () => {
    const file = join(dir, 'broken.json');
    writeFileSync(file, '{');
    assert.equal(ciLoad.loadCiBundle({ buildFile: file, snapshot: saved }).projects.k6.source, 'snapshot');
  });

  await check('site panel is null when the site has no runs', () => {
    assert.equal(ciLoad.loadCiBundle({ buildFile: join(dir, 'missing.json'), snapshot: saved }).site, null);
  });

  console.warn = silence;
}
```

- [ ] **Step 2: Add `ciRepo` to projects**

In `lib/data/projects.ts`, add this field to the `Project` interface after `codeUrl: string;`:

```ts
  /** GitHub repo whose Actions runs appear in a pipeline panel, as owner/name. */
  ciRepo?: string;
```

Then add `ciRepo` to two entries:
- In the `k6` entry, after its `codeUrl` line: `ciRepo: 'rcastaneda-dev/k6-typescript-portfolio',`
- In the `testcafe` entry, after its `codeUrl` line: `ciRepo: 'rcastaneda-dev/AutomationPractice-Theorem',`

- [ ] **Step 3: Create the empty snapshot and run the checks to see them fail**

Create `lib/data/ci-snapshot.json` with exactly:

```json
{}
```

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: career and changelog checks `ok`; no CI checks run yet because `data/ci.js` does not exist. (The CI block is skipped until Step 4. The failing state for CI is "not present". Continue.)

- [ ] **Step 4: Create `lib/data/ci.ts`**

```ts
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
  perPage: number;
}

export interface CiBundle {
  projects: Partial<Record<ProjectId, CiPanelData>>;
  site: CiPanelData | null;
}

export const SITE_REPO = 'rcastaneda-dev/portfolio';

/** Every project with a `ciRepo` (last 5 runs), then the site itself (latest run on main). */
export function ciSources(): CiSource[] {
  const fromProjects: CiSource[] = projects
    .filter((p) => p.ciRepo)
    .map((p) => ({ repo: p.ciRepo as string, projectId: p.id, perPage: 5 }));
  return [...fromProjects, { repo: SITE_REPO, branch: 'main', perPage: 1 }];
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
    perPage = 5,
    now = new Date(),
    apiBase = 'https://api.github.com',
  } = options;

  const query = new URLSearchParams({ per_page: String(perPage) });
  if (branch) query.set('branch', branch);
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetchImpl(`${apiBase}/repos/${repo}/actions/runs?${query.toString()}`, { headers });
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
```

- [ ] **Step 5: Create `lib/data/ci-load.ts`**

```ts
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
```

- [ ] **Step 6: Run the checks**

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: every check `ok` (career, changelog, 20 CI checks), `all checks passed`.

- [ ] **Step 7: Create `scripts/fetch-ci.mjs`**

```js
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
```

- [ ] **Step 8: Wire the scripts, ignore the build file, document the variables**

In `package.json`, replace the `scripts` block with:

```json
  "scripts": {
    "dev": "next dev",
    "prebuild": "node scripts/fetch-ci.mjs",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "ci:snapshot": "node scripts/fetch-ci.mjs --refresh-snapshot"
  },
```

In `.gitignore`, add after the `# local env files` block:

```
# CI runs fetched before each build (scripts/fetch-ci.mjs)
lib/data/ci-build.json
```

Append to `.env.example`:

```
# Optional. A GitHub token (fine-grained, read-only access to public
# repositories, no extra permissions) raises the API rate limit when the
# prebuild step fetches pipeline runs. Set it in Vercel or export it in your
# shell; the prebuild script does not read .env.local. Without it the build
# still works and falls back to lib/data/ci-snapshot.json.
GITHUB_TOKEN=

# Testing only. Points the pipeline fetch at another host, for example
# http://127.0.0.1:9, to force the snapshot fallback.
# CI_API_BASE=
```

- [ ] **Step 9: Seed the snapshot from GitHub**

Run: `npm run ci:snapshot`
Expected output (counts can differ if new runs exist):
```
[ci] rcastaneda-dev/k6-typescript-portfolio: 5 run(s) from github
[ci] rcastaneda-dev/AutomationPractice-Theorem: 5 run(s) from github
[ci] rcastaneda-dev/portfolio: no data, panel omitted
```
Then run: `node -e 'const s=require("./lib/data/ci-snapshot.json");for(const [r,v] of Object.entries(s))console.log(r,v.runs.map(x=>x.status).join(","))'`
Expected: two repos listed with real statuses (k6 includes `failed`; AutomationPractice-Theorem includes a `failed` TestCafe run).

- [ ] **Step 10: Prove the fallback path**

Run: `CI_API_BASE=http://127.0.0.1:9 node scripts/fetch-ci.mjs`
Expected: three `using snapshot` warnings, then `5 run(s) from snapshot` for both project repos and `no data, panel omitted` for the portfolio. Exit 0.

Run: `node scripts/fetch-ci.mjs`
Expected: back to `from github`. `git status --short` does not list `lib/data/ci-build.json`.

- [ ] **Step 11: Type-check and commit**

Run: `npx tsc --noEmit`
Expected: exit 0.

```bash
git add lib/data/projects.ts lib/data/ci.ts lib/data/ci-load.ts lib/data/ci-snapshot.json scripts/fetch-ci.mjs package.json .gitignore .env.example
git commit -m "$(cat <<'EOF'
feat: fetch GitHub Actions runs before each build

Prebuild script writes the latest runs for k6, TestCafe and the site, with a
committed snapshot as fallback so the build never fails on CI data.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Pipeline panels in Projects

**Files:**
- Modify: `tailwind.config.ts` (dark panel tokens)
- Create: `components/PipelinePanel.tsx`
- Modify: `components/Projects.tsx` (full rewrite), `app/page.tsx` (full rewrite)
- Modify: `lib/i18n/translations/en.ts`, `es.ts`, `fr.ts` (`projects.pipeline`)

**Interfaces:**
- Consumes: `CiBundle`, `CiPanelData`, `RunStatus`, `formatDuration` from `lib/data/ci.ts`; `loadCiBundle` from `lib/data/ci-load.ts`.
- Produces: Tailwind colors `panel`, `panel-ink`, `panel-muted`, `panel-edge`, `pass-dark`, `fail-dark`, `run-dark` (Task 5 uses them); `<Projects ci={CiBundle['projects']} />`; `<PipelinePanel data={CiPanelData} />`; `t.projects.pipeline`.

- [ ] **Step 1: Add the panel tokens**

In `tailwind.config.ts`, inside `colors`, after `rule: 'rgb(19 34 45 / 0.18)',` add:

```ts
        // Dark instrument panels (branch graph, pipeline runs). Text contrast
        // on `panel`: ink 15.1:1, muted 7.9:1, pass 7.5:1, fail 7.2:1, run 7.9:1.
        panel: '#0E1A23',
        'panel-ink': '#E8EEF1',
        'panel-muted': '#9FB0BB',
        'panel-edge': 'rgb(232 238 241 / 0.14)',
        'pass-dark': '#3DBE82',
        'fail-dark': '#F2877A',
        'run-dark': '#E5A04A',
```

- [ ] **Step 2: Add the pipeline strings in all three languages**

In `lib/i18n/translations/en.ts`, inside `projects`, after `moreOnGithub: 'More on GitHub',` add:

```ts
    pipeline: {
      label: 'Pipeline runs',
      status: {
        passed: 'Passed',
        failed: 'Failed',
        running: 'Running',
        cancelled: 'Cancelled',
      },
      fetched: 'From GitHub Actions, fetched',
      snapshot: 'Saved snapshot from GitHub Actions,',
    },
```

In `es.ts`, after `moreOnGithub: 'Más en GitHub',` add:

```ts
    pipeline: {
      label: 'Ejecuciones del pipeline',
      status: {
        passed: 'Exitosa',
        failed: 'Fallida',
        running: 'En curso',
        cancelled: 'Cancelada',
      },
      fetched: 'De GitHub Actions, obtenido el',
      snapshot: 'Instantánea guardada de GitHub Actions,',
    },
```

In `fr.ts`, after `moreOnGithub: 'Plus sur GitHub',` add:

```ts
    pipeline: {
      label: 'Exécutions du pipeline',
      status: {
        passed: 'Réussie',
        failed: 'Échouée',
        running: 'En cours',
        cancelled: 'Annulée',
      },
      fetched: 'Depuis GitHub Actions, récupéré le',
      snapshot: 'Instantané enregistré de GitHub Actions,',
    },
```

- [ ] **Step 3: Create `components/PipelinePanel.tsx`**

```tsx
'use client';

import { CheckCircle2, CircleDot, MinusCircle, XCircle, type LucideIcon } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { formatDuration, type CiPanelData, type RunStatus } from '@/lib/data/ci';

// Each status has its own icon shape and a word, so color is never the only cue.
const STATUS: Record<RunStatus, { Icon: LucideIcon; className: string }> = {
  passed: { Icon: CheckCircle2, className: 'text-pass-dark' },
  failed: { Icon: XCircle, className: 'text-fail-dark' },
  running: { Icon: CircleDot, className: 'text-run-dark' },
  cancelled: { Icon: MinusCircle, className: 'text-panel-muted' },
};

const PipelinePanel = ({ data }: { data: CiPanelData }) => {
  const { t, locale } = useI18n();
  const strings = t.projects.pipeline;
  // UTC keeps the build-time HTML and the hydrated text identical.
  const date = new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' });

  return (
    <div
      role="group"
      aria-label={`${strings.label}: ${data.repo}`}
      className="mt-5 rounded-[2px] bg-panel p-4 text-panel-ink md:p-5"
    >
      <p className="text-[0.8125rem] text-panel-muted">{data.repo}</p>
      <ul className="mt-3">
        {data.runs.map((run) => {
          const { Icon, className } = STATUS[run.status];
          return (
            <li
              key={run.id}
              className="grid gap-x-4 gap-y-1 border-t border-panel-edge py-3 first:border-t-0 first:pt-0 sm:grid-cols-[7.5rem_1fr_auto] sm:items-baseline"
            >
              <span className={`inline-flex items-center gap-2 text-[0.875rem] font-medium ${className}`}>
                <Icon size={16} aria-hidden className="shrink-0 self-center" />
                {strings.status[run.status]}
              </span>
              <span className="min-w-0 text-[0.9375rem]">
                <a
                  href={run.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-panel-edge underline-offset-4 hover:decoration-panel-ink focus-visible:outline-pass-dark"
                >
                  {run.workflow} #{run.runNumber}
                  <span className="sr-only"> ({t.projects.newTab})</span>
                </a>
                {run.branch && (
                  <span className="ml-2 text-[0.8125rem] text-panel-muted">{run.branch}</span>
                )}
              </span>
              <span className="text-[0.8125rem] tabular-nums text-panel-muted">
                {run.durationSec !== null ? `${formatDuration(run.durationSec)}, ` : ''}
                {date.format(new Date(run.startedAt))}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 border-t border-panel-edge pt-3 text-[0.8125rem] text-panel-muted">
        {data.source === 'github' ? strings.fetched : strings.snapshot}{' '}
        {date.format(new Date(data.fetchedAt))}
      </p>
    </div>
  );
};

export default PipelinePanel;
```

- [ ] **Step 4: Rewrite `components/Projects.tsx`**

```tsx
'use client';

import { useI18n } from '@/lib/i18n';
import { projects } from '@/lib/data/projects';
import { profile } from '@/lib/data/profile';
import type { CiBundle } from '@/lib/data/ci';
import PipelinePanel from './PipelinePanel';
import Section from './Section';

const linkClass = 'link inline-flex min-h-11 items-center';

const Projects = ({ ci }: { ci: CiBundle['projects'] }) => {
  const { t } = useI18n();
  const newTab = <span className="sr-only"> ({t.projects.newTab})</span>;

  return (
    <Section id="projects" title={t.projects.title}>
      <ol className="[&>li:first-child]:border-t-0 [&>li:first-child]:pt-0">
        {projects.map((project) => {
          const item = t.projects.items[project.id];
          const panel = ci[project.id];
          return (
            <li
              key={project.id}
              className="grid gap-3 border-t border-rule py-8 md:grid-cols-[5rem_1fr_9rem] md:gap-8"
            >
              <p className="text-[0.9375rem] tabular-nums text-graphite">{project.year}</p>

              <div className="min-w-0">
                <h3 className="font-display text-[1.125rem] font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[62ch] font-serif text-[1.0625rem] leading-[1.65]">
                  {item.description}
                </p>
                <p className="mt-3 text-[0.875rem] text-graphite">{project.stack.join(', ')}</p>
                {project.inProgress && (
                  <p className="mt-1 text-[0.875rem] font-medium text-flag">
                    {t.projects.inProgress}
                  </p>
                )}
                {panel && <PipelinePanel data={panel} />}
              </div>

              <ul className="flex flex-wrap gap-x-6 text-[0.9375rem] md:flex-col md:gap-x-0">
                <li>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {t.projects.code}
                    {newTab}
                  </a>
                </li>
                {project.live && (
                  <li>
                    <a href={project.live.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {project.live.kind === 'demo' ? t.projects.liveDemo : t.projects.ciRuns}
                      {newTab}
                    </a>
                  </li>
                )}
              </ul>
            </li>
          );
        })}
      </ol>

      <p className="mt-6">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {t.projects.moreOnGithub}
          {newTab}
        </a>
      </p>
    </Section>
  );
};

export default Projects;
```

- [ ] **Step 5: Rewrite `app/page.tsx`**

```tsx
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { loadCiBundle } from '@/lib/data/ci-load';

// Content renders straight into the static HTML. Pipeline runs come from
// lib/data/ci-build.json (written by the prebuild step) or the committed snapshot.
export default function Home() {
  const ci = loadCiBundle();

  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects ci={ci.projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 6: Type-check, build, and check the HTML**

Run: `npx tsc --noEmit`
Expected: exit 0.

Run: `npm run build`
Expected: the three `[ci] …` lines from the prebuild step, then `✓ Compiled successfully` and `○ /` in the route table.

Run: `grep -o 'Pipeline runs: [^"]*' out/index.html && grep -o 'From GitHub Actions, fetched' out/index.html | wc -l`
Expected: `Pipeline runs: rcastaneda-dev/k6-typescript-portfolio`, `Pipeline runs: rcastaneda-dev/AutomationPractice-Theorem`, and the count `2`. (Count occurrences with `grep -o … | wc -l`; the exported HTML is mostly one line, so `grep -c` would print `1`.)

Run: `CI_API_BASE=http://127.0.0.1:9 npm run build && grep -o 'Saved snapshot from GitHub Actions' out/index.html | wc -l; node scripts/fetch-ci.mjs`
Expected: count `2` (the snapshot path renders and says so); the last command restores fresh data.

- [ ] **Step 7: Look at it**

Run the dev server and open `http://localhost:3000/#projects` at 1280px, 768px and 375px.
Expected: the k6 and TestCafe projects each show a dark panel with five rows; failed rows show the X icon and "Failed" in salmon, passed rows the check and "Passed" in green. Each workflow name opens the real GitHub run. Rows wrap to stacked lines at 375px with no horizontal scroll. Tab to a run link: the focus ring is visible on the dark panel. In FR the statuses read Réussie / Échouée.

- [ ] **Step 8: Commit**

```bash
git add tailwind.config.ts components/PipelinePanel.tsx components/Projects.tsx app/page.tsx lib/i18n/translations/en.ts lib/i18n/translations/es.ts lib/i18n/translations/fr.ts
git commit -m "$(cat <<'EOF'
feat: show real pipeline runs for k6 and TestCafe projects

Dark panels list the last five GitHub Actions runs with status icons, words,
durations and links, marked as fetched or as a saved snapshot.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: Branch graph replaces the career strip

**Files:**
- Create: `lib/data/graph.ts`, `components/BranchGraph.tsx`
- Modify: `components/Hero.tsx` (two lines), `app/globals.css` (animation), `lib/i18n/translations/en.ts`, `es.ts`, `fr.ts` (`hero.strip` → `hero.graph`)
- Delete: `components/CareerStrip.tsx`
- Test: `scripts/verify-data.mjs` (insert a block)

**Interfaces:**
- Consumes: `chronologicalRoles`, `monthIndex`, `formatMonth`, `versionById`, `Role`, `RoleId` (Task 1); panel tokens (Task 4).
- Produces (from `lib/data/graph.ts`):
  - Constants: `VIEW_W = 1000`, `VIEW_H = 160`, `LANE_Y = { dev: 32, main: 80, qa: 128 }`, `AXIS_START`, `AXIS_END`
  - Functions: `xUnits(month: number): number`, `xPercent(month: number): number`, `segmentOf(role): { x0: number; x1: number; y: number }`
  - Functions: `rolePath(role): string`, `segmentPx(role, areaPx: number): number`
  - `yearTicks: { year: number; left: number }[]`
- Also produces: `t.hero.graph: { label: string; summary: string }`, and `t.hero.strip` is removed.

- [ ] **Step 1: Insert the graph checks**

In `scripts/verify-data.mjs`, insert above `// --- more checks are inserted above this line`:

```js
// --- graph ----------------------------------------------------------------------
if (has('data/graph')) {
  const graph = load('data/graph');
  const career = load('data/career');
  const byId = Object.fromEntries(career.roles.map((r) => [r.id, r]));

  await check('graph keeps the Rulesware overlap on two lanes', () => {
    const qa = graph.segmentOf(byId.ruleswareQa);
    const dev = graph.segmentOf(byId.pegaDev);
    assert.ok(dev.x0 < qa.x1, 'Pega should start before Rulesware QA ends');
    assert.notEqual(dev.y, qa.y);
  });

  await check('nodes are ordered and distinct in time', () => {
    const xs = career.chronologicalRoles.map((r) => graph.segmentOf(r).x0);
    xs.forEach((x, i) => {
      if (i > 0) assert.ok(x > xs[i - 1], `node ${i} is not after node ${i - 1}`);
    });
  });

  await check('every path stays inside the view box', () => {
    for (const r of career.roles) {
      const numbers = graph.rolePath(r).match(/-?\d+(\.\d+)?/g).map(Number);
      for (let i = 0; i < numbers.length; i += 2) {
        assert.ok(numbers[i] >= 0 && numbers[i] <= graph.VIEW_W, `${r.id} x=${numbers[i]}`);
        assert.ok(numbers[i + 1] >= 0 && numbers[i + 1] <= graph.VIEW_H, `${r.id} y=${numbers[i + 1]}`);
      }
    }
  });

  await check('same-lane tags do not collide at 375px', () => {
    // 375px phone: 24px page gutters, 16px panel padding, 40px lane-label column.
    const areaPx = 375 - 48 - 32 - 40;
    const minGapPx = 22; // an 11px "v6.0" tag is about 20px wide
    for (const lane of ['dev', 'qa']) {
      const onLane = career.chronologicalRoles.filter((r) => r.kind === lane);
      onLane.forEach((r, i) => {
        if (i === 0) return;
        const gap = ((graph.segmentOf(r).x0 - graph.segmentOf(onLane[i - 1]).x0) / graph.VIEW_W) * areaPx;
        assert.ok(gap >= minGapPx, `${onLane[i - 1].id} → ${r.id}: ${gap.toFixed(1)}px`);
      });
    }
  });

  await check('year ticks fall inside the axis', () => {
    for (const tick of graph.yearTicks) assert.ok(tick.left > 0 && tick.left < 100, `${tick.year}`);
  });
}
```

- [ ] **Step 2: Run the checks to see the graph block is absent**

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: earlier checks `ok`; no graph lines yet (`data/graph.js` does not exist).

- [ ] **Step 3: Create `lib/data/graph.ts`**

```ts
// Geometry for the career branch graph. SVG user space is 1000 × 160 and
// stretches horizontally to its container; labels are HTML, positioned with the
// same percentages, so text never stretches.

import { chronologicalRoles, monthIndex, type Role } from './career';

export const VIEW_W = 1000;
export const VIEW_H = 160;
const PAD = 20;
const FORK = 16;
export const LANE_Y = { dev: 32, main: 80, qa: 128 } as const;

export const AXIS_START = monthIndex(chronologicalRoles[0].start);
export const AXIS_END = Math.max(...chronologicalRoles.map((r) => monthIndex(r.end))) + 1;
const SPAN = AXIS_END - AXIS_START;

/** x in SVG units for an absolute month index. */
export const xUnits = (month: number) => PAD + ((month - AXIS_START) / SPAN) * (VIEW_W - 2 * PAD);

/** x as a percentage of the graph width, for HTML overlays. */
export const xPercent = (month: number) => (xUnits(month) / VIEW_W) * 100;

/** A role's segment on its lane, from its first month to the month after its last. */
export function segmentOf(role: Role): { x0: number; x1: number; y: number } {
  return {
    x0: xUnits(monthIndex(role.start)),
    x1: xUnits(monthIndex(role.end) + 1),
    y: LANE_Y[role.kind],
  };
}

/** Fork off main at the start, run along the lane, merge back into main at the end. */
export function rolePath(role: Role): string {
  const { x0, x1, y } = segmentOf(role);
  const m = LANE_Y.main;
  return [
    `M ${x0 - FORK} ${m}`,
    `C ${x0 - FORK / 2} ${m}, ${x0 - FORK / 2} ${y}, ${x0} ${y}`,
    `L ${x1} ${y}`,
    `C ${x1 + FORK / 2} ${y}, ${x1 + FORK / 2} ${m}, ${x1 + FORK} ${m}`,
  ].join(' ');
}

/** Width of a role's segment in CSS pixels, for a graph area `areaPx` wide. */
export function segmentPx(role: Role, areaPx: number): number {
  const { x0, x1 } = segmentOf(role);
  return ((x1 - x0) / VIEW_W) * areaPx;
}

export const yearTicks = [2014, 2016, 2018, 2020, 2022, 2024].map((year) => ({
  year,
  left: xPercent(year * 12),
}));
```

- [ ] **Step 4: Run the checks**

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: the five graph checks `ok`, `all checks passed`.

- [ ] **Step 5: Swap the hero strings in all three languages**

In `lib/i18n/translations/en.ts`, replace the `strip: { … }` block inside `hero` with:

```ts
    graph: {
      label: 'Career branch graph, 2013 to 2025',
      summary: 'From Java developer to senior QA automation engineer, 2013 to 2025. Hover or focus a node to see the release.',
    },
```

In `es.ts`, replace `strip: { … }` with:

```ts
    graph: {
      label: 'Gráfico de ramas de la trayectoria, 2013 a 2025',
      summary: 'De desarrollador Java a ingeniero senior de automatización QA, 2013 a 2025. Pasa el cursor o enfoca un nodo para ver la versión.',
    },
```

In `fr.ts`, replace `strip: { … }` with:

```ts
    graph: {
      label: 'Graphe des branches du parcours, 2013 à 2025',
      summary: 'De développeur Java à ingénieur senior en automatisation QA, 2013 à 2025. Survolez un nœud ou mettez-le au focus pour voir la version.',
    },
```

- [ ] **Step 6: Create `components/BranchGraph.tsx`**

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { chronologicalRoles, formatMonth, versionById, type RoleId } from '@/lib/data/career';
import { LANE_Y, VIEW_H, VIEW_W, rolePath, segmentOf, segmentPx, yearTicks } from '@/lib/data/graph';

// Gap between a node and its label, and the room a label keeps before the next node.
const LABEL_OFFSET = 10;
const LABEL_MARGIN = 8;
const NAME_GAP = 8;

const BranchGraph = () => {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<RoleId | null>(null);
  const [areaWidth, setAreaWidth] = useState(0);
  const [measure, setMeasure] = useState<((text: string) => number) | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  // Company names show beside the version tag only when the measured text fits
  // inside the role's segment; tags always show.
  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;

    const observer = new ResizeObserver(([entry]) => setAreaWidth(entry.contentRect.width));
    observer.observe(area);

    let cancelled = false;
    document.fonts.ready.then(() => {
      const sample = area.querySelector<HTMLElement>('[data-graph-label]');
      const ctx = document.createElement('canvas').getContext('2d');
      if (cancelled || !sample || !ctx) return;
      const style = getComputedStyle(sample);
      ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      setMeasure(() => (text: string) => ctx.measureText(text).width);
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  const describe = (id: RoleId) => {
    const role = chronologicalRoles.find((r) => r.id === id);
    if (!role) return '';
    return `${versionById[id]}, ${role.shortName}, ${t.experience.jobs[id].title}, ${formatMonth(role.start)} ${t.experience.to} ${formatMonth(role.end)}`;
  };

  return (
    <div className="mt-16 rounded-[2px] bg-panel p-4 text-panel-ink md:mt-20 md:p-6">
      <div className="flex">
        <div aria-hidden className="relative w-10 shrink-0 text-[0.75rem] text-panel-muted md:w-12" style={{ height: VIEW_H }}>
          {(['dev', 'main', 'qa'] as const).map((lane) => (
            <span key={lane} className="absolute left-0 -translate-y-1/2" style={{ top: LANE_Y[lane] }}>
              {lane}
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <div
            ref={areaRef}
            role="group"
            aria-label={t.hero.graph.label}
            className="graph-draw relative"
            style={{ height: VIEW_H }}
            onMouseLeave={() => setActiveId(null)}
          >
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              preserveAspectRatio="none"
            >
              <line x1={0} y1={LANE_Y.main} x2={VIEW_W} y2={LANE_Y.main} stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} vectorEffect="non-scaling-stroke" />
              {(['dev', 'qa'] as const).map((lane) => (
                <line key={lane} x1={0} y1={LANE_Y[lane]} x2={VIEW_W} y2={LANE_Y[lane]} stroke="currentColor" strokeOpacity={0.12} strokeDasharray="2 6" vectorEffect="non-scaling-stroke" />
              ))}
              {chronologicalRoles.map((role) => (
                <path
                  key={role.id}
                  d={rolePath(role)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  strokeOpacity={activeId && activeId !== role.id ? 0.3 : 1}
                  className={role.kind === 'qa' ? 'text-pass-dark' : 'text-panel-muted'}
                />
              ))}
            </svg>

            {chronologicalRoles.map((role) => {
              const { x0, y } = segmentOf(role);
              const left = `${(x0 / VIEW_W) * 100}%`;
              const tag = versionById[role.id];
              const showName =
                measure !== null &&
                LABEL_OFFSET + measure(tag) + NAME_GAP + measure(role.shortName) + LABEL_MARGIN <= segmentPx(role, areaWidth);
              const dimmed = activeId !== null && activeId !== role.id;

              return (
                <div key={role.id}>
                  <span
                    data-graph-label
                    aria-hidden
                    className={`pointer-events-none absolute whitespace-nowrap text-[0.6875rem] font-medium transition-opacity md:text-[0.75rem] ${dimmed ? 'opacity-40' : ''}`}
                    style={{ left: `calc(${left} + ${LABEL_OFFSET}px)`, top: role.kind === 'dev' ? y - 22 : y + 8 }}
                  >
                    {tag}
                    {showName && <span className="ml-2 font-normal text-panel-muted">{role.shortName}</span>}
                  </span>
                  <a
                    href={`#exp-${role.id}`}
                    aria-label={describe(role.id)}
                    onMouseEnter={() => setActiveId(role.id)}
                    onFocus={() => setActiveId(role.id)}
                    onBlur={() => setActiveId(null)}
                    className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-pass-dark"
                    style={{ left, top: y }}
                  >
                    <span
                      className={`h-3 w-3 rounded-full transition-opacity ${
                        role.kind === 'qa' ? 'bg-pass-dark' : 'border-2 border-panel-muted bg-panel'
                      } ${activeId === role.id ? 'ring-2 ring-panel-ink ring-offset-2 ring-offset-panel' : ''} ${dimmed ? 'opacity-40' : ''}`}
                    />
                  </a>
                </div>
              );
            })}
          </div>

          <div aria-hidden className="relative mt-2 h-5 text-[0.75rem] tabular-nums text-panel-muted">
            {yearTicks.map(({ year, left }, i) => (
              <span
                key={year}
                className={`absolute top-0 -translate-x-1/2 ${i % 2 === 1 ? 'max-md:hidden' : ''}`}
                style={{ left: `${left}%` }}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 min-h-[3rem] max-w-[62ch] text-[0.9375rem] md:min-h-[1.5rem]">
        {activeId ? describe(activeId) : t.hero.graph.summary}
      </p>
    </div>
  );
};

export default BranchGraph;
```

- [ ] **Step 7: Swap the strip for the graph in the hero, and the animation**

In `components/Hero.tsx`, replace `import CareerStrip from './CareerStrip';` with `import BranchGraph from './BranchGraph';`, and replace `<CareerStrip />` with `<BranchGraph />`.

In `app/globals.css`, replace:

```css
  /* The career strip: each bar draws in once, left to right, on load. */
  .strip-bar {
    animation: strip-draw 700ms cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
    animation-delay: calc(var(--i, 0) * 80ms + 200ms);
  }
```

with:

```css
  /* The branch graph reveals once, left to right, on load. */
  .graph-draw {
    animation: graph-reveal 900ms cubic-bezier(0.2, 0.7, 0.2, 1) 200ms backwards;
  }
```

and rename `@keyframes strip-draw` to `@keyframes graph-reveal` (its body stays the same).

Delete the old component: `git rm components/CareerStrip.tsx`

- [ ] **Step 8: Type-check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: exit 0; `out/index.html` contains `Career branch graph, 2013 to 2025` (`grep -c 'Career branch graph' out/index.html` prints `1`) and no `strip-bar` (`grep -c strip-bar out/index.html` prints `0`).

- [ ] **Step 9: Look at it**

Run the dev server and open `http://localhost:3000` at 1280px, 768px and 375px, in EN and FR.
Expected:
- A dark panel sits under the hero, with `dev`, `main` and `qa` lane labels on the left.
- Green QA segments run along the bottom lane and grey dev segments along the top. The v3.0 and v3.1 segments overlap in 2018, one on each lane.
- Tags v1.0 to v6.0 sit at the nodes. Company names appear on wide segments at desktop width, and only tags at 375px. Same-lane tags do not overlap.
- Hovering or tabbing to a node fills the readout, for example "v6.0, Lumenalta, Senior QA Automation Engineer, 05/2023 to 11/2025", and dims the other lines. The focus ring is visible.
- Clicking the v1.0 node opens the development roles and scrolls to Sherwin-Williams.
- With reduced motion turned on in the OS or DevTools rendering panel, the graph appears without the reveal.

- [ ] **Step 10: Commit**

```bash
git add lib/data/graph.ts components/BranchGraph.tsx components/Hero.tsx app/globals.css lib/i18n/translations/en.ts lib/i18n/translations/es.ts lib/i18n/translations/fr.ts
git commit -m "$(cat <<'EOF'
feat: replace the career strip with a versioned branch graph

Dev and QA lanes fork from main at each role, tagged v1.0 to v6.0, with a
readout on hover or focus and links to each changelog entry.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: The site's own changelog, workflow and build status

**Files:**
- Create: `CHANGELOG.md`, `.github/workflows/ci.yml`
- Modify: `package.json` and `package-lock.json` (version via npm), `components/Footer.tsx` (full rewrite), `app/page.tsx` (two lines), `lib/i18n/translations/en.ts`, `es.ts`, `fr.ts` (`footer.build`), `README.md`

**Interfaces:**
- Consumes: `CiPanelData`, `RunStatus` (Task 3), `loadCiBundle().site` (Task 3).
- Produces: `<Footer version={string} siteCi={CiPanelData | null} />`; `t.footer.build: Record<RunStatus, string>`.

- [ ] **Step 1: Bump the version**

Run: `npm version 1.0.0 --no-git-tag-version`
Expected: prints `v1.0.0`; `package.json` and `package-lock.json` now say `"version": "1.0.0"`.

- [ ] **Step 2: Create `CHANGELOG.md`**

```markdown
# Changelog

All notable changes to this site are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-10-14

### Added
- Career branch graph with versioned releases, and an Experience section written as a changelog with Added, Changed and Fixed groups.
- Pipeline panels for projects that have GitHub Actions runs, fetched before each build with a committed snapshot as fallback.
- Working contact form through Formspree, with an email fallback.
- GitHub Actions workflow that type-checks, lints and builds every push and pull request to `main`.
- Site version and latest build status in the footer.

### Changed
- Redesigned the site in a light document style with Archivo and Source Serif 4, and dark panels for the graph and pipeline runs.
- Content renders in the static HTML, with no loading screen.
- Rewrote the copy in English, Spanish and French.

### Removed
- Neon theme, particle background, typing animation and scroll-to-top button.
- The framer-motion, react-icons, react-social-icons, react-type-animation and jimp dependencies.

## [0.1.0] - 2025-11-26

### Added
- First version of the portfolio: dark animated theme, experience timeline, skills, projects, contact section, résumé download, and English, Spanish and French translations.
```

- [ ] **Step 3: Create `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - name: Type-check
        run: npx tsc --noEmit

      - name: Lint
        run: npm run lint

      # The prebuild step fetches pipeline runs; the token raises the API rate limit.
      - name: Build
        run: npm run build
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Run: `python3 -c "import yaml; d=yaml.safe_load(open('.github/workflows/ci.yml')); print(list(d['jobs']['verify']['steps'][i].get('name', d['jobs']['verify']['steps'][i].get('run', d['jobs']['verify']['steps'][i].get('uses'))) for i in range(6)))"`
Expected: `['actions/checkout@v4', 'actions/setup-node@v4', 'npm ci', 'Type-check', 'Lint', 'Build']`

- [ ] **Step 4: Add the build-status strings**

In `lib/i18n/translations/en.ts`, inside `footer`, after `support: 'Support my work',` add:

```ts
    build: {
      passed: 'Build passing',
      failed: 'Build failing',
      running: 'Build running',
      cancelled: 'Build cancelled',
    },
```

In `es.ts`, after `support: 'Apoya mi trabajo',` add:

```ts
    build: {
      passed: 'Build exitoso',
      failed: 'Build fallido',
      running: 'Build en curso',
      cancelled: 'Build cancelado',
    },
```

In `fr.ts`, after `support: 'Soutenir mon travail',` add:

```ts
    build: {
      passed: 'Build réussi',
      failed: 'Build en échec',
      running: 'Build en cours',
      cancelled: 'Build annulé',
    },
```

- [ ] **Step 5: Rewrite `components/Footer.tsx`**

```tsx
'use client';

import { CheckCircle2, CircleDot, MinusCircle, XCircle, type LucideIcon } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { profile } from '@/lib/data/profile';
import type { CiPanelData, RunStatus } from '@/lib/data/ci';

const BUILD_STATUS: Record<RunStatus, { Icon: LucideIcon; className: string }> = {
  passed: { Icon: CheckCircle2, className: 'text-pass' },
  failed: { Icon: XCircle, className: 'text-flag' },
  running: { Icon: CircleDot, className: 'text-flag' },
  cancelled: { Icon: MinusCircle, className: 'text-graphite' },
};

interface FooterProps {
  version: string;
  /** Latest run of this repo's CI workflow on main; null until it has run once. */
  siteCi: CiPanelData | null;
}

const Footer = ({ version, siteCi }: FooterProps) => {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const latest = siteCi?.runs[0];
  const status = latest ? BUILD_STATUS[latest.status] : null;

  return (
    <footer>
      <div className="wrap flex flex-col gap-2 pb-12 pt-4 text-[0.875rem] text-graphite md:flex-row md:justify-between md:gap-8">
        <div>
          <p>
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <p className="flex flex-wrap items-center gap-x-4">
            <span className="tabular-nums">v{version}</span>
            {latest && status && (
              <a
                href={latest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1.5 py-2"
              >
                <status.Icon size={14} aria-hidden className={status.className} />
                {t.footer.build[latest.status]}
                <span className="sr-only"> ({t.projects.newTab})</span>
              </a>
            )}
          </p>
        </div>
        <p>
          {t.footer.built}{' '}
          <a
            href={profile.support}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-block py-2"
          >
            {t.footer.support}
            <span className="sr-only"> ({t.projects.newTab})</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 6: Pass the version and site status from the page**

In `app/page.tsx`, add after the `loadCiBundle` import:

```tsx
import pkg from '../package.json';
```

and replace `<Footer />` with:

```tsx
      <Footer version={pkg.version} siteCi={ci.site} />
```

- [ ] **Step 7: Update the README**

In `README.md`, replace the `## 🔐 Environment variables` section (the heading, its table, and the paragraph under it) with:

```markdown
## 🔐 Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID (the part after `/f/`). When empty, the contact section shows an email button instead of the form. Inlined at build time. |
| `GITHUB_TOKEN` | Optional. Raises the GitHub API rate limit when the prebuild step fetches pipeline runs. Without it the build falls back to `lib/data/ci-snapshot.json`. |
| `CI_API_BASE` | Testing only. Points the pipeline fetch at another host to force the snapshot fallback. |

Copy `.env.example` to `.env.local` for the Formspree ID. `GITHUB_TOKEN` is read from the shell or the Vercel project, not from `.env.local`.

## 🔁 CI and pipeline data

![CI](https://github.com/rcastaneda-dev/portfolio/actions/workflows/ci.yml/badge.svg)

- `npm run build` first runs `scripts/fetch-ci.mjs`, which fetches the latest GitHub Actions runs for the projects listed with a `ciRepo` in `lib/data/projects.ts` and for this repo, and writes `lib/data/ci-build.json` (gitignored). The page is static, so the panels refresh on each deploy.
- `npm run ci:snapshot` also refreshes the committed fallback, `lib/data/ci-snapshot.json`.
- `.github/workflows/ci.yml` type-checks, lints and builds every push and pull request to `main`. The footer shows the latest result on `main`.
- Release notes live in [`CHANGELOG.md`](CHANGELOG.md).
```

- [ ] **Step 8: Type-check, build, and check the footer**

Run: `npx tsc --noEmit && npm run build`
Expected: exit 0.

Run: `grep -o 'v1\.0\.0' out/index.html | head -1 && grep -c 'Build passing\|Build failing' out/index.html`
Expected: `v1.0.0`, then `0` (the portfolio repo has no runs on `main` until this branch merges; the status appears after the first workflow run).

- [ ] **Step 9: Commit**

```bash
git add CHANGELOG.md .github/workflows/ci.yml package.json package-lock.json components/Footer.tsx app/page.tsx lib/i18n/translations/en.ts lib/i18n/translations/es.ts lib/i18n/translations/fr.ts README.md
git commit -m "$(cat <<'EOF'
feat: version the site and show its own build status

Adds CHANGELOG.md, a CI workflow (type-check, lint, build), version 1.0.0,
and the latest main build result in the footer.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 7: Whole-branch verification

**Files:** none changed, except deleting the throwaway check script at the end.

- [ ] **Step 1: Clean build from scratch**

Run: `rm -rf .next out lib/data/ci-build.json && npx tsc --noEmit && npx eslint --no-eslintrc -c .eslintrc.json --ext .ts,.tsx app components lib && npm run build`
Expected: exit 0. (From this nested worktree, `npm run lint` reports a plugin conflict with the parent checkout's `.eslintrc.json`; the explicit ESLint command above is the equivalent check. In CI, `npm run lint` runs normally.)

- [ ] **Step 2: Data checks one last time**

Run:
```bash
OUT=$(mktemp -d) && npx tsc lib/data/*.ts lib/i18n/translations/*.ts --rootDir lib --outDir "$OUT" --module commonjs --target es2020 --strict --esModuleInterop --resolveJsonModule --skipLibCheck && node scripts/verify-data.mjs "$OUT"
```
Expected: every check `ok`, `all checks passed`.

- [ ] **Step 3: Static HTML checks**

Run:
```bash
grep -c 'Loading Portfolio' out/index.html; grep -c 'Career branch graph' out/index.html; grep -o 'Pipeline runs: [^"]*' out/index.html; grep -c '>v6\.0<' out/index.html; grep -o 'v1\.0\.0' out/index.html | head -1
```
Expected: `0`, `1`, the two `Pipeline runs: …` lines, a count of at least `1`, `v1.0.0`.

- [ ] **Step 4: Browser matrix**

Run the dev server and check at 375, 768 and 1280px in EN, ES and FR:
- No horizontal scroll.
- Graph tags fit or hide, and the readout works on hover and focus.
- Each graph node links to its entry, and dev nodes open the development roles.
- Experience groups render with translated labels and no empty headings.
- Pipeline rows wrap cleanly.
- Keyboard: Tab from the top reaches the skip link first. Focus is visible on light areas and on both dark panels.
- Reduced motion shows the final graph state.
- The browser console has no hydration warnings.

- [ ] **Step 5: Remove the throwaway script**

Run: `rm scripts/verify-data.mjs && git status --short`
Expected: a clean tree, apart from the untracked `.claude/launch.json`.

- [ ] **Step 6: Report**

Tell Ricardo what shipped and list the open items from spec section 11:
- The inventory repo returns 404 for visitors.
- Optional `GITHUB_TOKEN` in Vercel.
- Formspree ID.
- Availability line wording.
- Reply-time sentence.
- ES/FR proofreading.
- Assessment-repo titles.
- The footer build status appears only after this branch merges and `ci.yml` runs on `main`.
