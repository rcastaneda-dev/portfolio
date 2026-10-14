import type { Translations } from './en';

export const fr: Translations = {
  // Navigation and site chrome
  nav: {
    skip: 'Aller au contenu',
    about: 'À propos',
    experience: 'Expérience',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    resume: 'CV',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },

  // Hero
  hero: {
    title: 'Ingénieur senior en automatisation QA',
    lede: "Consultant en ingénierie de la qualité qui aide les équipes à distance à étendre l'automatisation des tests, à stabiliser le CI/CD et à livrer en confiance.",
    emailMe: 'Écrivez-moi',
    downloadResume: 'Télécharger le CV',
    sheet: {
      focus: 'Spécialité',
      focusValue: "Automatisation des tests E2E et de composants, stabilisation du CI/CD",
      frameworks: 'Frameworks',
      pipelines: 'Pipelines',
      industries: 'Secteurs',
      industriesValue: 'Services financiers, eCommerce, cybersécurité, maritime, logistique',
      basedIn: 'Basé à',
      basedInValue: 'San Salvador, Salvador, en télétravail',
      status: 'Statut',
      statusValue: 'Disponible pour des postes à distance et du conseil',
    },
    strip: {
      label: 'Parcours professionnel, 2013 à 2025',
      summary: 'De développeur Java à ingénieur senior en automatisation QA, 2013 à 2025. Survolez une barre ou mettez-la au focus pour voir le poste.',
      qa: 'Automatisation QA',
      dev: 'Développement',
    },
  },

  // About
  about: {
    title: 'À propos',
    lede: "J'aide les équipes d'ingénierie à construire des logiciels fiables et évolutifs. En plus de dix ans, j'ai livré des projets critiques en production dans les services financiers, l'eCommerce, la cybersécurité, les systèmes maritimes, ainsi que le transport terrestre et la logistique.",
    paragraphs: [
      "Je travaille comme consultant en ingénierie de la qualité auprès d'équipes distribuées : je conçois, étends et exploite l'automatisation des tests pour des systèmes complexes. Je collabore avec les responsables produit et ingénierie pour obtenir des livraisons fiables, un retour rapide et de la confiance en production, sans ralentir les équipes.",
      "Mon parcours combine développement logiciel, architecture d'automatisation et mise en place du CI/CD. Je construis des frameworks d'automatisation à partir de zéro, je modernise les suites de tests existantes et je stabilise les pipelines instables avec Cypress, Playwright, TypeScript, Selenium, Docker et des plateformes de CI/CD dans le cloud.",
      "J'utilise des outils d'IA comme Cursor et Claude Code pour accélérer le développement et le travail de QA, et j'explore des pratiques comme l'ingénierie du chaos avec Gremlin pour renforcer la résilience et la préparation à la production.",
    ],
    capabilities: {
      automation: {
        title: "Architecture de l'automatisation",
        description: "Frameworks d'automatisation évolutifs et pipelines CI/CD de niveau production.",
      },
      ai: {
        title: 'Ingénierie assistée par IA',
        description: 'Des workflows assistés par IA pour accélérer le développement, les tests et le débogage.',
      },
      fullstack: {
        title: "Parcours d'ingénierie",
        description: 'Expérience en développement frontend et backend pour valider les systèmes de bout en bout.',
      },
      crossfunctional: {
        title: 'Partenaire transverse',
        description: 'Un pont entre produit, ingénierie et QA qui aligne la qualité sur le risque métier.',
      },
    },
  },

  // Experience
  experience: {
    title: 'Expérience',
    to: 'à',
    showDev: 'Afficher les postes de développement',
    hideDev: 'Masquer les postes de développement',
    workMode: {
      remote: 'À distance',
      hybrid: 'Hybride',
      onsite: 'Sur site',
    },
    jobs: {
      lumenalta: {
        title: 'Ingénieur senior en automatisation QA',
        company: 'Lumenalta LLC (anciennement Clevertech)',
        highlights: [
          "J'ai construit une plateforme d'automatisation de bout en bout avec Cypress et TypeScript, couvrant les tests E2E et de composants pour des applications React critiques pour l'entreprise.",
          "J'ai défini la stratégie de données de test et ajouté des intégrations pour les tests conditionnels, la simulation de données et le filtrage des tests.",
          "J'ai conteneurisé le framework et l'ai exécuté dans Azure Pipelines avec exécution parallèle et rapports consolidés. J'ai stabilisé des pipelines instables.",
          "J'ai contribué aux tests de performance avec Postman et validé la cohérence des données entre systèmes récents et anciens avec SQL et Databricks, sur une grande plateforme de transport et de logistique.",
        ],
      },
      avenueCode: {
        title: 'Ingénieur senior en automatisation QA',
        company: 'Avenue Code',
        highlights: [
          "J'ai rejoint une équipe établie pour faire progresser la maturité de l'automatisation et la confiance dans les releases, dans un environnement e-commerce au rythme soutenu.",
          "J'ai conçu, étendu et maintenu des suites automatisées fiables avec Playwright et TestCafe.",
          "J'ai stabilisé les pipelines CI sous Jenkins pour garantir des releases régulières.",
          "J'ai trié les défauts dans plusieurs environnements et fait respecter les normes d'automatisation et de qualité du code par des revues de pull request.",
        ],
      },
      encora: {
        title: 'Ingénieur en automatisation QA',
        company: 'Encora (anciennement Avantica)',
        highlights: [
          "J'ai soutenu la stratégie qualité d'une nouvelle plateforme de cybersécurité critique en production, avec l'ingénierie, le produit et le DevOps.",
          "J'ai conçu et fait évoluer l'automatisation UI et API avec TestCafe, PyTest et Postman, en refactorisant les suites pour les rendre plus fiables et maintenables.",
          "J'ai tenu à jour les plans et cas de test, stabilisé et optimisé les pipelines TeamCity, et validé des workflows asynchrones entre services distribués.",
          "J'ai été capitaine de release QA pour des déploiements bimensuels en production, en appliquant des portes de qualité, et introduit Docker et Kubernetes pour améliorer les environnements de test.",
        ],
      },
      pegaDev: {
        title: 'Développeur PEGA | Architecte de Systèmes PEGA',
        company: 'Rulesware LLC',
        highlights: [
          "J'ai traduit des exigences métier en exigences techniques fonctionnelles avec la méthodologie SmartBPM de PegaSystems, et géré les tâches d'implémentation pour livrer à temps et dans le budget.",
          "J'ai résolu des problèmes techniques tout au long du cycle de vie du projet, et codé et testé unitairement des fonctionnalités avec les capacités natives de Pega, d'après les conceptions de l'architecte système principal.",
        ],
      },
      ruleswareQa: {
        title: 'Ingénieur en automatisation QA',
        company: 'Rulesware LLC',
        highlights: [
          "J'ai construit et maintenu des suites de régression automatisées avec Selenium WebDriver et TestNG pour des applications Java et basées sur Pega.",
          "J'ai introduit les tests pilotés par les données et refactorisé le Page Object Model et les couches de configuration pour réduire la duplication.",
          "J'ai rédigé des plans et cas de test traçables, alignés sur les exigences fonctionnelles et métier, pour des plateformes de litiges et de paiements numériques.",
        ],
      },
      synergyca: {
        title: 'Développeur Java',
        company: 'Synergyca SA de CV (Projet: Banco Davivienda)',
        highlights: [
          "J'ai développé et testé unitairement des applications Java pour une banque, sur une architecture SOA, dans plusieurs environnements.",
          "J'ai travaillé avec les responsables d'équipe et les chefs de projet pour analyser les exigences et produire des maquettes fonctionnelles.",
        ],
      },
      sherwin: {
        title: 'Développeur Java EE (Stage)',
        company: 'Sherwin Williams',
        highlights: [
          "J'ai participé à toutes les phases du cycle de vie logiciel avec les développeurs, les managers et les parties prenantes.",
          "J'ai implémenté des services web RESTful, des Enterprise Beans Java à faible latence et des composants web Java (managed beans, XHTML/HTML5), avec validation côté client et côté serveur.",
          "J'ai testé les composants que j'ai développés et veillé à ce que les conceptions respectent les spécifications.",
        ],
      },
    },
  },

  // Skills
  skills: {
    title: 'Compétences',
    categories: {
      programming: 'Langages',
      testing: 'Frameworks de test',
      devops: 'DevOps et outils',
      frameworks: 'Frameworks et bibliothèques',
    },
    learningTitle: 'Apprentissage continu',
    learning: [
      'MIT xPRO, certificat professionnel en cybersécurité (2022 à 2023)',
      "En cours d'apprentissage : développement assisté par IA avec Cursor et Claude Code",
      "Axes de travail : React moderne, développement full-stack, architecture d'automatisation des tests",
    ],
  },

  // Projects
  projects: {
    title: 'Projets',
    code: 'Code',
    liveDemo: 'Démo en ligne',
    ciRuns: 'Exécutions CI',
    newTab: "s'ouvre dans un nouvel onglet",
    inProgress: 'En cours',
    moreOnGithub: 'Plus sur GitHub',
    items: {
      'playwright-assessment': {
        title: 'Évaluation Playwright/Typescript pour Software Mind',
        description: 'Évaluation technique de 4 heures pour la position de Ingénieur Senior de Automatisation QA pour la société Software Mind',
      },
      'playwright-platzi-challenge2': {
        title: 'Challenge de Code E2E Playwright/Typescript pour Platzi',
        description: "Challenge d'automatisation end-to-end montrant des patterns d'implémentation avancés en Playwright et Typescript, développée originellement comme évaluation technique pour l'école de Platzi en décembre 2025",
      },
      inventory: {
        title: "SPA d'Inventaire avec LocalStorage en React + TypeScript",
        description: "SPA React 19 + TypeScript (CRA) pour la gestion d'inventaire, ventes et achats. Ajout de tests E2E avec Playwright (Travail en Cours)",
      },
      k6: {
        title: 'Tests de performance K6/Typescript contre le serveur public PetStore',
        description: "Implémente des tests de smoke, charge, stress et spike contre le serveur public PetStore pour valider la performance et la fiabilité de l'API.",
      },
      testcafe: {
        title: 'Challenge de Code E2E Testcafe/Javascript pour Theorem One',
        description: "Solution d'automatisation end-to-end montrant des patterns d'implémentation avancés en TestCafe et JavaScript, développée originellement comme évaluation technique pour l'entreprise Theorem One à laquelle j'ai postulé en juin 2021",
      },
      upgrade: {
        title: 'SDET - Challenge de code pour Upgrade, Inc.',
        description: "Challenge d'automatisation Java/Selenium/TestNG impliquant la validation UI d'offres de prêt et la vérification API des états éligibles",
      },
    },
  },

  // Contact
  contact: {
    title: 'Contact',
    subtitle: "Je suis toujours intéressé à discuter de nouvelles opportunités, de projets innovants, ou comment je peux aider à améliorer vos processus de test et développement.",
    details: {
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Téléphone',
      location: 'Localisation',
      locationValue: 'San Salvador, Salvador',
    },
    form: {
      name: 'Votre nom',
      email: 'Votre e-mail',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      sent: 'Message envoyé. Je réponds sous deux jours ouvrés.',
      error: "Impossible d'envoyer votre message. Réessayez, ou écrivez à hi@rcastaneda.dev.",
    },
  },

  // Footer
  footer: {
    rights: 'Tous droits réservés.',
    built: 'Réalisé avec Next.js et TypeScript.',
    support: 'Soutenir mon travail',
  },
};
