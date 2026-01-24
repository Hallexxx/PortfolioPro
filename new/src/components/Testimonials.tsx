import React from 'react'
import {Star} from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { testimonials } from '../data/home'

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0E1420]/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-4">
              Ce qu'on dit de mon travail
            </h2>
            <p className="text-[#A8B3CF] text-lg">
              Retours de clients et collaborateurs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#0E1420] to-[#0B0F14] border border-white/5 hover:border-[#3CF2FF]/30 transition-all duration-300 h-full"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-[#3CF2FF] text-[#3CF2FF]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#EAF0FF] leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3CF2FF]/20 to-transparent border border-[#3CF2FF]/30 flex items-center justify-center font-['Space_Grotesk'] font-semibold text-[#3CF2FF]">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-[#EAF0FF]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#A8B3CF]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
