import React from 'react'
import {Code2, Server, Zap, Palette} from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { services } from '../data/home'

const iconMap = {
  Code2,
  Server,
  Zap,
  Palette
}

const Services = () => {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-4">
              Ce que je propose
            </h2>
            <p className="text-[#A8B3CF] text-lg max-w-2xl mx-auto">
              Des solutions complètes pour vos projets digitaux
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0E1420] to-[#0B0F14] border border-white/5 hover:border-[#3CF2FF]/30 transition-all duration-300 h-full"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3CF2FF]/20 to-transparent border border-[#3CF2FF]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} style={{ color: service.color }} />
                    </div>
                    
                    <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#A8B3CF] text-sm mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-xs text-[#A8B3CF]">
                          <span className="w-1 h-1 rounded-full bg-[#3CF2FF] mt-1.5 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
