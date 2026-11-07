import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import PortfolioVisual from '../components/PortfolioVisual'
import { Magnetic, Marquee, Parallax, Reveal, SplitText } from '../components/motion'
import { portfolioProjects } from '../data/portfolio'
import { caseByProjectId, caseStudies } from '../data/caseStudies'
import './PortfolioPages.css'

const concepts = caseStudies.filter(entry => !entry.portfolioId)

export default function Projects() {
  const location = useLocation()
  const reduced = !!useReducedMotion()

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    const timeout = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' }), 100)
    return () => window.clearTimeout(timeout)
  }, [location.hash, reduced])

  return (
    <main className="portfolio-page projects-page">
      <header className="page-hero">
        <span className="page-index">Portfolio / Réalisations</span>
        <h1><SplitText text="Des projets conçus" /><br /><em><SplitText text="pour être utilisés." delay={0.12} /></em></h1>
        <Reveal as="p" dir="up" delay={0.2}>De la petite enfance au cinéma, chaque produit répond à un besoin précis. Voici les interfaces, les décisions et les outils derrière leur réalisation.</Reveal>
        <Reveal dir="up" delay={0.3}>
          <div className="project-jump">
            {portfolioProjects.map((project, index) => (
              <a key={project.id} href={`#${project.id}`}>{String(index + 1).padStart(2, '0')} {project.name}</a>
            ))}
          </div>
        </Reveal>
      </header>

      <div className="projects-marquee">
        <Marquee items={['Web', 'Mobile', 'React', 'React Native', 'Node.js', 'TypeScript', 'Design produit', 'API']} speed={44} />
      </div>

      {portfolioProjects.map((project, index) => {
        const study = caseByProjectId(project.id)
        return (
          <section id={project.id} key={project.id} className={`project-dossier project-${project.accent}`}>
            <Reveal className="dossier-copy" dir={index % 2 ? 'right' : 'left'} amount={0.15}>
              <span className="page-index">{String(index + 1).padStart(2, '0')} / {project.field}</span>
              <h2>{project.name}<span>.</span></h2>
              <p className="dossier-lead">{project.description}</p>
              <div className="dossier-block">
                <h3>Mon travail</h3>
                <p>{project.contribution}</p>
              </div>
              <div className="dossier-block">
                <h3>Fonctionnalités</h3>
                <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              </div>
              <div className="dossier-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
              <div className="dossier-links">
                {study && (
                  <Magnetic>
                    <Link className="dossier-cta" to={`/projets/${study.slug}`}>Lire l'étude de cas <span aria-hidden="true">→</span></Link>
                  </Magnetic>
                )}
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Ouvrir le produit <span aria-hidden="true">↗</span></a>}
              </div>
            </Reveal>
            <Reveal className="dossier-media" dir={index % 2 ? 'left' : 'right'} amount={0.15}>
              <Parallax distance={28}>
                <PortfolioVisual project={project} />
              </Parallax>
            </Reveal>
          </section>
        )
      })}

      {concepts.length > 0 && (
        <section className="projects-concepts">
          <div className="page-section-head">
            <span>Concepts</span>
            <SplitText as="h2" text="Des idées en cours de route." />
            <p>Des pistes produit explorées en maquettes et en prototypes, avant toute mise en production.</p>
          </div>
          <div className="concept-grid">
            {concepts.map((entry, index) => (
              <Reveal as="div" key={entry.slug} dir="up" delay={index * 0.08}>
                <Link className={`concept-card concept-${entry.accent}`} to={`/projets/${entry.slug}`}>
                  <span>{entry.kind} · {entry.status}</span>
                  <h3>{entry.name}</h3>
                  <p>{entry.intro}</p>
                  <b>Voir le concept <span aria-hidden="true">→</span></b>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="page-last-cta">
        <span>La suite</span>
        <h2>Et si le prochain<br />projet était le vôtre ?</h2>
        <Magnetic><Link to="/contact">Échanger avec moi <span aria-hidden="true">↗</span></Link></Magnetic>
      </section>
    </main>
  )
}
