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
      'Expert in CI/CD Pipelines',
      'Consultant in Quality Engineering',
    ],
    tagline: 'Senior Quality Engineering Consultant helping remote teams scale automation, stabilize CI/CD, and ship with confidence.',
    downloadResume: 'Download Resume',
  },

  // About
  about: {
    title: 'About',
    titleHighlight: 'Me',
    subtitle: 'Engineering Quality into Scalable Software Systems',

    intro: "I help engineering teams build reliable and scalable software. With over a decade of experience, I’ve helped teams deliver production-critical solutions across complex and regulated industries such as:",
    
    industries: [
      'Financial Services (Disputes, Claims, Payments, Chargebacks)',
      'eCommerce & Retail',
      'Cybersecurity',
      'Maritime Systems',
      'Ground Transportation & Logistics',
    ],
    
    description1: "I’m a Senior Quality Engineering Consultant helping distributed teams design, scale, and operationalize test automation for complex software systems. I partner with product and engineering leaders to enable reliable delivery, fast feedback, and confidence in production—without slowing teams down.\n\nMy background combines hands-on software development, automation architecture, and CI/CD enablement. I specialize in building automation frameworks from scratch, modernizing legacy test suites, stabilizing flaky pipelines, and embedding quality deeply into development workflows using tools such as Cypress, Playwright, TypeScript, Selenium,Docker, and cloud-based CI/CD platforms.",
    
    description2: "I actively adopt AI-powered tools like Cursor and Claude Code to improve development and QA productivity, while exploring modern engineering practices such as chaos engineering with tools like Gremlin to proactively strengthen system resilience and production readiness.",
    
    features: {
      automation: {
        title: 'Automation Architecture',
        description: 'Design and implementation of scalable automation frameworks and production-grade CI/CD pipelines',
      },
      ai: {
        title: 'AI-Enabled Engineering',
        description: 'Applying AI-assisted workflows to accelerate development, testing, and debugging',
      },
      fullstack: {
        title: 'Engineering Background',
        description: 'Strong foundation in both frontend and backend development for end-to-end system validation',
      },
      crossfunctional: {
        title: 'Cross-Functional Partner',
        description: 'Trusted bridge between product, engineering, and QA teams to align quality with business risk',
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
        description: 'Designed and delivered a scalable end-to-end automation platform using Cypress and TypeScript, enabling reliable E2E and component testing for business-critical React applications. Established a robust test data strategy and extended the framework with targeted integrations for conditional testing, data mocking, and test filtering to improve signal and maintainability. \n\n Partnered with product and QA stakeholders to define risk-focused test scenarios and validation strategies. Containerized and integrated the framework into Azure Pipelines with parallel execution and consolidated reporting, significantly improving CI reliability and feedback speed. Stabilized flaky pipelines, contributed to performance testing with Postman, and validated data consistency across new and legacy systems using SQL and Databricks within a large-scale transportation and logistics platform.' 
      },
        avenueCode: {
        title: 'Senior QA Automation Engineer',
        company: 'Avenue Code',
        description: 'Joined an established engineering team to accelerate automation maturity and improve release confidence within a fast-paced e-commerce environment. Designed, enhanced, and maintained reliable automated test suites using Playwright and TestCafe, while stabilizing Jenkins-based CI pipelines to support consistent, high-quality releases. Acted as a quality partner across teams by triaging defects across environments and enforcing automation and code quality standards through rigorous pull-request reviews.',
      },
      encora: {
        title: 'QA Automation Engineer',
        company: 'Encora (formerly Avantica)',
        description: 'Partnered with a fast-growing engineering organization to support the quality strategy for a new, production-critical platform. Collaborated closely with engineering, product, and DevOps to align testing with system architecture and business risk. Designed and scaled UI and API automation using TestCafe, PyTest, and Postman, while continuously refactoring automation suites to improve reliability and maintainability. \n\nCreated and maintained test plans and test cases to ensure coverage and traceability for new and existing features. Monitored, stabilized, and optimized TeamCity CI pipelines to deliver fast, reliable automated feedback, and validated complex asynchronous workflows across distributed services. Served as QA Release Captain for bi-weekly production deployments, coordinating stakeholders and enforcing quality gates. Evaluated and adopted modern DevOps practices, including Docker and Kubernetes, to improve test environments and delivery reliability within a cybersecurity platform.' 
},
      pegaDev: {
        title: 'PEGA Developer | PEGA System Architect',
        company: 'Rulesware LLC',
        description: 'Translated complex business requirements into functional technical requirements using PegaSystems SmartBPM methodology while managing technical implementation tasks to ensure on-time and on-budget delivery. Effectively troubleshot technical issues throughout the project lifecycle and was responsible for coding and unit testing using Pega OOTB features based on designs provided by the Lead System Architect.',
      },
      ruleswareQa: {
        title: 'QA Automation Engineer',
        company: 'Rulesware LLC',
        description: 'Designed and maintained reliable automated regression suites using Selenium WebDriver and TestNG for Java and Pega-based applications, ensuring consistent coverage of critical business flows. Implemented scalable, data-driven testing strategies and refactored Page Object Model and configuration layers to reduce duplication and improve maintainability. Created clear, traceable test plans and test cases aligned with functional and business requirements to support high-quality delivery within disputes and digital payments platforms.' 
      },
      synergyca: {
        title: 'Java Developer',
        company: 'Synergyca SA de CV (Project: Davivienda Bank)',
        description: 'Provided end-to-end application development services within a SOA-based architecture, contributing to the design, implementation, and support of solutions in the banking and financial services domain. Developed and unit-tested <strong>Java</strong> applications across multiple environments, while working closely with team leads and project managers to analyze requirements, produce functional mockups, and deliver high-quality, reliable features aligned with business needs.',
      },
      sherwin: {
        title: 'Java EE Developer (Internship)',
        company: 'Sherwin Williams',
        description: 'Collaborated with developers, managers, and stakeholders to define software requirements while participating in all phases of the software development lifecycle. Designed and implemented RESTful web services, built low-latency, scalable, and reliable <strong>Java</strong> Enterprise Beans, and developed <strong>Java</strong> web components including managed beans and XHTML/HTML5 interfaces. Ensured all designs aligned with specifications and project standards, performed thorough testing of developed components, and implemented both client-side and server-side validations.',
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
    title: 'Get In',
    titleHighlight: 'Touch',
    subtitle: "I'm always interested in discussing new opportunities, innovative projects, or how I can help improve your testing and development processes.",
    letsConnect: "Let's Connect",
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    supportMessage: 'If you find my work helpful, consider supporting me!',
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

