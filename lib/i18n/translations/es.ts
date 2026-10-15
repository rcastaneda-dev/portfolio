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
    title: 'SDET senior',
    lede: 'Ingeniero QA AI-first con más de 10 años en automatización de pruebas y desarrollo de software, que ayuda a equipos remotos a escalar las pruebas web y móviles, estabilizar CI/CD y entregar con confianza.',
    emailMe: 'Escríbeme',
    downloadResume: 'Descargar CV',
    sheet: {
      focus: 'Enfoque',
      focusValue: 'Pruebas E2E, de API y cross-browser, estabilización de CI/CD',
      frameworks: 'Frameworks',
      pipelines: 'Pipelines',
      industries: 'Industrias',
      industriesValue: 'Servicios financieros (contracargos, gestión de disputas, fraude), eCommerce, ciberseguridad (gestión de vulnerabilidades), marítimo, logística, gestión deportiva',
      basedIn: 'Ubicación',
      basedInValue: 'San Salvador, El Salvador, trabajo remoto',
      languages: 'Idiomas',
      languagesValue: 'Inglés (profesional completo), español (nativo), francés (básico)',
      status: 'Estado',
      statusValue: 'Disponible para roles remotos y consultoría',
    },
    graph: {
      label: 'Gráfico de ramas de la trayectoria, de 2013 a la actualidad',
      summary: 'De desarrollador Java a SDET senior, de 2013 a la actualidad.',
    },
  },

  // About
  about: {
    title: 'Acerca de',
    lede: 'Ayudo a equipos de ingeniería a construir software confiable y escalable. En más de una década he entregado trabajo crítico para producción en servicios financieros, eCommerce, ciberseguridad, sistemas marítimos, y transporte terrestre y logística.',
    paragraphs: [
      'Trabajo como consultor en ingeniería de calidad con equipos distribuidos: diseño, escalo y opero la automatización de pruebas de sistemas complejos. Colaboro con líderes de producto e ingeniería para lograr entregas confiables, feedback rápido y confianza en producción, sin ralentizar a los equipos.',
      'Mi perfil combina desarrollo de software, arquitectura de automatización y habilitación de CI/CD. Construyo frameworks de automatización desde cero, migro y modernizo suites de pruebas heredadas y estabilizo pipelines inestables con Playwright, Cypress, TypeScript, Selenium, BrowserStack, Docker y plataformas de CI/CD en la nube.',
      'Trabajo con un enfoque AI-first. Creo skills de OpenAI Codex, con subagentes explorador, trabajador y revisor, que migran suites de pruebas y detectan brechas de cobertura en TestRail, y uso agentes de Playwright para pruebas autorreparables, y Claude Code y Cursor para acelerar el desarrollo. También exploro la ingeniería del caos con Gremlin para reforzar la resiliencia y la preparación para producción.',
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
    present: 'la actualidad',
    showDev: 'Mostrar roles de desarrollo',
    hideDev: 'Ocultar roles de desarrollo',
    groups: {
      added: 'Añadido',
      changed: 'Cambiado',
      fixed: 'Corregido',
    },
    workMode: {
      remote: 'Remoto',
      hybrid: 'Híbrido',
      onsite: 'Presencial',
    },
    jobs: {
      willdom: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'WillDom',
        changes: {
          added: [
            'Responsabilidad de calidad de nuevas funcionalidades, desde su concepción hasta el despliegue en producción, como líder de QA interino.',
            'Skill reutilizable de OpenAI Codex para migrar pruebas de forma incremental, con subagentes explorador, trabajador y revisor para el análisis, la implementación y la revisión del código.',
            'Skills de Codex que analizan repositorios de TestRail, detectan brechas de cobertura, proponen escenarios límite y los convierten en tareas de prueba accionables para tickets de JIRA.',
            'Cobertura automatizada para integraciones de pago complejas con Stripe.',
            'Agentes de Playwright para pruebas autorreparables y una cobertura más rápida de nuevas funcionalidades.',
            'Plan de pruebas móviles para una app nativa de iOS.',
            'Pruebas en distintos navegadores y dispositivos con BrowserStack.',
          ],
          changed: ['Dos repositorios de pruebas end-to-end migrados de Cypress a Playwright para mejorar la estabilidad del CI.'],
          fixed: [],
        },
      },
      lumenalta: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Lumenalta LLC (anteriormente Clevertech)',
        changes: {
          added: [
            'Plataforma de automatización end-to-end con Cypress y TypeScript, que cubre pruebas E2E y de componentes para aplicaciones React críticas para el negocio.',
            'Estrategia de datos de prueba, con integraciones para pruebas condicionales, simulación de datos y filtrado de pruebas.',
            'Contribuciones a pruebas de rendimiento con Postman y verificación de la consistencia de datos entre sistemas nuevos y heredados con SQL y Databricks, en una plataforma grande de transporte y logística.',
            'Reportes HTML (Mochawesome) y XML (JUnit), agregados desde varios contenedores Docker para dar visibilidad en el CI.',
          ],
          changed: [
            'Framework containerizado y trasladado a Azure Pipelines con ejecución en paralelo.',
          ],
          fixed: ['Pipelines inestables estabilizados.'],
        },
      },
      avenueCode: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Avenue Code',
        changes: {
          added: [
            'Suites automatizadas confiables con Playwright y TestCafe, que elevaron la madurez de la automatización y la confianza en los releases de un equipo de comercio electrónico establecido.',
          ],
          changed: ['Estándares de automatización y calidad de código aplicados mediante revisiones de pull request.'],
          fixed: [
            'Pipelines de CI en Jenkins estabilizados para sostener releases consistentes.',
            'Triaje de defectos en distintos entornos.',
          ],
        },
      },
      avantica: {
        title: 'Ingeniero de Automatización QA',
        company: 'Avantica',
        changes: {
          added: [
            'Automatización de UI y API con TestCafe, PyTest y Postman para una nueva plataforma de ciberseguridad crítica para producción, junto a ingeniería, producto y DevOps.',
            'Planes y casos de prueba para asegurar cobertura y trazabilidad.',
            'Validación de flujos asíncronos entre servicios distribuidos.',
            'Puertas de calidad para despliegues quincenales a producción, como capitán de release de QA.',
            'Docker y Kubernetes, incorporados para mejorar los entornos de prueba.',
          ],
          changed: [
            'Suites de automatización refactorizadas continuamente para mejorar su confiabilidad y mantenibilidad.',
            'Pipelines de TeamCity optimizados para un feedback rápido y confiable.',
          ],
          fixed: ['Pipelines de TeamCity estabilizados.'],
        },
      },
      pegaDev: {
        title: 'Desarrollador PEGA | Arquitecto de Sistemas PEGA',
        company: 'Rulesware LLC',
        changes: {
          added: [
            'Requisitos técnicos funcionales a partir de requisitos de negocio, con la metodología SmartBPM de PegaSystems, y tareas de implementación gestionadas para entregar a tiempo y dentro del presupuesto.',
            'Funcionalidades programadas y probadas unitariamente con capacidades estándar de Pega, según los diseños del Arquitecto de Sistemas Líder.',
          ],
          changed: [],
          fixed: ['Problemas técnicos resueltos durante todo el ciclo de vida del proyecto.'],
        },
      },
      ruleswareQa: {
        title: 'Ingeniero de Automatización QA',
        company: 'Rulesware LLC',
        changes: {
          added: [
            'Suites de regresión automatizadas con Selenium WebDriver y TestNG para aplicaciones Java y basadas en Pega.',
            'Pruebas basadas en datos.',
            'Clases utilitarias que consumen, analizan y validan endpoints de APIs RESTful para pruebas de UI y de backend.',
            'Planes y casos de prueba trazables, alineados con requisitos funcionales y de negocio, para plataformas de disputas y pagos digitales.',
          ],
          changed: ['Page Object Model y capas de configuración refactorizados para reducir la duplicación.'],
          fixed: [],
        },
      },
      davivienda: {
        title: 'Desarrollador Java',
        company: 'Banco Davivienda (a través de Synergyca S.A. de C.V.)',
        changes: {
          added: [
            'Aplicaciones Java para un banco sobre una arquitectura SOA, desarrolladas y probadas unitariamente en múltiples entornos.',
            'Mockups funcionales, elaborados con líderes de equipo y gerentes de proyecto a partir del análisis de requisitos.',
          ],
          changed: [],
          fixed: [],
        },
      },
      sherwin: {
        title: 'Desarrollador Java',
        company: 'Sherwin-Williams de Centroamérica',
        changes: {
          added: [
            'Participación en todas las fases del ciclo de vida del software, junto a desarrolladores, gerentes y stakeholders.',
            'Servicios web RESTful, Enterprise Beans Java de baja latencia y componentes web Java (managed beans, XHTML/HTML5), con validaciones del lado del cliente y del servidor.',
            'Pruebas de los componentes que desarrollé, con los diseños alineados con las especificaciones.',
          ],
          changed: [],
          fixed: [],
        },
      },
    },
  },

  // Skills
  skills: {
    title: 'Habilidades',
    categories: {
      programming: 'Lenguajes',
      testing: 'Pruebas',
      devops: 'DevOps y herramientas',
      frameworks: 'Frameworks y librerías',
    },
    learningTitle: 'Formación y certificaciones',
    learning: [
      'Universidad Don Bosco, Ingeniería en Ciencias de la Computación (2014 a 2021)',
      'MIT xPRO, Certificado Profesional en Ciberseguridad (2022 a 2023)',
      'Claude Academy: Claude Code 101',
      'Python Automation and Testing',
      'Behavior-Driven Development',
      'Curso Avanzado de Java SE',
      'CASAS (Proficient Skills)',
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
    pipeline: {
      label: 'Ejecuciones del pipeline',
      status: {
        passed: 'Exitosa',
        failed: 'Fallida',
        running: 'En curso',
        cancelled: 'Cancelada',
      },
      fetched: 'De GitHub Actions, obtenido el',
      snapshot: 'Instantánea guardada de GitHub Actions,',
    },
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
    build: {
      passed: 'Build exitoso',
      failed: 'Build fallido',
      running: 'Build en curso',
      cancelled: 'Build cancelado',
    },
  },
};
