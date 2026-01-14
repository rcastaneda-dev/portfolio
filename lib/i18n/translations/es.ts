import type { Translations } from './en';

export const es: Translations = {
  // Navigation
  nav: {
    home: 'Inicio',
    about: 'Acerca de',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
  },

  // Hero
  hero: {
    roles: [
      'Ingeniero Senior de Automatización QA',
      'SDET Senior',
      'Ex Desarrollador Java',
      'Entusiasta del Desarrollo Full Stack',
      'Arquitecto de Frameworks de Testing',
      'Experto en Pipelines CI/CD',
    ],
    tagline: 'Más de 10 años conectando desarrollo y testing para entregar soluciones de alta calidad en servicios financieros, eCommerce, ciberseguridad, marítimo y logística de transporte terrestre.',
    downloadResume: 'Descargar CV',
  },

  // About
  about: {
    title: 'Acerca de',
    titleHighlight: 'Mí',
    subtitle: 'Conectando Desarrollo y Aseguramiento de Calidad',
    intro: 'Soy un profesional de TI experimentado con más de una década de experiencia entregando soluciones de alta calidad en múltiples industrias, incluyendo:',
    industries: [
      'Servicios Financieros (Disputas/Reclamos, Pagos, Contracargos)',
      'eCommerce',
      'Ciberseguridad',
      'Marítimo',
      'Transporte Terrestre y Logística',
    ],
    description1: 'Como Ingeniero Senior de Automatización QA con sólida experiencia en desarrollo, aporto una perspectiva multifuncional a cada proyecto. Mi experiencia principal es en JavaScript/TypeScript y Java, con experiencia adicional en Python, y trabajo con confianza en herramientas modernas, frameworks y patrones arquitectónicos.',
    description2: 'Actualmente, estoy adoptando herramientas impulsadas por IA como Cursor y Claude Code para mejorar la productividad de QA y explorar paradigmas de desarrollo modernos. También estoy dedicando tiempo a explorar herramientas de ingeniería del caos como Gremlin para fortalecer aún más la resiliencia del sistema.',
    features: {
      automation: {
        title: 'Experto en Automatización',
        description: 'Especializado en construir frameworks de automatización de pruebas robustos y pipelines CI/CD',
      },
      ai: {
        title: 'Flujo de Trabajo con IA',
        description: 'Aprovechando herramientas modernas de IA para acelerar el desarrollo y testing',
      },
      fullstack: {
        title: 'Capacidad Full Stack',
        description: 'Competente tanto en desarrollo frontend como backend con frameworks modernos',
      },
      crossfunctional: {
        title: 'Multifuncional',
        description: 'Puente entre equipos de desarrollo y QA para asegurar entregas de calidad',
      },
    },
    techStack: 'Stack Tecnológico',
  },

  // Experience
  experience: {
    title: 'Experiencia',
    titleHighlight: 'Laboral',
    qaToggle: 'Experiencia en Automatización QA',
    devToggle: 'Experiencia como Desarrollador',
    present: 'Presente',
    jobs: {
      lumenalta: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Lumenalta LLC (anteriormente Clevertech)',
        description: [
          'Diseñé y construí un framework de automatización E2E escalable desde cero usando Cypress con TypeScript.',
          'Implementé estrategias robustas de datos de prueba usando fixtures de Cypress, faker.js, y patrones de Factory usando Fishery.js',
          'Amplié las capacidades del framework con plugins de Cypress, incluyendo pruebas condicionales, mock de datos, y filtrado de pruebas.',
          'Habilité pruebas de componentes y autore de escenarios y planes de prueba en colaboración con PMs y equipos de QA.',
          'Contenedorizé el framework con Docker, habilité ejecución paralela via Docker Compose, y lo integré en Azure Pipelines con informes mejorados.',
          'Monitoreé pipelines CI, estabilizé pruebas fallidas, contribuí a pruebas de rendimiento con Postman, y validé datos usando SQL y Databricks.',
        ],
      },
      avenueCode: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Avenue Code',
        description: [
          'Me uní a un equipo establecido para acelerar el desarrollo de pruebas automatizadas y mejorar la calidad general del software a través de la colaboración multifuncional.',
          'Desarrollé casos de prueba automatizados usando Playwright y TestCafe, aprovechando JavaScript/TypeScript para pruebas de UI confiables.',
          'Mantuve y refactoricé suites de automatización existentes integradas en pipelines CI de Jenkins para apoyar las versiones de calidad.',
          'Participé activamente en la notificación, validación y verificación de errores en múltiples entornos.',
          'Revisé pull requests de GitHub para aplicar estándares de codificación y mejorar la calidad del código.',
        ],
      },
      encora: {
        title: 'Ingeniero de Automatización QA',
        company: 'Encora (anteriormente Avantica)',
        description: [
          'Me uní a un equipo en crecimiento para probar una nueva plataforma durante el desarrollo, colaborando estrechamente con stakeholders de diferentes funciones.',
          'Desarrollé y mantení suites de automatización de UI usando TestCafe (JavaScript) y automatización de API usando Python/PyTest y Postman.',
          'Mejoré, refactoricé y mantení suites de automatización, mientras aplicaba estándares de codificación a través de revisiones de pull requests de GitHub.',
          'Clasifiqué, validé y documenté defectos en múltiples entornos de desarrollo, prueba y producción, gestionando casos y planes de prueba en TestRail.',
          'Monitoreé y optimicé pipelines CI de TeamCity para asegurar estabilidad en la automatización y ciclos de feedback rápidos.',
          'Serví como Capitán de Release QA, liderando releases quincenales, validando flujos de trabajo basados en RabbitMQ, y adoptando Docker y Kubernetes para mejorar la eficiencia de QA.',
        ],
      },
      pegaDev: {
        title: 'Desarrollador PEGA | Arquitecto de Sistemas PEGA',
        company: 'Rulesware LLC',
        description: [
          'Capacidad para traducir requisitos de negocio complejos en requisitos técnicos funcionales usando la metodología SmartBPM de PegaSystems',
          'Gestión de tareas de implementación técnica para asegurar entregas a tiempo y dentro del presupuesto',
          'Resolución efectiva de problemas técnicos durante el ciclo de vida del proyecto',
          'Responsable de la codificación y pruebas unitarias usando características OOTB de Pega según el diseño del Arquitecto de Sistemas Líder',
        ],
      },
      ruleswareQa: {
        title: 'Ingeniero de Automatización QA',
        company: 'Rulesware LLC',
        description: [
          'Desarrollé y mantení suites de automatización usando Selenium WebDriver y TestNG para aplicaciones Java y Pega.',
          'Implementé pruebas basadas en datos usando Excel y proveedores de datos TestNG para mejorar la reutilización y escalabilidad.',
          'Refactoricé configuraciones YAML y estructuras Page Object Model (POM) para mejorar la mantenibilidad y reducir la duplicación de código.',
          'Construí clases utilitarias para consumir, analizar y validar APIs RESTful, apoyando la automatización de UI y backend.',
          'Autore de planes de prueba y casos de prueba detallados, asegurando la trazabilidad a requisitos de negocio y funcionales.',
        ],
      },
      synergyca: {
        title: 'Desarrollador Java',
        company: 'Synergyca SA de CV (Proyecto: Banco Davivienda)',
        description: [
          'Desarrollé servicios siguiendo principios SOA (Arquitectura Orientada a Servicios)',
          'Analicé requisitos de usuario y entregué soluciones seguras y escalables',
          'Proporcioné soporte continuo de desarrollo de aplicaciones',
          'Escribí, probé y mantuve código de aplicación',
          'Mejoré y optimicé la UI/UX existente',
          'Creé mockups y prototipos de UI',
        ],
      },
      sherwin: {
        title: 'Desarrollador Java EE (Pasantía)',
        company: 'Sherwin Williams',
        description: [
          'Colaboré con desarrolladores, gerentes y stakeholders para definir requisitos de software',
          'Participé en todas las fases del ciclo de vida del desarrollo de software',
          'Diseñé e implementé servicios web RESTful',
          'Construí Java Enterprise Beans de baja latencia, escalables y confiables',
          'Desarrollé componentes web Java (managed beans, XHTML/HTML5)',
          'Aseguré que todos los diseños se alinearan con especificaciones y estándares del proyecto',
          'Realicé pruebas exhaustivas de los componentes desarrollados',
          'Implementé validaciones del lado del cliente y del servidor',
        ],
      },
    },
  },

  // Skills
  skills: {
    title: 'Habilidades',
    titleHighlight: 'Técnicas',
    categories: {
      programming: 'Lenguajes de Programación',
      testing: 'Frameworks de Testing',
      devops: 'DevOps y Herramientas',
      frameworks: 'Frameworks y Librerías',
    },
    continuousLearning: 'Aprendizaje',
    continuousLearningHighlight: 'Continuo',
    certifications: [
      'MIT xPRO - Certificado Profesional en Ciberseguridad (2022-2023)',
      'Actualmente aprendiendo: Desarrollo impulsado por IA con Cursor y Claude Code',
      'Áreas de enfoque: React moderno, Desarrollo full-stack, Arquitectura de automatización de pruebas',
    ],
  },

  // Projects
  projects: {
    title: 'Proyectos',
    titleHighlight: 'Destacados',
    filterAll: 'Todos',
    filterDev: 'Dev',
    filterAutomation: 'Automatización',
    viewCode: 'Ver Código',
    liveDemo: 'Demo en Vivo',
    viewMoreGithub: 'Ver Más en GitHub',
    automationComplete: 'Automatización Completa',
    automationPending: 'Automatización Pendiente',
    items: {
      'playwright-platzi-challenge2': {
        title: 'Desafío de Código E2E Playwright/Typescript para Platzi',
        description: 'Desafío de automatización end-to-end que muestra patrones avanzados de implementación en Playwright y Typescript, desarrollado originalmente como evaluación técnica para la escuela de Platzi en diciembre de 2025',
        highlights: [
          'Automatización E2E con Playwright',
          'Patrón de diseño Page Object Model',
          'Refactorización y mejora del código base del desafío',
        ],
      },
      inventory: {
        title: 'SPA de Inventario con LocalStorage usando React + TypeScript',
        description: 'SPA React 19 + TypeScript (CRA) para gestión de inventario, ventas y compras. Agregando pruebas E2E con Playwright (Trabajo en Progreso)',
        highlights: [
          'Implementado para trabajar con LocalStorage',
          'Generar reportes CSV y descargar inventario',
          'Playwright E2E + React Testing Library',
          'Despliegue en Netlify con flujo de trabajo de Github Actions',
        ],
      },
      k6: {
        title: 'Pruebas de rendimiento K6/Typescript contra el servidor público PetStore',
        description: 'Implementa pruebas de smoke, carga, estrés y spike contra el servidor público PetStore para validar el rendimiento y la confiabilidad de la API.',
        highlights: [
          'Pruebas de smoke, carga, estrés y spike',
          'Github action para ejecutar las pruebas manualmente',
        ],
      },
      testcafe: {
        title: 'Desafío de Código E2E Testcafe/Javascript para Theorem One',
        description: 'Solución de automatización end-to-end que muestra patrones avanzados de implementación en TestCafe y JavaScript, desarrollada originalmente como evaluación técnica para la empresa Theorem One a la que apliqué en junio de 2021',
        highlights: [
          'Automatizados más de 5 endpoints E2E',
          'Ejecución de pruebas basada en datos',
          'Faker.js para generación de datos',
        ],
      },
      upgrade: {
        title: 'SDET - Desafío de código para Upgrade, Inc.',
        description: 'Desafío de automatización Java/Selenium/TestNG que involucra validación de UI de ofertas de préstamos y verificación de API de estados elegibles',
        highlights: [
          'Automatización UI: Validación de ofertas de préstamo y flujo de prestatario',
          'Automatización API: Verificación de elegibilidad por estado',
          'Patrón de diseño Page Object Model',
        ],
      },
    },
  },

  // Contact
  contact: {
    title: 'Ponte en',
    titleHighlight: 'Contacto',
    subtitle: 'Siempre estoy interesado en discutir nuevas oportunidades, proyectos innovadores, o cómo puedo ayudar a mejorar tus procesos de testing y desarrollo.',
    letsConnect: 'Conectemos',
    email: 'Correo',
    phone: 'Teléfono',
    location: 'Ubicación',
    supportMessage: '¡Si encuentras útil mi trabajo, considera apoyarme!',
    form: {
      name: 'Tu Nombre',
      namePlaceholder: 'Juan Pérez',
      email: 'Tu Correo',
      emailPlaceholder: 'juan@ejemplo.com',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar Mensaje',
    },
  },

  // Footer
  footer: {
    builtWith: 'Construido con',
    using: 'usando Next.js y TypeScript',
    rights: 'Todos los derechos reservados.',
  },

  // Loading
  loading: 'Cargando Portafolio...',
};

