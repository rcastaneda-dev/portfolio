// Facts that read the same in every language: contact details, links and the
// tool lists shown in the hero datasheet and the skills section.

export const profile = {
  name: 'Ricardo Castaneda',
  email: 'hi@rcastaneda.dev',
  phone: '+503 7740-7075',
  phoneHref: 'tel:+50377407075',
  linkedin: 'https://www.linkedin.com/in/rcastaneda-dev/',
  github: 'https://github.com/rcastaneda-dev',
  resume: '/resume.pdf',
  resumeFileName: 'Ricardo_Castaneda_Resume.pdf',
  support: 'https://www.buymeacoffee.com/rcastaneda.dev',
  // Web3Forms access key for the contact form. It is public by design: every
  // visitor's browser sends it, and it only lets the form deliver to this inbox.
  // Leave it empty to replace the form with an "Email me" button.
  web3formsKey: 'cef9d5d5-9c13-450f-ac93-f5deadfadadf',
  frameworks: ['Playwright', 'Cypress', 'TestCafe', 'Selenium'],
  pipelines: ['Azure Pipelines', 'Jenkins', 'TeamCity', 'GitHub Actions'],
};

export const skillGroups = {
  programming: ['TypeScript', 'JavaScript', 'Java', 'Python'],
  testing: ['Playwright', 'Cypress', 'TestCafe', 'Selenium', 'PyTest', 'Jest', 'K6', 'BrowserStack', 'Mobile testing (iOS)'],
  devops: ['Docker', 'Azure DevOps', 'Jenkins', 'Git and GitHub', 'TeamCity', 'OpenAI Codex', 'Claude Code'],
  frameworks: ['Node.js', 'REST APIs', 'React and Next.js', 'Express'],
} as const;

export type SkillGroupId = keyof typeof skillGroups;
