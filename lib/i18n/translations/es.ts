import type { Translations } from './en';

export const es: Translations = {
  // Navigation and site chrome
  nav: {
    skip: 'Saltar al contenido',
    about: 'Acerca de',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
    resume: 'CV',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
  },

  // Hero
  hero: {
    title: 'Ingeniero senior de automatización QA',
    lede: 'Consultor en ingeniería de calidad que ayuda a equipos remotos a escalar la automatización de pruebas, estabilizar CI/CD y entregar con confianza.',
    emailMe: 'Escríbeme',
    downloadResume: 'Descargar CV',
    sheet: {
      focus: 'Enfoque',
      focusValue: 'Automatización de pruebas E2E y de componentes, estabilización de CI/CD',
      frameworks: 'Frameworks',
      pipelines: 'Pipelines',
      industries: 'Industrias',
      industriesValue: 'Servicios financieros, eCommerce, ciberseguridad, marítimo, logística',
      basedIn: 'Ubicación',
      basedInValue: 'San Salvador, El Salvador, trabajo remoto',
      status: 'Estado',
      statusValue: 'Disponible para roles remotos y consultoría',
    },
    strip: {
      label: 'Trayectoria profesional, 2013 a 2025',
      summary: 'De desarrollador Java a ingeniero senior de automatización QA, 2013 a 2025. Pasa el cursor o enfoca una barra para ver el rol.',
      qa: 'Automatización QA',
      dev: 'Desarrollo',
    },
  },

  // About
  about: {
    title: 'Acerca de',
    lede: 'Ayudo a equipos de ingeniería a construir software confiable y escalable. En más de una década he entregado trabajo crítico para producción en servicios financieros, eCommerce, ciberseguridad, sistemas marítimos, y transporte terrestre y logística.',
    paragraphs: [
      'Trabajo como consultor en ingeniería de calidad con equipos distribuidos: diseño, escalo y opero la automatización de pruebas de sistemas complejos. Colaboro con líderes de producto e ingeniería para lograr entregas confiables, feedback rápido y confianza en producción, sin ralentizar a los equipos.',
      'Mi perfil combina desarrollo de software, arquitectura de automatización y habilitación de CI/CD. Construyo frameworks de automatización desde cero, modernizo suites de pruebas heredadas y estabilizo pipelines inestables con Cypress, Playwright, TypeScript, Selenium, Docker y plataformas de CI/CD en la nube.',
      'Uso herramientas de IA como Cursor y Claude Code para acelerar el desarrollo y el trabajo de QA, y exploro prácticas como la ingeniería del caos con Gremlin para reforzar la resiliencia y la preparación para producción.',
    ],
    capabilities: {
      automation: {
        title: 'Arquitectura de automatización',
        description: 'Frameworks de automatización escalables y pipelines CI/CD de nivel productivo.',
      },
      ai: {
        title: 'Ingeniería con IA',
        description: 'Flujos de trabajo asistidos por IA para acelerar el desarrollo, las pruebas y la depuración.',
      },
      fullstack: {
        title: 'Formación en ingeniería',
        description: 'Experiencia en desarrollo frontend y backend para validar sistemas de extremo a extremo.',
      },
      crossfunctional: {
        title: 'Socio multifuncional',
        description: 'Un puente entre producto, ingeniería y QA que alinea la calidad con el riesgo del negocio.',
      },
    },
  },

  // Experience
  experience: {
    title: 'Experiencia',
    to: 'a',
    showDev: 'Mostrar roles de desarrollo',
    hideDev: 'Ocultar roles de desarrollo',
    workMode: {
      remote: 'Remoto',
      hybrid: 'Híbrido',
      onsite: 'Presencial',
    },
    jobs: {
      lumenalta: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Lumenalta LLC (anteriormente Clevertech)',
        highlights: [
          'Construí una plataforma de automatización end-to-end con Cypress y TypeScript, que cubre pruebas E2E y de componentes para aplicaciones React críticas para el negocio.',
          'Definí la estrategia de datos de prueba y agregué integraciones para pruebas condicionales, simulación de datos y filtrado de pruebas.',
          'Containericé el framework y lo ejecuté en Azure Pipelines con ejecución en paralelo y reportes consolidados. Estabilicé pipelines inestables.',
          'Contribuí a pruebas de rendimiento con Postman y validé la consistencia de datos entre sistemas nuevos y heredados con SQL y Databricks, en una plataforma grande de transporte y logística.',
        ],
      },
      avenueCode: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Avenue Code',
        highlights: [
          'Me uní a un equipo establecido para elevar la madurez de la automatización y la confianza en los releases en un entorno de comercio electrónico de ritmo rápido.',
          'Diseñé, amplié y mantuve suites automatizadas confiables con Playwright y TestCafe.',
          'Estabilicé pipelines de CI en Jenkins para sostener releases consistentes.',
          'Hice triaje de defectos en distintos entornos y apliqué estándares de automatización y calidad de código mediante revisiones de pull request.',
        ],
      },
      encora: {
        title: 'Ingeniero de Automatización QA',
        company: 'Encora (anteriormente Avantica)',
        highlights: [
          'Apoyé la estrategia de calidad de una nueva plataforma de ciberseguridad crítica para producción, trabajando con ingeniería, producto y DevOps.',
          'Diseñé y escalé automatización de UI y API con TestCafe, PyTest y Postman, y refactoricé las suites continuamente para mejorar su confiabilidad y mantenibilidad.',
          'Mantuve planes y casos de prueba, estabilicé y optimicé pipelines de TeamCity, y validé flujos asíncronos entre servicios distribuidos.',
          'Fui capitán de release de QA en despliegues quincenales a producción, aplicando puertas de calidad, e incorporé Docker y Kubernetes para mejorar los entornos de prueba.',
        ],
      },
      pegaDev: {
        title: 'Desarrollador PEGA | Arquitecto de Sistemas PEGA',
        company: 'Rulesware LLC',
        highlights: [
          'Traduje requisitos de negocio en requisitos técnicos funcionales con la metodología SmartBPM de PegaSystems y gestioné las tareas de implementación para entregar a tiempo y dentro del presupuesto.',
          'Resolví problemas técnicos durante todo el ciclo de vida del proyecto, y programé y probé unitariamente funcionalidades con capacidades estándar de Pega según los diseños del Arquitecto de Sistemas Líder.',
        ],
      },
      ruleswareQa: {
        title: 'Ingeniero de Automatización QA',
        company: 'Rulesware LLC',
        highlights: [
          'Construí y mantuve suites de regresión automatizadas con Selenium WebDriver y TestNG para aplicaciones Java y basadas en Pega.',
          'Introduje pruebas basadas en datos y refactoricé el Page Object Model y las capas de configuración para reducir la duplicación.',
          'Redacté planes y casos de prueba trazables, alineados con requisitos funcionales y de negocio, en plataformas de disputas y pagos digitales.',
        ],
      },
      synergyca: {
        title: 'Desarrollador Java',
        company: 'Synergyca SA de CV (Proyecto: Banco Davivienda)',
        highlights: [
          'Desarrollé y probé unitariamente aplicaciones Java para un banco sobre una arquitectura SOA, en múltiples entornos.',
          'Trabajé con líderes de equipo y gerentes de proyecto para analizar requisitos y producir mockups funcionales.',
        ],
      },
      sherwin: {
        title: 'Desarrollador Java EE (Pasantía)',
        company: 'Sherwin Williams',
        highlights: [
          'Participé en todas las fases del ciclo de vida del software junto a desarrolladores, gerentes y stakeholders.',
          'Implementé servicios web RESTful, Enterprise Beans Java de baja latencia y componentes web Java (managed beans, XHTML/HTML5), con validaciones del lado del cliente y del servidor.',
          'Probé los componentes que desarrollé y mantuve los diseños alineados con las especificaciones.',
        ],
      },
    },
  },

  // Skills
  skills: {
    title: 'Habilidades',
    categories: {
      programming: 'Lenguajes',
      testing: 'Frameworks de testing',
      devops: 'DevOps y herramientas',
      frameworks: 'Frameworks y librerías',
    },
    learningTitle: 'Aprendizaje continuo',
    learning: [
      'MIT xPRO, Certificado Profesional en Ciberseguridad (2022 a 2023)',
      'Aprendiendo actualmente: desarrollo con IA usando Cursor y Claude Code',
      'Áreas de enfoque: React moderno, desarrollo full-stack, arquitectura de automatización de pruebas',
    ],
  },

  // Projects
  projects: {
    title: 'Proyectos',
    code: 'Código',
    liveDemo: 'Demo en vivo',
    ciRuns: 'Ejecuciones de CI',
    newTab: 'se abre en una pestaña nueva',
    inProgress: 'En progreso',
    moreOnGithub: 'Más en GitHub',
    items: {
      'playwright-assessment': {
        title: 'Evaluación Playwright/Typescript para Software Mind',
        description: 'Evaluación técnica de 4 horas para la posición de Ingeniero Senior de Automatización QA para la empresa Software Mind',
      },
      'playwright-platzi-challenge2': {
        title: 'Desafío de Código E2E Playwright/Typescript para Platzi',
        description: 'Desafío de automatización end-to-end que muestra patrones avanzados de implementación en Playwright y Typescript, desarrollado originalmente como evaluación técnica para la escuela de Platzi en diciembre de 2025',
      },
      inventory: {
        title: 'SPA de Inventario con LocalStorage usando React + TypeScript',
        description: 'SPA React 19 + TypeScript (CRA) para gestión de inventario, ventas y compras. Agregando pruebas E2E con Playwright (Trabajo en Progreso)',
      },
      k6: {
        title: 'Pruebas de rendimiento K6/Typescript contra el servidor público PetStore',
        description: 'Implementa pruebas de smoke, carga, estrés y spike contra el servidor público PetStore para validar el rendimiento y la confiabilidad de la API.',
      },
      testcafe: {
        title: 'Desafío de Código E2E Testcafe/Javascript para Theorem One',
        description: 'Solución de automatización end-to-end que muestra patrones avanzados de implementación en TestCafe y JavaScript, desarrollada originalmente como evaluación técnica para la empresa Theorem One a la que apliqué en junio de 2021',
      },
      upgrade: {
        title: 'SDET - Desafío de código para Upgrade, Inc.',
        description: 'Desafío de automatización Java/Selenium/TestNG que involucra validación de UI de ofertas de préstamos y verificación de API de estados elegibles',
      },
    },
  },

  // Contact
  contact: {
    title: 'Contacto',
    subtitle: 'Siempre estoy interesado en discutir nuevas oportunidades, proyectos innovadores, o cómo puedo ayudar a mejorar tus procesos de testing y desarrollo.',
    details: {
      email: 'Correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Teléfono',
      location: 'Ubicación',
      locationValue: 'San Salvador, El Salvador',
    },
    form: {
      name: 'Tu nombre',
      email: 'Tu correo',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      sent: 'Mensaje enviado. Respondo en un plazo de dos días hábiles.',
      error: 'No se pudo enviar tu mensaje. Inténtalo de nuevo o escribe a hi@rcastaneda.dev.',
    },
  },

  // Footer
  footer: {
    rights: 'Todos los derechos reservados.',
    built: 'Hecho con Next.js y TypeScript.',
    support: 'Apoya mi trabajo',
  },
};
