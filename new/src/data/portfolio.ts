export type PortfolioProject = {
  id: string
  name: string
  field: string
  description: string
  contribution: string
  details: string[]
  stack: string[]
  image: string
  mobile?: string
  link?: string
  accent: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'planete-creche', name: 'Planète Crèche', field: 'Petite enfance · Web & mobile',
    description: 'Une plateforme qui relie gestionnaires, professionnels et familles autour du quotidien de la micro-crèche.',
    contribution: 'Conception de parcours métier, développement des interfaces web et mobile, intégration des rôles et des données de la structure.',
    details: ['Plannings et présences', 'Dossiers enfants et transmissions', 'Espace familles et pilotage'],
    stack: ['React', 'React Native', 'Node.js', 'MongoDB'],
    image: '/work/planete-web.png', mobile: '/work/planete-mobile.jpg', link: 'https://planete-creche.com', accent: 'creche',
  },
  {
    id: 'watchlist', name: 'Watchlist', field: 'Cinéma · Application mobile',
    description: 'Films, séries et animés réunis dans une expérience de découverte, de suivi et de partage.',
    contribution: 'Développement de l’application, de ses parcours de découverte, du suivi des œuvres et des fonctions sociales.',
    details: ['Progression et listes personnelles', 'Recommandations et sorties cinéma', 'Profils, échanges et mini-jeux'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    image: '/work/watchlist-mobile.jpg', mobile: '/work/watchlist-discovery.jpg', link: 'https://watchlist-uth1.onrender.com/', accent: 'watchlist',
  },
  {
    id: 'elan', name: 'Élan', field: 'Sport & nutrition · Application mobile',
    description: 'Un programme personnel qui suit le rythme réel des entraînements et rassemble séances, repas, courses et progression.',
    contribution: 'Conception et développement de l’application iOS avec stockage local et programme adaptable.',
    details: ['Séances et exercices', 'Recettes et liste de courses', 'Suivi des mesures'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Stockage local'],
    image: '/work/elan-mobile.jpg', accent: 'elan',
  },
  {
    id: 'nova', name: 'Nova', field: 'Agents IA · Web & mobile',
    description: 'Un espace pour confier des missions à des agents spécialisés, suivre les exécutions et garder une vue sur leurs coûts.',
    contribution: 'Interfaces de configuration, de suivi des missions et de lecture des résultats sur le web et le mobile.',
    details: ['Agents spécialisés', 'Budget par mission', 'Historique des exécutions'],
    stack: ['React', 'TypeScript', 'Node.js', 'API'],
    image: '/work/nova-web.jpg', link: 'https://alex-eliott.onrender.com', accent: 'nova',
  },
  {
    id: 'qualiecho', name: 'QualiÉcho', field: 'Questionnaires · Démonstration',
    description: 'Une démonstration d’outil pour recueillir les retours des familles, équipes et prestataires, puis suivre les actions d’amélioration.',
    contribution: 'Parcours de création des questionnaires, lecture des réponses et trame d’autoévaluation pour la petite enfance.',
    details: ['Questionnaires personnalisables', 'Résultats et campagnes', 'Autoévaluation et plan d’action'],
    stack: ['React Native', 'Expo', 'TypeScript'],
    image: '/work/qualiecho-mobile.jpg', link: 'https://qualiecho.onrender.com', accent: 'qualiecho',
  },
  {
    id: 'planete-immo', name: 'Planète Immo', field: 'Immobilier · Web & mobile',
    description: 'Biens, locataires, loyers et patrimoine immobilier dans une interface qui aide à suivre le quotidien et les décisions de long terme.',
    contribution: 'Développement des vues web et mobile, du cockpit patrimonial et des parcours de suivi locatif.',
    details: ['Parc et situations locatives', 'Loyers et documents', 'Cockpit patrimonial'],
    stack: ['React', 'React Native', 'TypeScript', 'API'],
    image: '/work/immo-web.jpg', mobile: '/work/immo-mobile.jpg', link: 'https://planete-immo.com', accent: 'immo',
  },
]
