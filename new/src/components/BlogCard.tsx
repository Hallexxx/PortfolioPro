import React from 'react'
import { Link } from 'react-router-dom'
import { BlogPost } from '../data/blog'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-[#0E1420]/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#3CF2FF]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(60,242,255,0.15)]"
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#3CF2FF]/10 to-[#FF2B2B]/10">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-[#0E1420]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-[#A8B3CF]">
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

        {/* Title */}
        <h3 className="text-xl font-bold text-[#EAF0FF] group-hover:text-[#3CF2FF] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#A8B3CF] line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-[#3CF2FF]/10 text-[#3CF2FF] rounded-full border border-[#3CF2FF]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full border-2 border-[#3CF2FF]/30"
          />
          <span className="text-sm text-[#A8B3CF]">{post.author.name}</span>
        </div>
      </div>
    </Link>
  )
}
