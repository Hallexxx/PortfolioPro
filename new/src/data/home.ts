export const collaborations = [
  { name: 'CHU Toulouse', logo: 'CHU' },
  { name: 'BGE', logo: 'BGE' },
  { name: 'StartupLab', logo: 'SL' },
  { name: 'TechCorp', logo: 'TC' },
  { name: 'DesignStudio', logo: 'DS' },
]

export const services = [
  {
    icon: 'Code2',
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
    icon: 'Server',
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
    icon: 'Zap',
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
    icon: 'Palette',
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
    icon: 'Search'
  },
  {
    number: '02',
    title: 'Concevoir',
    description: 'Architecture, maquettes, design système et validation',
    icon: 'Figma'
  },
  {
    number: '03',
    title: 'Développer',
    description: 'Code propre, tests, intégration et déploiement continu',
    icon: 'Code'
  },
  {
    number: '04',
    title: 'Optimiser',
    description: 'Monitoring, amélioration continue et évolution',
    icon: 'TrendingUp'
  }
]

export const featuredCaseStudy = {
  title: 'Yshare — Plateforme d’événements',
  client: 'Projet de validation (Bachelor Ynov)',
  tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MySQL'],
  description:
    "Développement d’une plateforme d’événements permettant de créer, commenter et participer à des événements. Projet full-stack avec une UI moderne et une API REST.",
  image:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop',
  results: [
    { label: 'Fonctionnalités', value: 'CRUD complet', icon: 'Zap' },
    { label: 'Expérience', value: 'UI moderne', icon: 'Star' },
    { label: 'Architecture', value: 'API REST', icon: 'Clock' },
  ],
  links: {
    project: '/projets',
    article: '/blog/yshare-case-study',
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
