// Language-neutral career data. Titles, companies and changelog entries live in
// the i18n dictionaries under `experience.jobs[id]`.

export type RoleId =
  | 'willdom'
  | 'lumenalta'
  | 'avenueCode'
  | 'avantica'
  | 'ruleswareQa'
  | 'pegaDev'
  | 'davivienda'
  | 'sherwin';

export type EmployerId =
  | 'sherwin'
  | 'davivienda'
  | 'rulesware'
  | 'avantica'
  | 'avenueCode'
  | 'lumenalta'
  | 'willdom';

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
  /** Last month worked, as YYYY-MM, or null for the current role. */
  end: string | null;
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
    id: 'willdom',
    employer: 'willdom',
    kind: 'qa',
    shortName: 'WillDom',
    start: '2026-03',
    end: null,
    workMode: 'remote',
    stack: ['Playwright', 'Cypress', 'TypeScript', 'OpenAI Codex', 'BrowserStack', 'Stripe', 'TestRail', 'iOS'],
  },
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
    id: 'avantica',
    employer: 'avantica',
    kind: 'qa',
    shortName: 'Avantica',
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
    id: 'davivienda',
    employer: 'davivienda',
    kind: 'dev',
    shortName: 'Davivienda',
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

/**
 * The month a current role runs to. Next inlines BUILD_MONTH at build time, so
 * the server-rendered page and the browser agree on it.
 */
export const AS_OF = process.env.BUILD_MONTH ?? new Date().toISOString().slice(0, 7);

/** Last month of a role, counting a current role up to AS_OF. */
export const endMonth = (role: Role): string => role.end ?? AS_OF;

/** Display form used in the changelog and the graph readout: MM/YYYY. */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split('-');
  return `${month}/${year}`;
}

/** A role's dates in the reader's language: "05/2023 to 11/2025", or "03/2026 to present". */
export function formatSpan(role: Role, to: string, present: string): string {
  return `${formatMonth(role.start)} ${to} ${role.end ? formatMonth(role.end) : present}`;
}

/** Where a role was worked, in the reader's language: "Remote", or "El Salvador, on-site". */
export function formatPlace(role: Role, mode: string): string {
  return role.country ? `${role.country}, ${mode.toLowerCase()}` : mode;
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
