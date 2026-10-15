// Language-neutral project data. Titles and descriptions live in the i18n
// dictionaries under `projects.items[id]`.

export type ProjectId =
  | 'playwright-assessment'
  | 'inventory'
  | 'playwright-platzi-challenge2'
  | 'k6'
  | 'testcafe'
  | 'upgrade';

export interface Project {
  id: ProjectId;
  year: string;
  stack: string[];
  codeUrl: string;
  /** GitHub repo whose Actions runs appear in a pipeline panel, as owner/name. */
  ciRepo?: string;
  /** Second link, when there is one. `ci` points at workflow runs, not a deployed app. */
  live?: { url: string; kind: 'demo' | 'ci' };
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: 'playwright-assessment',
    year: '2026',
    stack: ['TypeScript', 'Playwright'],
    codeUrl: 'https://github.com/rcastaneda-dev/playwright-assessment',
  },
  {
    id: 'inventory',
    year: '2025',
    stack: ['React 19', 'TypeScript', 'Playwright'],
    codeUrl: 'https://github.com/rcastaneda-dev/nanis-essentials-inventory',
    live: { url: 'https://nanis-essentials-inventory.vercel.app', kind: 'demo' },
    inProgress: true,
  },
  {
    id: 'playwright-platzi-challenge2',
    year: '2025',
    stack: ['Playwright', 'TypeScript', 'Node.js', 'GitHub'],
    codeUrl:
      'https://github.com/rcastaneda-dev/curso-automatizacion-pruebas-playwright-reto2/tree/fix/existing-docs-tests',
  },
  {
    id: 'k6',
    year: '2025',
    stack: ['K6', 'TypeScript', 'Node.js', 'GitHub'],
    codeUrl: 'https://github.com/rcastaneda-dev/k6-typescript-portfolio',
    ciRepo: 'rcastaneda-dev/k6-typescript-portfolio',
    live: {
      url: 'https://github.com/rcastaneda-dev/k6-typescript-portfolio/actions',
      kind: 'ci',
    },
  },
  {
    id: 'testcafe',
    year: '2021',
    stack: ['JavaScript', 'Node.js', 'TestCafe', 'GitHub'],
    codeUrl: 'https://github.com/rcastaneda-dev/AutomationPractice-Theorem',
    ciRepo: 'rcastaneda-dev/AutomationPractice-Theorem',
  },
  {
    id: 'upgrade',
    year: '2019',
    stack: ['Java', 'Selenium', 'TestNG', 'Maven', 'RestAssured'],
    codeUrl: 'https://github.com/rcastaneda-dev/AutomationChallenge-UpgradeInc',
  },
];
