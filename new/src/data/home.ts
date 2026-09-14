export const collaborations = [
  { name: 'CHU Toulouse', logo: 'CHU' },
  { name: 'BGE', logo: 'BGE' },
  { name: 'StartupLab', logo: 'SL' },
  { name: 'TechCorp', logo: 'TC' },
  { name: 'DesignStudio', logo: 'DS' },
]

export const services = [
  {
    color: '#3CF2FF',
    title: 'Front-end moderne',
    description:
      'Interfaces rapides, propres et animées pour des sites vitrines, portfolios ou applications web.',
    features: [
      'React + composants réutilisables',
      'Animations (Framer Motion) & transitions',
      'UI responsive (desktop / mobile)',
      'Intégration Tailwind / design moderne',
    ],
  },
  {
    color: '#68A063',
    title: 'Back-end & API',
    description:
      'Développement d’API et de logique métier pour des applications complètes (web & mobile).',
    features: [
      'Node.js / Express (API REST)',
      'Connexion BDD (MySQL / MongoDB)',
      'Intégration de services & endpoints',
      'Déjà utilisé aussi : PHP (Laravel/Symfony), Python (Django/Flask), 4D, Java',
    ],
  },
  {
    color: '#FF2B2B',
    title: 'Apps & automatisation',
    description:
      'Applications mobiles et fonctionnalités “productivité” inspirées de cas réels (IA, outils, workflows).',
    features: [
      'React Native (app mobile)',
      'Approche full-stack (web + API)',
      'Optimisation perf & UX',
    ],
  },
  {
    color: '#38BDF8',
    title: 'Déploiement & maintenance',
    description:
      'Mise en ligne, configuration, maintenance et amélioration continue de projets existants.',
    features: [
      'Serveurs Apache + certificats SSL',
      'Maintenance WordPress (bugs + évolutions)',
      'Corrections & refonte de pages',
      'Bonnes pratiques & fiabilité',
    ],
  },
]


export const processSteps = [
  {
    number: '01',
    title: 'Comprendre',
    description: 'Analyse du besoin, objectifs, cible et contraintes',
  },
  {
    number: '02',
    title: 'Concevoir',
    description: 'Architecture, maquettes, design système et validation',
  },
  {
    number: '03',
    title: 'Développer',
    description: 'Code propre, tests, intégration et déploiement continu',
  },
  {
    number: '04',
    title: 'Optimiser',
    description: 'Monitoring, amélioration continue et évolution',
  }
]

export const featuredCaseStudy = {
  title: 'Planete Creche — gestion micro-crèches',
  client: 'Reference produit metier',
  tags: ['Angular', 'Laravel', 'PHP', 'MySQL', 'RBAC', 'i18n'],
  description:
    "Plateforme de gestion pour micro-crèches avec enfants, employés, plannings, roles, contraintes de ratio et interface multilingue.",
  image: '/logoo.png',
  results: [
    { label: 'Gestion', value: 'CRUD complet' },
    { label: 'Metier', value: 'Ratio 1/3' },
    { label: 'Architecture', value: 'API REST' },
  ],
  links: {
    project: '/projets',
  },
}


export const techStack = {
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'React Native',
    'Angular',
    'Vue.js',
    'Tailwind CSS',
    'Bootstrap',
    'Framer Motion',
  ],
  backend: [
    'Node.js',
    'Express',
    'REST API',
    '4D (backend + BDD)',
    'PHP (Laravel, Symfony)',
    'Python (Django, Flask)',
    'Java',
  ],
  database: [
    'MySQL',
    'MongoDB',
    'SQL',
    '4D',
  ],
  tools: [
    'Git',
    'VS Code',
    'Postman',
    'Eclipse',
    'Figma',
  ],
  devops: [
    'Apache',
    'SSL / Certificats',
    'Déploiement (serveur)',
    'Maintenance WordPress',
  ]
}


export const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'CEO, TechStart',
    company: 'TechStart',
    rating: 5,
    text: 'Un développeur exceptionnel qui allie compétences techniques et sens du design. Notre plateforme a été livrée en avance et dépasse nos attentes.',
    avatar: 'MD'
  },
  {
    name: 'Pierre Martin',
    role: 'CTO, DataFlow',
    company: 'DataFlow',
    rating: 5,
    text: 'Code propre, architecture solide et communication excellente. Je recommande vivement pour des projets complexes nécessitant rigueur et créativité.',
    avatar: 'PM'
  },
  {
    name: 'Sophie Laurent',
    role: 'Product Manager, DesignHub',
    company: 'DesignHub',
    rating: 5,
    text: 'Une collaboration fluide et un résultat au-delà de nos espérances. L\'attention portée aux détails et la réactivité font toute la différence.',
    avatar: 'SL'
  }
]
