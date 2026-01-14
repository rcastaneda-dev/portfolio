import type { Translations } from './en';

export const fr: Translations = {
  // Navigation
  nav: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
  },

  // Hero
  hero: {
    roles: [
      'Ingénieur Senior Automatisation QA',
      'SDET Senior',
      'Ancien Développeur Java',
      'Passionné de Développement Full Stack',
      'Architecte de Frameworks de Test',
      'Expert Pipelines CI/CD',
    ],
    tagline: "Plus de 10 ans à faire le lien entre développement et tests pour fournir des solutions de haute qualité dans les services financiers, l'eCommerce, la cybersécurité, le maritime et la logistique de transport terrestre.",
    downloadResume: 'Télécharger CV',
  },

  // About
  about: {
    title: 'À propos de',
    titleHighlight: 'Moi',
    subtitle: "Faire le Lien entre Développement et Assurance Qualité",
    intro: "Je suis un professionnel IT expérimenté avec plus d'une décennie d'expérience dans la livraison de solutions de haute qualité dans plusieurs industries, notamment:",
    industries: [
      'Services Financiers (Litiges/Réclamations, Paiements, Rétrofacturations)',
      'eCommerce',
      'Cybersécurité',
      'Maritime',
      'Transport Terrestre et Logistique',
    ],
    description1: "En tant qu'Ingénieur Senior Automatisation QA avec une solide expérience en développement, j'apporte une perspective transversale à chaque projet. Mon expertise principale est en JavaScript/TypeScript et Java, avec une expérience supplémentaire en Python, et je travaille avec confiance sur les outils modernes, frameworks et patterns architecturaux.",
    description2: "Actuellement, j'adopte des outils propulsés par l'IA comme Cursor et Claude Code pour améliorer la productivité QA et explorer les paradigmes de développement modernes. Je prends également le temps d'explorer les outils d'ingénierie du chaos comme Gremlin pour renforcer davantage la résilience des systèmes.",
    features: {
      automation: {
        title: "Expert en Automatisation",
        description: "Spécialisé dans la construction de frameworks d'automatisation de tests robustes et de pipelines CI/CD",
      },
      ai: {
        title: 'Flux de Travail IA',
        description: "Utilisation d'outils IA modernes pour accélérer le développement et les tests",
      },
      fullstack: {
        title: 'Capacité Full Stack',
        description: 'Compétent en développement frontend et backend avec les frameworks modernes',
      },
      crossfunctional: {
        title: 'Transversal',
        description: 'Pont entre les équipes de développement et QA pour assurer des livraisons de qualité',
      },
    },
    techStack: 'Stack Technologique',
  },

  // Experience
  experience: {
    title: 'Expérience',
    titleHighlight: 'Professionnelle',
    qaToggle: 'Expérience Automatisation QA',
    devToggle: 'Expérience Développeur',
    present: 'Présent',
    jobs: {
      lumenalta: {
        title: 'Ingénieur Senior Automatisation QA',
        company: 'Lumenalta LLC (anciennement Clevertech)',
        description: [
          "Conçu et construit un framework d'automatisation E2E scalable de zéro avec Cypress et TypeScript",
          'Implémenté des stratégies robustes de données de test à l\'aide de fixtures Cypress, faker.js, et des modèles de Factory à l\'aide de Fishery.js',
          'Étendu les capacités du framework avec des plugins Cypress, y compris les tests conditionnels, le mock des données, et le filtrage des tests.',
          'Permis les tests de composants et l\'écriture de scénarios et de plans de test E2E en collaboration avec les PMs et les équipes QA.',
          'Contenant le framework avec Docker, activé l\'exécution parallèle via Docker Compose, et l\'intégré dans Azure Pipelines avec des rapports améliorés.',
          'Surveillé les pipelines CI, stabilisé les tests fallibles, contribué aux tests de performance avec Postman, et validé les données à l\'aide de SQL et de Databricks.',
        ],
      },
      avenueCode: {
        title: 'Ingénieur Senior Automatisation QA',
        company: 'Avenue Code',
        description: [
          'Rejoint un équipe établie pour accélérer le développement de tests automatisés et améliorer la qualité générale du logiciel grâce à la collaboration interfonctionnelle.',
          'Développé des cas de test automatiques en utilisant Playwright et TestCafe, utilisant JavaScript/TypeScript pour des tests de UI fiables.',
          'Maintenu et refactorisé les suites d\'automatisation existantes intégrées dans les pipelines CI de Jenkins pour soutenir les versions de qualité.',
          'Participé activement à la notification, à la validation et à la vérification des erreurs dans plusieurs environnements.',
          'Effectué des examens de pull requests GitHub pour appliquer les normes de codage et améliorer la qualité du code.',
        ],
      },
      encora: {
        title: 'Ingénieur Automatisation QA',
        company: 'Encora (anciennement Avantica)',
        description: [
          'Rejoint un équipe en croissance pour tester une nouvelle plateforme pendant le développement, collaborant étroitement avec les parties prenantes de différentes fonctions.',
          'Développé et maintenu des suites d\'automatisation UI à l\'aide de TestCafe (JavaScript) et de l\'automatisation API à l\'aide de Python/PyTest et Postman.',
          'Amélioré, refactorisé et maintenu des suites d\'automatisation, tout en appliquant les normes de codage via des examens de pull requests GitHub.',
          'Trié, validé et documenté des bogues dans plusieurs environnements de développement, de test et de production, gérant les cas et les plans de test dans TestRail.',
          'Surveillé et optimisé les pipelines CI de TeamCity pour garantir la stabilité de l\'automatisation et les cycles de feedback rapides.',
          'Servi comme Capitaine de Release QA, dirigeant les releases bi-hebdomadaires, validant les workflows basés sur RabbitMQ, et adoptant Docker et Kubernetes pour améliorer l\'efficacité de QA.',
        ],
      },
      pegaDev: {
        title: 'Développeur PEGA | Architecte Système PEGA',
        company: 'Rulesware LLC',
        description: [
          "Capacité à traduire des exigences métier complexes en exigences techniques fonctionnelles en utilisant la méthodologie SmartBPM de PegaSystems",
          "Gestion des tâches d'implémentation technique pour assurer la livraison dans les délais et le budget",
          'Résolution efficace des problèmes techniques au cours du cycle de vie du projet',
          "Responsable du codage et des tests unitaires en utilisant les fonctionnalités OOTB de Pega selon le design de l'Architecte Système Principal",
        ],
      },
      ruleswareQa: {
        title: 'Ingénieur Automatisation QA',
        company: 'Rulesware LLC',
        description: [
          'Développé et maintenu des suites d\'automatisation à l\'aide de Selenium WebDriver et TestNG pour les applications Java et Pega.',
          'Implémenté des tests basés sur les données à l\'aide de Excel et des fournisseurs de données TestNG pour améliorer la réutilisation et l\'évolutivité.',
          'Refactorisé les configurations YAML et les structures Page Object Model (POM) pour améliorer la maintenabilité et réduire la duplication de code.',
          'Construit des classes utilitaires pour consommer, analyser et valider les APIs RESTful, soutenant l\'automatisation UI et backend.',
          'Écrit des plans de test et des cas de test détaillés, assurant la traçabilité aux exigences métier et fonctionnelles.',
        ],
      },
      synergyca: {
        title: 'Développeur Java',
        company: 'Synergyca SA de CV (Projet: Banque Davivienda)',
        description: [
          'Développé des services suivant les principes SOA (Architecture Orientée Services)',
          'Analysé les exigences utilisateur et livré des solutions sécurisées et évolutives',
          "Fourni un support continu de développement d'applications",
          "Écrit, testé et maintenu le code d'application",
          "Amélioré et optimisé l'UI/UX existante",
          "Créé des maquettes et prototypes d'UI",
        ],
      },
      sherwin: {
        title: 'Développeur Java EE (Stage)',
        company: 'Sherwin Williams',
        description: [
          'Collaboré avec les développeurs, managers et parties prenantes pour définir les exigences logicielles',
          'Participé à toutes les phases du cycle de vie du développement logiciel',
          'Conçu et implémenté des services web RESTful',
          'Construit des Java Enterprise Beans à faible latence, évolutifs et fiables',
          'Développé des composants web Java (managed beans, XHTML/HTML5)',
          "Assuré que tous les designs s'alignent avec les spécifications et standards du projet",
          'Effectué des tests approfondis des composants développés',
          'Implémenté des validations côté client et côté serveur',
        ],
      },
    },
  },

  // Skills
  skills: {
    title: 'Compétences',
    titleHighlight: 'Techniques',
    categories: {
      programming: 'Langages de Programmation',
      testing: 'Frameworks de Test',
      devops: 'DevOps et Outils',
      frameworks: 'Frameworks et Bibliothèques',
    },
    continuousLearning: 'Apprentissage',
    continuousLearningHighlight: 'Continu',
    certifications: [
      'MIT xPRO - Certificat Professionnel en Cybersécurité (2022-2023)',
      "Actuellement en apprentissage: Développement propulsé par l'IA avec Cursor et Claude Code",
      "Domaines de focus: React moderne, Développement full-stack, Architecture d'automatisation de tests",
    ],
  },

  // Projects
  projects: {
    title: 'Projets',
    titleHighlight: 'En Vedette',
    filterAll: 'Tous',
    filterDev: 'Dev',
    filterAutomation: 'Automatisation',
    viewCode: 'Voir le Code',
    liveDemo: 'Démo Live',
    viewMoreGithub: 'Voir Plus sur GitHub',
    automationComplete: 'Automatisation Complète',
    automationPending: 'Automatisation en Attente',
    items: {
      'playwright-platzi-challenge2': {
        title: 'Challenge de Code E2E Playwright/Typescript pour Platzi',
        description: 'Challenge d\'automatisation end-to-end montrant des patterns d\'implémentation avancés en Playwright et Typescript, développée originellement comme évaluation technique pour l\'école de Platzi en décembre 2025',
        highlights: [
          'Automatisation E2E avec Playwright',
          'Pattern de conception Page Object Model',
          'Refactorisation et amélioration du code base du challenge',
        ],
      },
      inventory: {
        title: "SPA d'Inventaire avec LocalStorage en React + TypeScript",
        description: "SPA React 19 + TypeScript (CRA) pour la gestion d'inventaire, ventes et achats. Ajout de tests E2E avec Playwright (Travail en Cours)",
        highlights: [
          'Implémenté pour fonctionner avec LocalStorage',
          "Générer des rapports CSV et télécharger l'inventaire",
          'Playwright E2E + React Testing Library',
          'Déploiement Netlify avec workflow Github Actions',
        ],
      },
      k6: {
        title: 'Tests de performance K6/Typescript contre le serveur public PetStore',
        description: "Implémente des tests de smoke, charge, stress et spike contre le serveur public PetStore pour valider la performance et la fiabilité de l'API.",
        highlights: [
          'Tests de smoke, charge, stress et spike',
          'Github action pour déclencher les tests manuellement',
        ],
      },
      testcafe: {
        title: 'Challenge de Code E2E Testcafe/Javascript pour Theorem One',
        description: "Solution d'automatisation end-to-end montrant des patterns d'implémentation avancés en TestCafe et JavaScript, développée originellement comme évaluation technique pour l'entreprise Theorem One à laquelle j'ai postulé en juin 2021",
        highlights: [
          'Automatisé plus de 5 endpoints E2E',
          'Exécution de tests pilotée par les données',
          'Faker.js pour la génération de données',
        ],
      },
      upgrade: {
        title: 'SDET - Challenge de code pour Upgrade, Inc.',
        description: "Challenge d'automatisation Java/Selenium/TestNG impliquant la validation UI d'offres de prêt et la vérification API des états éligibles",
        highlights: [
          "Automatisation UI: Validation d'offres de prêt et flux emprunteur",
          "Automatisation API: Vérification d'éligibilité par état",
          'Pattern de conception Page Object Model',
        ],
      },
    },
  },

  // Contact
  contact: {
    title: 'Entrer en',
    titleHighlight: 'Contact',
    subtitle: "Je suis toujours intéressé à discuter de nouvelles opportunités, de projets innovants, ou comment je peux aider à améliorer vos processus de test et développement.",
    letsConnect: 'Connectons-nous',
    email: 'Email',
    phone: 'Téléphone',
    location: 'Localisation',
    supportMessage: 'Si vous trouvez mon travail utile, envisagez de me soutenir!',
    form: {
      name: 'Votre Nom',
      namePlaceholder: 'Jean Dupont',
      email: 'Votre Email',
      emailPlaceholder: 'jean@exemple.com',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      send: 'Envoyer le Message',
    },
  },

  // Footer
  footer: {
    builtWith: 'Construit avec',
    using: 'en utilisant Next.js et TypeScript',
    rights: 'Tous droits réservés.',
  },

  // Loading
  loading: 'Chargement du Portfolio...',
};

