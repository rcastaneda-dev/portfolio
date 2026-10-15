import type { RoleId } from '../../data/career';
import type { Changes } from '../../data/changelog';

interface Job {
  title: string;
  company: string;
  changes: Changes;
}

// Typed explicitly so a role can have an empty group in any language.
const jobs: Record<RoleId, Job> = {
  willdom: {
    title: 'Senior Quality Assurance Automation Engineer',
    company: 'WillDom',
    changes: {
      added: [
        'Quality ownership of new features from inception through production deployment, as acting QA lead.',
        'Reusable OpenAI Codex skill for incremental test migration, with explorer, worker and reviewer sub-agents for code analysis, implementation and review.',
        'Codex skills that analyze TestRail repositories, find coverage gaps, propose edge-case scenarios and turn them into actionable test items for JIRA tickets.',
        'Automated coverage for complex Stripe payment integrations.',
        'Playwright agents for self-healing tests and faster coverage of new features.',
        'Mobile testing plan for a native iOS app.',
        'Cross-browser and cross-device testing with BrowserStack.',
      ],
      changed: ['Two end-to-end test repositories migrated from Cypress to Playwright to improve CI stability.'],
      fixed: [],
    },
  },
  lumenalta: {
    title: 'Senior QA Automation Engineer',
    company: 'Lumenalta LLC (formerly Clevertech)',
    changes: {
      added: [
        'End-to-end automation platform with Cypress and TypeScript, covering E2E and component tests for business-critical React applications.',
        'Test data strategy, with integrations for conditional testing, data mocking and test filtering.',
        'Contributions to performance testing with Postman, and data consistency checks between new and legacy systems with SQL and Databricks, on a large transportation and logistics platform.',
        'HTML (Mochawesome) and XML (JUnit) reports, aggregated across Docker containers for CI visibility.',
      ],
      changed: [
        'Containerized the framework and moved it into Azure Pipelines with parallel execution.',
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
  avantica: {
    title: 'QA Automation Engineer',
    company: 'Avantica',
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
        'Utility classes that consume, parse and validate RESTful API endpoints for UI and backend tests.',
        'Traceable test plans and test cases aligned with functional and business requirements, for disputes and digital payments platforms.',
      ],
      changed: ['Page Object Model and configuration layers refactored to cut duplication.'],
      fixed: [],
    },
  },
  davivienda: {
    title: 'Java Developer',
    company: 'Davivienda Bank (via Synergyca S.A. de C.V.)',
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
    title: 'Java Developer',
    company: 'Sherwin-Williams de Centroamérica',
    changes: {
      added: [
        'Work across every phase of the software lifecycle, with developers, managers and stakeholders.',
        'RESTful web services, low-latency Java Enterprise Beans and Java web components (managed beans, XHTML/HTML5), with client-side and server-side validation.',
        'Tests for the components I built, with designs kept aligned with specifications.',
      ],
      changed: [],
      fixed: [],
    },
  },
};

export const en = {
  // Navigation and site chrome
  nav: {
    skip: 'Skip to content',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'Résumé',
    menu: 'Menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  // Hero
  hero: {
    title: 'Senior SDET',
    lede: 'AI-first QA engineer with 10+ years in test automation and software development, helping remote teams scale web and mobile testing, stabilize CI/CD and ship with confidence.',
    emailMe: 'Email me',
    downloadResume: 'Download résumé',
    sheet: {
      focus: 'Focus',
      focusItems: ['E2E testing', 'API testing', 'Cross-browser testing', 'CI/CD stabilization'],
      frameworks: 'Frameworks',
      pipelines: 'Pipelines',
      industries: 'Industries',
      industryItems: [
        { name: 'Financial services', detail: 'Chargebacks, dispute management, fraud' },
        { name: 'eCommerce' },
        { name: 'Cybersecurity', detail: 'Vulnerability management' },
        { name: 'Maritime' },
        { name: 'Logistics' },
        { name: 'Sports management' },
      ],
      basedIn: 'Based in',
      basedInValue: 'San Salvador, El Salvador, working remotely',
      languages: 'Languages',
      languageItems: [
        { name: 'English', level: 'full professional' },
        { name: 'Spanish', level: 'native' },
        { name: 'French', level: 'elementary' },
      ],
      status: 'Status',
      statusValue: 'Open to remote roles and consulting',
      readyToMerge: 'Ready to merge',
    },
    graph: {
      label: 'Career branch graph, 2013 to present',
      summary: 'From Java developer to senior SDET, 2013 to present.',
    },
  },

  // About
  about: {
    title: 'About',
    lede: 'I help engineering teams build reliable, scalable software. Over a decade, I have delivered production-critical work in financial services, eCommerce, cybersecurity, maritime systems, and ground transportation and logistics.',
    paragraphs: [
      'I work as a quality engineering consultant with distributed teams, designing, scaling and operating test automation for complex systems. I partner with product and engineering leaders for reliable delivery, fast feedback and confidence in production, without slowing teams down.',
      'My background combines software development, automation architecture and CI/CD enablement. I build automation frameworks from scratch, migrate and modernize legacy test suites and stabilize flaky pipelines, using Playwright, Cypress, TypeScript, Selenium, BrowserStack, Docker and cloud CI/CD platforms.',
      'I work AI-first. I build OpenAI Codex skills, with explorer, worker and reviewer sub-agents, that migrate test suites and find coverage gaps in TestRail, and I use Playwright agents for self-healing tests and Claude Code and Cursor to speed up development. I also explore chaos engineering with Gremlin to strengthen resilience and production readiness.',
    ],
    capabilities: {
      automation: {
        title: 'Automation architecture',
        description: 'Scalable automation frameworks and production-grade CI/CD pipelines.',
      },
      ai: {
        title: 'AI-enabled engineering',
        description: 'AI-assisted workflows that speed up development, testing and debugging.',
      },
      fullstack: {
        title: 'Engineering background',
        description: 'Frontend and backend development experience for end-to-end system validation.',
      },
      crossfunctional: {
        title: 'Cross-functional partner',
        description: 'A bridge between product, engineering and QA that ties quality to business risk.',
      },
    },
  },

  // Experience
  experience: {
    title: 'Experience',
    to: 'to',
    present: 'present',
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

  // Skills
  skills: {
    title: 'Skills',
    categories: {
      programming: 'Languages',
      testing: 'Testing',
      ai: 'AI tools',
      devops: 'DevOps and tools',
      frameworks: 'Frameworks and libraries',
    },
    learningTitle: 'Education and certifications',
    learning: [
      'Universidad Don Bosco, Engineer’s degree in Computer Science (2014 to 2021)',
      'MIT xPRO, Professional Certificate in Cybersecurity (2022 to 2023)',
      'Claude Academy: Claude Code 101',
      'Python Automation and Testing',
      'Behavior-Driven Development',
      'Curso Avanzado de Java SE (advanced Java SE)',
      'CASAS (Proficient Skills)',
    ],
  },

  // Projects
  projects: {
    title: 'Projects',
    code: 'Code',
    liveDemo: 'Live demo',
    ciRuns: 'CI runs',
    newTab: 'opens in a new tab',
    inProgress: 'In progress',
    moreOnGithub: 'More on GitHub',
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
    items: {
      'playwright-assessment': {
        title: 'Playwright/Typescript Assessment for Software Mind',
        description: '4-hour assessment project to evaluate my skills in Playwright and TypeScript for a Senior QA Automation Engineer position',
      },
      'playwright-platzi-challenge2': {
        title: 'Playwright/Typescript E2E Course Challenge for Platzi',
        description: 'Coding challenge for the Course: Automation Testing with Playwright/Typescript I took back on December 2025 from Platzi school',
      },
      inventory: {
        title: 'SPA Inventory with LocalStorage using React + TypeScript',
        description: 'React 19 + TypeScript SPA (CRA) for inventory, sales, and purchases management. Currently adding E2E tests with Playwright (Work In Progress)',
      },
      k6: {
        title: 'K6/Typescript performance tests against PetStore public Server',
        description: 'Implements smoke, load, stress, and spike tests against the PetStore public Server to validate the API performance and reliability.',
      },
      testcafe: {
        title: 'Testcafe/Javascript E2E Coding Challenge for Theorem One',
        description: 'End-to-end automation solution showcasing advanced TestCafe and JavaScript implementation patterns, originally developed as a technical assessment for the company Theorem One I applied to back on June 2021',
      },
      upgrade: {
        title: 'SDET - Coding challenge for Upgrade, Inc.',
        description: 'Java/Selenium/TestNG automation challenge involving UI validation of loan offers and API verification of eligible states',
      },
    },
  },

  // Contact
  contact: {
    title: 'Contact',
    subtitle: 'I’m always interested in discussing new opportunities, innovative projects, or how I can help improve your testing and development processes.',
    details: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'San Salvador, El Salvador',
    },
    form: {
      name: 'Your name',
      email: 'Your email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Message sent. I reply within two business days.',
      error: 'Couldn’t send your message. Try again, or email hi@rcastaneda.dev.',
    },
  },

  // Footer
  footer: {
    rights: 'All rights reserved.',
    built: 'Built with Next.js and TypeScript.',
    support: 'Support my work',
    build: {
      passed: 'Build passing',
      failed: 'Build failing',
      running: 'Build running',
      cancelled: 'Build cancelled',
    },
  },
};

export type Translations = typeof en;
