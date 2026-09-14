export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'devops'
}

export interface TimelineItem {
  id: string
  type: 'education' | 'experience' | 'project'
  title: string
  organization: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  icon?: string
}

export interface StatCard {
  id: string
  category: 'stat' | 'highlight' | 'stack' | 'cert' | 'tool'
  icon: string
  value: string
  label: string
  detail?: string
  color: string
}


export const timelineData: TimelineItem[] = [
  {
    id: 'exp-kletel',
    type: 'experience',
    title: 'Alternance Développeur Web & Applications',
    organization: 'Kletel Multimédia',
    location: 'France',
    period: '01/10/2025 - 29/09/2026',
    description: [
      'Développement d’une application mobile autour du vin : front-end en React Native, connectée à un back-end et une base de données 4D',
      'Développement d’un site web de gestion des rendez-vous CHU : front-end en React, back-end et base de données 4D',
      'Mise en place et configuration de serveurs Apache pour la mise en ligne de plusieurs sites + gestion des certificats SSL',
      'Maintenance corrective et évolutive de sites WordPress (ex : Actilangue, Vinsurvin) : correction de bugs et améliorations'
    ],
    technologies: ['React Native', 'React', '4D', 'Apache', 'SSL', 'WordPress']
  },

  {
    id: 'edu-master',
    type: 'education',
    title: 'Master Informatique — Développement Web (visé)',
    organization: 'Ynov Sophia Antipolis',
    location: 'Sophia Antipolis, France',
    period: '2025 - 2027',
    description: [
      'Parcours orienté développement web & applications',
      'Approfondissement des sujets : architecture, qualité, conception, projets avancés',
      'Objectif : monter en expertise full-stack et renforcer les bonnes pratiques'
    ],
    technologies: ['Architecture', 'Web', 'Applications', 'Projets']
  },

  {
    id: 'edu-bachelor',
    type: 'education',
    title: 'Bachelor Informatique — Spécialité Développement Web',
    organization: 'Ynov Sophia Antipolis',
    location: 'Sophia Antipolis, France',
    period: '2022 - 2025',
    description: [
      'Spécialisation développement web (front + back) et projets full-stack',
      'Réalisation de projets web et consolidation des bases (UI, API, BDD)',
      'Diplôme validé via projets, alternance et soutenance'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB']
  },

  {
    id: 'proj-aimpress',
    type: 'project',
    title: 'Aimpress — Plateforme IA du quotidien (Web + API)',
    organization: 'Projet personnel / R&D',
    location: 'Full-stack',
    period: '2026',
    description: [
      'Site web en React + API Node.js avec base MongoDB, visant à intégrer l’IA dans des usages quotidiens',
      'Génération d’une API d’outils IA réutilisable dans d’autres applications (via endpoints)',
      'Modules IA : édition/production de contenus (PDF, JSON, images), génération de documents (factures, XML), édition de facture XML',
      'Création de chatbots personnalisables (configurables par l’utilisateur) + base de connaissances',
      'Agent “veille produits” : recherche de produits demandés sur internet (ex : Leboncoin et autres) + notifications quand trouvé',
      'Fonction d’assistance : rédaction de mails (à la demande) et scénarios d’envoi (ex : contacter des pharmacies autour de moi via recherche)',
      'Objectif principal : centraliser des workflows IA propres, simples, et exploitables via une UI moderne + API'
    ],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'API REST',
      'LLM / IA',
      'Automation workflows'
    ]
  },

  {
    id: 'exp-ifsi',
    type: 'experience',
    title: 'Alternance Service Informatique',
    organization: 'IFSI',
    location: 'France',
    period: '06/01/2025 - 29/09/2025',
    description: [
      'Correction, mise à jour et publication du site web via WordPress',
      'Conception d’un extranet élèves : accès planning, notes, informations',
      'Développement d’une application mobile pour l’accès aux notes et à l’emploi du temps',
      'Participation à la modernisation des systèmes informatiques et d’information'
    ],
    technologies: ['WordPress', 'Web', 'Mobile', 'Systèmes']
  },

  {
    id: 'proj-yshare',
    type: 'project',
    title: 'Yshare — Plateforme d’événements (validation du Bachelor)',
    organization: 'Projet scolaire (Ynov)',
    location: 'Full-stack',
    period: '2025',
    description: [
      'Site web d’événements : création, participation et commentaires',
      'Back-end Node.js / Express, front-end React',
      'Interface moderne avec Tailwind CSS',
      'Base de données MySQL'
    ],
    technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MySQL']
  },

  {
    id: 'proj-microcreche',
    type: 'project',
    title: 'Gestion micro-crèches — création + planning (enfants / employés)',
    organization: 'Projet (portfolio)',
    location: 'Full-stack',
    period: '2024 - 2025',
    description: [
      'Site web dédié à la gestion et à la création de micro-crèches',
      'Gestion des plannings : enfants + employés, organisation par structure',
      'MongoDB utilisé pour les données planning'
    ],
    technologies: ['MongoDB', 'Planning', 'Web', 'Gestion']
  },

  {
    id: 'exp-paris8',
    type: 'experience',
    title: 'Stage Développement Web',
    organization: 'Université Paris 8',
    location: 'Paris, France',
    period: '05/2024 - 07/2024',
    description: [
      'Création d’un site web de gestion (professeurs / profils)',
      'Mise en place d’un système d’authentification et d’un espace admin',
      'Fonctionnalités CRUD et organisation des données'
    ],
    technologies: ['Python', 'Django', 'GoogleCloud']
  },

  {
    id: 'edu-bac',
    type: 'education',
    title: 'Bac Pro SN (Mention Bien)',
    organization: 'Lycée (Bac Pro Systèmes Numériques)',
    location: 'France',
    period: '2022',
    description: [
      'Obtention du Bac Pro SN (Mention Bien)',
      'Bases solides en informatique, systèmes et technologies numériques'
    ],
    technologies: ['Informatique', 'Systèmes', 'Réseau']
  },

  {
    id: 'exp-atoutfrance',
    type: 'experience',
    title: 'Stage Service Informatique',
    organization: 'Atout France',
    location: 'France',
    period: '11/2021 - 01/2022',
    description: [
      'Création de newsletters',
      'Conception de maquettes web',
      'Découverte des pratiques IT en environnement professionnel'
    ],
    technologies: ['Newsletter', 'Maquettes', 'Web']
  }
]

/**
 * STAT CARDS — ajout Bachelor + highlights cohérents
 */
export const statCards: StatCard[] = [
  {
    id: 'stat-1',
    category: 'stat',
    icon: 'PR',
    value: '10+',
    label: 'Projets réalisés',
    detail: 'Scolaires / alternance / perso',
    color: '#3CF2FF'
  },
  {
    id: 'stat-2',
    category: 'stat',
    icon: 'TK',
    value: '15+',
    label: 'Technologies pratiquées',
    detail: 'Front, back, DB, outils',
    color: '#3CF2FF'
  },
  {
    id: 'stat-3',
    category: 'stat',
    icon: 'XP',
    value: '2+ an',
    label: "d’expérience pro",
    detail: 'Alternances IFSI + Kletel',
    color: '#3CF2FF'
  },

  // Highlights
  {
    id: 'highlight-bachelor',
    category: 'highlight',
    icon: 'BA',
    value: 'Bachelor',
    label: 'Diplôme validé',
    detail: 'Ynov — Développement Web',
    color: '#FF2B2B'
  },
  {
    id: 'highlight-yshare',
    category: 'highlight',
    icon: 'YS',
    value: 'Yshare',
    label: 'Projet de validation',
    detail: 'Node.js / React / Tailwind / MySQL',
    color: '#FF2B2B'
  },
  {
    id: 'highlight-aimpress',
    category: 'highlight',
    icon: 'AI',
    value: 'Aimpress',
    label: 'Plateforme IA',
    detail: 'Web + API + workflows IA',
    color: '#FF2B2B'
  },

  // Stack
  {
    id: 'stack-1',
    category: 'stack',
    icon: 'RE',
    value: 'React',
    label: 'Front-end',
    detail: 'UI moderne & composants',
    color: '#61DAFB'
  },
  {
    id: 'stack-2',
    category: 'stack',
    icon: 'ND',
    value: 'Node.js',
    label: 'Back-end',
    detail: 'API REST & logique métier',
    color: '#68A063'
  },
  {
    id: 'stack-3',
    category: 'stack',
    icon: 'DB',
    value: 'MongoDB',
    label: 'Base de données',
    detail: 'Projets planning & Aimpress',
    color: '#4DB33D'
  },
  {
    id: 'stack-4',
    category: 'stack',
    icon: 'UI',
    value: 'Tailwind',
    label: 'UI / Style',
    detail: 'Design propre & rapide',
    color: '#38BDF8'
  },

  // Cert / Diplômes
  {
    id: 'cert-bac',
    category: 'cert',
    icon: 'BP',
    value: 'Bac Pro SN',
    label: 'Mention Bien',
    detail: 'Diplôme obtenu 2022',
    color: '#FFB020'
  },

  // Tools
  {
    id: 'tool-1',
    category: 'tool',
    icon: 'OP',
    value: 'Apache + SSL',
    label: 'Déploiement',
    detail: 'Serveurs + certificats',
    color: '#A259FF'
  },
  {
    id: 'tool-2',
    category: 'tool',
    icon: 'WP',
    value: 'WordPress',
    label: 'Maintenance',
    detail: 'Corrections & évolutions',
    color: '#A259FF'
  }
]

/**
 * SKILLS — basé sur tes % du portfolio (HTML/CSS/JS/SQL/React/Angular…)
 */
export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 90, category: 'frontend' },
  { name: 'CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'React', level: 65, category: 'frontend' },
  { name: 'Angular', level: 65, category: 'frontend' },
  { name: 'Vue.js', level: 40, category: 'frontend' },
  { name: 'Tailwind CSS', level: 70, category: 'frontend' },
  { name: 'Bootstrap', level: 80, category: 'frontend' },
  { name: 'Material UI', level: 65, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'PHP (Laravel/Symfony)', level: 70, category: 'backend' },
  { name: 'Python (Django/Flask)', level: 75, category: 'backend' },
  { name: '4D', level: 65, category: 'backend' },

  // Database
  { name: 'SQL', level: 90, category: 'database' },
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },

  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'WordPress', level: 75, category: 'tools' },

  // DevOps
  { name: 'Apache', level: 70, category: 'devops' },
  { name: 'SSL / Certificats', level: 70, category: 'devops' }
]

/**
 * TECH STACK — ce que tu utilises vraiment (cohérent alternance + projets)
 */
export const techStack = [
  { name: 'React', icon: 'RE', color: '#61DAFB' },
  { name: 'React Native', icon: 'RN', color: '#61DAFB' },
  { name: 'Node.js', icon: 'ND', color: '#68A063' },
  { name: 'Express', icon: 'EX', color: '#A8B3CF' },
  { name: 'Tailwind', icon: 'TW', color: '#38BDF8' },
  { name: 'MySQL', icon: 'MY', color: '#4479A1' },
  { name: 'MongoDB', icon: 'MO', color: '#4DB33D' },
  { name: '4D', icon: '4D', color: '#A8B3CF' },
  { name: 'WordPress', icon: 'WP', color: '#21759B' },
  { name: 'Apache', icon: 'AP', color: '#D22128' }
]
