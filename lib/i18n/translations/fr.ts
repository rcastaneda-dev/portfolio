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
      'Senior SDET',
      'Ancien Développeur Java',
      'Passionné de Développement Full Stack',
      'Expert en Pipelines CI/CD',
      'Consultant en Ingenierie de Qualité',
    ],
    tagline: 'Senior Quality Engineering Consultant helping remote teams scale automation, stabilize CI/CD, and ship with confidence.',
    downloadResume: 'Télécharger le CV',
  },

  // About
  about: {
    title: 'À propos de',
    titleHighlight: 'Moi',
    subtitle: 'Ingénierie de Qualité dans les Systèmes de Software Scalables',
    intro: "Je aide les équipes d'ingénierie à construire des logiciels fiables et scalables. Avec plus de 10 ans d'expérience, j'ai aidé des équipes à livrer des solutions critiques de production dans des industries complexes et réglementées comme:",
    industries: [
      'Services Financiers (Litiges, Réclamations, Paiements, Rétrofacturations)',
      'eCommerce et Retail',
      'Cybersécurité',
      'Systèmes Maritimes',
      'Transport Terrestre et Logistique',
    ],
    description1: "Je suis un Consultant Senior en Ingénierie de Qualité aidant des équipes distribuées à concevoir, étendre et opérer l'automatisation des tests pour des systèmes de software complexes. Je travaille avec les leaders de produit et d'ingénierie qui ont besoin de livraisons fiables, de feedback rapide et de confiance en production—sans ralentir les équipes.\n\nMon background combine le développement de software pratique, l'architecture de l'automatisation et l'activation de CI/CD. Je spécialise dans la construction de frameworks d'automatisation à partir de zéro, la modernisation des suites de tests héritées, la stabilisation des pipelines instables et l'intégration de la qualité dans les flux de travail de développement.",
    description2: "Je adopte activement des outils propulsés par l'IA comme Cursor et Claude Code pour améliorer la productivité en développement et QA, tout en explorant des pratiques d'ingénierie modernes comme l'ingénierie du chaos avec des outils comme Gremlin pour renforcer la résilience et la préparation de production de manière proactive.",
    features: {
      automation: {
        title: 'Architecture de l\'Automatisation',
        description: 'Conception et mise en œuvre de frameworks d\'automatisation scalables et de pipelines CI/CD de production',
      },
      ai: {
        title: 'Ingénierie avec IA',
        description: 'Application de workflows assistés par IA pour accélérer le développement, les tests et la déboguage',
      },
      fullstack: {
        title: 'Développement Full Stack',
        description: 'Compétence en développement frontend et backend avec les frameworks modernes',
      },
      crossfunctional: {
        title: 'Partenaire Multifonctionnel',
        description: 'Pont entre les équipes de produit, d\'ingénierie et QA pour aligner la qualité avec le risque du business',
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
        description: 'Conçu et implémenté un framework d\'automatisation de tests robuste et de pipelines CI/CD à partir de zéro à l\'aide de Cypress et TypeScript. Établi une stratégie de données de test robuste et fiable à l\'aide de fixtures, faker.js, et des modèles de fabrique via Fishery, et étendu le framework grâce à l\'intégration stratégique de plugins Cypress pour les tests conditionnels, la simulation de données, le filtrage des tests, et la gestion des dialogues. Permis les tests E2E et les tests de composants en configurant Cypress pour la couverture des composants React, améliorant la détection précoce des défauts et l\'efficacité globale des tests. \n\n Collaboré de près avec les Product Managers et les ingénieurs QA pour définir des scénarios E2E robustes et des plans de tests détaillés qui garantissent une validation approfondie des fonctionnalités critiques pour le domaine des services financiers.',
      },
      avenueCode: {
        title: 'Ingénieur Senior Automatisation QA',
        company: 'Avenue Code',
        description: 'Unie à une équipe établie pour accélérer la maturité de l\'automatisation et élever la qualité du logiciel grâce à une collaboration étroite avec les stakeholders de différentes fonctions. Contribué au développement de suites de tests automatiques fiables en utilisant Playwright et TestCafe (JavaScript/TypeScript), tout en maintenant et refactorisant les tests intégrés dans les pipelines Jenkins pour soutenir les releases stables et de haute qualité. Signalé, validé et trié les bugs dans plusieurs environnements, et appliqué les normes d\'automatisation et de qualité du code grâce à des revues de pull request rigoureuses dans un domaine rapide et dynamique de commerce électronique et retail.',
      },
      encora: {
        title: 'Ingénieur de Automatisation QA',
        company: 'Encora (anciennement Avantica)',
        description: 'Unie à une équipe en croissance pour soutenir la stratégie de qualité d\'une nouvelle plateforme en développement, en collaborant étroitement avec l\'ingénierie, le produit et le DevOps pour développer une compréhension profonde de l\'architecture du système et des exigences du domaine. Conçu et maintenu des suites d\'automatisation UI à l\'aide de TestCafe (JavaScript), complété par l\'automatisation API en Python avec PyTest et Postman, tout en continuant à refactoriser et à renforcer les suites d\'automatisation existantes. Appliqué les normes d\'ingénierie et d\'automatisation grâce à des revues de pull request GitHub rigoureuses et un triage proactif des bugs, validation et documentation dans les environnements de développement, testing et production. \n\n Pris en charge les activités de gestion des tests en créant et maintenant des plans de tests et des cas de tests dans TestRail, assurant une couverture forte et une traçabilité pour les nouvelles et les fonctionnalités existantes. Surveillé, stabilisé et optimisé les pipelines CI de TeamCity pour garantir des retours rapides et fiables pour les tests automatiques, et validé des workflows complexes basés sur les messages et les événements en utilisant RabbitMQ dans plusieurs services principaux pour soutenir la qualité du système asynchrone. Agi comme Capitaine de Release QA, en conduisant les releases quincenales de production, en coordonnant les stakeholders de différentes fonctions, et en appliquant les portes de qualité préalables au déploiement. En outre, évalué et adopté des outils modernes de DevOps et d\'infrastructure comme Docker et Kubernetes pour améliorer les environnements de test, la fiabilité du déploiement, et l\'efficacité générale de QA dans le domaine de la cybersécurité.',
      },
      pegaDev: {
        title: 'Développeur PEGA | Architecte de Systèmes PEGA',
        company: 'Rulesware LLC',
        description: 'Traduis les exigences de domaine complexes en exigences fonctionnelles techniques en utilisant la méthodologie SmartBPM de PegaSystems tout en gérant les tâches d\'implémentation technique pour assurer la livraison à temps et dans le budget. Résolu efficacement les problèmes techniques tout au long du cycle de vie du projet et étais responsable de la codification et des tests unitaires en utilisant les fonctionnalités OOTB de Pega basées sur les designs fournis par l\'Architecte de Systèmes Léad.',
      },
      ruleswareQa: {
        title: 'Ingénieur de Automatisation QA',
        company: 'Rulesware LLC',
        description: 'Conçu et maintenu des suites d\'automatisation de regression robustes en utilisant Selenium WebDriver et TestNG pour les applications Java et Pega, assurant une couverture cohérente sur les flux critiques de domaine. Implémenté des stratégies de tests évoluées et basées sur les données en utilisant Excel et les fournisseurs de données TestNG pour améliorer la réutilisation et réduire la charge de maintenance, tout en refactorisant les configurations YAML et les structures Page Object Model pour améliorer la qualité du code et éliminer la duplication. Autoré des plans de tests et des cas de tests clairs et structurés avec une traçabilité complète aux exigences fonctionnelles et de domaine, soutenant la livraison de haute qualité dans le domaine des litiges et des paiements numériques.',
      },
      synergyca: {
        title: 'Développeur Java',
        company: 'Synergyca SA de CV (Projet: Banco Davivienda)',
        description: 'Fourni des services de développement d\'applications de bout en bout dans une architecture SOA, contribuant au design, à l\'implémentation et au support de solutions dans le domaine des services financiers et de paiement. Développé et testé des applications Java de bout en bout dans plusieurs environnements, tout en travaillant de près avec les responsables de l\'équipe et les gestionnaires de projet pour analyser les exigences, produire des mockups fonctionnels, et livrer des fonctionnalités de haute qualité et fiables alignées avec les besoins du domaine.',
      },
      sherwin: {
        title: 'Développeur Java EE (Stage)',
        company: 'Sherwin Williams',
        description: 'Collaboré avec les développeurs, les gestionnaires et les stakeholders pour définir les exigences de logiciel tout en participant à toutes les phases du cycle de vie du développement de logiciel. Conçu et implémenté des services web RESTful, construit des Enterprise Beans Java de faible latence, scalables et fiables, et développé des composants web Java incluant des managed beans et des interfaces XHTML/HTML5. Assuré que tous les designs soient alignés avec les spécifications et les normes du projet, effectué des tests exhaustifs des composants développés, et implémenté des validations du côté client et du côté serveur.',
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

