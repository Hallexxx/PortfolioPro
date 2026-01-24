import React from 'react'
import { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <article
      className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.02] h-full"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Voir le projet ${project.title}`}
    >
      {/* Glass card */}
      <div className="relative bg-[#0E1420]/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden h-full flex flex-col">
        
        {/* Cover Image (hauteur fixe => toutes les cards identiques) */}
        <div className="relative h-64 overflow-hidden shrink-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.cover})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-[#0E1420]/50 to-transparent" />

          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#3CF2FF]/10 backdrop-blur-md border border-[#3CF2FF]/30 rounded-full">
              <span className="text-xs font-semibold text-[#3CF2FF]">★ Featured</span>
            </div>
          )}
        </div>

        {/* Content (flex-col pour pouvoir "pousser" les boutons) */}
        <div className="p-6 flex flex-col flex-1">
          {/* Zone texte */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#EAF0FF] font-['Space_Grotesk'] transition-colors group-hover:text-[#3CF2FF] min-h-[3.25rem]">
              {project.title}
            </h3>

            <p className="text-[#A8B3CF] text-sm leading-relaxed line-clamp-2 min-h-[2.75rem]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 min-h-[2.25rem]">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-[#3CF2FF] bg-[#3CF2FF]/5 border border-[#3CF2FF]/20 rounded-full transition-all hover:bg-[#3CF2FF]/10"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-3 py-1 text-xs font-medium text-[#A8B3CF]">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Links (toujours en bas) */}
          <div className="flex items-center gap-3 pt-4 mt-auto">
            {project.demoUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.demoUrl, '_blank')
                }}
                className="flex items-center gap-2 text-sm text-[#3CF2FF] hover:text-[#EAF0FF] transition-colors"
                aria-label="Voir la démo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Demo</span>
              </button>
            )}

            {project.githubUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, '_blank')
                }}
                className="flex items-center gap-2 text-sm text-[#A8B3CF] hover:text-[#EAF0FF] transition-colors"
                aria-label="Voir le code source"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Code</span>
              </button>
            )}
          </div>
        </div>

        {/* Hover glow */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 to-transparent" />
        </div>
      </div>
    </article>
  )
}
