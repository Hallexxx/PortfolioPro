export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  cover: string
  images: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  date: string
  context: string
  objectives: string[]
  features: string[]
  stack: string[]
  challenges: string
  results?: string
}

export const projects: Project[] = [
  {
    id: "polewin",
    title: "PoleWin — App communautaire F1 (Prédictions & Live Chat)",
    description:
      "PoleWin est une plateforme web + mobile dédiée aux fans de Formule 1 : prédictions rapides, mini-fantasy, chat live pendant les sessions et progression via profils/badges.",
    tags: ["Projet", "F1", "Community", "React", "React Native", "NestJS", "Express", "TypeScript", "PostgreSQL"],
    cover: "/polewin.webp",
    images: ["/poleacc.webp", "/polepre.webp", "/poleclass.webp", "/polelive.webp", "/polestats.webp", "/polevideo.webp"],
    githubUrl: "https://github.com/orgs/PoleWin-Project/repositories",
    featured: true,
    date: "2026-01-01",
    context:
      "PoleWin est né du constat qu’il manque une expérience F1 réellement communautaire : les applis officielles sont centrées sur les données/vidéos, et les jeux existants sont souvent trop complexes.\n" +
      "L’objectif : créer un hub où les fans vivent les Grands Prix ensemble (chat live), jouent avec des prédictions simples (5 actions max) et gagnent des badges/XP, tout en impliquant la communauté dans la roadmap (Early 50/100, votes, devlog).\n" +
      "Le projet vise une base engagée (Discord + liste d’attente) et un modèle économique durable (badges, passes, clubs premium) sans dégrader l’expérience.",
    objectives: [
      "Créer un hub communautaire F1 (Europe/francophone) avec chat live par session (essais, qualifs, course)",
      "Proposer des prédictions rapides et une mini-fantasy (ligues privées, scores simples, classements)",
      "Mettre en place profils, XP et badges collectors (Early 100, streaks, perfect picks…)",
      "Lancer un programme Early (accès MVP, rôles spéciaux Discord, votes roadmap)",
      "Construire une base technique solide (PostgreSQL + API TS) pour évoluer vers statistiques avancées et tournois saisonniers"
    ],
    features: [
      "Chat en direct : salons live (essais/qualifs/course), réactions, sondages, hot takes",
      "Prédictions : picks rapides (5 actions max) avant qualif/GP, verrouillage à l’heure limite",
      "Mini-fantasy : ligues privées, scoring simple, classement global et par ligue",
      "Profils : points/XP, historique de prédictions, personnalisation du pseudo",
      "Badges : Early 50/100, Weekly Streak, Perfect Pick, badges saisonniers",
      "Programme Early : onboarding, whitelist, rôles spéciaux dans l’app et Discord",
      "Devlog & Roadmap : journal des updates, votes communautaires sur les futures features",
      "Intégration Discord : rôles automatiques, accès simplifié via le serveur officiel",
      "Admin tools (MVP) : modération chat, gestion des contenus, contrôle des abus (spam, reports)"
    ],
    stack: [
      "PostgreSQL",
      "NestJS (TypeScript) / Express (API REST)",
      "React (Web)",
      "React Native (Mobile)",
      "REST API",
      "JWT / Auth",
      "WebSocket (chat temps réel)",
      "Docker (dev)",
      "CI/CD (à terme)"
    ],
    challenges:
      "• Temps réel : concevoir un chat live stable (WebSocket), gestion de rooms (par session) et modération (anti-spam, reports).\n" +
      "• Scoring & équité : définir un système de points simple mais robuste (picks limités, verrouillage, tie-breakers) + recalcul fiable.\n" +
      "• Modélisation PostgreSQL : structurer users, picks, sessions, ligues, badges, XP, messages, notifications sans incohérences.\n" +
      "• Synchronisation web/mobile : partager la logique (contrats API), gérer états et latence (notifs, live updates, refresh).\n" +
      "• Auth & sécurité : JWT, protections des endpoints, prévention abus (rate limiting, validations), et gestion des rôles (admin/modo/early).\n" +
      "• Scalabilité : prévoir montée en charge lors des week-ends de GP (pics chat + prédictions) et stockage de logs.\n" +
      "• Juridique & données : clarifier la légalité des gains/concours (notamment mineurs), et l’usage des données F1 (public vs restreint) + conformité.\n" +
      "• Produit & communauté : mettre en place un MVP focus (chat + picks + profils) tout en collectant les retours early et itérer vite.",
    results:
      "• Concept et roadmap définis : MVP centré sur chat live, prédictions, ligues, profils & badges.\n" +
      "• Base technique posée : architecture API TypeScript + PostgreSQL, préparation front web React et app React Native.\n" +
      "• Stratégie communauté : Discord + liste d’attente + programme Early (50/100) pour guider l’évolution par retours utilisateurs.\n" +
      "• Fondation pour évoluer : stats avancées, replays synchronisés, tournois saisonniers et contenus UGC."
  },
  {
    id: "alternance-kletel-multimedia",
    title: "Alternance Développeur Web & Applications (Kletel Multimédia)",
    description:
      "Alternance full-stack : apps React/React Native connectées à un back-end et une base 4D, déploiement Apache + SSL, et maintenance WordPress pour des sites clients.",
    tags: ["Alternance", "React", "React Native", "4D", "Apache", "SSL", "WordPress"],
    cover: "/kletel.webp",
    images: ["/kletel.webp"],
    featured: true,
    date: "2025-10-01",
    context:
      "Dans le cadre de mon alternance chez Kletel Multimédia, j’interviens sur plusieurs projets web et mobile.\n" +
      "Je développe des interfaces en React/React Native connectées à un back-end et une base de données 4D, tout en participant au déploiement (Apache/SSL) et à la maintenance corrective/évolutive de sites WordPress.",
    objectives: [
      "Développer une application mobile autour du vin (React Native) connectée à un back-end + BDD 4D",
      "Développer un site web de gestion des rendez-vous pour les CHU (React) connecté au back + BDD 4D",
      "Participer à la mise en ligne de sites via Apache (vhosts, configuration) et certificats SSL",
      "Assurer la maintenance corrective et évolutive de sites WordPress (bugs, améliorations, stabilité)"
    ],
    features: [
      "Application mobile (vin) : UI React Native + écrans, navigation, appels API",
      "Site web CHU : pages, composants, formulaires, logique front + intégration API 4D",
      "Gestion des échanges front/back : endpoints, validations, gestion d’erreurs, tests",
      "Mise en place Apache : configuration serveurs, virtual hosts, mise en ligne multi-sites",
      "Gestion SSL : installation/renouvellement certificats, contrôle HTTPS, corrections de config",
      "Maintenance WordPress : corrections de bugs, mises à jour, améliorations et optimisation"
    ],
    stack: [
      "React",
      "React Native",
      "JavaScript/TypeScript",
      "4D (Back-end + BDD)",
      "REST API",
      "Apache",
      "SSL/TLS",
      "WordPress"
    ],
    challenges:
      "• Intégration avec 4D : adapter le front aux contraintes et formats de l’API 4D (endpoints, payloads, erreurs).\n" +
      "• Fiabilité des échanges : validations, gestion des erreurs, états de chargement et retours utilisateur propres.\n" +
      "• Multi-projets : alterner entre mobile, web, infra et maintenance en gardant une organisation efficace.\n" +
      "• Déploiement Apache : éviter les erreurs de configuration (vhosts, chemins, permissions) et assurer la stabilité.\n" +
      "• SSL/TLS : installer/renouveler correctement les certificats, gérer les redirections HTTP→HTTPS, éviter les mixed content.\n" +
      "• Maintenance WordPress : corriger des bugs sans casser l’existant, gérer compatibilités plugins/thèmes et mises à jour.",
    results:
      "• Livraison de fonctionnalités sur plusieurs projets (mobile + web) connectés à 4D.\n" +
      "• Mise en ligne et sécurisation de sites via Apache + HTTPS (certificats SSL).\n" +
      "• Amélioration de la stabilité et de l’expérience utilisateur sur des sites WordPress (corrections et évolutions)."
  },

  {
    id: "aimpress",
    title: "Aimpress Plateforme IA + API (automation & assistants)",
    description:
      "Plateforme web et API permettant d’utiliser l’IA au quotidien : génération/édition de contenus (PDF, JSON, XML, images…), assistants & chatbots personnalisés, et automatisations (recherche produits + alertes, rédaction/envoi d’emails, etc.).",
    tags: ["Projet", "React", "Node.js", "MongoDB", "IA", "API", "Automation"],
    cover: "/aimtab.webp",
    images: ["/aimtab.webp", "/aimout.webp", "/aimpro.webp"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2025-09-01",
    context:
      "Aimpress est un projet full-stack conçu pour centraliser des outils IA dans une seule plateforme.\n" +
      "L’objectif est de proposer une interface web + une API réutilisable afin d’intégrer facilement des fonctionnalités IA dans d’autres sites/applications.\n" +
      "Le projet met l’accent sur l’automatisation : génération et édition de documents (PDF/JSON/XML), création d’assistants (chatbots), et scénarios “agents” (ex : recherche de produits sur internet, alertes, et emails automatisés).",
    objectives: [
      "Créer une plateforme web moderne pour accéder à des outils IA au quotidien",
      "Développer une API pour intégrer ces fonctionnalités IA dans d’autres applications",
      "Permettre la génération/édition de contenus (PDF, JSON, images, XML, etc.)",
      "Proposer des assistants IA (chatbots) configurables par l’utilisateur",
      "Automatiser des tâches : recherche produits, alertes, et rédaction/envoi d’emails"
    ],
    features: [
      "Dashboard : accès rapide aux modules IA (outils, assistants, historique)",
      "Génération & transformation : JSON / PDF / XML (ex: factures) + templates",
      "Édition de documents : modification de factures XML, exports et versions",
      "Assistant / Chatbot : création et configuration (prompt, règles, ton, domaine)",
      "Module “agent” : recherche de produits sur le web selon critères (prix, état, localisation…)",
      "Alertes : notifications quand un produit correspondant est détecté (ex: LeBonCoin, etc.)",
      "Emails : génération de mails + envoi optionnel (ex : contacter des pharmacies à proximité)",
      "Logs & historique : suivi des actions (requêtes, fichiers générés, résultats)"
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Auth (JWT / sessions)",
      "File processing (PDF/JSON/XML)",
      "Automation / Agents"
    ],
    challenges:
      "• Architecture modulaire : organiser les outils IA en modules réutilisables (web + API) sans dupliquer la logique.\n" +
      "• Gestion de fichiers : manipuler proprement différents formats (PDF/JSON/XML/images), assurer l’export et la compatibilité.\n" +
      "• Sécurité API : protéger les endpoints (auth, quotas, validations), éviter les abus et sécuriser les uploads.\n" +
      "• “Agents” & automatisations : créer une logique fiable (recherche, filtrage, alertes) avec une exécution stable.\n" +
      "• Performance : éviter de bloquer l’UI lors de traitements (files/queue, statuts, retours utilisateur).\n" +
      "• UX : rendre les fonctionnalités IA simples d’accès malgré la complexité (guidage, presets, historique).",
    results:
      "• Plateforme opérationnelle (prototype avancé) : modules IA centralisés + interface web claire.\n" +
      "• API réutilisable : intégration possible des outils IA dans d’autres sites/applications.\n" +
      "• Automatisations fonctionnelles : scénarios de recherche/alertes + génération d’emails.\n" +
      "• Base solide pour évoluer : ajout facile de nouveaux outils IA (documents, assistants, connecteurs)."
  },

  {
    id: "yshare",
    title: "Yshare Plateforme de gestion d’événements",
    description:
      "Plateforme full-stack (React + Node.js) permettant de créer, gérer et rejoindre des événements : commentaires, demandes de participation, notifications site + e-mail et validation par l’organisateur.",
    tags: ["Projets scolaires", "React", "Node.js", "Express", "MySQL", "TailwindCss"],
    cover: "/yshare.png",
    images: ["/yshare.png"],
    demoUrl: "https://yshare-3jbg.onrender.com",
    githubUrl: "https://github.com/FreeZe060/Yshare",
    featured: true,
    date: "2025-06-30",
    context:
      "Yshare est une plateforme d’événements développée en React (front) et Node.js/Express (back) permettant de créer et gérer des événements sur différents sujets.\n" +
      "L’application met l’accent sur les interactions : demandes de participation, validation par l’organisateur, commentaires et notifications (sur le site + par e-mail).",
    objectives: [
      "Permettre la création et la gestion d’événements (titre, description, date, lieu, capacité)",
      "Gérer les demandes de participation avec validation (accepter/refuser) par l’organisateur",
      "Permettre aux utilisateurs de commenter et d’exprimer leur intérêt",
      "Mettre en place un système de notifications site + e-mail",
      "Garantir une expérience fluide et sécurisée (auth, droits, validations)"
    ],
    features: [
      "Création d’événements (capacité max de participants)",
      "Liste/consultation des événements + page détail",
      "Commentaires sur les événements",
      "Demande de participation + statut (en attente / acceptée / refusée)",
      "Notifications sur le site (historique + état lu/non lu)",
      "Notification e-mail à l’organisateur lors d’une demande de participation",
      "Interface organisateur : gestion des demandes (accepter/refuser) depuis le dashboard",
      "Gestion des participants (liste, nombre de places restantes)"
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "Email (SMTP/Service)", "REST API"],
    challenges:
      "• Modélisation BDD : structurer événements, utilisateurs, demandes (statuts), participants et commentaires sans incohérences.\n" +
      "• Gestion de capacité : empêcher de dépasser le nombre max de participants (y compris en cas de demandes simultanées).\n" +
      "• Workflow de participation : gérer correctement les statuts (pending/accepted/refused) et l’UI associée.\n" +
      "• Notifications : synchroniser notifications e-mail + notifications in-app (création, lecture, affichage temps réel ou refresh).\n" +
      "• Sécurité & droits : autoriser uniquement l’organisateur à accepter/refuser et protéger les routes API.\n" +
      "• Robustesse API : validations côté serveur, gestion des erreurs, messages clairs pour le front.",
    results:
      "• Plateforme fonctionnelle : création d’événements, commentaires et demandes de participation opérationnels.\n" +
      "• Validation organisateur : acceptation/refus depuis l’interface avec mise à jour immédiate des statuts.\n" +
      "• Notifications complètes : alertes sur le site + e-mail lors des demandes de participation.\n" +
      "• Gestion maîtrisée : participants et capacité correctement contrôlés, expérience fluide côté utilisateur."
  },

  {
    id: "alternance-ifsi",
    title: "Alternance IFSI — Service Informatique",
    description:
      "Maintenance WordPress, conception d’un extranet élèves (planning, notes) et développement d’une application mobile pour l’accès aux informations et à l’emploi du temps.",
    tags: ["Alternance", "WordPress", "Web", "Mobile", "Systèmes"],
    cover: "/ifsi.png",
    images: ["/ifsi3.webp","/ifsi2.webp","/ifsi1.webp"],
    demoUrl: "http://ifsi-argenteuil.fr/",
    featured: true,
    date: "2025-01-01",
    context:
      "Dans le cadre de mon alternance au sein de l’IFSI, j’ai participé à la maintenance et à l’évolution des outils numériques de l’établissement.\n" +
      "L’objectif principal était d’améliorer l’accès des élèves aux informations (planning, notes, documents) via un extranet web et une application mobile, tout en modernisant les process existants.",
    objectives: [
      "Assurer la correction, mise à jour et publication du site WordPress de l’IFSI",
      "Concevoir un extranet élèves pour centraliser planning, notes et informations",
      "Développer une application mobile pour accéder aux notes et à l’emploi du temps",
      "Améliorer l’organisation et la fiabilité du système d’information"
    ],
    features: [
      "Maintenance WordPress (corrections, mises à jour, contenus, optimisations)",
      "Espace extranet élèves (accès planning / notes / informations)",
      "Gestion des accès (différents profils et droits selon besoin)",
      "Application mobile : consultation des notes et de l’emploi du temps",
      "Améliorations UX (navigation plus simple, pages plus claires)"
    ],
    stack: ["WordPress", "Web", "Mobile", "Gestion d'accès", "Support IT"],
    challenges:
      "• Fiabilité des données : garantir que les informations affichées (planning/notes) restent cohérentes et à jour.\n" +
      "• Expérience utilisateur : rendre l’accès aux infos simple pour des utilisateurs non techniques (élèves / staff).\n" +
      "• Gestion des accès : sécuriser l’accès aux données (notes, infos internes) avec des droits adaptés.\n" +
      "• Maintenance continue : corriger des bugs tout en assurant la stabilité du site et la continuité de service.\n" +
      "• Modernisation progressive : améliorer l’existant sans tout casser (déploiements, ajustements, retours utilisateurs).",
    results:
      "• Site WordPress maintenu et stabilisé : corrections et mises à jour régulières.\n" +
      "• Extranet mis en place : centralisation des infos élèves (planning/notes) pour un accès plus rapide.\n" +
      "• Application mobile livrée en version fonctionnelle (consultation emploi du temps + notes).\n" +
      "• Amélioration de l’autonomie des utilisateurs : moins de demandes répétitives et meilleure organisation."
  },

  {
    id: "site-micro-creches",
    title: "Site Micro-crèches",
    description:
      "Site de gestion de plannings micro-crèche : employés + enfants, CRUD, règles de ratio 1 employé / 3 enfants, multilingue.",
    tags: ["Projets scolaires", "Node.js", "Angular", "PHP", "Laravel"],
    cover: "/logoo.png",
    images: ["/logoo.png"],
    demoUrl: "https://planetecreche.com",
    githubUrl: "https://github.com/Hallexxx/LaravelAngular",
    featured: true,
    date: "2024-12-08",
    context:
      "Gestion des plannings micro-crèche. Frontend Angular + backend Laravel.\nCRUD employés et enfants.\nHoraires affectés automatiquement selon jours de garde et horaires employés, en respectant le ratio 1 employé pour 3 enfants.\nAccès strict : gérant peut modifier, employés consultent profil + planning.\nSupport multilingue FR/EN.",
    objectives: [
      "Gérer employés + enfants (CRUD)",
      "Automatiser l’affectation planning",
      "Appliquer une règle de ratio",
      "Mettre en place des rôles/permissions",
      "Ajouter du multilingue"
    ],
    features: [
      "CRUD employés et enfants",
      "Planning auto (jours de garde / horaires)",
      "Règle 1 employé / 3 enfants",
      "Rôles : gérant vs employés",
      "Multilingue FR/EN"
    ],
    stack: ["Angular", "Laravel", "RBAC", "i18n"],
    challenges:
      "• Algorithme de planning : affecter automatiquement les horaires en fonction des jours de garde et des disponibilités employés.\n" +
      "• Gestion des conflits : éviter les chevauchements, détecter les incohérences et garantir un planning valide.\n" +
      "• Règle métier ratio 1/3 : appliquer et contrôler la contrainte 1 employé pour 3 enfants selon les créneaux.\n" +
      "• RBAC (rôles/droits) : sécuriser l’accès (gérant modifie / employés consultent) côté back et côté front.\n" +
      "• Synchronisation front/back : assurer une cohérence des données (CRUD, états, refresh) entre Angular et Laravel.\n" +
      "• Multilingue : intégrer i18n FR/EN sans dupliquer les écrans et en gardant une UI claire.",

    results:
      "• Gestion complète : CRUD employés/enfants + pages dédiées gérant vs employés.\n" +
      "• Planning automatisé : génération de créneaux selon règles + affichage lisible côté interface.\n" +
      "• Conformité métier : ratio 1 employé / 3 enfants respecté et contrôlé lors de la création/modification.\n" +
      "• Accès sécurisé : permissions appliquées (RBAC) avec comportements adaptés selon le rôle.\n" +
      "• Interface multilingue : support FR/EN intégré pour une utilisation plus flexible."

  },

  {
    id: "bibliotheque-musicale-api",
    title: "Bibliothèque Musicale",
    description:
      "API sécurisée avec JWT pour gérer artistes, albums et chansons. CRUD, filtres et gestion de favoris...",
    tags: ["Projets scolaires", "Symfony", "PHP"],
    cover: "/favicon.ico",
    images: ["/favicon.ico"],
    demoUrl: "https://apiplatform-symfony.onrender.com/",
    githubUrl: "https://github.com/Hallexxx/ApiPlatform_symfony",
    featured: false,
    date: "2024-12-06",
    context:
      "API développée avec Symfony + API Platform pour gérer artistes, albums et chansons.\nCRUD complet pour admins, favoris pour utilisateurs authentifiésérés, sécurisation JWT.\nFiltrage par style musical, durée des chansons, relations respectées + endpoints avancés.\nBase SQLite incluse pour tester.",
    objectives: [
      "Construire une API REST avec ressources liées",
      "Sécuriser avec JWT",
      "Ajouter favoris + filtres",
      "Proposer un CRUD admin"
    ],
    features: [
      "CRUD artistes / albums / chansons",
      "Favoris (utilisateurs authentifiés)",
      "JWT",
      "Filtres (style, durée…)",
      "Relations + sous-ressources",
      "SQLite pour tests"
    ],
    stack: ["Symfony", "API Platform", "JWT", "SQLite"],
    challenges:
      "• Modélisation des relations : gérer proprement les liens Artiste → Albums → Chansons et l’exposition des sous-ressources.\n" +
      "• Sécurité & permissions : différencier les droits (admin CRUD complet vs utilisateur lecture + favoris) via JWT.\n" +
      "• Règles d’accès API Platform : configurer les opérations (GET/POST/PUT/DELETE) et les security expressions au bon endroit.\n" +
      "• Filtres avancés : mettre en place des filtres (style, durée, recherche) sans casser les performances ni la cohérence des réponses.\n" +
      "• Validation des données : assurer une API robuste (champs obligatoires, formats, contraintes) et des erreurs claires.\n" +
      "• Tests rapides : vérifier les endpoints et scénarios (auth, admin, favoris) avec une base SQLite et des jeux de données.",

    results:
      "• API REST fonctionnelle : endpoints propres pour artistes, albums et chansons avec relations et sous-ressources.\n" +
      "• Authentification JWT : accès sécurisé avec rôles (admin / utilisateur) et règles adaptées aux opérations.\n" +
      "• Favoris utilisateur : ajout/suppression et récupération des favoris pour les comptes authentifiés.\n" +
      "• Filtres opérationnels : filtrage par critères (style, durée…) pour faciliter la recherche.\n" +
      "• Projet livrable : base SQLite incluse + repo GitHub permettant de tester rapidement l’API."

  },

  {
    id: "uberalex",
    title: "UberAlex",
    description:
      "UberAlex est une application web et mobile, développée en Node.js, qui permet aux restaurateurs de proposer leurs produits en ligne...",
    tags: ["Projets scolaires", "Node.js"],
    cover: "/ubers.png",
    images: ["/ubers.png"],
    demoUrl: "https://uberalex.onrender.com",
    githubUrl: "https://github.com/FreeZe060/UberAlex",
    featured: true,
    date: "2024-12-08",
    context:
      "UberAlex est une application web et mobile, développée en Node.js, qui permet aux restaurateurs de proposer leurs produits en ligne sans recourir à des livreurs professionnels.\nLes utilisateurs peuvent recevoir des notifications pour effectuer des livraisons et gagner une petite contribution.\nUn système de vérification d'identité sécurise les transactions.",
    objectives: [
      "Créer une app web + mobile pour commandes/livraisons",
      "Mettre en place notifications et vérification d’identité",
      "Assurer une expérience simple et sécurisée"
    ],
    features: [
      "Proposition de produits par restaurateurs",
      "Notifications pour livraisons",
      "Vérification d’identité",
      "Logique d’entraide de proximité"
    ],
    stack: ["Node.js"],
    challenges:
      "• Authentification & rôles : gérer 2 profils principaux (restaurateurs / livreurs) avec des accès séparés et sécurisés.\n" +
      "• Vérification d’identité : concevoir un parcours simple (upload/validation) tout en restant cohérent côté sécurité.\n" +
      "• Notifications : déclencher des alertes au bon moment (nouvelle livraison disponible, mise à jour de statut) sans spam.\n" +
      "• Gestion du cycle de commande : créer un enchaînement clair (création → acceptation → prise en charge → livré) + statuts.\n" +
      "• Modélisation des données : structurer produits, commandes, utilisateurs, adresses et historiques pour éviter les incohérences.\n" +
      "• Robustesse API : valider les entrées, gérer les erreurs proprement et éviter les actions non autorisées.\n" +
      "• UX côté client : garder une navigation fluide malgré plusieurs étapes (commande, suivi, livraison).",

    results:
      "• Application fonctionnelle (prototype) : création de produits, passage de commande et suivi des statuts.\n" +
      "• Mise en place des bases back-end : routes API, logique métier, validations et gestion des erreurs.\n" +
      "• Fonctionnalités clés intégrées : notifications + parcours de vérification d’identité (prototype).\n" +
      "• Projet présenté/validé : démonstration du flux complet et amélioration via retours (équipe / encadrants)."
  },

  {
    id: "stage-universite-paris-8",
    title: "Stage Université Paris 8",
    description:
      "Le site web a été créé en Python en utilisant le framework Django pour offrir une plateforme de gestion des employés. Il utilise GoogleCloud pour...",
    tags: ["Stage", "Python", "Django", "GoogleCloud"],
    cover: "/universite_blanc.png",
    images: ["/universite_blanc.png"],
    githubUrl: "https://github.com/Hallexxx/Stage_Paris_8",
    featured: true,
    date: "2024-01-06",
    context:
      "Le site web a été créé en Python en utilisant le framework Django pour offrir une plateforme de gestion des employés.\nIl utilise GoogleCloud pour le stockage des données en ligne, assurant ainsi une gestion efficace et sécurisée des informations.\nLe site comprend un système d'authentification permettant aux utilisateurs de se connecter, de s'inscrire et d'accéder à des fonctionnalités d'administration.\nParmi ces fonctionnalités, on trouve les opérations CRUD (Create, Read, Update, Delete) pour gérer les informations des employés.\nDe plus, un tableau de bord administratif a été mis en place pour faciliter la modification, l'ajout et la suppression des données.",
    objectives: [
      "Créer une plateforme de gestion des employés",
      "Mettre en place une authentification et des accès admin",
      "Permettre la gestion CRUD des employés",
      "Centraliser le stockage des données via GoogleCloud"
    ],
    features: [
      "Authentification (connexion / inscription)",
      "Dashboard d’administration",
      "CRUD employés",
      "Stockage des données sur GoogleCloud"
    ],
    stack: ["Python", "Django", "GoogleCloud"],
    challenges:
      "• Gestion des rôles & permissions : différencier les droits utilisateur / admin sans faille.\n" +
      "• Sécurisation des formulaires et des données : validation côté serveur, protection contre les erreurs et les entrées invalides.\n" +
      "• Stockage Cloud : fiabiliser l’envoi et l’accès aux fichiers/données via Google Cloud tout en gardant de bonnes performances.\n" +
      "• Structuration du projet : organiser les apps Django (models, views, templates, admin) pour rester maintenable."

  },

  {
    id: "jrpg-3d-metaphonia",
    title: "JRPG 3D Metaphonia",
    description:
      "Prototype d’un JRPG 3D au tour par tour de style manga. Metaphonia raconte l'histoire de Kazuma...",
    tags: ["Projets scolaires", "Unreal(BluePrint)"],
    cover: "/unreal_blanc.png",
    images: ["/unreal_blanc.png"],
    featured: false,
    date: "2024-01-01",
    context:
      "Le projet consiste à créer un prototype du jeu vidéo Metaphonia, un JRPG 3D au tour par tour de style manga.\nMetaphonia raconte l'histoire de Kazuma, un lycéen venant d'une famille pauvre, qui découvre une IA nommée Metaphonia sur son téléphone.\nLe jeu vise à offrir un divertissement via son univers et son gameplay, tout en transmettant des notions de morale.",
    objectives: [
      "Créer un prototype de JRPG 3D",
      "Proposer un univers narratif fort",
      "Mettre en place un système de combat tour par tour"
    ],
    features: [
      "Prototype gameplay tour par tour",
      "Narration / univers manga",
      "Progression & scènes"
    ],
    stack: ["Unreal Engine", "Blueprint"],
    challenges:
      "• Apprentissage Unreal + Blueprint : organiser un projet propre, éviter les Blueprints trop “spaghetti” et structurer les systèmes.\n" +
      "• Système de combat tour par tour : gérer l’ordre d’initiative, les actions, les tours, les états (attaque/défense/compétence) et les transitions.\n" +
      "• Camera & contrôles en 3D : trouver un feeling agréable (déplacement, rotation, verrouillage de cible) sans rendre le jeu “lourd”.\n" +
      "• IA ennemis (prototype) : déclencher les actions selon le tour, gérer des comportements simples et les retours visuels.\n" +
      "• UI/UX JRPG : afficher HP, actions disponibles, tour en cours, feedback des dégâts sans surcharger l’écran.\n" +
      "• Level design & pacing : créer une scène jouable et compréhensible, avec des triggers d’événements et une progression logique.\n" +
      "• Performance & stabilité : limiter les assets lourds, optimiser la scène et éviter les bugs de collision/physics.",

    results:
      "• Prototype jouable d’un JRPG 3D : exploration simple + passage en combat tour par tour.\n" +
      "• Mise en place des bases : scènes, collisions, UI de combat, logique de tours."
  },

  {
    id: "site-meteo-vuejs",
    title: "Site Meteo",
    description: "Projet météo en VueJs (à compléter avec la description exacte si besoin).",
    tags: ["Projets personnels", "VueJs"],
    cover: "/nuageux.png",
    images: ["/nuageux.png"],
    demoUrl: "https://meteo-vue.onrender.com",
    githubUrl: "https://github.com/Hallexxx/Meteo_Vue",
    featured: false,
    date: "2024-01-06",
    context:
      "À compléter : ajoute ici le contexte précis (API météo utilisée, pages, fonctionnalités).",
    objectives: ["À compléter."],
    features: ["À compléter."],
    stack: ["Vue.js"],
    challenges: "À compléter.",
    results: "À compléter."
  },

  {
    id: "site-harry-potter",
    title: "Harry Potter Angular App",
    description:
      "Application Angular permettant d’explorer les personnages Harry Potter : liste, recherche, filtres, fiche détail, favoris et panier avec simulation d’achat.",
    tags: ["Projets scolaires", "Angular", "TypeScript", "TailwindCss"],
    cover: "/harry.png",
    images: ["/harry.png"],
    demoUrl: "https://angular-harry.onrender.com",
    githubUrl: "https://github.com/FreeZe060/Angular/tree/ProjetGroupe",
    featured: true,
    date: "2024-12-10",
    context:
      "Projet Angular centré sur une expérience de navigation complète autour des personnages de l’univers Harry Potter.\n" +
      "Le but était de travailler la logique front (recherche, filtres, états) et de simuler un parcours utilisateur type e-commerce (favoris + panier + commande).",
    objectives: [
      "Afficher une liste complète de personnages avec recherche et filtres",
      "Proposer une fiche détail pour chaque personnage",
      "Permettre l’ajout en favoris et dans un panier virtuel",
      "Simuler un achat avec quantités, total automatique et confirmation visuelle"
    ],
    features: [
      "Liste détaillée des personnages",
      "Recherche en temps réel + filtres multi-critères",
      "Page détail personnage (infos complètes)",
      "Favoris (ajout/suppression + persistance possible)",
      "Panier : ajout, suppression, quantités, calcul total",
      "Formulaire de commande + confirmation visuelle"
    ],
    stack: ["Angular", "TypeScript", "Tailwind CSS", "State management (services)", "Routing"],
    challenges:
      "• Gestion d’état : synchroniser favoris + panier entre plusieurs pages (liste / détail) sans incohérences.\n" +
      "• UX de filtrage : garder une recherche fluide même avec plusieurs filtres et des données volumineuses.\n" +
      "• Panier robuste : gérer quantités, suppression, recalcul total et validations (valeurs minimales, champs requis).\n" +
      "• Architecture Angular : structurer composants/services/routing pour éviter la duplication et rester maintenable.\n" +
      "• Persistance : conserver certains choix (favoris/panier) via localStorage (ou stockage côté app) pour une meilleure expérience.",
    results:
      "• Application complète et cohérente : navigation liste → détail → panier → commande.\n" +
      "• Fonctionnalités clés livrées : filtres, favoris, panier, total automatique et confirmation.\n" +
      "• Projet présenté/validé : démonstration d’une app front moderne avec logique métier et UI propre."
  },

  {
    id: "jeu-2d-unity",
    title: "Jeu 2D Unity",
    description:
      "En collaboration avec un groupe de cinq personnes dans le cadre d'un projet scolaire, nous avons développé deux jeux 2D en utilisant Unity et C#...",
    tags: ["Projets scolaires", "Unity", "C#"],
    cover: "/unity.png",
    images: ["/unity.png"],
    githubUrl: "https://github.com/ludogernay/NightBorn",
    featured: false,
    date: "2024-12-08",
    context:
      "En collaboration avec un groupe de cinq personnes dans le cadre d'un projet scolaire, nous avons développé deux jeux 2D en utilisant Unity et C#.\nLe premier est un jeu au tour par tour inspiré du style Pokémon,\ntandis que le second est un jeu “runner” où le personnage doit éviter des obstacles et éliminer des ennemis en mouvement continu.",
    objectives: [
      "Développer 2 prototypes de jeux 2D",
      "Travailler en équipe (5 personnes)",
      "Mettre en place des mécaniques de gameplay différentes"
    ],
    features: [
      "Jeu tour par tour (inspiration Pokémon)",
      "Jeu runner (obstacles + ennemis)",
      "Gestion des contrôles et des scènes"
    ],
    stack: ["Unity", "C#"],
    challenges:
      "• Coordination à 5 : répartir les tâches (gameplay, UI, niveaux, assets) et éviter les conflits Git.\n" +
      "• Gestion des états de jeu : structurer correctement les états (menu, exploration, combat, game over) sans bugs.\n" +
      "• Système de combat tour par tour : gérer l’ordre des actions, les tours, les dégâts, et les transitions d’animations.\n" +
      "• Runner : génération/placement d’obstacles, rythme de difficulté progressif, collisions fiables.\n" +
      "• Contrôles & feedback joueur : rendre les inputs réactifs (clavier/manette) et ajouter du feedback (sons, particules, UI).\n" +
      "• Performance & stabilité : éviter les chutes de FPS, limiter les allocations et optimiser les scènes.\n" +
      "• Intégration assets : gérer les sprites/animations et garder un style visuel cohérent malgré des sources différentes."
  },

  {
    id: "r6-packs",
    title: "R6 Packs",
    description:
      "Conception et développement d'un site web en Node.js dédié à Rainbow Six Siege, axé sur la répertoriation des skins du jeu. Le site inclut...",
    tags: ["Projets scolaires", "Node.js"],
    cover: "/r.png",
    images: ["/r.png"],
    demoUrl: "https://r6-packs.onrender.com",
    githubUrl: "https://github.com/FreeZe060/R6_Packs",
    featured: false,
    date: "2024-12-08",
    context:
      "Conception et développement d'un site web en Node.js dédié à Rainbow Six Siege, axé sur la répertoriation des skins du jeu.\nLe site inclut un système de recherche, une connexion avec un inventaire, et une fonctionnalité d'ouverture de packs via une roulette (style Hellcase).",
    objectives: [
      "Répertorier des skins R6",
      "Ajouter recherche + inventaire",
      "Créer une mécanique d’ouverture de packs"
    ],
    features: [
      "Système de recherche",
      "Connexion / inventaire",
      "Ouverture de packs via roulette"
    ],
    stack: ["Node.js"],
    challenges:
      "• Modélisation des données : structurer une base de skins (rarité, catégorie, collection, images) pour permettre recherche et filtres.\n" +
      "• Système de recherche : gérer une recherche rapide + tolérante (nom, type, rareté) sans ralentir l’affichage.\n" +
      "• Inventaire utilisateur : lier les skins obtenus à un compte et gérer l’historique des ouvertures.\n" +
      "• Roulette / ouverture de packs : définir des probabilités cohérentes par rareté et éviter les incohérences (doublons, drops impossibles).\n" +
      "• Équilibrage & “feeling” : rendre l’animation et la révélation des items satisfaisantes (timing, suspense, feedback visuel).\n" +
      "• Sécurité & anti-triche (niveau prototype) : éviter qu’un utilisateur manipule les probabilités côté client.\n" +
      "• Gestion des assets : optimiser le chargement des images (miniatures) pour garder de bonnes performances.",

    results:
      "• Site fonctionnel : catalogue de skins avec recherche + affichage des informations clés.\n" +
      "• Système de compte : connexion et gestion d’un inventaire utilisateur (prototype).\n" +
      "• Ouverture de packs opérationnelle : roulette avec drops par rareté + ajout automatique à l’inventaire.\n" +
      "• Base technique solide : endpoints Node.js, logique de tirage côté serveur et structure prête pour évoluer (packs, événements, stats)."
  },

  {
    id: "stage-atout-france",
    title: "Stage Atout France — Support Web & Contenus",
    description:
      "Détection/correction de problèmes sur les sites, transferts de données entre environnements web/intranet et création de newsletters en HTML.",
    tags: ["Stage", "Web", "HTML", "Support", "Content"],
    cover: "/atout.png",
    images: ["/atout.png"],
    featured: false,
    date: "2022-01-15",
    context:
      "Stage réalisé chez Atout France avec des missions orientées support web, contenus et opérations techniques.\n" +
      "Objectif : contribuer au bon fonctionnement des sites et accompagner les tâches liées à la diffusion de contenus (newsletters) et aux transferts de données.",
    objectives: [
      "Identifier et corriger des anomalies sur différents sites",
      "Réaliser des transferts de données entre sites internet et intranet",
      "Créer des newsletters en HTML (structure, mise en page, compatibilité)",
      "Appliquer de bonnes pratiques (rigueur, tests, vérifications avant mise en ligne)"
    ],
    features: [
      "Correction de problèmes (affichage, contenus, liens, incohérences)",
      "Transferts de données (publication / mise à jour de contenus entre environnements)",
      "Newsletters : intégration HTML, mise en forme, sections et CTA",
      "Vérifications avant diffusion (rendu, liens, cohérence des contenus)"
    ],
    stack: ["HTML", "Web", "Outils internes", "Support", "Gestion de contenu"],
    challenges:
      "• Qualité & précision : éviter les erreurs visibles en production (liens cassés, contenus incohérents, éléments manquants).\n" +
      "• Compatibilité newsletters : gérer le rendu HTML sur différents clients mail (structure simple, tests, images, liens).\n" +
      "• Gestion des transferts : assurer que les contenus transférés restent conformes (formats, encodage, médias).\n" +
      "• Organisation : traiter plusieurs petites tâches rapidement tout en restant rigoureux (checklist, relecture).",
    results:
      "• Corrections réalisées sur plusieurs pages/sites, améliorant la stabilité et la qualité des contenus.\n" +
      "• Newsletters produites en HTML avec une mise en page propre et un rendu cohérent.\n" +
      "• Transferts de contenus effectués entre environnements, avec vérifications avant publication."
  },

  {
    id: "service-informatique-mairie",
    title: "Service Informatique Mairie",
    description:
      "Stage au service informatique de la mairie d'Argenteuil : support, installations, hotline, réseau, déménagements de postes...",
    tags: ["Stage", "All"],
    cover: "/mairie.png",
    images: ["/mairie.png"],
    featured: false,
    date: "2024-12-08",
    context:
      "En première, stage de deux mois au service informatique de la mairie d'Argenteuil.\nTâches : installation de systèmes et applications sur PC/tablettes, montage composants, support hotline, brassage réseau/téléphonique, déménagement de postes et installation de nouveaux matériels.",
    objectives: [
      "Assurer le support informatique",
      "Installer/configurer systèmes et logiciels",
      "Intervenir sur réseau et matériel"
    ],
    features: [
      "Support utilisateurs (hotline)",
      "Installation OS/applications",
      "Montage matériel",
      "Interventions réseau/téléphonie"
    ],
    stack: ["Support IT", "Windows", "Réseau", "Hardware"],
    challenges:
      "• Gestion des priorités : traiter plusieurs demandes en parallèle (pannes bloquantes, installations, urgences) tout en respectant les délais.\n" +
      "• Diagnostic rapide : identifier l’origine des problèmes (logiciel, matériel, réseau) et appliquer la bonne procédure.\n" +
      "• Support utilisateurs : expliquer simplement, rassurer, et guider des profils non techniques (hotline / interventions).\n" +
      "• Déploiement & configuration : installer Windows, drivers et logiciels métiers de manière fiable sur différents postes.\n" +
      "• Interventions réseau : effectuer du brassage RJ45/téléphonique, vérifier la connectivité et résoudre les coupures.\n" +
      "• Déménagement de postes : rebrancher/configurer sans perte de service (imprimantes, accès réseau, profils utilisateurs).\n" +
      "• Respect des bonnes pratiques : câblage propre, documentation minimale, et sécurité de base (comptes, accès, droits).",

    results:
      "• Support assuré au quotidien : résolution de tickets et assistance utilisateurs (hotline + interventions).\n" +
      "• Postes prêts à l’emploi : installations et mises à jour de systèmes + applications sur PC/tablettes.\n" +
      "• Parc matériel maintenu : montage/remplacement de composants et vérification du bon fonctionnement.\n" +
      "• Réseau opérationnel : brassage et dépannage sur prises/baies, rétablissement de connexions.\n" +
      "• Postes déplacés et remis en service : déménagements réalisés avec reconfiguration (périphériques, imprimantes, accès réseau).\n" +
      "• Montée en autonomie : amélioration de la méthode de diagnostic, de l’organisation et du relationnel support."
  },
]

export const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort()
