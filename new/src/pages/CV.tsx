import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { skills, statCards, techStack, timelineData, type Skill } from '../data/cv'
import { caseStudies } from '../data/caseStudies'
import { Counter, Magnetic, Marquee, Reveal, SplitText } from '../components/motion'
import './PortfolioPages.css'
import './CV.css'

const experience = timelineData.filter(item => item.type === 'experience')
const education = timelineData.filter(item => item.type === 'education')
const projects = timelineData.filter(item => item.type === 'project')

const groups: { key: Skill['category']; title: string; tag: string }[] = [
  { key: 'frontend', title: 'Interfaces web', tag: '01 / Front' },
  { key: 'backend', title: 'Logique serveur', tag: '02 / Back' },
  { key: 'database', title: 'Données', tag: '03 / BDD' },
  { key: 'tools', title: 'Outils du quotidien', tag: '04 / Outils' },
  { key: 'devops', title: 'Mise en ligne', tag: '05 / Déploiement' },
]

const figures = statCards.filter(card => card.category === 'stat')
const highlights = statCards.filter(card => card.category === 'highlight' || card.category === 'cert')

/** Finds the published case study matching a CV project, when there is one. */
const studyFor = (title: string) => {
  const needle = title.toLowerCase()
  return caseStudies.find(entry => needle.includes(entry.name.toLowerCase()) || needle.includes(entry.slug.replace('-', ' ')))
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  // The fill starts at scaleX 0, so it has no area for IntersectionObserver to measure.
  // The observer has to watch the row instead, or the bar never fills.
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const target = skill.level / 100
  return (
    <div className="cv-bar" ref={ref}>
      <div className="cv-bar-head"><span>{skill.name}</span><b>{skill.level}%</b></div>
      <div className="cv-bar-rail">
        <motion.i
          initial={{ scaleX: reduced ? target : 0 }}
          animate={{ scaleX: reduced || inView ? target : 0 }}
          transition={{ duration: 1.1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  )
}

export default function CV() {
  const reduced = !!useReducedMotion()
  const fade = (delay: number) => (reduced ? {} : {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <main className="portfolio-page cv-page">
      <header className="cv-top">
        <div>
          <motion.p className="cv-role" {...fade(0.05)}>Développeur web & mobile · Alternance</motion.p>
          <h1><SplitText text="Un parcours" /><br /><em><SplitText text="tourné vers le concret." delay={0.12} /></em></h1>
          <motion.p {...fade(0.3)}>
            Je relie conception d'interface, logique métier et mise en ligne. Mes alternances et mes projets personnels
            nourrissent la même envie : construire des outils que l'on a plaisir à utiliser.
          </motion.p>
          <motion.div className="cv-top-actions" {...fade(0.42)}>
            <Magnetic><a className="cv-download" href="/cv_alexandre_perez.pdf" download>Télécharger mon CV <span aria-hidden="true">↓</span></a></Magnetic>
            <Link className="cv-secondary" to="/contact">Me contacter <span aria-hidden="true">↗</span></Link>
          </motion.div>
        </div>
        <motion.div
          className="cv-portrait"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cv-portrait-ring" aria-hidden="true" />
          <span className="cv-portrait-ring" aria-hidden="true" />
          <span className="cv-portrait-tag">Master Informatique · Ynov</span>
          <span className="cv-portrait-tag">Sophia Antipolis · Paris</span>
          <div className="cv-portrait-frame"><img src="/portrait.jpg" alt="Portrait d'Alexandre Perez" width={1333} height={2000} /></div>
        </motion.div>
      </header>

      <section className="cv-figures" aria-label="Chiffres clés">
        {figures.map(card => (
          <div key={card.id}>
            <strong>{/^\d/.test(card.value) ? <Counter value={parseInt(card.value, 10)} suffix={card.value.replace(/^\d+/, '')} /> : card.value}</strong>
            <b>{card.label}</b>
            <p>{card.detail}</p>
          </div>
        ))}
        <div>
          <strong><Counter value={caseStudies.length} /></strong>
          <b>Études de cas publiées</b>
          <p>Produits web et mobiles détaillés dans le portfolio</p>
        </div>
      </section>

      <section className="cv-abilities" id="competences">
        <div className="cv-head">
          <div>
            <span>01 / Compétences</span>
            <h2><SplitText text="Les outils que" /><br /><em><SplitText text="je mets en œuvre." delay={0.1} /></em></h2>
          </div>
          <p>Des compétences appliquées à des produits réels, du prototype jusqu'à la version utilisable en production.</p>
        </div>
        <div className="cv-ability-groups">
          {groups.map((group, groupIndex) => {
            const items = skills.filter(skill => skill.category === group.key)
            if (!items.length) return null
            return (
              <Reveal as="div" key={group.key} className="cv-group" dir={groupIndex % 2 ? 'right' : 'left'} amount={0.2}>
                <h3>{group.title}<i>{group.tag}</i></h3>
                {items.map((skill, index) => <SkillBar key={skill.name} skill={skill} index={index} />)}
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="cv-stack">
        <div className="cv-stack-head">
          <span>02 / Stack</span>
          <h2>Ce que j'utilise<br />au quotidien.</h2>
        </div>
        <Marquee items={techStack.map(tech => tech.name)} speed={36} />
        <div className="cv-stack-grid">
          {techStack.map((tech, index) => (
            <Reveal as="div" key={tech.name} dir="up" delay={index * 0.04} amount={0.5} blur={false}>
              <i style={{ background: tech.color }}>{tech.icon}</i>
              <span>{tech.name}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cv-path">
        <div className="cv-head">
          <div>
            <span>03 / Expériences</span>
            <h2><SplitText text="Apprendre" /><br /><SplitText text="en construisant." delay={0.1} /></h2>
          </div>
          <p>Deux alternances et deux stages, du service informatique au développement d'applications métier.</p>
        </div>
        <div className="cv-path-list">
          {experience.map((item, index) => (
            <Reveal as="article" key={item.id} className="cv-path-item" dir="up" delay={index * 0.06} amount={0.2}>
              <div className="cv-path-date">{item.period}</div>
              <div>
                <span className="cv-path-org">{item.organization} · {item.location}</span>
                <h3>{item.title}</h3>
                <ul>{item.description.map(line => <li key={line}>{line}</li>)}</ul>
                <div className="cv-path-tech">{item.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cv-school">
        <div className="cv-head">
          <div>
            <span>04 / Formation</span>
            <h2><SplitText text="La base, puis" /><br /><em><SplitText text="la pratique." delay={0.1} /></em></h2>
          </div>
          <p>{highlights.map(card => card.value).join(' · ')}</p>
        </div>
        <div className="cv-school-list">
          {education.map((item, index) => (
            <Reveal as="article" key={item.id} className="cv-school-item" dir={index % 2 ? 'right' : 'left'} delay={index * 0.06} amount={0.3}>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.organization} · {item.location}</p>
                <ul>{item.description.map(line => <li key={line}>{line}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cv-projects">
        <div className="cv-head">
          <div>
            <span>05 / Projets</span>
            <h2><SplitText text="Ce que ces compétences" /><br /><em><SplitText text="ont produit." delay={0.1} /></em></h2>
          </div>
          <p>Projets personnels, scolaires et de référence. Plusieurs d'entre eux ont leur étude de cas complète.</p>
        </div>
        <div className="cv-projects-grid">
          {projects.map((item, index) => {
            const study = studyFor(item.title)
            return (
              <Reveal as="div" key={item.id} className="cv-project" dir={index % 2 ? 'right' : 'left'} delay={index * 0.06} amount={0.2}>
                <span>{item.period} · {item.organization}</span>
                <h3>{item.title}</h3>
                <ul>{item.description.slice(0, 3).map(line => <li key={line}>{line}</li>)}</ul>
                <div className="cv-project-tech">{item.technologies.slice(0, 6).map(tech => <span key={tech}>{tech}</span>)}</div>
                {study && <Link to={`/projets/${study.slug}`}>Lire l'étude de cas <span aria-hidden="true">→</span></Link>}
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="cv-cta">
        <div>
          <span>06 / La suite</span>
          <h2>Le portfolio continue<br />avec les produits.</h2>
          <p>Planète Crèche, Watchlist, Élan et les autres applications montrent comment ces compétences se traduisent en interfaces et en parcours concrets.</p>
        </div>
        <div className="cv-cta-links">
          <Link to="/projets">Explorer les réalisations <span aria-hidden="true">↗</span></Link>
          <a href="/cv_alexandre_perez.pdf" download>Télécharger le CV <span aria-hidden="true">↓</span></a>
          <a href="https://www.linkedin.com/in/alexandre-perez-griessmann/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  )
}
