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
          'Desarrollé un framework de automatización robusto usando Cypress y TypeScript',
          'Configuré y optimicé el pipeline E2E en Azure DevOps',
          'Implementé contenedorización Docker para ejecución paralela de pruebas',
          'Lideré el monitoreo de cobertura E2E y delegación de pruebas en el equipo',
        ],
      },
      avenueCode: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Avenue Code',
        description: [
          'Desarrollé casos de prueba API y E2E usando el framework TestCafe',
          'Contribuí al mantenimiento del framework PyTest',
          'Mejoré y refactoricé la automatización E2E en el pipeline de Jenkins',
          'Clasifiqué y validé bugs de producción',
        ],
      },
      encora: {
        title: 'Ingeniero de Automatización QA',
        company: 'Encora (anteriormente Avantica)',
        description: [
          'Serví como Capitán de Release QA para releases de producción quincenales',
          'Desarrollé pruebas de automatización E2E usando TestCafe',
          'Gestioné casos de prueba en TestRail',
          'Monitoreé la salud del pipeline CI/CD de TeamCity',
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
          'Desarrollé pruebas de automatización usando Selenium WebDriver y TestNG',
          'Implementé scripts de prueba basados en datos con Page Object Model',
          'Creé clases utilitarias para pruebas de API RESTful',
          'Ejecuté y reporté el progreso de los planes de prueba',
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
      inventory: {
        title: 'SPA de Inventario con LocalStorage usando React + TypeScript',
        description: 'SPA React 19 + TypeScript (CRA) para gestión de inventario, ventas y compras. Actualmente migrando de localStorage a IndexedDB (Dexie) y agregando pruebas E2E con Playwright (Trabajo en Progreso)',
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

