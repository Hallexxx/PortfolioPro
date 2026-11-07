export type CaseLink = { label: string; url: string }
export type CaseFeature = { num: string; title: string; text: string }
export type CaseShot = { src: string; caption: string }
export type CaseFaq = { q: string; a: string }
export type CaseCard = { tag: string; title: string; text: string; image?: string; alt?: string; url?: string; small?: string }
export type CaseDeepdive = {
  index: string
  title: string
  titleEm: string
  text: string
  layout: 'phone' | 'web' | 'grid'
  cards: CaseCard[]
  stage?: { image: string; alt: string; url: string }
  ribbon?: { tag: string; title: string; text: string; images: { image: string; alt: string }[] }
  note?: { title: string; text: string }
}
export type CaseStudy = {
  slug: string
  portfolioId?: string
  name: string
  num: string
  kind: string
  status: string
  accent: string
  icon?: string
  eyebrow: string
  title: string
  lead: string
  intro: string
  introText: string
  stack: string[]
  hero: { desktop?: string; desktop2?: string; phone?: string; phone2?: string; chip?: string }
  features: CaseFeature[]
  steps: CaseFeature[]
  shots: CaseShot[]
  galleryKind: 'phone' | 'flat' | 'concept'
  mobileShots?: CaseShot[]
  imageLabel: string
  pricing: string
  pricingNote: string
  links: CaseLink[]
  qr?: { src: string; text: string }
  faq: CaseFaq[]
  deepdive?: CaseDeepdive
}

export const caseStudies: CaseStudy[] = [
  {
    "slug": "planete-creche",
    "portfolioId": "planete-creche",
    "name": "Planète Crèche",
    "num": "01",
    "kind": "Petite enfance",
    "status": "Disponible",
    "accent": "creche",
    "icon": "/cases/planete-icon.png",
    "eyebrow": "Le quotidien des crèches, plus fluide",
    "title": "La crèche, enfin reliée.",
    "lead": "Planète Crèche réunit gestionnaires, équipes et familles dans un même espace. Plannings, dossiers, transmissions et communication avancent enfin ensemble.",
    "intro": "Toute la vie de la micro-crèche au même endroit.",
    "introText": "Une plateforme web et mobile pensée pour relier la direction, les professionnels et les parents autour d'informations fiables, utiles et accessibles au bon moment.",
    "stack": [
      "React",
      "React Native",
      "Node.js",
      "MongoDB"
    ],
    "hero": {
      "phone": "/cases/planete-native-accueil.jpg",
      "phone2": "/cases/planete-native-planning.jpg"
    },
    "features": [
      {
        "num": "01",
        "title": "Piloter sereinement",
        "text": "Visualisez les plannings prévus et réalisés, les présences, les demandes d'absence, les dossiers enfants et les informations d'équipe."
      },
      {
        "num": "02",
        "title": "Accompagner chaque enfant",
        "text": "Retrouvez les informations de santé, PAI, allergies, documents et transmissions de la journée : repas, siestes, changes et activités."
      },
      {
        "num": "03",
        "title": "Rester proches des familles",
        "text": "Partagez messages, photos, documents et actualités dans un espace parent dédié, avec des accès adaptés à chaque rôle."
      }
    ],
    "steps": [
      {
        "num": "01",
        "title": "Organisez",
        "text": "Préparez les plannings et les dossiers."
      },
      {
        "num": "02",
        "title": "Vivez la journée",
        "text": "Pointez, transmettez et échangez."
      },
      {
        "num": "03",
        "title": "Gardez une vue claire",
        "text": "Retrouvez l'activité de la structure en temps réel."
      }
    ],
    "shots": [
      {
        "src": "/cases/planete-native-accueil.jpg",
        "caption": "Accueil"
      },
      {
        "src": "/cases/planete-native-planning.jpg",
        "caption": "Planning"
      },
      {
        "src": "/cases/planete-native-enfant.jpg",
        "caption": "Fiche enfant"
      },
      {
        "src": "/cases/planete-native-presences.jpg",
        "caption": "Présences"
      }
    ],
    "galleryKind": "phone",
    "mobileShots": [],
    "imageLabel": "Captures prises dans Planète Crèche sur simulateur iPhone, compte de démonstration",
    "pricing": "Voir les formules",
    "pricingNote": "Les prix et formules à jour sont publiés sur le site officiel. L'accès à l'application nécessite un compte Planète Crèche.",
    "links": [
      {
        "label": "Ouvrir le site web",
        "url": "https://planete-creche.com"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.planetecreche.mobile"
      },
      {
        "label": "Voir les tarifs",
        "url": "https://planete-creche.com/tarifs"
      }
    ],
    "qr": {
      "src": "/cases/qr-planete.svg",
      "text": "Scanner pour découvrir Planète Crèche"
    },
    "faq": [
      {
        "q": "À qui s'adresse Planète Crèche ?",
        "a": "Aux gestionnaires de micro-crèches, aux professionnels et aux parents, avec des fonctions adaptées à chaque rôle."
      },
      {
        "q": "L'application fonctionne-t-elle avec le site web ?",
        "a": "Oui. L'application mobile se synchronise avec la plateforme web Planète Crèche."
      },
      {
        "q": "Que peut suivre la direction sur le web ?",
        "a": "La direction retrouve les plannings, les présences, les préinscriptions, les factures familles et des indicateurs de pilotage dans son espace web."
      },
      {
        "q": "Les familles peuvent-elles demander une place ?",
        "a": "L'espace web permet de suivre les préinscriptions et de préparer l'envoi d'un formulaire aux parents."
      },
      {
        "q": "Peut-on créer le site de sa micro-crèche ?",
        "a": "Oui. Un outil de création de site vitrine avec plusieurs modèles est disponible dans l'espace web."
      },
      {
        "q": "Faut-il un compte ?",
        "a": "Oui. L'application nécessite un compte Planète Crèche."
      }
    ],
    "deepdive": {
      "index": "Planète Crèche sur le web",
      "title": "Toute la structure.",
      "titleEm": "Une seule vue.",
      "text": "L'expérience continue sur ordinateur. Captures prises dans le compte de démonstration professionnel, sans données de familles ni de salariés.",
      "layout": "web",
      "cards": [
        {
          "tag": "01 / Organiser",
          "title": "Une semaine en un regard",
          "text": "Le tableau de bord rapproche les créneaux des enfants et des professionnels, avec des vues jour, semaine et mois.",
          "image": "/cases/planete-web-dashboard.png",
          "alt": "Tableau de bord web et planning hebdomadaire de Planète Crèche",
          "url": "planete-creche.com"
        },
        {
          "tag": "02 / Piloter",
          "title": "Les chiffres au bon endroit",
          "text": "Factures familles, places libres, paie mensuelle, alertes et registre santé se retrouvent dans le pilotage quotidien.",
          "image": "/cases/planete-web-pilotage.png",
          "alt": "Pilotage quotidien et facturation sur Planète Crèche web",
          "url": "planete-creche.com"
        },
        {
          "tag": "03 / Accueillir",
          "title": "Des demandes mieux suivies",
          "text": "L'espace préinscriptions centralise les demandes et propose un formulaire à transmettre aux familles.",
          "image": "/cases/planete-web-preinscriptions.png",
          "alt": "Suivi web des préinscriptions Planète Crèche",
          "url": "planete-creche.com"
        },
        {
          "tag": "04 / Rayonner",
          "title": "Un site pour la structure",
          "text": "Des modèles de sites vitrines permettent de présenter sa micro-crèche et de préparer une présence web à son image.",
          "image": "/cases/planete-web-sites.png",
          "alt": "Créateur de site vitrine dans Planète Crèche",
          "url": "planete-creche.com"
        }
      ]
    }
  },
  {
    "slug": "watchlist",
    "portfolioId": "watchlist",
    "name": "Watchlist",
    "num": "02",
    "kind": "Cinéma & culture",
    "status": "Disponible",
    "accent": "watchlist",
    "icon": "/cases/watchlist-icon.png",
    "eyebrow": "Pour celles et ceux qui vivent les histoires à fond",
    "title": "Le cinéma se vit mieux ensemble.",
    "lead": "Films, séries, animés, amis : Watchlist rassemble tout ce qui nourrit votre passion pour les histoires. Gardez le fil de vos découvertes et trouvez votre prochain coup de cœur.",
    "intro": "Votre univers cinéma, enfin à votre image.",
    "introText": "Une bibliothèque personnelle qui suit vos envies, une progression claire pour vos séries et un espace social où chaque recommandation vient de personnes qui vous connaissent.",
    "stack": [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase"
    ],
    "hero": {
      "phone": "/cases/watchlist-live-accueil.jpg",
      "phone2": "/cases/watchlist-live-catalogue.jpg"
    },
    "features": [
      {
        "num": "01",
        "title": "Tout garder en mémoire",
        "text": "Ajoutez vos films, séries et animés, suivez vos épisodes, notez vos œuvres et retrouvez ce que vous souhaitez regarder."
      },
      {
        "num": "02",
        "title": "Choisir sans tourner en rond",
        "text": "Explorez le catalogue, les bandes-annonces, les plateformes et les séances de cinéma. Des recommandations s'adaptent à vos goûts et à votre humeur."
      },
      {
        "num": "03",
        "title": "Partager la passion",
        "text": "Profils, amis, messages, appels, avis, quiz et jeux donnent une vraie place aux échanges autour du cinéma."
      }
    ],
    "steps": [
      {
        "num": "01",
        "title": "Explorez",
        "text": "Cherchez une œuvre ou laissez-vous inspirer."
      },
      {
        "num": "02",
        "title": "Suivez",
        "text": "Enregistrez vos envies et votre progression."
      },
      {
        "num": "03",
        "title": "Partagez",
        "text": "Retrouvez les goûts de vos amis et échangez."
      }
    ],
    "shots": [
      {
        "src": "/cases/watchlist-live-accueil.jpg",
        "caption": "Accueil"
      },
      {
        "src": "/cases/watchlist-live-catalogue.jpg",
        "caption": "Catalogue"
      },
      {
        "src": "/cases/watchlist-live-sorties.jpg",
        "caption": "Sorties"
      },
      {
        "src": "/cases/watchlist-live-film.jpg",
        "caption": "Fiche film"
      }
    ],
    "galleryKind": "phone",
    "mobileShots": [],
    "imageLabel": "Captures prises dans Watchlist sur simulateur iPhone",
    "pricing": "Gratuit",
    "pricingNote": "Téléchargement gratuit. L'application peut afficher des publicités et proposer des achats intégrés selon les plateformes.",
    "links": [
      {
        "label": "Ouvrir le site web",
        "url": "https://watchlist-uth1.onrender.com/"
      },
      {
        "label": "App Store",
        "url": "https://apps.apple.com/fr/app/watchlist/id6767681028"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.watchlist.cinememory.app"
      }
    ],
    "qr": {
      "src": "/cases/qr-watchlist.svg",
      "text": "Scanner pour ouvrir l'App Store"
    },
    "faq": [
      {
        "q": "L'application est-elle gratuite ?",
        "a": "Oui, le téléchargement de Watchlist est gratuit."
      },
      {
        "q": "Puis-je suivre les séries épisode par épisode ?",
        "a": "Oui. Vous pouvez marquer votre progression et reprendre une série là où vous l'avez laissée."
      },
      {
        "q": "Comment choisir quoi regarder ce soir ?",
        "a": "Un questionnaire court tient compte de votre humeur, du temps disponible et de la compagnie pour vous proposer des idées adaptées."
      },
      {
        "q": "Quels jeux trouve-t-on dans Watchlist ?",
        "a": "L'Arcade propose notamment des quiz thématiques, des défis visuels et des jeux à partager avec vos amis."
      },
      {
        "q": "Puis-je préparer une sortie au cinéma ?",
        "a": "Oui. Retrouvez les sorties et les séances, puis consultez les cinémas et les fiches des œuvres qui vous intéressent."
      },
      {
        "q": "Puis-je retrouver mes amis ?",
        "a": "Oui. Watchlist propose des profils, une dimension sociale et une messagerie."
      }
    ],
    "deepdive": {
      "index": "Watchlist, de plus près",
      "title": "Trouvez. Jouez.",
      "titleEm": "Vibrez.",
      "text": "Trois façons d'aller plus loin que sa liste de films. Captures prises dans Watchlist sur simulateur iPhone.",
      "layout": "phone",
      "cards": [
        {
          "tag": "01 / Décider",
          "title": "Quoi regarder ce soir ?",
          "text": "Répondez à quelques questions sur votre envie du moment, puis piochez parmi des propositions adaptées à votre temps et à votre humeur.",
          "image": "/cases/watchlist-live-quoi-voir.jpg",
          "alt": "Questionnaire Quoi regarder ce soir dans Watchlist"
        },
        {
          "tag": "02 / Jouer",
          "title": "L'Arcade entre amis",
          "text": "Mot secret, défis du jour, dessin et jeux à plusieurs : la passion des films devient un terrain de jeu à partager.",
          "image": "/cases/watchlist-live-arcade.jpg",
          "alt": "Arcade et jeux multijoueurs Watchlist"
        },
        {
          "tag": "03 / Se défier",
          "title": "Des quiz par univers",
          "text": "Retrouvez des quiz autour de vos sagas préférées, avec modes de jeu, scores, expérience et badges.",
          "image": "/cases/watchlist-live-quiz.jpg",
          "alt": "Quiz thématiques Watchlist"
        }
      ],
      "ribbon": {
        "tag": "04 / Sortir",
        "title": "Le cinéma fait aussi partie du programme.",
        "text": "Parcourez les prochaines sorties et les séances, puis ouvrez les fiches des œuvres pour explorer leurs détails avant de choisir votre soirée.",
        "images": [
          {
            "image": "/cases/watchlist-live-sorties.jpg",
            "alt": "Écran des sorties dans Watchlist"
          },
          {
            "image": "/cases/watchlist-live-film.jpg",
            "alt": "Fiche détaillée d'un film dans Watchlist"
          }
        ]
      }
    }
  },
  {
    "slug": "elan",
    "portfolioId": "elan",
    "name": "Élan",
    "num": "03",
    "kind": "Sport & nutrition",
    "status": "App personnelle",
    "accent": "elan",
    "icon": "/cases/elan-icon.png",
    "eyebrow": "Un jour à la fois, une répétition après l'autre",
    "title": "L'énergie de continuer.",
    "lead": "Élan accompagne l'entraînement et l'alimentation au quotidien : séances adaptables, recettes, courses et progression dans une seule application personnelle.",
    "intro": "Une routine qui suit la vraie vie.",
    "introText": "Le programme s'ajuste au rythme des séances réellement terminées. Les charges, les repas et les mesures restent lisibles au même endroit, sans compte ni abonnement.",
    "stack": [
      "React Native",
      "Expo",
      "TypeScript",
      "Stockage local"
    ],
    "hero": {
      "desktop": "/cases/elan-accueil.jpg",
      "desktop2": "/cases/elan-seances.jpg"
    },
    "features": [
      {
        "num": "01",
        "title": "S'entraîner avec souplesse",
        "text": "Cinq séances et deux jours de récupération, des variantes d'exercices, des séances libres et un chrono de repos. Une séance non terminée se décale naturellement."
      },
      {
        "num": "02",
        "title": "Manger sans improviser",
        "text": "Un planning de repas, 97 recettes, un journal alimentaire et une liste de courses ajustée aux portions et au stock."
      },
      {
        "num": "03",
        "title": "Voir le chemin parcouru",
        "text": "Retrouvez l'historique, les charges, le volume d'entraînement, les mesures et les photos de progression conservées sur l'appareil."
      }
    ],
    "steps": [
      {
        "num": "01",
        "title": "Préparez",
        "text": "Choisissez la séance et les repas de la semaine."
      },
      {
        "num": "02",
        "title": "Avancez",
        "text": "Consignez les séries, charges et repas réellement pris."
      },
      {
        "num": "03",
        "title": "Relisez",
        "text": "Suivez vos progrès et ajustez sans perdre l'historique."
      }
    ],
    "shots": [
      {
        "src": "/cases/elan-accueil.jpg",
        "caption": "Accueil"
      },
      {
        "src": "/cases/elan-seances.jpg",
        "caption": "Explorer"
      },
      {
        "src": "/cases/elan-recettes.jpg",
        "caption": "Organiser"
      },
      {
        "src": "/cases/elan-catalogue.jpg",
        "caption": "Suivre"
      }
    ],
    "galleryKind": "flat",
    "mobileShots": [
      {
        "src": "/cases/elan-mobile-accueil.jpg",
        "caption": "Accueil"
      },
      {
        "src": "/cases/elan-mobile-seances.jpg",
        "caption": "Programme"
      },
      {
        "src": "/cases/elan-mobile-seance-detail.jpg",
        "caption": "Séance"
      },
      {
        "src": "/cases/elan-mobile-recettes.jpg",
        "caption": "Repas"
      },
      {
        "src": "/cases/elan-mobile-courses.jpg",
        "caption": "Courses"
      }
    ],
    "imageLabel": "Captures réelles de l'aperçu web d'Élan",
    "pricing": "Gratuit",
    "pricingNote": "Projet personnel sans compte ni abonnement. L'application n'est pas encore publiée sur une boutique ; son installation iOS passe actuellement par Xcode.",
    "links": [],
    "faq": [
      {
        "q": "Élan est-elle téléchargeable ?",
        "a": "Pas encore sur une boutique publique. L'application peut être installée sur iPhone depuis son projet Xcode."
      },
      {
        "q": "Faut-il créer un compte ?",
        "a": "Non. Les données restent sur l'appareil et peuvent être exportées manuellement."
      },
      {
        "q": "Que se passe-t-il si je reporte une séance ?",
        "a": "Le programme avance selon les séances réellement terminées : une séance manquée peut être reprise sans perdre le fil."
      },
      {
        "q": "L'application aide-t-elle aussi pour les repas ?",
        "a": "Oui. Elle réunit recettes, planification des repas, journal alimentaire et liste de courses ajustée aux portions."
      },
      {
        "q": "L'application est-elle gratuite ?",
        "a": "Oui, le projet personnel ne nécessite aucun abonnement."
      }
    ]
  },
  {
    "slug": "nova",
    "portfolioId": "nova",
    "name": "Nova",
    "num": "04",
    "kind": "Agents IA & pilotage",
    "status": "Web disponible",
    "accent": "nova",
    "eyebrow": "L'intelligence artificielle sous contrôle",
    "title": "Vos agents IA. Votre budget.",
    "lead": "Nova réunit des agents IA spécialisés dans un espace de travail clair. Décrivez une mission, choisissez les outils et gardez la maîtrise de chaque dépense avant son lancement.",
    "intro": "Une équipe d'agents, un cadre précis.",
    "introText": "Marketing, recherche, documents ou tâches transverses : Nova aide à confier le bon travail au bon agent. Les coûts sont estimés et les crédits réservés avant l'exécution, puis le montant réellement consommé reste visible.",
    "stack": [
      "React",
      "TypeScript",
      "Node.js",
      "API"
    ],
    "hero": {
      "desktop": "/cases/nova-web-vitrine.jpg",
      "phone": "/cases/nova-mobile-agent-dark.jpg",
      "chip": "Budget sous contrôle"
    },
    "features": [
      {
        "num": "01",
        "title": "Des agents pour chaque mission",
        "text": "Choisissez un agent métier, renseignez l'objectif et les sources utiles, puis retrouvez ses échanges et ses résultats au même endroit."
      },
      {
        "num": "02",
        "title": "Un budget fixé avant de lancer",
        "text": "Nova vérifie que le solde couvre le plafond prévu avant l'exécution. Les crédits non utilisés sont rendus au portefeuille et chaque coût reste traçable."
      },
      {
        "num": "03",
        "title": "Une activité vraiment lisible",
        "text": "Suivez les missions en cours, terminées ou en attente, leurs durées et leurs dépenses depuis le tableau de bord, le registre et l'historique."
      },
      {
        "num": "04",
        "title": "Des validations au bon moment",
        "text": "La mission peut demander une approbation avant son lancement. Les espaces et les droits d'équipe aident à organiser le travail partagé."
      }
    ],
    "steps": [
      {
        "num": "01",
        "title": "Décrivez",
        "text": "Formulez le résultat attendu et choisissez votre agent."
      },
      {
        "num": "02",
        "title": "Estimez",
        "text": "Vérifiez le plafond et les crédits réservés."
      },
      {
        "num": "03",
        "title": "Suivez",
        "text": "Lisez le résultat, l'activité et le coût réel."
      }
    ],
    "shots": [
      {
        "src": "/cases/nova-mobile-agents.jpg",
        "caption": "Équipe d'agents"
      },
      {
        "src": "/cases/nova-mobile-agent-dark.jpg",
        "caption": "Fiche et mission"
      },
      {
        "src": "/cases/nova-mobile-activite.jpg",
        "caption": "Activité et coûts"
      }
    ],
    "galleryKind": "phone",
    "mobileShots": [],
    "imageLabel": "Captures réelles de Nova sur simulateur iPhone, compte de démonstration",
    "pricing": "Offre gratuite",
    "pricingNote": "Le site Nova annonce une offre de découverte gratuite sans carte bancaire. Les crédits inclus et les formules à jour sont détaillés sur son site officiel.",
    "links": [
      {
        "label": "Découvrir le site Nova",
        "url": "https://alex-eliott.onrender.com"
      }
    ],
    "faq": [
      {
        "q": "À quoi sert Nova ?",
        "a": "Nova permet de confier des missions à des agents IA spécialisés, avec une visibilité sur leurs outils, leurs résultats et leurs coûts."
      },
      {
        "q": "Peut-on fixer un budget par mission ?",
        "a": "Oui. Le plafond est vérifié avant l'exécution ; si le solde est insuffisant, la mission ne démarre pas."
      },
      {
        "q": "Que deviennent les crédits non utilisés ?",
        "a": "La part réservée mais non consommée est rendue au portefeuille après la mission."
      },
      {
        "q": "Nova fonctionne-t-elle sur téléphone ?",
        "a": "Une application mobile Nova fonctionne dans le projet et a été capturée sur simulateur iPhone. Aucune publication sur une boutique mobile n'est annoncée ici."
      },
      {
        "q": "Existe-t-il une offre gratuite ?",
        "a": "Le site Nova présente une enveloppe de découverte gratuite, sans carte bancaire. Consultez les conditions et les tarifs en vigueur sur le site officiel."
      },
      {
        "q": "Puis-je suivre l'activité des agents ?",
        "a": "Oui. Le tableau de bord, l'historique et le registre présentent les exécutions et leurs coûts."
      }
    ],
    "deepdive": {
      "index": "Nova sur le web",
      "title": "La vue d'ensemble.",
      "titleEm": "Sans perdre le détail.",
      "text": "Le site présente le principe des budgets plafonnés. Dans l'espace connecté, retrouvez les crédits disponibles et votre équipe d'agents. Captures prises dans Nova en local avec le compte de démonstration.",
      "layout": "web",
      "stage": {
        "image": "/cases/nova-web-vitrine.jpg",
        "alt": "Site Nova sur ordinateur : agents IA et budget plafonné",
        "url": "alex-eliott.onrender.com"
      },
      "cards": [
        {
          "tag": "01 / Piloter",
          "title": "Un centre de commande clair.",
          "text": "Le tableau de bord montre les agents actifs, les crédits et les raccourcis vers les missions. L'essentiel apparaît dès l'arrivée.",
          "image": "/cases/nova-web-dashboard.jpg",
          "alt": "Tableau de bord web Nova avec crédits et équipe",
          "url": "Nova · tableau de bord"
        },
        {
          "tag": "02 / Collaborer",
          "title": "Chaque agent a son métier.",
          "text": "Ouvrez la fiche d'un agent pour discuter, définir une mission et suivre son activité. Nova garde les échanges dans le même espace.",
          "image": "/cases/nova-web-agents.jpg",
          "alt": "Liste des agents sur l'interface web Nova",
          "url": "Nova · agents"
        }
      ]
    }
  },
  {
    "slug": "qualiecho",
    "portfolioId": "qualiecho",
    "name": "QualiÉcho",
    "num": "05",
    "kind": "Écoute & qualité",
    "status": "Démo interactive",
    "accent": "qualiecho",
    "icon": "/cases/qualiecho-icon.png",
    "eyebrow": "Écouter, comprendre, améliorer",
    "title": "Chaque retour mérite de devenir une action.",
    "lead": "QualiÉcho est une application mobile de démonstration pour créer des questionnaires, lire les réponses, préparer des campagnes, s'autoévaluer et suivre les actions d'amélioration.",
    "intro": "Une boucle d'écoute complète pour la petite enfance.",
    "introText": "La démonstration réunit questionnaires personnalisables, réponses fictives, trame d'autoévaluation et plan d'action. L'envoi à distance et les relances automatiques attendent encore un service sécurisé.",
    "stack": [
      "React Native",
      "Expo",
      "TypeScript"
    ],
    "hero": {
      "phone": "/cases/qualiecho-home.jpg",
      "phone2": "/cases/qualiecho-surveys.jpg"
    },
    "features": [
      {
        "num": "01",
        "title": "Composer les questionnaires",
        "text": "Créez des questions à échelle, à choix ou à réponse libre pour les familles, l'équipe et les prestataires. Choisissez une réponse nominative ou sans identité."
      },
      {
        "num": "02",
        "title": "Préparer les campagnes",
        "text": "Définissez une audience et une cadence de rappels aux non-répondants. Dans cette version, la préparation est locale : aucun envoi ni rappel automatique n'est déclenché."
      },
      {
        "num": "03",
        "title": "Lire les retours",
        "text": "Consultez les réponses de démonstration, les distributions par question et les tendances à partir de cinq réponses. Une invitation identique à l'avis public peut être préparée pour tous."
      },
      {
        "num": "04",
        "title": "Évaluer et agir",
        "text": "Parcourez 19 critères d'autoévaluation répartis en six champs, puis suivez un plan d'action avec responsable, échéance et historique."
      }
    ],
    "steps": [
      {
        "num": "01",
        "title": "Composez",
        "text": "Choisissez le public et adaptez les questions."
      },
      {
        "num": "02",
        "title": "Explorez",
        "text": "Lisez les réponses de démonstration et préparez une campagne."
      },
      {
        "num": "03",
        "title": "Agissez",
        "text": "Documentez l'autoévaluation et suivez les améliorations."
      }
    ],
    "shots": [
      {
        "src": "/cases/qualiecho-home.jpg",
        "caption": "Accueil"
      },
      {
        "src": "/cases/qualiecho-surveys.jpg",
        "caption": "Enquêtes"
      },
      {
        "src": "/cases/qualiecho-builder.jpg",
        "caption": "Éditeur"
      },
      {
        "src": "/cases/qualiecho-campaign.jpg",
        "caption": "Diffusion et relances"
      },
      {
        "src": "/cases/qualiecho-stats.jpg",
        "caption": "Statistiques"
      },
      {
        "src": "/cases/qualiecho-evaluation.jpg",
        "caption": "Autoévaluation"
      },
      {
        "src": "/cases/qualiecho-actions.jpg",
        "caption": "Plan d'action"
      },
      {
        "src": "/cases/qualiecho-survey-detail.jpg",
        "caption": "Résultats par question"
      }
    ],
    "galleryKind": "phone",
    "mobileShots": [],
    "imageLabel": "Captures de QualiÉcho sur simulateur iPhone, données fictives",
    "pricing": "À définir",
    "pricingNote": "La démonstration locale est gratuite. Aucune offre commerciale ni disponibilité sur l'App Store ou Google Play n'est annoncée à ce jour.",
    "links": [
      {
        "label": "Ouvrir le site web",
        "url": "https://qualiecho.onrender.com"
      },
      {
        "label": "Référentiel national",
        "url": "https://www.caf.fr/sites/default/files/medias/511/Partenaires/Petite_enfance/Referentiel-national-qualite-accueil-jeune-enfant-2025.pdf"
      }
    ],
    "faq": [
      {
        "q": "QualiÉcho est-elle sur les boutiques ?",
        "a": "Non. Une démonstration mobile fonctionne localement, mais l'application n'est pas encore publiée sur l'App Store ou Google Play."
      },
      {
        "q": "Peut-on adapter un questionnaire aux familles, équipes et prestataires ?",
        "a": "Oui. La démonstration permet de composer des questions à échelle, à choix ou à réponse libre et de choisir une réponse nominative ou sans identité."
      },
      {
        "q": "Les campagnes envoient-elles déjà des questionnaires ?",
        "a": "Non. L'application permet de préparer une campagne et ses rappels. L'envoi réel et la réception à distance nécessitent un service sécurisé qui reste à connecter."
      },
      {
        "q": "Les réponses sont-elles réelles dans la démonstration ?",
        "a": "Non. Les exemples affichés sont fictifs pour montrer la lecture des résultats sans exposer de données personnelles."
      },
      {
        "q": "Les avis Google sont-ils publiés automatiquement ?",
        "a": "Non. Une réponse privée ne devient jamais automatiquement un avis public. Chacun choisit librement de publier son propre avis sur la plateforme concernée."
      },
      {
        "q": "L'outil remplace-t-il un contrôle de la PMI ?",
        "a": "Non. L'autoévaluation aide à préparer les échanges et les plans d'action, sans attester d'une conformité réglementaire."
      }
    ],
    "deepdive": {
      "index": "Des questionnaires utiles",
      "title": "Poser les bonnes questions.",
      "titleEm": "Au bon public.",
      "text": "Des modèles à personnaliser, avec questions ouvertes, échelles, choix multiples et réponses anonymes lorsque le contexte le permet.",
      "layout": "grid",
      "cards": [
        {
          "tag": "01 / Familles",
          "title": "La qualité perçue",
          "text": "Accueil du matin et du soir, confiance, communication, activités, repas et sentiment que chaque enfant est écouté.",
          "small": "Exemple : « Votre enfant se sent-il accueilli sereinement ? »"
        },
        {
          "tag": "02 / Équipes",
          "title": "Le vécu des salariées",
          "text": "Charge de travail, sécurité psychologique, coopération, besoins de formation et ressenti sur l'accueil des enfants.",
          "small": "Exemple : « Avez-vous le temps d'accueillir chaque enfant comme vous le souhaitez ? »"
        },
        {
          "tag": "03 / Prestataires",
          "title": "La collaboration",
          "text": "Qualité du service, délais, coordination, communication et points à améliorer avec les partenaires de la structure.",
          "small": "Exemple : « Les consignes et attentes sont-elles suffisamment claires ? »"
        },
        {
          "tag": "04 / Autoévaluation",
          "title": "Préparer les échanges avec la PMI",
          "text": "Une trame de réflexion appuyée sur le référentiel national de qualité : relation à l'enfant, parents, organisation, prévention et conditions de travail.",
          "small": "Un support de préparation, pas une certification de conformité."
        }
      ],
      "note": {
        "title": "Des avis publics, librement choisis.",
        "text": "Chaque répondant peut recevoir la même invitation à publier son avis sur Google ou une autre plateforme compatible. La réponse privée reste distincte de l'avis public : aucune publication automatique, aucun tri selon la note."
      }
    }
  },
  {
    "slug": "immo-compta",
    "portfolioId": "planete-immo",
    "name": "Planète Immo",
    "num": "06",
    "kind": "Immobilier & patrimoine",
    "status": "Web disponible",
    "accent": "immo",
    "icon": "/cases/immo-icon.png",
    "eyebrow": "Le patrimoine immobilier, sans angle mort",
    "title": "Voir plus loin que le prochain loyer.",
    "lead": "Planète Immo réunit biens, locataires, loyers, documents et comptabilité dans un même espace. Son cockpit patrimonial aide aussi à comparer des décisions sur plusieurs années.",
    "intro": "Du quotidien locatif aux choix de demain.",
    "introText": "Né du projet ImmoCompta, Planète Immo donne aux propriétaires et gestionnaires une vue commune de leurs actifs. Le web sert à approfondir les dossiers ; l'app mobile garde les informations essentielles à portée de main.",
    "stack": [
      "React",
      "React Native",
      "TypeScript",
      "API"
    ],
    "hero": {
      "desktop": "/cases/immo-web-patrimoine.jpg",
      "phone": "/cases/immo-mobile-patrimoine.jpg",
      "chip": "Web + mobile · une même vision"
    },
    "features": [
      {
        "num": "01",
        "title": "Tout le parc, au même endroit",
        "text": "Fiches des biens, situations locatives, baux et locataires se retrouvent dans une navigation pensée pour les portefeuilles de plusieurs actifs."
      },
      {
        "num": "02",
        "title": "Des loyers faciles à suivre",
        "text": "Paiements, impayés et relances sont visibles dans le tableau de bord et les registres. Les mouvements restent reliés aux biens concernés."
      },
      {
        "num": "03",
        "title": "Une comptabilité reliée au terrain",
        "text": "Revenus, charges, documents et exports accompagnent le suivi de l'activité locative sans multiplier les fichiers séparés."
      },
      {
        "num": "04",
        "title": "Des décisions mises en perspective",
        "text": "Le cockpit patrimonial rassemble valeur, rendement, dette, projection et scénarios de conservation, vente ou refinancement, selon les données renseignées."
      }
    ],
    "steps": [
      {
        "num": "01",
        "title": "Rassemblez",
        "text": "Ajoutez vos biens et les informations essentielles."
      },
      {
        "num": "02",
        "title": "Suivez",
        "text": "Retrouvez loyers, baux, documents et activité."
      },
      {
        "num": "03",
        "title": "Projetez",
        "text": "Comparez les trajectoires de votre patrimoine."
      }
    ],
    "shots": [
      {
        "src": "/cases/immo-mobile-patrimoine.jpg",
        "caption": "Cockpit patrimonial"
      },
      {
        "src": "/cases/immo-mobile-modules.jpg",
        "caption": "Outils mobiles"
      }
    ],
    "galleryKind": "phone",
    "mobileShots": [],
    "imageLabel": "Captures de l'app sur simulateur iPhone et de l'espace web local ; aucune donnée personnelle de locataire n'est publiée",
    "pricing": "Gratuit",
    "pricingNote": "Le site officiel présente une formule gratuite pour un bien, ainsi que des formules payantes. Consultez les conditions et tarifs à jour sur Planète Immo. L'app mobile montrée ici fonctionne en développement et n'est pas annoncée sur les boutiques.",
    "links": [
      {
        "label": "Ouvrir Planète Immo",
        "url": "https://planete-immo.com"
      },
      {
        "label": "Voir les tarifs",
        "url": "https://planete-immo.com/pricing"
      }
    ],
    "faq": [
      {
        "q": "À qui s'adresse Planète Immo ?",
        "a": "Aux propriétaires bailleurs et aux gestionnaires qui souhaitent suivre leurs biens, locataires, loyers et décisions patrimoniales dans un même outil."
      },
      {
        "q": "Puis-je commencer gratuitement ?",
        "a": "Le site officiel présente une formule gratuite pour un bien immobilier. Les autres formules et leurs limites sont détaillées sur sa page Tarifs."
      },
      {
        "q": "Que montre le cockpit patrimonial ?",
        "a": "Selon les données renseignées, il rapproche valeur, dette, rendement et projections, puis propose des scénarios à comparer."
      },
      {
        "q": "L'app mobile est-elle disponible en boutique ?",
        "a": "La version mobile fonctionne dans le projet et a été capturée sur simulateur iPhone. Aucune fiche App Store ou Google Play n'est annoncée à ce jour."
      },
      {
        "q": "Le web et le mobile montrent-ils les mêmes données ?",
        "a": "Les deux interfaces se connectent au même service. Le mobile met en avant les vues essentielles et donne accès aux autres outils depuis son menu."
      },
      {
        "q": "Les captures affichent-elles des données privées ?",
        "a": "Non. Les captures publiées montrent l'interface et ne révèlent ni coordonnées de locataires, ni documents privés."
      }
    ],
    "deepdive": {
      "index": "Planète Immo sur le web",
      "title": "Décider avec",
      "titleEm": "une vue d'ensemble.",
      "text": "Le cockpit patrimonial a été ouvert dans la version web locale. Le cadrage conserve l'interface réelle tout en écartant les coordonnées privées et en masquant une donnée financière du compte.",
      "layout": "web",
      "stage": {
        "image": "/cases/immo-web-patrimoine.jpg",
        "alt": "Interface web du cockpit patrimonial Planète Immo",
        "url": "planete-immo.com / patrimoine"
      },
      "cards": [],
      "note": {
        "title": "Une application, deux rythmes",
        "text": "Sur l'ordinateur, le détail des dossiers. Sur le téléphone, la lecture immédiate de ce qui compte."
      }
    }
  },
  {
    "slug": "nidtempo",
    "name": "NidTempo",
    "num": "07",
    "kind": "Présences en micro-crèche",
    "status": "Concept en développement",
    "accent": "nidtempo",
    "eyebrow": "Chaque arrivée compte",
    "title": "Qui est là, en un regard.",
    "lead": "NidTempo imagine le suivi des présences en micro-crèche comme un fil de journée : arrivées, départs et écarts deviennent immédiatement lisibles pour l'équipe.",
    "intro": "Le bon nombre d'enfants, au bon moment.",
    "introText": "Le concept répond à un besoin concret : connaître les présences réelles, repérer les absences et disposer d'un historique utile aux équipes et à la direction.",
    "stack": [
      "Concept produit",
      "React Native",
      "Design de parcours"
    ],
    "hero": {},
    "features": [
      {
        "num": "01",
        "title": "Pointer en quelques secondes",
        "text": "Enregistrer l'arrivée et le départ d'un enfant avec un horodatage clair et une correction tracée si nécessaire."
      },
      {
        "num": "02",
        "title": "Voir le groupe en direct",
        "text": "Distinguer enfants attendus, présents, absents ou partis pour faciliter l'organisation de la journée."
      },
      {
        "num": "03",
        "title": "Préparer les bilans",
        "text": "Retrouver l'historique des présences, les écarts prévus/réalisés et des exports à vérifier avant facturation."
      }
    ],
    "steps": [
      {
        "num": "01",
        "title": "Prévoyez",
        "text": "Importez ou renseignez le planning attendu."
      },
      {
        "num": "02",
        "title": "Pointez",
        "text": "Notez les arrivées et les départs au fil de l'eau."
      },
      {
        "num": "03",
        "title": "Contrôlez",
        "text": "Vérifiez les écarts et exportez l'historique."
      }
    ],
    "shots": [],
    "galleryKind": "concept",
    "mobileShots": [],
    "imageLabel": "Maquette conceptuelle de NidTempo",
    "pricing": "À définir",
    "pricingNote": "Projet en développement. Tarif communiqué lorsque l'offre sera prête.",
    "links": [],
    "faq": [
      {
        "q": "Est-ce une application déjà disponible ?",
        "a": "Non. NidTempo est actuellement présenté comme concept produit."
      },
      {
        "q": "Qui pourrait enregistrer une arrivée ou un départ ?",
        "a": "Le concept prévoit un pointage simple pour l'équipe, avec une vue de contrôle pour la direction. Les rôles exacts restent à définir."
      },
      {
        "q": "Comment distinguer une absence d'un retard ?",
        "a": "La vue envisagée sépare les enfants attendus, présents, absents et déjà partis pour rendre les écarts visibles."
      },
      {
        "q": "Peut-elle remplacer Planète Crèche ?",
        "a": "Le périmètre envisagé est centré sur les présences. Une éventuelle intégration avec Planète Crèche reste à définir."
      },
      {
        "q": "Les pointages peuvent-ils servir à la facturation ?",
        "a": "Le concept prévoit un export des heures réalisées, à contrôler selon les contrats et règles de la structure."
      }
    ],
    "deepdive": {
      "index": "Une journée plus lisible",
      "title": "Du premier bonjour",
      "titleEm": "au dernier au revoir.",
      "text": "Le concept suit le déroulement réel de la journée et garde un historique exploitable sans surcharger les équipes.",
      "layout": "grid",
      "cards": [
        {
          "tag": "Arrivées",
          "title": "Pointer vite",
          "text": "Un geste clair pour indiquer l'heure d'arrivée, avec visibilité immédiate pour la direction."
        },
        {
          "tag": "Absences",
          "title": "Anticiper",
          "text": "Distinguer absence signalée, retard et enfant attendu pour ajuster l'organisation."
        },
        {
          "tag": "Historique",
          "title": "Retrouver les faits",
          "text": "Conserver une trace des heures et corrections pour faciliter les vérifications."
        }
      ]
    }
  }
]

export const caseBySlug = (slug: string) => caseStudies.find(entry => entry.slug === slug)
export const caseByProjectId = (id: string) => caseStudies.find(entry => entry.portfolioId === id)
