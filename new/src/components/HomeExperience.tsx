import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PortfolioVisual from './PortfolioVisual'
import { portfolioProjects } from '../data/portfolio'
import './HomeExperience.css'

const featured = portfolioProjects.slice(0, 3)
const more = portfolioProjects.slice(3)
const HeroScene3D = lazy(() => import('./HeroScene3D'))

const reveal = (side: 'left' | 'right' = 'left') => ({
  initial: { opacity: 0, x: side === 'left' ? -48 : 48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
})

export default function HomeExperience() {
  const reducedMotion = !!useReducedMotion()
  return (
    <main className="portfolio-home">
      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="portfolio-hero-copy">
          <p className="portfolio-eyebrow"><span className="eyebrow-line" /> Portfolio d'Alexandre Perez · Développeur web & mobile</p>
          <h1 id="portfolio-title">Je donne forme<br />aux <em>idées utiles.</em></h1>
          <p className="portfolio-hero-lead">Je conçois, développe et fais évoluer des applications web et mobiles. Ici, chaque projet montre un problème concret, une interface et les choix techniques qui lui donnent vie.</p>
          <div className="portfolio-actions"><a className="button-primary" href="#realisations">Voir mes réalisations <span aria-hidden="true">↗</span></a><Link className="button-text" to="/cv">Mon parcours <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="portfolio-hero-art"><div className="hero-art-backdrop"><span>01 / 06</span><p>Concevoir<br />Développer<br />Livrer</p></div><Suspense fallback={null}><HeroScene3D reducedMotion={reducedMotion} /></Suspense><span className="hero-art-caption">Le code au service des usages.</span></div>
        <div className="portfolio-hero-bottom"><span>Basé en France · Projets web & mobile</span><a href="#realisations">Défiler pour explorer <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="portfolio-intro" aria-label="Approche"><motion.p {...(reducedMotion ? {} : reveal())}>Un projet commence par une question simple : <em>à quoi doit-il vraiment servir ?</em></motion.p><div><span>01 / Approche</span><p>J'aime les interfaces qui rendent un sujet complexe plus clair. Je travaille du besoin initial jusqu'au détail de l'expérience, avec une attention constante pour le produit et sa fiabilité.</p></div></section>

      <section id="realisations" className="portfolio-projects" aria-labelledby="projects-title"><div className="section-heading"><span>02 / Réalisations</span><h2 id="projects-title">Des produits<br /><em>dans la vraie vie.</em></h2><p>Une sélection d'applications conçues pour des usages très différents. Les captures proviennent des applications et de leurs versions web.</p></div>
        {featured.map((project, index) => <article id={project.id} className={`featured-project project-${project.accent}`} key={project.id}>
          <motion.div className="featured-project-copy" {...(reducedMotion ? {} : reveal(index % 2 ? 'right' : 'left'))}><span className="project-number">0{index + 1} / {project.field}</span><h3>{project.name}<span>.</span></h3><p className="project-description">{project.description}</p><p className="project-contribution">{project.contribution}</p><div className="project-detail-list">{project.details.map(detail => <span key={detail}>{detail}</span>)}</div><div className="project-links">{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le produit <span aria-hidden="true">↗</span></a>}<Link to={`/projets#${project.id}`}>Voir le projet <span aria-hidden="true">→</span></Link></div></motion.div>
          <motion.div className="featured-project-media" {...(reducedMotion ? {} : reveal(index % 2 ? 'left' : 'right'))}><PortfolioVisual project={project} /></motion.div>
        </article>)}
      </section>

      <section className="portfolio-capabilities"><div className="capabilities-heading"><span>03 / Ce que je fais</span><h2>Du premier écran<br />à la mise en ligne.</h2></div><div className="capabilities-list"><div><span>01</span><h3>Expérience & interface</h3><p>Parcours, hiérarchie visuelle, composants et interactions pensés pour l'usage.</p></div><div><span>02</span><h3>Web & mobile</h3><p>Applications React et React Native, intégration API et données métier.</p></div><div><span>03</span><h3>Produit & livraison</h3><p>Tests, ajustements, déploiement et maintenance après la première version.</p></div></div><Link to="/cv">Voir mes compétences et mon CV <span aria-hidden="true">↗</span></Link></section>

      <section className="portfolio-more"><div className="section-heading"><span>04 / Autres projets</span><h2>Explorer<br /><em>les autres univers.</em></h2></div><div className="more-grid">{more.map((project, index) => <motion.article key={project.id} className={`more-project project-${project.accent}`} {...(reducedMotion ? {} : reveal(index % 2 ? 'right' : 'left'))}><PortfolioVisual project={project} compact /><div><span>{project.field}</span><h3>{project.name}</h3><p>{project.description}</p><Link to={`/projets#${project.id}`}>Voir le projet <span aria-hidden="true">↗</span></Link></div></motion.article>)}</div><Link className="all-projects-link" to="/projets">Tous les projets <span aria-hidden="true">→</span></Link></section>

      <section className="portfolio-outro"><span>05 / Une idée à construire ?</span><h2>Parlons de votre<br /><em>prochain projet.</em></h2><p>Une collaboration, une question technique ou un produit à imaginer : je serai ravi d'en discuter.</p><Link to="/contact">Me contacter <span aria-hidden="true">↗</span></Link></section>
    </main>
  )
}
