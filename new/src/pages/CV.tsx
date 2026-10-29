import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { timelineData } from '../data/cv'
import './PortfolioPages.css'

const experience = timelineData.filter(item => item.type === 'experience')
const education = timelineData.filter(item => item.type === 'education')
const skills = [
  { title: 'Interfaces web', items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Accessibilité', 'Responsive'] },
  { title: 'Applications mobiles', items: ['React Native', 'Expo', 'Navigation', 'Parcours utilisateurs', 'Stockage local'] },
  { title: 'Services & données', items: ['Node.js', 'Express', 'API REST', 'MongoDB', 'SQL', '4D'] },
  { title: 'Livraison', items: ['Git & GitHub', 'Déploiement', 'Apache', 'SSL', 'WordPress', 'Tests'] },
]

export default function CV() {
  const reduced = !!useReducedMotion()
  return <main className="portfolio-page cv-page">
    <header className="page-hero cv-hero"><div><span className="page-index">Portfolio / Parcours</span><h1>Un parcours<br /><em>tourné vers le concret.</em></h1><p>Développeur web et mobile, je relie conception d'interface, logique métier et mise en ligne. Mes expériences en entreprise et mes projets personnels nourrissent la même envie : construire des outils que l'on a plaisir à utiliser.</p><div className="cv-hero-actions"><a href="/cv_alexandre_perez.pdf" download>Télécharger mon CV <span aria-hidden="true">↓</span></a><Link to="/contact">Me contacter <span aria-hidden="true">↗</span></Link></div></div><div className="cv-monogram" aria-hidden="true"><span>A</span><span>P</span><small>Concevoir · Développer · Livrer</small></div></header>
    <section className="cv-skills" id="competences"><div className="page-section-head"><span>01 / Compétences</span><h2>Les outils que<br />je mets en œuvre.</h2><p>Des compétences appliquées à des produits web et mobiles, du prototype jusqu'à la version utilisable.</p></div><div className="skills-index">{skills.map((group, index) => <motion.div key={group.title} initial={reduced ? false : { opacity: 0, x: index % 2 ? 36 : -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6 }}><span>0{index + 1}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></motion.div>)}</div></section>
    <section className="cv-journey"><div className="page-section-head"><span>02 / Expériences</span><h2>Apprendre<br />en construisant.</h2></div><div className="cv-timeline">{experience.map((item, index) => <motion.article key={item.id} initial={reduced ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65, delay: index * .07 }}><div className="timeline-date">{item.period}</div><div><span>{item.organization} · {item.location}</span><h3>{item.title}</h3><ul>{item.description.map(line => <li key={line}>{line}</li>)}</ul><p>{item.technologies.join(' · ')}</p></div></motion.article>)}</div></section>
    <section className="cv-education"><div className="page-section-head"><span>03 / Formation</span><h2>La base, puis<br />la pratique.</h2></div><div className="education-list">{education.map(item => <article key={item.id}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.organization}</p></div></article>)}</div></section>
    <section className="cv-project-callout"><div><span>04 / Projets</span><h2>Le portfolio continue<br />avec les produits.</h2><p>Planète Crèche, Watchlist, Élan et d'autres applications montrent comment ces compétences se traduisent en interfaces et en parcours concrets.</p></div><Link to="/projets">Explorer les réalisations <span aria-hidden="true">↗</span></Link></section>
  </main>
}
