import { CSSProperties, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectModal from '../components/ProjectModal'
import ScrollReveal from '../components/ScrollReveal'
import { Project, projects } from '../data/projects'

const focusOrder = ['watchlist', 'planete-creche', 'nova-agent-forge']

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('fr-FR', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

interface ActiveProjectPanelProps {
  activeProject: Project
  onOpen: () => void
}

function ActiveProjectPanel({ activeProject, onOpen }: ActiveProjectPanelProps) {
  return (
    <div data-active-panel className="rounded-2xl border border-[#3CF2FF]/20 bg-[#0E1720]/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
      <div>
        <p className="text-sm font-medium text-[#7FEAFF]">Dossier actif</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.03em] text-balance xl:text-4xl">
              {activeProject.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#B7C3D8] xl:text-base">
              {activeProject.context}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-3 lg:grid-cols-1 xl:grid-cols-3">
        {[
          ['Fonctions', activeProject.features.length],
          ['Objectifs', activeProject.objectives.length],
          ['Stack', activeProject.stack.length],
        ].map(([label, value]) => (
          <div key={label} className="min-w-0 rounded-xl bg-[#111B24] p-4">
            <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#7FEAFF]">{value}</div>
            <div className="mt-1 text-xs text-[#7C8BA3]">{label}</div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="mt-7 inline-flex min-h-11 rounded-xl bg-[#7FEAFF] px-6 py-3 font-semibold text-[#071017] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B9F7FF] active:translate-y-0"
      >
        Ouvrir la fiche complete
      </button>
    </div>
  )
}

export default function Projects() {
  const focusProjects = useMemo(
    () =>
      focusOrder
        .map((id) => projects.find((project) => project.id === id))
        .filter(Boolean) as Project[],
    []
  )

  const secondaryProjects = useMemo(
    () =>
      projects
        .filter((project) => !focusOrder.includes(project.id))
        .sort((a, b) => b.date.localeCompare(a.date)),
    []
  )

  const [activeId, setActiveId] = useState(focusProjects[0]?.id ?? projects[0].id)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activePanelY, setActivePanelY] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const activeProject = focusProjects.find((project) => project.id === activeId) ?? focusProjects[0]

  const syncActivePanel = useCallback(() => {
    const list = listRef.current
    const card = cardRefs.current[activeId]
    if (!list || !card) return

    setActivePanelY(Math.max(0, card.offsetTop - list.offsetTop))
  }, [activeId])

  useLayoutEffect(() => {
    syncActivePanel()
  }, [syncActivePanel])

  useEffect(() => {
    syncActivePanel()
    window.addEventListener('resize', syncActivePanel)

    let observer: ResizeObserver | undefined
    if ('ResizeObserver' in window && listRef.current) {
      observer = new ResizeObserver(syncActivePanel)
      observer.observe(listRef.current)
    }

    return () => {
      window.removeEventListener('resize', syncActivePanel)
      observer?.disconnect()
    }
  }, [syncActivePanel])

  return (
    <div className="min-h-screen overflow-x-clip bg-[#080D12] pt-28 text-[#EAF0FF]">
      <section className="relative px-6 pb-20">
        <div className="absolute inset-0 pointer-events-none project-grid-fade" />
        <motion.div
          aria-hidden="true"
          className="absolute right-[8%] top-10 hidden h-72 w-72 rounded-[18px] border border-[#3CF2FF]/20 bg-[#10202A]/40 md:block"
          animate={{ rotateX: [58, 66, 58], rotateZ: [35, 42, 35], y: [0, -18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1fr)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex rounded-md border border-[#3CF2FF]/30 bg-[#3CF2FF]/10 px-3 py-1 text-sm font-medium text-[#7FEAFF]">
              References produit et projets techniques
            </p>
            <h1 className="font-['Space_Grotesk'] text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
              Des projets presentes comme des produits, pas comme des articles.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B7C3D8]">
              Chaque dossier montre le contexte, les fonctionnalites, les contraintes techniques et les choix d'architecture. Les trois references mises en avant sont Watchlist, Planete Creche et Nova / Agent Forge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: 1400 }}
          >
            <div className="case-stack relative grid gap-4">
              {focusProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition duration-500 md:translate-x-[var(--case-offset)] ${
                    activeId === project.id
                      ? 'border-[#3CF2FF]/50 bg-[#0F1B24]'
                      : 'border-white/[0.08] bg-[#0C131B]/[0.76] hover:border-white/[0.18] hover:bg-[#101A23]'
                  }`}
                  style={{ '--case-offset': `${index * 18}px` } as CSSProperties}
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[#3CF2FF] opacity-0 transition duration-300 group-hover:opacity-80" />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8BA3]">
                        Case {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.02em] text-[#F4F8FF]">
                        {project.title}
                      </h2>
                    </div>
                    <span className="w-fit shrink-0 rounded-md border border-white/10 px-2.5 py-1 text-xs text-[#B7C3D8]">
                      {formatDate(project.date)}
                    </span>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[#A8B3CF]">
                    {project.description}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-[#0B1219] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative hidden lg:block">
            <motion.div
              animate={{ y: activePanelY }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <ActiveProjectPanel
                activeProject={activeProject}
                onOpen={() => setSelectedProject(activeProject)}
              />
            </motion.div>
          </div>

          <div className="lg:hidden">
            <ActiveProjectPanel
              activeProject={activeProject}
              onOpen={() => setSelectedProject(activeProject)}
            />
          </div>

          <div ref={listRef} className="grid gap-6">
            {focusProjects.map((project, index) => (
              <div
                key={project.id}
                data-project-card={project.id}
                ref={(element) => {
                  cardRefs.current[project.id] = element
                }}
              >
              <ScrollReveal delay={index * 0.08}>
                <motion.article
                  onPointerEnter={() => setActiveId(project.id)}
                  onFocus={() => setActiveId(project.id)}
                  whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-2xl border bg-[#0E1720] p-5 transition duration-500 ${
                    activeId === project.id ? 'border-[#3CF2FF]/45' : 'border-white/[0.08]'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#081017] text-left"
                    >
                      <img
                        src={project.cover}
                        alt={`Apercu du projet ${project.title}`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071017] via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-md bg-[#071017]/[0.84] px-3 py-1 text-sm font-medium text-[#EAF0FF]">
                        Voir le detail
                      </span>
                    </button>

                    <div className="flex flex-col gap-5">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 5).map((tag) => (
                            <span key={tag} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs leading-5 text-[#B7C3D8]">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="mt-4 font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.02em]">
                          {project.title}
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#A8B3CF]">
                          {project.description}
                        </p>
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-xl bg-[#0A1118] p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8BA3]">Fonctionnalites</p>
                          <ul className="mt-3 grid gap-2">
                            {project.features.slice(0, 3).map((feature) => (
                              <li key={feature} className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-6 text-[#DDE6F7]">
                                <span className="mt-3 h-px bg-[#7FEAFF]" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-xl bg-[#0A1118] p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8BA3]">Specs techniques</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.stack.slice(0, 8).map((tech) => (
                              <span key={tech} className="rounded-md bg-[#7FEAFF]/10 px-2.5 py-1 text-xs leading-5 text-[#B9F7FF]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-medium text-[#7FEAFF]">Archive selective</p>
                <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.03em]">
                  Autres references livrees ou prototypées
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#A8B3CF]">
                Un index compact pour scanner les stacks, ouvrir une fiche et comparer rapidement les projets sans repasser par une logique de blog.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]">
            {secondaryProjects.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.28) }}
                className="grid gap-4 bg-[#0B1219] p-5 text-left transition duration-300 hover:bg-[#111B24] lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)_150px]"
              >
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#A8B3CF]">{project.description}</p>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-[#B7C3D8]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-start text-sm font-medium text-[#7FEAFF] md:justify-end">
                  Ouvrir le dossier
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
