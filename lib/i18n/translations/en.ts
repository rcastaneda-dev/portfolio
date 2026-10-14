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
    title: 'Senior QA automation engineer',
    lede: 'Quality engineering consultant helping remote teams scale test automation, stabilize CI/CD and ship with confidence.',
    emailMe: 'Email me',
    downloadResume: 'Download résumé',
    sheet: {
      focus: 'Focus',
      focusValue: 'E2E and component test automation, CI/CD stabilization',
      frameworks: 'Frameworks',
      pipelines: 'Pipelines',
      industries: 'Industries',
      industriesValue: 'Financial services, eCommerce, cybersecurity, maritime, logistics',
      basedIn: 'Based in',
      basedInValue: 'San Salvador, El Salvador, working remotely',
      status: 'Status',
      statusValue: 'Open to remote roles and consulting',
    },
    strip: {
      label: 'Career timeline, 2013 to 2025',
      summary: 'From Java developer to senior QA automation engineer, 2013 to 2025. Hover or focus a bar for the role.',
      qa: 'QA automation',
      dev: 'Development',
    },
  },

  // About
  about: {
    title: 'About',
    lede: 'I help engineering teams build reliable, scalable software. Over a decade, I have delivered production-critical work in financial services, eCommerce, cybersecurity, maritime systems, and ground transportation and logistics.',
    paragraphs: [
      'I work as a quality engineering consultant with distributed teams, designing, scaling and operating test automation for complex systems. I partner with product and engineering leaders for reliable delivery, fast feedback and confidence in production, without slowing teams down.',
      'My background combines software development, automation architecture and CI/CD enablement. I build automation frameworks from scratch, modernize legacy test suites and stabilize flaky pipelines, using Cypress, Playwright, TypeScript, Selenium, Docker and cloud CI/CD platforms.',
      'I use AI tools such as Cursor and Claude Code to speed up development and QA work, and I explore practices like chaos engineering with Gremlin to strengthen resilience and production readiness.',
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
      testing: 'Testing frameworks',
      devops: 'DevOps and tools',
      frameworks: 'Frameworks and libraries',
    },
    learningTitle: 'Continuous learning',
    learning: [
      'MIT xPRO, Professional Certificate in Cybersecurity (2022 to 2023)',
      'Currently learning: AI-powered development with Cursor and Claude Code',
      'Focus areas: modern React, full-stack development, test automation architecture',
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
  },
};

export type Translations = typeof en;
