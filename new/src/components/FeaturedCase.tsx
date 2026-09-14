import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { featuredCaseStudy } from '../data/home'

const FeaturedCase = () => {
  const study = featuredCaseStudy

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium text-[#7FEAFF]">
              Référence mise en avant
            </p>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold sm:text-4xl">
              Projet de présentation
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.article
            whileHover={{ y: -8, rotateX: 1.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1720]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="grid gap-8 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-[#081017] lg:aspect-square">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover opacity-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071017] via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="mb-2 text-sm text-[#A8B3CF]">{study.client}</p>
                  <h3 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                    {study.title}
                  </h3>
                  <p className="mb-6 max-w-2xl leading-7 text-[#A8B3CF]">
                    {study.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#3CF2FF]/20 bg-[#3CF2FF]/10 px-3 py-1 text-xs font-medium text-[#7FEAFF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {study.results.map((result) => (
                    <div
                      key={result.label}
                      className="rounded-xl bg-[#0A1118] p-4"
                    >
                      <div className="mb-1 font-['Space_Grotesk'] text-2xl font-bold text-[#7FEAFF]">
                        {result.value}
                      </div>
                      <div className="text-xs text-[#A8B3CF]">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    to={study.links.project}
                    className="inline-flex rounded-xl bg-[#7FEAFF] px-6 py-3 font-semibold text-[#071017] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B9F7FF] active:translate-y-0"
                  >
                    Voir les projets
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FeaturedCase
