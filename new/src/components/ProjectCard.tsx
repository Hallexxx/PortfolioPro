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
              <span className="text-xs font-semibold text-[#3CF2FF]">Mis en avant</span>
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
                className="text-sm text-[#3CF2FF] hover:text-[#EAF0FF] transition-colors"
                aria-label="Voir la démo"
              >
                <span>Demo</span>
              </button>
            )}

            {project.githubUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, '_blank')
                }}
                className="text-sm text-[#A8B3CF] hover:text-[#EAF0FF] transition-colors"
                aria-label="Voir le code source"
              >
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
