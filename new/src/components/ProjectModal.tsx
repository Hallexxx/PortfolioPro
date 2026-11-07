import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Project } from '../data/projects'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  // (optionnel mais pratique) reset quand on change de projet
  useEffect(() => {
    setCurrentImageIndex(0)
    setDeviceMode('desktop')
  }, [project.id])

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  if (!mounted) return null


  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0B0F14]/95 backdrop-blur-2xl" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-[#0E1420]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-[#0E1420]/80 backdrop-blur-md border border-white/10 rounded-full text-[#A8B3CF] hover:text-[#FF2B2B] hover:border-[#FF2B2B]/50 transition-all duration-300"
          aria-label="Fermer"
        >
          <span aria-hidden="true" className="text-lg leading-none">x</span>
        </button>

        <div className="p-8 md:p-12 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h2 id="modal-title" className="text-4xl md:text-5xl font-bold text-[#EAF0FF] font-['Space_Grotesk']">
                  {project.title}
                </h2>
                <p className="text-lg text-[#A8B3CF]">{project.description}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium text-[#3CF2FF] bg-[#3CF2FF]/10 border border-[#3CF2FF]/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Device Preview */}
          <div className="space-y-4">
            {/* Device Toggle */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${deviceMode === 'desktop'
                  ? 'bg-[#3CF2FF]/20 text-[#3CF2FF] border border-[#3CF2FF]/50'
                  : 'bg-[#0E1420]/40 text-[#A8B3CF] border border-white/5 hover:border-white/10'
                  }`}
                aria-label="Mode desktop"
              >
                Desktop
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${deviceMode === 'mobile'
                  ? 'bg-[#3CF2FF]/20 text-[#3CF2FF] border border-[#3CF2FF]/50'
                  : 'bg-[#0E1420]/40 text-[#A8B3CF] border border-white/5 hover:border-white/10'
                  }`}
                aria-label="Mode mobile"
              >
                Mobile
              </button>
            </div>

            {/* Device Mockup */}
            <div className="relative flex items-center justify-center py-8">
              <div
                className={`relative transition-all duration-500 ${deviceMode === 'desktop'
                  ? 'w-full max-w-5xl'
                  : 'w-full max-w-sm'
                  }`}
              >
                {/* Device Frame */}
                <div
                  className={`relative bg-[#0B0F14] rounded-2xl border-8 overflow-hidden shadow-2xl ${deviceMode === 'desktop'
                    ? 'border-[#1a1f2e] aspect-video'
                    : 'border-[#1a1f2e] aspect-[9/19]'
                    }`}
                >
                  {/* Top bar (mobile) */}
                  {deviceMode === 'mobile' && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0B0F14] rounded-b-2xl z-10" />
                  )}

                  {/* Image Carousel */}
                  <div className="relative w-full h-full">
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#0E1420]/80 backdrop-blur-md border border-white/10 rounded-full text-[#EAF0FF] hover:bg-[#3CF2FF]/20 hover:border-[#3CF2FF]/50 transition-all"
                          aria-label="Image précédente"
                        >
                          <span className="text-[10px] font-semibold">Prev</span>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#0E1420]/80 backdrop-blur-md border border-white/10 rounded-full text-[#EAF0FF] hover:bg-[#3CF2FF]/20 hover:border-[#3CF2FF]/50 transition-all"
                          aria-label="Image suivante"
                        >
                          <span className="text-[10px] font-semibold">Next</span>
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex
                              ? 'bg-[#3CF2FF] w-8'
                              : 'bg-white/30 hover:bg-white/50'
                              }`}
                            aria-label={`Aller à l'image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#EAF0FF] mb-3 font-['Space_Grotesk']">Contexte</h3>
                <p className="text-[#A8B3CF] leading-relaxed">{project.context}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#EAF0FF] mb-3 font-['Space_Grotesk']">Objectifs</h3>
                <ul className="space-y-2">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="grid grid-cols-[12px_1fr] gap-3 text-[#A8B3CF]">
                      <span className="mt-3 h-px bg-[#3CF2FF]" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#EAF0FF] mb-3 font-['Space_Grotesk']">Fonctionnalités</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="grid grid-cols-[12px_1fr] gap-3 text-[#A8B3CF]">
                      <span className="mt-3 h-px bg-[#3CF2FF]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#EAF0FF] mb-3 font-['Space_Grotesk']">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium text-[#EAF0FF] bg-[#0E1420]/60 border border-white/10 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#EAF0FF] mb-3 font-['Space_Grotesk']">Défis & Solutions</h3>
                <p className="text-[#A8B3CF] leading-relaxed">{project.challenges}</p>
              </div>

              {project.results && project.results.trim() !== "" && (
                <div>
                  <h3 className="text-xl font-bold text-[#EAF0FF] mb-3 font-['Space_Grotesk']">Résultats</h3>
                  <p className="text-[#A8B3CF] leading-relaxed whitespace-pre-line">
                    {project.results}
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#3CF2FF]/20 border border-[#3CF2FF]/50 rounded-xl text-[#3CF2FF] font-medium hover:bg-[#3CF2FF]/30 transition-all"
              >
                Ouvrir le site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0E1420]/60 border border-white/10 rounded-xl text-[#A8B3CF] font-medium hover:text-[#EAF0FF] hover:border-white/20 transition-all"
              >
                {project.id === 'planete-creche' ? 'Voir le frontend' : 'Voir le code'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
