export const en = {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },

  // Hero
  hero: {
    roles: [
      'Senior QA Automation Engineer',
      'Senior SDET',
      'Former Java Developer',
      'Full Stack Developer Enthusiast',
      'Test Framework Architect',
      'CI/CD Pipeline Expert',
    ],
    tagline: '10+ years bridging development and testing to deliver high-quality solutions across financial services, eCommerce, cybersecurity, maritime and ground transportation logistics.',
    downloadResume: 'Download Resume',
  },

  // About
  about: {
    title: 'About',
    titleHighlight: 'Me',
    subtitle: 'Bridging Development & Quality Assurance',
    intro: "I'm a seasoned IT professional with over a decade of experience delivering high-quality solutions across multiple industries, including:",
    industries: [
      'Financial Services (Disputes/Claims, Payments, Chargebacks)',
      'eCommerce',
      'Cybersecurity',
      'Maritime',
      'Ground Transportation & Logistics',
    ],
    description1: 'As a Senior QA Automation Engineer with a strong development background, I bring a cross-functional perspective to every project. My core expertise is in JavaScript/TypeScript and Java, with additional experience in Python, and I work confidently across modern tools, frameworks, and architectural patterns.',
    description2: "Currently, I'm embracing AI-powered tools like Cursor and Claude Code to enhance QA productivity and explore modern development paradigms. I'm also taking the time to explore chaos engineering tools like Gremlin to further strengthen system resilience.",
    features: {
      automation: {
        title: 'Automation Expert',
        description: 'Specialized in building robust test automation frameworks and CI/CD pipelines',
      },
      ai: {
        title: 'AI-Powered Workflow',
        description: 'Leveraging modern AI tools to accelerate development and testing',
      },
      fullstack: {
        title: 'Full Stack Capable',
        description: 'Proficient in both frontend and backend development with modern frameworks',
      },
      crossfunctional: {
        title: 'Cross-Functional',
        description: 'Bridge between development and QA teams to ensure quality delivery',
      },
    },
    techStack: 'Tech Stack',
  },

  // Experience
  experience: {
    title: 'Work',
    titleHighlight: 'Experience',
    qaToggle: 'QA Automation Experience',
    devToggle: 'Developer Experience',
    present: 'Present',
    jobs: {
      lumenalta: {
        title: 'Senior QA Automation Engineer',
        company: 'Lumenalta LLC (formerly Clevertech)',
        description: [
          'Developed robust automation framework using Cypress and TypeScript',
          'Configured and optimized E2E pipeline in Azure DevOps',
          'Implemented Docker containerization for parallel test execution',
          'Led E2E coverage monitoring and test delegation across team',
        ],
      },
      avenueCode: {
        title: 'Senior QA Automation Engineer',
        company: 'Avenue Code',
        description: [
          'Developed API and E2E test cases using TestCafe framework',
          'Contributed to PyTest framework maintenance',
          'Enhanced and refactored E2E automation in Jenkins pipeline',
          'Triaged and validated production bugs',
        ],
      },
      encora: {
        title: 'QA Automation Engineer',
        company: 'Encora (formerly Avantica)',
        description: [
          'Served as QA Release Captain for bi-weekly production releases',
          'Developed E2E automation tests using TestCafe',
          'Managed test cases in TestRail',
          'Monitored TeamCity CI/CD pipeline health',
        ],
      },
      pegaDev: {
        title: 'PEGA Developer | PEGA System Architect',
        company: 'Rulesware LLC',
        description: [
          'Ability to translate complex business requirement into functional technical requirements using PegaSystems SmartBPM methodology',
          'Manage technical implementation tasks to ensure work is delivered on-time and on-budget',
          'Effectively troubleshoot technical issues as they arise during the project lifecycle',
          'Responsible for Coding and unit testing using Pega OOTB features based on the design provided by the Lead System Architect',
        ],
      },
      ruleswareQa: {
        title: 'QA Automation Engineer',
        company: 'Rulesware LLC',
        description: [
          'Developed automation tests using Selenium WebDriver and TestNG',
          'Implemented data-driven test scripts with Page Object Model',
          'Created utility classes for RESTful API testing',
          'Executed and reported test plans progress',
        ],
      },
      synergyca: {
        title: 'Java Developer',
        company: 'Synergyca SA de CV (Project: Davivienda Bank)',
        description: [
          'Developed services following SOA (Service-Oriented Architecture) principles',
          'Analyzed user requirements and delivered secure, scalable solutions',
          'Provided ongoing application development support',
          'Wrote, tested, and maintained application code',
          'Improved and enhanced existing UI/UX',
          'Created mockups and UI prototypes',
        ],
      },
      sherwin: {
        title: 'Java EE Developer (Internship)',
        company: 'Sherwin Williams',
        description: [
          'Collaborated with developers, managers, and stakeholders to define software requirements',
          'Participated in all phases of the software development lifecycle',
          'Designed and implemented RESTful web services',
          'Built low-latency, scalable, and reliable Java Enterprise Beans',
          'Developed Java web components (managed beans, XHTML/HTML5)',
          'Ensured all designs aligned with specifications and project standards',
          'Performed thorough testing of developed components',
          'Implemented client-side and server-side validations',
        ],
      },
    },
  },

  // Skills
  skills: {
    title: 'Technical',
    titleHighlight: 'Skills',
    categories: {
      programming: 'Programming Languages',
      testing: 'Testing Frameworks',
      devops: 'DevOps & Tools',
      frameworks: 'Frameworks & Libraries',
    },
    continuousLearning: 'Continuous',
    continuousLearningHighlight: 'Learning',
    certifications: [
      'MIT xPRO - Professional Certificate in Cybersecurity (2022-2023)',
      'Currently learning: AI-powered development with Cursor & Claude Code',
      'Focus areas: Modern React, Full-stack development, Test automation architecture',
    ],
  },

  // Projects
  projects: {
    title: 'Featured',
    titleHighlight: 'Projects',
    filterAll: 'All',
    filterDev: 'Dev',
    filterAutomation: 'Automation',
    viewCode: 'View Code',
    liveDemo: 'Live Demo',
    viewMoreGithub: 'View More on GitHub',
    automationComplete: 'Automation Complete',
    automationPending: 'Automation Pending',
    items: {
      inventory: {
        title: 'SPA Inventory with LocalStorage using React + TypeScript',
        description: 'React 19 + TypeScript SPA (CRA) for inventory, sales, and purchases management. Currently migrating from localStorage to IndexedDB (Dexie) and adding E2E tests with Playwright (Work In Progress)',
        highlights: [
          'Implemented to work with LocalStorage',
          'Generate CSV reports and download inventory',
          'Playwright E2E + React Testing Library',
          'Netlify deployment with Github Actions workflow',
        ],
      },
      k6: {
        title: 'K6/Typescript performance tests against PetStore public Server',
        description: 'Implements smoke, load, stress, and spike tests against the PetStore public Server to validate the API performance and reliability.',
        highlights: [
          'Smoke, load, stress, and spike tests',
          'Github action to manually trigger the tests',
        ],
      },
      testcafe: {
        title: 'Testcafe/Javascript E2E Coding Challenge for Theorem One',
        description: 'End-to-end automation solution showcasing advanced TestCafe and JavaScript implementation patterns, originally developed as a technical assessment for the company Theorem One I applied to back on June 2021',
        highlights: [
          'Automated 5+ E2E endpoints',
          'Data-driven test execution',
          'Faker.js for data generation',
        ],
      },
      upgrade: {
        title: 'SDET - Coding challenge for Upgrade, Inc.',
        description: 'Java/Selenium/TestNG automation challenge involving UI validation of loan offers and API verification of eligible states',
        highlights: [
          'UI Automation: Loan offer validation & borrower flow',
          'API Automation: State eligibility verification',
          'Page Object Model design pattern',
        ],
      },
    },
  },

  // Contact
  contact: {
    title: 'Get In',
    titleHighlight: 'Touch',
    subtitle: "I'm always interested in discussing new opportunities, innovative projects, or how I can help improve your testing and development processes.",
    letsConnect: "Let's Connect",
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    form: {
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      email: 'Your Email',
      emailPlaceholder: 'john@example.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
    },
  },

  // Footer
  footer: {
    builtWith: 'Built with',
    using: 'using Next.js & TypeScript',
    rights: 'All rights reserved.',
  },

  // Loading
  loading: 'Loading Portfolio...',
};

export type Translations = typeof en;

