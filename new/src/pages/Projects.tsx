import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import PortfolioVisual from '../components/PortfolioVisual'
import { portfolioProjects } from '../data/portfolio'
import './PortfolioPages.css'

export default function Projects() {
  const location = useLocation()
  const reduced = !!useReducedMotion()

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    const timeout = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' }), 100)
    return () => window.clearTimeout(timeout)
  }, [location.hash, reduced])

  return <main className="portfolio-page projects-page">
    <header className="page-hero"><span className="page-index">Portfolio / Réalisations</span><h1>Des projets conçus<br /><em>pour être utilisés.</em></h1><p>De la petite enfance au cinéma, chaque produit répond à un besoin précis. Voici les interfaces, les décisions et les outils derrière leur réalisation.</p><div className="project-jump">{portfolioProjects.map((project, index) => <a key={project.id} href={`#${project.id}`}>{String(index + 1).padStart(2, '0')} {project.name}</a>)}</div></header>
    {portfolioProjects.map((project, index) => <section id={project.id} key={project.id} className={`project-dossier project-${project.accent}`}>
      <motion.div className="dossier-copy" initial={reduced ? false : { opacity: 0, x: index % 2 ? 42 : -42 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .14 }} transition={{ duration: .7 }}><span className="page-index">{String(index + 1).padStart(2, '0')} / {project.field}</span><h2>{project.name}<span>.</span></h2><p className="dossier-lead">{project.description}</p><div className="dossier-block"><h3>Mon travail</h3><p>{project.contribution}</p></div><div className="dossier-block"><h3>Fonctionnalités</h3><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div><div className="dossier-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div><div className="dossier-links">{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Ouvrir le produit <span aria-hidden="true">↗</span></a>}<Link to="/contact">Parler du projet <span aria-hidden="true">→</span></Link></div></motion.div>
      <motion.div className="dossier-media" initial={reduced ? false : { opacity: 0, x: index % 2 ? -42 : 42 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .14 }} transition={{ duration: .7 }}><PortfolioVisual project={project} /></motion.div>
    </section>)}
    <section className="page-last-cta"><span>La suite</span><h2>Et si le prochain<br />projet était le vôtre ?</h2><Link to="/contact">Échanger avec moi <span aria-hidden="true">↗</span></Link></section>
  </main>
}
