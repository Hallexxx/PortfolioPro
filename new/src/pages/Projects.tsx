import React, { useState, useMemo } from 'react'
import { projects, allTags } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import ScrollReveal from '../components/ScrollReveal'
import { Project } from '../data/projects'

type SortOption = 'recent' | 'popular'

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('recent')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Sort
    if (sortBy === 'recent') {
      filtered = [...filtered].sort((a, b) => b.date.localeCompare(a.date))
    } else {
      filtered = [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured))
    }

    return filtered
  }, [selectedTags, searchQuery, sortBy])

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#EAF0FF] font-['Space_Grotesk']">
            Mes Projets
          </h1>
          <p className="text-xl text-[#A8B3CF] max-w-2xl">
            Une sélection de projets web & mobile développés avec passion et expertise technique.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-[#0E1420]/60 backdrop-blur-xl border border-white/10 rounded-2xl text-[#EAF0FF] placeholder-[#A8B3CF]/50 focus:outline-none focus:border-[#3CF2FF]/50 transition-all"
              aria-label="Rechercher un projet"
            />
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8B3CF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Sort & Filter Controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#A8B3CF]">Trier par:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortBy('recent')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    sortBy === 'recent'
                      ? 'bg-[#3CF2FF]/20 text-[#3CF2FF] border border-[#3CF2FF]/50'
                      : 'bg-[#0E1420]/40 text-[#A8B3CF] border border-white/5 hover:border-white/10'
                  }`}
                >
                  Plus récents
                </button>
                <button
                  onClick={() => setSortBy('popular')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    sortBy === 'popular'
                      ? 'bg-[#3CF2FF]/20 text-[#3CF2FF] border border-[#3CF2FF]/50'
                      : 'bg-[#0E1420]/40 text-[#A8B3CF] border border-white/5 hover:border-white/10'
                  }`}
                >
                  Featured
                </button>
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedTags.length > 0 || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedTags([])
                  setSearchQuery('')
                }}
                className="px-4 py-2 rounded-xl text-sm font-medium text-[#FF2B2B] bg-[#FF2B2B]/10 border border-[#FF2B2B]/30 hover:bg-[#FF2B2B]/20 transition-all"
              >
                Réinitialiser filtres
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div className="space-y-3">
            <span className="text-sm text-[#A8B3CF]">Filtrer par technologie:</span>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-[#3CF2FF]/20 text-[#3CF2FF] border border-[#3CF2FF]/50'
                      : 'bg-[#0E1420]/40 text-[#A8B3CF] border border-white/5 hover:border-white/10 hover:text-[#EAF0FF]'
                  }`}
                  aria-pressed={selectedTags.includes(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-[#A8B3CF]">
          {filteredProjects.length === 0 ? (
            <p className="text-center py-12 text-lg">
              Aucun projet ne correspond à vos critères de recherche.
            </p>
          ) : (
            <p>
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
  )
}
