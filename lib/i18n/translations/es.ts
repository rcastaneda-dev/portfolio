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
      'Senior SDET',
      'Ex Desarrollador Java',
      'Entusiasta del Desarrollo Full Stack',
      'Experto en Pipelines CI/CD',
      'Consultor en Ingeniería de Calidad',
    ],
    tagline: 'Más de 10 años conectando desarrollo y testing para entregar soluciones de alta calidad en servicios financieros, eCommerce, ciberseguridad, marítimo y logística de transporte terrestre.',
    downloadResume: 'Descargar CV',
  },

  // About
  about: {
    title: 'Acerca de',
    titleHighlight: 'Mí',
    subtitle: 'Ingeniería de Calidad en Sistemas de Software Escalables',
    intro: 'Ayudo a equipos de ingeniería a construir software confiable y escalable. Con más de una década de experiencia, he ayudado a equipos a entregar soluciones críticas de producción en industrias complejas y reguladas como:',
    industries: [
      'Servicios Financieros (Disputas, Reclamos, Pagos, Contracargos)',
      'eCommerce y Retail',
      'Ciberseguridad',
      'Sistemas Marítimos',
      'Transporte Terrestre y Logística',
    ],
    description1: "Soy un Consultor Senior en Ingeniería de Calidad ayudando a equipos distribuidos a diseñar, escalar y operar la automatización de pruebas para sistemas de software complejos. Colaboro con líderes de producto y ingeniería para habilitar la entrega confiable, el feedback rápido y la confianza en producción—sin ralentizar a los equipos.\n\nMi background combina desarrollo de software práctico, arquitectura de automatización y habilitación de CI/CD. Especializo en construir frameworks de automatización desde cero, modernizar suites de pruebas heredadas, estabilizar pipelines inestables y incorporar la calidad en el flujo de trabajo de desarrollo.",
    description2: "Adopto activamente herramientas AI como Cursor y Claude Code para mejorar la productividad en desarrollo y QA, mientras exploro prácticas de ingeniería modernas como la ingeniería de sistemas caóticos con herramientas como Gremlin para fortalecer la resiliencia y la preparación de producción de forma proactiva.",
    features: {
      automation: {
        title: 'Arquitectura de Automatización',
        description: 'Diseño y implementación de frameworks de automatización escalables y pipelines CI/CD de producción',
      },
      ai: {
        title: 'Ingeniería con IA',
        description: 'Aplicación de flujos de trabajo asistidos por IA para acelerar el desarrollo, testing y depuración',
      },
      fullstack: {
        title: 'Desarrollo Full Stack',
        description: 'Competencia en desarrollo frontend y backend con frameworks modernos',
      },
      crossfunctional: {
        title: 'Multifuncional',
        description: 'Puente entre equipos de producto, ingeniería y QA para alinear la calidad con el riesgo del negocio',
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
        description: 'Diseñé y construí un framework de automatización end-to-end escalable desde cero usando Cypress con TypeScript, implementando estrategias robustas de datos de prueba con fixtures, faker.js y patrones de fábrica a través de Fishery.js. Expandí el framework con plugins de Cypress para pruebas condicionales, simulación de datos y filtrado de pruebas, mientras habilitaba pruebas de componentes y colaboraba con PMs y equipos de QA para definir escenarios E2E y planes de prueba. Containerizé la solución usando Docker, soporté ejecución paralela con Docker Compose, y la integré en Azure Pipelines con reportes mejorados, mientras monitoreaba activamente los pipelines CI, estabilizaba pruebas inestables, contribuía a pruebas de rendimiento con Postman, y validaba datos a través de SQL y Databricks.'
      }, avenueCode: {
        title: 'Ingeniero Senior de Automatización QA',
        company: 'Avenue Code',
        description: 'Me uni a un equipo establecido para acelerar la madurez de la automatización y mejorar la confianza en las releases dentro de un entorno rápido y dinámico de comercio electrónico. Diseñé, mejoré y mantení suites de pruebas automatizadas confiables usando Playwright y TestCafe, mientras estabilizaba pipelines CI de Jenkins para apoyar releases estables y de alta calidad. Actué como socio de calidad en equipo colaborando en el triaje de defectos en múltiples entornos y aplicando estándares de automatización y calidad del código a través de revisiones de pull request rigurosas.'
      },
      encora: {
        title: 'Ingeniero de Automatización QA',
        company: 'Encora (anteriormente Avantica)',
        description: 'Me uni a un equipo en crecimiento para apoyar la estrategia de calidad de una nueva plataforma en desarrollo, colaborando estrechamente con ingeniería, producto y DevOps para desarrollar una profunda comprensión de la arquitectura del sistema y los requisitos del negocio. Diseñé y mantení suites de automatización UI a través de TestCafe, complementado por automatización API en Python con PyTest y Postman, mientras continuamente refactorizaba y fortalecía suites de automatización existentes. Aplicé estándares de ingeniería y automatización a través de revisiones de pull request GitHub rigurosas y triaje proactivo de defectos, validación y documentación en entornos de desarrollo, testing y producción. \n\n Asumí la gestión de actividades de prueba creando y manteniendo planes de prueba y casos de prueba en TestRail, asegurando cobertura fuerte y trazabilidad para nuevas y características existentes. Monitoreé, estabilizé y optimizé pipelines CI de TeamCity para garantizar entregas de feedback rápidas y confiables para pruebas automatizadas, y validé flujos de trabajo complejos basados en mensajes y eventos usando RabbitMQ en múltiples servicios principales para apoyar la calidad del sistema asíncrono. Actué como Capitán de Release QA, liderando releases quincenales de producción, coordinando a stakeholders de diferentes funciones, y aplicando puertas de calidad previas al despliegue. Además, evalué y adopté herramientas modernas de DevOps y infraestructura como Docker y Kubernetes para mejorar los entornos de prueba, la confiabilidad del despliegue, y la eficiencia general de QA en el dominio de la ciberseguridad.'
      },
      pegaDev: {
        title: 'Desarrollador PEGA | Arquitecto de Sistemas PEGA',
        company: 'Rulesware LLC',
        description: 'Traduje requisitos de negocio complejos en requisitos técnicos funcionales usando la metodología SmartBPM de PegaSystems mientras gestionaba tareas de implementación técnica para asegurar entregas a tiempo y dentro del presupuesto. Resolví efectivamente problemas técnicos durante el ciclo de vida del proyecto y fui responsable de la codificación y pruebas unitarias usando características OOTB de Pega basadas en diseños proporcionados por el Arquitecto de Sistemas Líder.',
      },
      ruleswareQa: {
        title: 'Ingeniero de Automatización QA',
        company: 'Rulesware LLC',
        description: 'Desarrollé pruebas de automatización completas usando Selenium WebDriver y TestNG para aplicaciones Java y Pega, asegurando cobertura consistente en flujos críticos de negocio. Implementé estrategias de pruebas escalables y basadas en datos usando Excel y proveedores de datos TestNG para mejorar la reutilización y reducir la sobrecarga de mantenimiento, mientras refactorizaba configuraciones YAML y estructuras Page Object Model para mejorar la calidad del código y eliminar la duplicación. Autoré planes de prueba y casos de prueba claros y estructurados con trazabilidad completa a requisitos funcionales y de negocio, apoyando la entrega de alta calidad en el dominio de disputas y pagos digitales.'
      },
      synergyca: {
        title: 'Desarrollador Java',
        company: 'Synergyca SA de CV (Proyecto: Banco Davivienda)',
        description: 'Desarrollé y probé aplicaciones <strong>Java</strong> de extremo a extremo dentro de una arquitectura SOA, contribuyendo al diseño, implementación y soporte de soluciones en el dominio de servicios financieros y de pago. Desarrollé y probé aplicaciones <strong>Java</strong> en múltiples entornos, mientras trabajaba estrechamente con líderes de equipo y gerentes de proyecto para analizar requisitos, producir mockups funcionales, y entregar características de alta calidad y confiables alineadas con las necesidades del negocio.',
      },
      sherwin: {
        title: 'Desarrollador Java EE (Pasantía)',
        company: 'Sherwin Williams',
        description: 'Colaboré con desarrolladores, gerentes y stakeholders para definir requisitos de software mientras participaba en todas las fases del ciclo de vida del desarrollo de software. Diseñé e implementé servicios web RESTful, construí <strong>Java</strong> Enterprise Beans de baja latencia, escalables y confiables, y desarrollé componentes web <strong>Java</strong> incluyendo managed beans e interfaces XHTML/HTML5. Aseguré que todos los diseños se alinearan con especificaciones y estándares del proyecto, realicé pruebas exhaustivas de los componentes desarrollados, e implementé validaciones tanto del lado del cliente como del servidor.',
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

