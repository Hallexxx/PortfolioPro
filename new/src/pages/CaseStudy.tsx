import { useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { caseBySlug, caseStudies, type CaseShot, type CaseStudy as Case } from '../data/caseStudies'
import { Counter, Magnetic, Parallax, Reveal, SplitText } from '../components/motion'
import './CaseStudy.css'

const Phone = ({ src, alt }: { src: string; alt: string }) => (
  <div className="dev-phone"><img src={src} alt={alt} loading="lazy" /></div>
)

const Laptop = ({ src, alt, url }: { src: string; alt: string; url?: string }) => (
  <div className="dev-laptop">
    <div className="dev-laptop-bar"><i /><i /><i /><b>{url}</b></div>
    <img src={src} alt={alt} loading="lazy" />
    <div className="dev-laptop-foot" aria-hidden="true" />
  </div>
)

function HeroVisual({ entry }: { entry: Case }) {
  const { desktop, desktop2, phone, phone2, chip } = entry.hero
  const label = entry.imageLabel

  if (desktop && phone) {
    return (
      <div className="case-hero-mix">
        <Laptop src={desktop} alt={`${entry.name} sur ordinateur`} url={entry.links[0]?.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} />
        <motion.div
          className="case-hero-mix-phone"
          initial={{ opacity: 0, y: 50, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Phone src={phone} alt={`${entry.name} sur téléphone`} />
        </motion.div>
        {chip && <span className="case-chip">{chip}</span>}
      </div>
    )
  }

  if (desktop) {
    return (
      <div className="case-hero-desk-duo">
        <Laptop src={desktop} alt={label} />
        {desktop2 && <div className="dev-laptop"><div className="dev-laptop-bar"><i /><i /><i /></div><img src={desktop2} alt="" loading="lazy" /></div>}
      </div>
    )
  }

  if (phone) {
    return (
      <div className="case-hero-duo">
        <motion.div className="case-hero-duo-front" initial={{ opacity: 0, y: 60, rotate: -14 }} animate={{ opacity: 1, y: 0, rotate: -5 }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <Phone src={phone} alt={label} />
        </motion.div>
        {phone2 && (
          <motion.div className="case-hero-duo-back" initial={{ opacity: 0, y: 60, rotate: 16 }} animate={{ opacity: 0.92, y: 0, rotate: 6 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <Phone src={phone2} alt="" />
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className="case-concept" aria-hidden="true">
      <span /><span /><span />
      <b>{entry.name[0]}</b>
    </div>
  )
}

function Gallery({ entry }: { entry: Case }) {
  if (!entry.shots.length) return null
  const flat = entry.galleryKind === 'flat'
  return (
    <section className="case-gallery" id="captures">
      <div className="case-head">
        <div>
          <span className="case-index">En images</span>
          <SplitText as="h2" text="Un univers à explorer." />
        </div>
        <p>{entry.imageLabel}.</p>
      </div>
      <div className={`case-gallery-track ${flat ? 'flat' : ''}`}>
        {entry.shots.map((shot: CaseShot, index: number) => (
          <Reveal as="div" key={shot.src} dir={index % 2 ? 'right' : 'left'} delay={index * 0.05} amount={0.25}>
            <figure>
              {flat ? <img src={shot.src} alt={`${entry.name} - ${shot.caption}`} loading="lazy" /> : <Phone src={shot.src} alt={`${entry.name} - ${shot.caption}`} />}
              <figcaption>{shot.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Deepdive({ entry }: { entry: Case }) {
  const deep = entry.deepdive
  if (!deep) return null

  return (
    <section className="case-deep">
      <div className="case-head">
        <div>
          <span className="case-index">{deep.index}</span>
          <h2><SplitText text={deep.title} /><br /><em className="case-em"><SplitText text={deep.titleEm} delay={0.12} /></em></h2>
        </div>
        <p>{deep.text}</p>
      </div>

      {deep.stage && (
        <Reveal dir="up" className="case-stage">
          <Laptop src={deep.stage.image} alt={deep.stage.alt} url={deep.stage.url} />
        </Reveal>
      )}

      {deep.layout === 'phone' && (
        <div className="case-spotlights">
          {deep.cards.map((card, index) => (
            <Reveal as="article" key={card.title} className="case-spotlight" dir={index === 1 ? 'up' : index ? 'right' : 'left'} delay={index * 0.08}>
              <div>
                <span>{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              {card.image && <Phone src={card.image} alt={card.alt || ''} />}
            </Reveal>
          ))}
        </div>
      )}

      {deep.layout === 'web' && deep.cards.length > 0 && (
        <div className="case-webstories">
          {deep.cards.map((card, index) => (
            <article className="case-webstory" key={card.title}>
              <Reveal dir={index % 2 ? 'right' : 'left'}>
                <div>
                  <span>{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Reveal>
              <Reveal dir={index % 2 ? 'left' : 'right'} delay={0.1}>
                <Parallax distance={26}>
                  {card.image && <Laptop src={card.image} alt={card.alt || ''} url={card.url} />}
                </Parallax>
              </Reveal>
            </article>
          ))}
        </div>
      )}

      {deep.layout === 'grid' && (
        <div className={`case-grid4 ${deep.cards.length === 3 ? 'three' : ''}`}>
          {deep.cards.map((card, index) => (
            <Reveal as="article" key={card.title} dir={index % 2 ? 'right' : 'left'} delay={index * 0.06}>
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.small && <small>{card.small}</small>}
            </Reveal>
          ))}
        </div>
      )}

      {deep.ribbon && (
        <Reveal dir="up" className="case-ribbon">
          <div>
            <span>{deep.ribbon.tag}</span>
            <h3>{deep.ribbon.title}</h3>
            <p>{deep.ribbon.text}</p>
          </div>
          <div className="case-ribbon-shots">
            {deep.ribbon.images.map(shot => <Phone key={shot.image} src={shot.image} alt={shot.alt} />)}
          </div>
        </Reveal>
      )}

      {deep.note && (
        <Reveal dir="up" className="case-note">
          <strong>{deep.note.title}</strong>
          <p>{deep.note.text}</p>
        </Reveal>
      )}
    </section>
  )
}

export default function CaseStudyPage() {
  const { slug = '' } = useParams()
  const entry = caseBySlug(slug)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const watermarkRaw = useTransform(scrollYProgress, [0, 0.25], [0, -160])
  const watermarkX = useSpring(watermarkRaw, { stiffness: 60, damping: 24 })

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!entry) return
    const previous = document.title
    document.title = `${entry.name} | Alexandre Perez`
    return () => { document.title = previous }
  }, [slug, entry])

  if (!entry) {
    return (
      <main className="case-page case-missing">
        <h1>Ce projet n'existe pas.</h1>
        <Link to="/projets">Revenir aux réalisations →</Link>
      </main>
    )
  }

  const others = caseStudies.filter(item => item.slug !== entry.slug)
  const externalLinks = entry.links.filter(item => item.url.startsWith('http'))

  return (
    <main className={`case-page case-${entry.accent}`}>
      <section className="case-hero">
        <div className="case-hero-grain" aria-hidden="true" />
        <div className="case-hero-inner">
          <div>
            <Link className="case-back" to="/projets"><span aria-hidden="true">←</span> Toutes les réalisations</Link>
            <motion.div
              className="case-identity"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {entry.icon ? <img src={entry.icon} alt="" width={54} height={54} /> : <span className="case-monogram" aria-hidden="true">{entry.name[0]}</span>}
              <span>{entry.name}</span>
            </motion.div>
            <p className="case-hero-eyebrow">{entry.eyebrow}</p>
            <h1><SplitText text={entry.title} /></h1>
            <p className="case-kicker">{entry.num} / {entry.kind}<i>·</i>{entry.status}</p>
            <motion.p
              className="case-lead"
              initial={reduced ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: '1.6rem' }}
            >
              {entry.lead}
            </motion.p>
            <div className="case-hero-actions">
              {externalLinks[0] && <Magnetic><a className="case-pill" href={externalLinks[0].url} target="_blank" rel="noopener noreferrer">{externalLinks[0].label} <span aria-hidden="true">↗</span></a></Magnetic>}
              {externalLinks.slice(1, 3).map(item => (
                <a className="case-ghost" key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <span aria-hidden="true">↗</span></a>
              ))}
              {entry.shots.length > 0 && <a className="case-ghost" href="#captures">Voir les écrans <span aria-hidden="true">↓</span></a>}
            </div>
          </div>
          <div className="case-hero-visual">
            <HeroVisual entry={entry} />
            <span className="case-hero-caption">{entry.imageLabel}</span>
          </div>
        </div>
        <motion.div className="case-watermark" aria-hidden="true" style={reduced ? undefined : { x: watermarkX }}>{entry.name}</motion.div>
      </section>

      <section className="case-intro">
        <span className="case-index">L'idée</span>
        <SplitText as="h2" text={entry.intro} />
        <div className="case-intro-side">
          <Reveal as="p" dir="up" delay={0.1}>{entry.introText}</Reveal>
          <Reveal dir="up" delay={0.18}>
            <div className="case-stack">{entry.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
          </Reveal>
        </div>
      </section>

      {entry.mobileShots && entry.mobileShots.length > 0 && (
        <section className="case-mobile" id="mobile">
          <div className="case-head">
            <div>
              <span className="case-index">{entry.name} sur mobile</span>
              <h2>Une interface <em className="case-em">pensée pour le pouce.</em></h2>
            </div>
            <p>Séances, recettes et courses dans une interface conçue pour le téléphone. Captures prises dans l'aperçu mobile réel de l'application.</p>
          </div>
          <div className="case-shots-row" tabIndex={0} aria-label={`Captures mobiles de ${entry.name}, faire défiler horizontalement`}>
            {entry.mobileShots.map((shot, index) => (
              <Reveal as="div" key={shot.src} dir={index % 2 ? 'right' : 'left'} delay={index * 0.06} amount={0.2}>
                <figure>
                  <Phone src={shot.src} alt={`${entry.name} sur téléphone : ${shot.caption.toLowerCase()}`} />
                  <figcaption><span>0{index + 1}</span>{shot.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="case-features" id="experience">
        <div className="case-head">
          <div>
            <span className="case-index">L'expérience</span>
            <h2><SplitText text="Ce que l'application" /><br /><em className="case-em"><SplitText text="rend possible." delay={0.1} /></em></h2>
          </div>
          <p>{entry.features.length} piliers qui structurent le produit, du premier écran aux usages du quotidien.</p>
        </div>
        <div className="case-feature-list">
          {entry.features.map((feature, index) => (
            <Reveal as="article" key={feature.num} className="case-feature" dir={index % 2 ? 'right' : 'left'} delay={index * 0.05}>
              <span>{feature.num}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Deepdive entry={entry} />
      <Gallery entry={entry} />

      <section className="case-steps">
        <div className="case-head">
          <div>
            <span className="case-index">En pratique</span>
            <SplitText as="h2" text="Simple à prendre en main." />
          </div>
          <p>Trois temps suffisent pour comprendre le produit et l'intégrer à une journée de travail.</p>
        </div>
        <div className="case-steps-grid">
          {entry.steps.map((step, index) => (
            <Reveal as="div" key={step.num} className="case-step" dir="up" delay={index * 0.1}>
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-pricing" id="tarifs">
        <div>
          <span className="case-index">Tarifs & disponibilité</span>
          <h2>Une offre claire,<br />à chaque étape.</h2>
        </div>
        <Reveal dir="right" className="case-panel">
          <span className="case-panel-label">{entry.pricing === 'Gratuit' ? 'Gratuit' : entry.status}</span>
          <strong>{entry.pricing}</strong>
          <p>{entry.pricingNote}</p>
          <div className="case-panel-links">
            {externalLinks.map(item => (
              <a className="case-ghost" key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <span aria-hidden="true">↗</span></a>
            ))}
            <Link className="case-ghost" to="/contact">Parler du projet <span aria-hidden="true">→</span></Link>
          </div>
          {entry.qr && (
            <div className="case-qr">
              <img src={entry.qr.src} alt={`QR code : ${entry.qr.text}`} width={84} height={84} />
              <p>{entry.qr.text}</p>
            </div>
          )}
        </Reveal>
      </section>

      <section className="case-faq">
        <div>
          <span className="case-index">Questions fréquentes</span>
          <h2>L'essentiel,<br />en <Counter value={entry.faq.length} /> réponses.</h2>
        </div>
        <div className="case-faq-list">
          {entry.faq.map(item => (
            <details key={item.q}>
              <summary>{item.q}<i aria-hidden="true">+</i></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="case-next">
        <span className="case-index">Continuer à explorer</span>
        <div className="case-next-grid">
          {others.slice(0, 3).map((item, index) => (
            <Reveal as="div" key={item.slug} dir="up" delay={index * 0.08}>
              <Link className={`case-next-card case-${item.accent}`} to={`/projets/${item.slug}`} style={{ ['--card-bg' as string]: 'var(--case-bg)', ['--card-ink' as string]: 'var(--case-ink)' }}>
                <span>{item.kind} · {item.status}</span>
                <h3>{item.name}</h3>
                <p>{item.intro}</p>
                <b>Voir le projet <span aria-hidden="true">→</span></b>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
