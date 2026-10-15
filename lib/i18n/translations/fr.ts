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
    title: 'SDET senior',
    lede: "Ingénieur QA AI-first, fort de plus de 10 ans en automatisation des tests et en développement logiciel, qui aide les équipes à distance à étendre les tests web et mobiles, à stabiliser le CI/CD et à livrer en confiance.",
    emailMe: 'Écrivez-moi',
    downloadResume: 'Télécharger le CV',
    sheet: {
      focus: 'Spécialité',
      focusItems: ['Tests E2E', 'Tests d’API', 'Tests multinavigateurs', 'Stabilisation du CI/CD'],
      frameworks: 'Frameworks',
      pipelines: 'Pipelines',
      industries: 'Secteurs',
      industryItems: [
        { name: 'Services financiers', detail: 'Rétrofacturations, gestion des litiges, fraude' },
        { name: 'eCommerce' },
        { name: 'Cybersécurité', detail: 'Gestion des vulnérabilités' },
        { name: 'Maritime' },
        { name: 'Logistique' },
        { name: 'Gestion sportive' },
      ],
      basedIn: 'Basé à',
      basedInValue: 'San Salvador, Salvador, en télétravail',
      languages: 'Langues',
      languageItems: [
        { name: 'Anglais', level: 'professionnel complet' },
        { name: 'Espagnol', level: 'langue maternelle' },
        { name: 'Français', level: 'élémentaire' },
      ],
      status: 'Statut',
      statusValue: 'Disponible pour des postes à distance et du conseil',
      readyToMerge: 'Prêt à fusionner',
    },
    graph: {
      label: "Graphe des branches du parcours, de 2013 à aujourd'hui",
      summary: "De développeur Java à SDET senior, de 2013 à aujourd'hui.",
      hint: 'Survolez un nœud pour voir les détails',
      tapHint: 'Touchez un nœud pour ouvrir le poste',
      qaRole: 'Poste QA',
      devRole: 'Poste de développement',
      latest: 'Dernière',
    },
  },

  // About
  about: {
    title: 'À propos',
    lede: "J'aide les équipes d'ingénierie à construire des logiciels fiables et évolutifs. En plus de dix ans, j'ai livré des projets critiques en production dans les services financiers, l'eCommerce, la cybersécurité, les systèmes maritimes, ainsi que le transport terrestre et la logistique.",
    paragraphs: [
      "Je travaille comme consultant en ingénierie de la qualité auprès d'équipes distribuées : je conçois, étends et exploite l'automatisation des tests pour des systèmes complexes. Je collabore avec les responsables produit et ingénierie pour obtenir des livraisons fiables, un retour rapide et de la confiance en production, sans ralentir les équipes.",
      "Mon parcours combine développement logiciel, architecture d'automatisation et mise en place du CI/CD. Je construis des frameworks d'automatisation à partir de zéro, je migre et modernise les suites de tests existantes et je stabilise les pipelines instables avec Playwright, Cypress, TypeScript, Selenium, BrowserStack, Docker et des plateformes de CI/CD dans le cloud.",
      "Je travaille avec une approche AI-first. Je crée des skills OpenAI Codex, avec des sous-agents explorateur, exécutant et relecteur, qui migrent des suites de tests et repèrent les lacunes de couverture dans TestRail, et j'utilise des agents Playwright pour des tests auto-réparants, ainsi que Claude Code et Cursor pour accélérer le développement. J'explore aussi l'ingénierie du chaos avec Gremlin pour renforcer la résilience et la préparation à la production.",
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
    present: "aujourd'hui",
    showDev: 'Afficher les postes de développement',
    hideDev: 'Masquer les postes de développement',
    groups: {
      added: 'Ajouté',
      changed: 'Modifié',
      fixed: 'Corrigé',
    },
    workMode: {
      remote: 'À distance',
      hybrid: 'Hybride',
      onsite: 'Sur site',
    },
    jobs: {
      willdom: {
        title: 'Ingénieur senior en automatisation QA',
        company: 'WillDom',
        industry: 'Gestion sportive',
        changes: {
          added: [
            "Responsabilité qualité de nouvelles fonctionnalités, de leur conception à la mise en production, en tant que responsable QA par intérim.",
            "Skill OpenAI Codex réutilisable pour migrer les tests de façon incrémentale, avec des sous-agents explorateur, exécutant et relecteur pour l'analyse, l'implémentation et la revue du code.",
            'Skills Codex qui analysent les référentiels TestRail, repèrent les lacunes de couverture, proposent des cas limites et les transforment en actions de test pour les tickets JIRA.',
            'Couverture automatisée pour des intégrations de paiement Stripe complexes.',
            'Agents Playwright pour des tests auto-réparants et une couverture plus rapide des nouvelles fonctionnalités.',
            'Plan de tests mobiles pour une application iOS native.',
            'Tests multinavigateurs et multiappareils avec BrowserStack.',
          ],
          changed: ['Deux dépôts de tests de bout en bout migrés de Cypress vers Playwright pour améliorer la stabilité du CI.'],
          fixed: [],
        },
      },
      lumenalta: {
        title: 'Ingénieur senior en automatisation QA',
        company: 'Lumenalta LLC (anciennement Clevertech)',
        industry: 'Transport terrestre et logistique',
        changes: {
          added: [
            "Plateforme d'automatisation de bout en bout avec Cypress et TypeScript, couvrant les tests E2E et de composants pour des applications React critiques pour l'entreprise.",
            'Stratégie de données de test, avec des intégrations pour les tests conditionnels, la simulation de données et le filtrage des tests.',
            'Contributions aux tests de performance avec Postman, et contrôles de cohérence des données entre systèmes récents et anciens avec SQL et Databricks, sur une grande plateforme de transport et de logistique.',
            'Rapports HTML (Mochawesome) et XML (JUnit), agrégés depuis plusieurs conteneurs Docker pour la visibilité dans le CI.',
          ],
          changed: [
            'Framework conteneurisé et déplacé dans Azure Pipelines, avec exécution parallèle.',
          ],
          fixed: ['Pipelines instables stabilisés.'],
        },
      },
      avenueCode: {
        title: 'Ingénieur senior en automatisation QA',
        company: 'Avenue Code',
        industry: 'eCommerce et commerce de détail',
        changes: {
          added: [
            "Suites automatisées fiables avec Playwright et TestCafe, qui ont fait progresser la maturité de l'automatisation et la confiance dans les releases d'une équipe e-commerce établie.",
          ],
          changed: ["Normes d'automatisation et de qualité du code appliquées par des revues de pull request."],
          fixed: [
            'Pipelines CI sous Jenkins stabilisés pour garantir des releases régulières.',
            'Défauts triés dans plusieurs environnements.',
          ],
        },
      },
      avantica: {
        title: 'Ingénieur en automatisation QA',
        company: 'Avantica',
        industry: 'Cybersécurité',
        changes: {
          added: [
            "Automatisation UI et API avec TestCafe, PyTest et Postman pour une nouvelle plateforme de cybersécurité critique en production, avec l'ingénierie, le produit et le DevOps.",
            'Plans et cas de test pour assurer la couverture et la traçabilité.',
            'Validation de workflows asynchrones entre services distribués.',
            'Portes de qualité pour les déploiements en production toutes les deux semaines, en tant que capitaine de release QA.',
            'Docker et Kubernetes, introduits pour améliorer les environnements de test.',
          ],
          changed: [
            "Suites d'automatisation refactorisées en continu pour plus de fiabilité et de maintenabilité.",
            'Pipelines TeamCity optimisés pour un retour rapide et fiable.',
          ],
          fixed: ['Pipelines TeamCity stabilisés.'],
        },
      },
      pegaDev: {
        title: 'Développeur PEGA | Architecte de Systèmes PEGA',
        company: 'Rulesware LLC',
        industry: 'Fraude, litiges et fintech',
        changes: {
          added: [
            "Exigences techniques fonctionnelles tirées des exigences métier, avec la méthodologie SmartBPM de PegaSystems, et tâches d'implémentation gérées pour livrer à temps et dans le budget.",
            "Fonctionnalités codées et testées unitairement avec les capacités natives de Pega, d'après les conceptions de l'architecte système principal.",
          ],
          changed: [],
          fixed: ['Problèmes techniques résolus tout au long du cycle de vie du projet.'],
        },
      },
      ruleswareQa: {
        title: 'Ingénieur en automatisation QA',
        company: 'Rulesware LLC',
        industry: 'Litiges et paiements numériques',
        changes: {
          added: [
            'Suites de régression automatisées avec Selenium WebDriver et TestNG pour des applications Java et basées sur Pega.',
            'Tests pilotés par les données.',
            "Classes utilitaires qui appellent, analysent et valident des endpoints d'API RESTful pour les tests UI et backend.",
            'Plans et cas de test traçables, alignés sur les exigences fonctionnelles et métier, pour des plateformes de litiges et de paiements numériques.',
          ],
          changed: ['Page Object Model et couches de configuration refactorisés pour réduire la duplication.'],
          fixed: [],
        },
      },
      davivienda: {
        title: 'Développeur Java',
        company: 'Banque Davivienda (via Synergyca S.A. de C.V.)',
        industry: 'Banque et services financiers',
        changes: {
          added: [
            'Applications Java pour une banque, sur une architecture SOA, développées et testées unitairement dans plusieurs environnements.',
            "Maquettes fonctionnelles, réalisées avec les responsables d'équipe et les chefs de projet à partir de l'analyse des exigences.",
          ],
          changed: [],
          fixed: [],
        },
      },
      sherwin: {
        title: 'Développeur Java',
        company: 'Sherwin-Williams de Centroamérica',
        industry: 'Industrie manufacturière',
        changes: {
          added: [
            'Participation à toutes les phases du cycle de vie logiciel, avec les développeurs, les managers et les parties prenantes.',
            'Services web RESTful, Enterprise Beans Java à faible latence et composants web Java (managed beans, XHTML/HTML5), avec validation côté client et côté serveur.',
            "Tests des composants que j'ai développés, avec des conceptions alignées sur les spécifications.",
          ],
          changed: [],
          fixed: [],
        },
      },
    },
  },

  // Skills
  skills: {
    title: 'Compétences',
    categories: {
      programming: 'Langages',
      testing: 'Tests',
      ai: 'Outils d’IA',
      devops: 'DevOps et outils',
      frameworks: 'Frameworks et bibliothèques',
    },
    learningTitle: 'Formation et certifications',
    learning: [
      "Universidad Don Bosco, diplôme d'ingénieur en informatique (2014 à 2021)",
      'MIT xPRO, certificat professionnel en cybersécurité (2022 à 2023)',
      'Claude Academy : Claude Code 101',
      'Python Automation and Testing',
      'Behavior-Driven Development',
      'Curso Avanzado de Java SE (Java SE avancé)',
      'CASAS (Proficient Skills)',
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
    pipeline: {
      label: 'Exécutions du pipeline',
      status: {
        passed: 'Réussie',
        failed: 'Échouée',
        running: 'En cours',
        cancelled: 'Annulée',
      },
      fetched: 'Depuis GitHub Actions, récupéré le',
      snapshot: 'Instantané enregistré de GitHub Actions,',
    },
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
    build: {
      passed: 'Build réussi',
      failed: 'Build en échec',
      running: 'Build en cours',
      cancelled: 'Build annulé',
    },
  },
};
