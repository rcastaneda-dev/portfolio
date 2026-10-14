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
