import React, { useState, useMemo } from 'react'
import BlogCard from '../components/BlogCard'
import ScrollReveal from '../components/ScrollReveal'
import { blogPosts, allTags } from '../data/blog'

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every(tag => post.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#EAF0FF] via-[#3CF2FF] to-[#EAF0FF] bg-clip-text text-transparent">
            Blog & Réalisations
          </h1>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            Retours d'expérience, tutoriels techniques, et réflexions sur le développement web moderne
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-[#0E1420]/60 backdrop-blur-sm border border-white/10 rounded-2xl text-[#EAF0FF] placeholder-[#A8B3CF]/50 focus:outline-none focus:border-[#3CF2FF]/50 focus:ring-2 focus:ring-[#3CF2FF]/20 transition-all duration-300"
            />
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8B3CF] group-focus-within:text-[#3CF2FF] transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-[#A8B3CF] uppercase tracking-wider mb-4">
            Filtrer par tags
          </h3>
          <div className="flex flex-wrap gap-3">
            {allTags.map(tag => {
              const isSelected = selectedTags.includes(tag)
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#3CF2FF]/20 text-[#3CF2FF] border-[#3CF2FF]/50 shadow-[0_0_20px_rgba(60,242,255,0.3)]'
                      : 'bg-[#0E1420]/40 text-[#A8B3CF] border-white/10 hover:border-[#3CF2FF]/30 hover:text-[#3CF2FF]'
                  }`}
                >
                  {tag}
                  {isSelected && (
                    <span className="ml-2 inline-block w-4 h-4 text-xs leading-4">✕</span>
                  )}
                </button>
              )
            })}
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="mt-4 text-sm text-[#3CF2FF] hover:underline"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8 text-[#A8B3CF]">
          {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-[#A8B3CF]">Aucun article trouvé</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedTags([])
              }}
              className="mt-6 px-6 py-3 bg-[#3CF2FF]/10 text-[#3CF2FF] rounded-xl border border-[#3CF2FF]/30 hover:bg-[#3CF2FF]/20 transition-colors"
            >
              Réinitialiser la recherche
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
