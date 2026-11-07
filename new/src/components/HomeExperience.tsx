import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PortfolioVisual from './PortfolioVisual'
import { Counter, Magnetic, Marquee, Parallax, Reveal, SplitText, Tilt, Typewriter } from './motion'
import { portfolioProjects } from '../data/portfolio'
import { caseByProjectId } from '../data/caseStudies'
import './HomeExperience.css'

const featured = portfolioProjects.slice(0, 3)
const more = portfolioProjects.slice(3)
const HeroScene3D = lazy(() => import('./HeroScene3D'))

const identity = [
  { label: 'Nom', value: 'Alexandre Perez' },
  { label: 'Date de naissance', value: '11 août 2004' },
  { label: 'Formation', value: 'Master Informatique — Développement web, Ynov Sophia Antipolis' },
  { label: 'En poste', value: 'Alternance développeur web & mobile, Kletel Multimédia' },
  { label: 'Mobilité', value: 'Paris · Nice · Sophia Antipolis · Aix-en-Provence · Marseille · La Roche-sur-Yon' },
  { label: 'E-mail', value: 'alex.perezab470@gmail.com', href: 'mailto:alex.perezab470@gmail.com' },
]

const figures = [
  { value: 10, suffix: '+', label: 'Projets livrés', detail: 'Alternance, école et produits personnels' },
  { value: 15, suffix: '+', label: 'Technologies pratiquées', detail: 'Front, back, bases de données, déploiement' },
  { value: 2, suffix: ' ans', label: "D'expérience en entreprise", detail: 'IFSI puis Kletel Multimédia' },
]

const marqueeItems = ['React', 'React Native', 'TypeScript', 'Node.js', 'Expo', 'MongoDB', 'SQL', 'Tailwind', '4D', 'Apache']

export default function HomeExperience() {
  const reducedMotion = !!useReducedMotion()
  const fade = (delay: number) => (reducedMotion ? {} : {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <main className="portfolio-home">
      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <Suspense fallback={null}><HeroScene3D reducedMotion={reducedMotion} /></Suspense>

        <div className="portfolio-hero-copy">
          <motion.p className="portfolio-eyebrow" {...fade(0.05)}><span className="eyebrow-line" /> Portfolio d'Alexandre Perez · Développeur web & mobile</motion.p>
          <motion.p className="hero-greeting" {...fade(0.12)}>Bonjour <span aria-hidden="true">👋</span></motion.p>
          <h1 id="portfolio-title">
            Je suis <em><Typewriter words={['Alexandre Perez', 'développeur web', 'développeur mobile', 'en Master Informatique']} /></em>
          </h1>
          <motion.p className="portfolio-hero-lead" {...fade(0.3)}>
            Je conçois, développe et fais évoluer des applications web et mobiles, entre Paris et Sophia Antipolis.
            Ici, chaque projet montre un problème concret, une interface et les choix techniques qui lui donnent vie.
          </motion.p>
          <motion.div className="portfolio-actions" {...fade(0.42)}>
            <Magnetic><Link className="button-primary" to="/contact">Engagez-moi <span aria-hidden="true">↗</span></Link></Magnetic>
            <a className="button-text" href="#realisations">Mes projets <span aria-hidden="true">→</span></a>
          </motion.div>
          <motion.div className="hero-figures" {...fade(0.55)}>
            {figures.map(figure => (
              <div key={figure.label}>
                <strong><Counter value={figure.value} suffix={figure.suffix} /></strong>
                <span>{figure.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="portfolio-hero-art">
          <div className="hero-art-backdrop" aria-hidden="true" />
          <span className="hero-art-index" aria-hidden="true">01 / 06</span>
          <p className="hero-art-words" aria-hidden="true">Concevoir · Développer · Livrer</p>
          <motion.div
            className="hero-photo-wrap"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9, y: 36 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="hero-photo" max={9}>
              <span className="hero-photo-ring" aria-hidden="true" />
              <span className="hero-photo-clip">
                <img src="/portrait.jpg" alt="Portrait d'Alexandre Perez" width={1333} height={2000} />
              </span>
              <span className="hero-photo-badge hero-photo-badge-top">Disponible pour un projet</span>
              <span className="hero-photo-badge hero-photo-badge-bottom">Sophia Antipolis · Paris</span>
            </Tilt>
          </motion.div>
          <span className="hero-art-caption">Le code au service des usages.</span>
        </div>

        <div className="portfolio-hero-bottom">
          <span>Basé en France · Projets web & mobile</span>
          <a href="#realisations">Défiler pour explorer <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <div className="home-marquee"><Marquee items={marqueeItems} speed={40} /></div>

      <section className="portfolio-intro" aria-label="Approche">
        <Reveal as="p" dir="left" amount={0.16}>
          Un projet commence par une question simple : <em>à quoi doit-il vraiment servir ?</em>
        </Reveal>
        <Reveal as="div" dir="right" delay={0.1} amount={0.16}>
          <span>01 / Approche</span>
          <p>J'aime les interfaces qui rendent un sujet complexe plus clair. Je travaille du besoin initial jusqu'au détail de l'expérience, avec une attention constante pour le produit et sa fiabilité.</p>
        </Reveal>
      </section>

      <section className="home-about" id="a-propos">
        <div className="home-about-head">
          <span>02 / À propos de moi</span>
          <h2><SplitText text="Derrière le code," /><br /><em><SplitText text="quelqu'un de joignable." delay={0.1} /></em></h2>
          <p>Développeur web et mobile en alternance, en Master à Ynov Sophia Antipolis. Je construis des produits de bout en bout : interface, logique métier, base de données et mise en ligne.</p>
        </div>
        <div className="home-about-grid">
          {identity.map((item, index) => (
            <Reveal as="div" key={item.label} className="identity-row" dir={index % 2 ? 'right' : 'left'} delay={index * 0.05} amount={0.4}>
              <span>{item.label}</span>
              {item.href ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
            </Reveal>
          ))}
        </div>
        <div className="home-about-figures">
          {figures.map((figure, index) => (
            <Reveal as="div" key={figure.label} dir="up" delay={index * 0.08}>
              <strong><Counter value={figure.value} suffix={figure.suffix} /></strong>
              <b>{figure.label}</b>
              <p>{figure.detail}</p>
            </Reveal>
          ))}
        </div>
        <Reveal dir="up" delay={0.1}>
          <Magnetic><Link className="home-about-link" to="/cv">Voir mon CV complet <span aria-hidden="true">↗</span></Link></Magnetic>
        </Reveal>
      </section>

      <section id="realisations" className="portfolio-projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <span>03 / Réalisations</span>
          <h2 id="projects-title"><SplitText text="Des produits" /><br /><em><SplitText text="dans la vraie vie." delay={0.1} /></em></h2>
          <Reveal as="p" dir="up" delay={0.15}>Une sélection d'applications conçues pour des usages très différents. Les captures proviennent des applications et de leurs versions web.</Reveal>
        </div>
        {featured.map((project, index) => {
          const study = caseByProjectId(project.id)
          return (
            <article id={project.id} className={`featured-project project-${project.accent}`} key={project.id}>
              <Reveal className="featured-project-copy" dir={index % 2 ? 'right' : 'left'} amount={0.16}>
                <span className="project-number">0{index + 1} / {project.field}</span>
                <h3>{project.name}<span>.</span></h3>
                <p className="project-description">{project.description}</p>
                <p className="project-contribution">{project.contribution}</p>
                <div className="project-detail-list">{project.details.map(detail => <span key={detail}>{detail}</span>)}</div>
                <div className="project-links">
                  {study && <Link to={`/projets/${study.slug}`}>Lire l'étude de cas <span aria-hidden="true">→</span></Link>}
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le produit <span aria-hidden="true">↗</span></a>}
                </div>
              </Reveal>
              <Reveal className="featured-project-media" dir={index % 2 ? 'left' : 'right'} amount={0.16}>
                <Parallax distance={34}><PortfolioVisual project={project} /></Parallax>
              </Reveal>
            </article>
          )
        })}
      </section>

      <section className="portfolio-capabilities">
        <div className="capabilities-heading">
          <span>04 / Ce que je fais</span>
          <h2><SplitText text="Du premier écran" /><br /><SplitText text="à la mise en ligne." delay={0.1} /></h2>
        </div>
        <div className="capabilities-list">
          {[
            { num: '01', title: 'Expérience & interface', text: 'Parcours, hiérarchie visuelle, composants et interactions pensés pour l’usage.' },
            { num: '02', title: 'Web & mobile', text: 'Applications React et React Native, intégration API et données métier.' },
            { num: '03', title: 'Produit & livraison', text: 'Tests, ajustements, déploiement et maintenance après la première version.' },
          ].map((item, index) => (
            <Reveal as="div" key={item.num} dir="right" delay={index * 0.08} amount={0.4}>
              <span>{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Link to="/cv">Voir mes compétences et mon CV <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="portfolio-more">
        <div className="section-heading">
          <span>05 / Autres projets</span>
          <h2><SplitText text="Explorer" /><br /><em><SplitText text="les autres univers." delay={0.1} /></em></h2>
        </div>
        <div className="more-grid">
          {more.map((project, index) => {
            const study = caseByProjectId(project.id)
            return (
              <Reveal as="article" key={project.id} className={`more-project project-${project.accent}`} dir={index % 2 ? 'right' : 'left'} delay={index * 0.07} amount={0.15}>
                <PortfolioVisual project={project} compact />
                <div>
                  <span>{project.field}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <Link to={study ? `/projets/${study.slug}` : `/projets#${project.id}`}>Voir le projet <span aria-hidden="true">↗</span></Link>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Link className="all-projects-link" to="/projets">Tous les projets <span aria-hidden="true">→</span></Link>
      </section>

      <section className="portfolio-outro">
        <span>06 / Une idée à construire ?</span>
        <h2><SplitText text="Parlons de votre" /><br /><em><SplitText text="prochain projet." delay={0.1} /></em></h2>
        <Reveal dir="up" delay={0.15}>
          <p>Une collaboration, une question technique ou un produit à imaginer : je serai ravi d'en discuter.</p>
        </Reveal>
        <Magnetic><Link to="/contact">Me contacter <span aria-hidden="true">↗</span></Link></Magnetic>
      </section>
    </main>
  )
}
