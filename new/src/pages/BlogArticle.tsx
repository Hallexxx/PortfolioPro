import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlogPost, getRelatedPosts } from '../data/blog'
import BlogCard from '../components/BlogCard'
import ScrollReveal from '../components/ScrollReveal'

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined
  const relatedPosts = post ? getRelatedPosts(post.id) : []
  
  const [activeHeading, setActiveHeading] = useState<string>('')

  useEffect(() => {
    if (!post) return

    // Extract headings from content
    const headings = post.content.match(/^##\s+(.+)$/gm)
    if (!headings) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    // Observe all h2 elements
    document.querySelectorAll('h2[id]').forEach((heading) => {
      observer.observe(heading)
    })

    return () => observer.disconnect()
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-4xl text-[#EAF0FF] mb-4">Article introuvable</h1>
        <Link to="/blog" className="text-[#3CF2FF] hover:underline">
          Retour au blog
        </Link>
      </div>
    )
  }

  // Parse content to extract table of contents
  const headings = post.content.match(/^##\s+(.+)$/gm)?.map(h => h.replace('## ', '')) || []

  // Convert markdown to HTML (simple implementation)
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: JSX.Element[] = []
    let codeBlock = ''
    let inCodeBlock = false

    lines.forEach((line, idx) => {
      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          const language = codeBlock.split('\n')[0]
          const code = codeBlock.split('\n').slice(1).join('\n')
          elements.push(
            <div key={idx} className="my-8 rounded-xl overflow-hidden border border-white/10">
              <div className="bg-[#0B0F14] px-4 py-2 text-xs text-[#A8B3CF] font-mono border-b border-white/10">
                {language || 'code'}
              </div>
              <pre className="bg-[#0E1420]/80 p-6 overflow-x-auto">
                <code className="text-sm text-[#EAF0FF] font-mono leading-relaxed">{code}</code>
              </pre>
            </div>
          )
          codeBlock = ''
          inCodeBlock = false
        } else {
          inCodeBlock = true
          codeBlock = line.replace('```', '')
        }
        return
      }

      if (inCodeBlock) {
        codeBlock += '\n' + line
        return
      }

      // Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={idx} className="text-4xl md:text-5xl font-bold text-[#EAF0FF] mb-6 mt-12">
            {line.replace('# ', '')}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        const text = line.replace('## ', '')
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        elements.push(
          <h2
            key={idx}
            id={id}
            className="text-2xl md:text-3xl font-bold text-[#EAF0FF] mb-4 mt-10 scroll-mt-32"
          >
            {text}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="text-xl md:text-2xl font-semibold text-[#EAF0FF] mb-3 mt-8">
            {line.replace('### ', '')}
          </h3>
        )
      }
      // Bold
      else if (line.includes('**')) {
        const parts = line.split('**')
        elements.push(
          <p key={idx} className="text-[#A8B3CF] leading-relaxed mb-4">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="text-[#EAF0FF] font-semibold">{part}</strong> : part
            )}
          </p>
        )
      }
      // Lists
      else if (line.startsWith('- ')) {
        elements.push(
          <li key={idx} className="text-[#A8B3CF] leading-relaxed ml-6 mb-2 list-disc">
            {line.replace('- ', '')}
          </li>
        )
      }
      // Inline code
      else if (line.includes('`')) {
        const parts = line.split('`')
        elements.push(
          <p key={idx} className="text-[#A8B3CF] leading-relaxed mb-4">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <code key={i} className="px-2 py-1 bg-[#3CF2FF]/10 text-[#3CF2FF] rounded font-mono text-sm">
                  {part}
                </code>
              ) : (
                part
              )
            )}
          </p>
        )
      }
      // Regular paragraph
      else if (line.trim()) {
        elements.push(
          <p key={idx} className="text-[#A8B3CF] leading-relaxed mb-4">
            {line}
          </p>
        )
      }
    })

    return elements
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#3CF2FF] hover:underline mb-8 group"
        >
          Retour au blog
        </Link>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Article Content */}
          <article>
            {/* Hero */}
            <ScrollReveal>
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#A8B3CF] mb-6">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-[#3CF2FF]" />
                <span>{post.readingTime} min de lecture</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#EAF0FF] mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full border-2 border-[#3CF2FF]/30"
                />
                <div>
                  <div className="text-[#EAF0FF] font-medium">{post.author.name}</div>
                  <div className="text-sm text-[#A8B3CF]">Développeur Web</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-[#3CF2FF]/10 text-[#3CF2FF] rounded-full border border-[#3CF2FF]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-invert prose-lg max-w-none">
              {renderContent(post.content)}
            </div>
            </ScrollReveal>

            {/* Share */}
            <ScrollReveal delay={0.3}>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[#A8B3CF] mb-4">Partager cet article :</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-[#0E1420]/60 border border-white/10 rounded-xl text-[#3CF2FF] hover:border-[#3CF2FF]/50 transition-colors">
                  Twitter
                </button>
                <button className="px-6 py-3 bg-[#0E1420]/60 border border-white/10 rounded-xl text-[#3CF2FF] hover:border-[#3CF2FF]/50 transition-colors">
                  LinkedIn
                </button>
                <button className="px-6 py-3 bg-[#0E1420]/60 border border-white/10 rounded-xl text-[#3CF2FF] hover:border-[#3CF2FF]/50 transition-colors">
                  Copier le lien
                </button>
              </div>
            </div>
            </ScrollReveal>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 h-fit space-y-8">
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="bg-[#0E1420]/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#EAF0FF] mb-4">Sommaire</h3>
                <nav className="space-y-2">
                  {headings.map(heading => {
                    const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                    const isActive = activeHeading === id
                    return (
                      <a
                        key={heading}
                        href={`#${id}`}
                        className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-[#3CF2FF]/10 text-[#3CF2FF] border-l-2 border-[#3CF2FF]'
                            : 'text-[#A8B3CF] hover:text-[#3CF2FF] hover:bg-[#3CF2FF]/5'
                        }`}
                      >
                        {heading}
                      </a>
                    )
                  })}
                </nav>
              </div>
            )}
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#EAF0FF] mb-8">Articles liés</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(relatedPost => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
