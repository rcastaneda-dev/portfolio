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
          "Développé un framework d'automatisation robuste avec Cypress et TypeScript",
          'Configuré et optimisé le pipeline E2E dans Azure DevOps',
          'Implémenté la conteneurisation Docker pour l\'exécution parallèle des tests',
          "Dirigé la surveillance de couverture E2E et la délégation des tests dans l'équipe",
        ],
      },
      avenueCode: {
        title: 'Ingénieur Senior Automatisation QA',
        company: 'Avenue Code',
        description: [
          'Développé des cas de test API et E2E avec le framework TestCafe',
          'Contribué à la maintenance du framework PyTest',
          "Amélioré et refactorisé l'automatisation E2E dans le pipeline Jenkins",
          'Trié et validé les bugs de production',
        ],
      },
      encora: {
        title: 'Ingénieur Automatisation QA',
        company: 'Encora (anciennement Avantica)',
        description: [
          'Servi comme Capitaine de Release QA pour les releases de production bi-hebdomadaires',
          "Développé des tests d'automatisation E2E avec TestCafe",
          'Géré les cas de test dans TestRail',
          'Surveillé la santé du pipeline CI/CD TeamCity',
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
          "Développé des tests d'automatisation avec Selenium WebDriver et TestNG",
          'Implémenté des scripts de test pilotés par les données avec Page Object Model',
          'Créé des classes utilitaires pour les tests API RESTful',
          'Exécuté et rapporté la progression des plans de test',
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
      inventory: {
        title: "SPA d'Inventaire avec LocalStorage en React + TypeScript",
        description: "SPA React 19 + TypeScript (CRA) pour la gestion d'inventaire, ventes et achats. Migration en cours de localStorage vers IndexedDB (Dexie) et ajout de tests E2E avec Playwright (Travail en Cours)",
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

