// Language-neutral career data. Titles, companies and highlights live in the
// i18n dictionaries under `experience.jobs[id]`.

export type RoleId =
  | 'lumenalta'
  | 'avenueCode'
  | 'encora'
  | 'ruleswareQa'
  | 'pegaDev'
  | 'synergyca'
  | 'sherwin';

export type RoleKind = 'qa' | 'dev';
export type WorkMode = 'remote' | 'hybrid' | 'onsite';

export interface Role {
  id: RoleId;
  kind: RoleKind;
  /** Short company name used inside timeline bars and the readout. */
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

// Newest first, which is the order the ledger reads in.
export const roles: Role[] = [
  {
    id: 'lumenalta',
    kind: 'qa',
    shortName: 'Lumenalta',
    start: '2023-05',
    end: '2025-11',
    workMode: 'remote',
    stack: ['Cypress', 'TypeScript', 'Azure DevOps', 'Docker', 'Postman', 'SQL', 'Nx', 'React Testing Library'],
  },
  {
    id: 'avenueCode',
    kind: 'qa',
    shortName: 'Avenue Code',
    start: '2022-03',
    end: '2023-02',
    workMode: 'remote',
    stack: ['Playwright', 'TestCafe', 'TypeScript', 'Node.js', 'Jenkins', 'GitHub Actions', 'API testing', 'JIRA'],
  },
  {
    id: 'encora',
    kind: 'qa',
    shortName: 'Encora',
    start: '2019-11',
    end: '2022-03',
    workMode: 'remote',
    stack: ['TestCafe', 'JavaScript', 'Python', 'PyTest', 'Postman', 'Docker', 'Kubernetes', 'TeamCity'],
  },
  {
    id: 'pegaDev',
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

/** Display form used in the ledger and the strip readout: MM/YYYY. */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split('-');
  return `${month}/${year}`;
}
