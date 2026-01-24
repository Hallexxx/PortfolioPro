import React from 'react'
import {Zap, Star, Clock, ArrowRight, ExternalLink} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { featuredCaseStudy } from '../data/home'

const iconMap = {
  Zap,
  Star,
  Clock
}

const FeaturedCase = () => {
  const study = featuredCaseStudy

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-[#3CF2FF] text-sm uppercase tracking-wider mb-2">
              Case Study
            </p>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold">
              Projet en vedette
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="group relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#0E1420] to-[#0B0F14]">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/10 to-[#FF2B2B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left: Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-[#A8B3CF] text-sm mb-2">{study.client}</p>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold mb-4">
                    {study.title}
                  </h3>
                  <p className="text-[#A8B3CF] leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#3CF2FF]/10 text-[#3CF2FF] border border-[#3CF2FF]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result) => {
                    const Icon = iconMap[result.icon as keyof typeof iconMap]
                    return (
                      <div
                        key={result.label}
                        className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5"
                      >
                        <Icon size={20} className="text-[#3CF2FF] mb-2" />
                        <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#3CF2FF] mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-[#A8B3CF]">{result.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={study.links.project}
                    className="group/btn inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#3CF2FF] text-[#0B0F14] font-semibold hover:bg-[#3CF2FF]/90 transition-all duration-300"
                  >
                    <span>Voir le projet</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    to={study.links.article}
                    className="group/btn inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-[#3CF2FF]/30 text-[#3CF2FF] font-semibold hover:bg-[#3CF2FF]/10 transition-all duration-300"
                  >
                    <span>Lire le retour</span>
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FeaturedCase
