import React from 'react'
import {Mail, Linkedin, Download, ArrowRight} from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const FinalCTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative group">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF] to-[#FF2B2B] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#0E1420] to-[#0B0F14] border border-white/10 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold mb-6">
                  On travaille ensemble ?
                </h2>
                <p className="text-[#A8B3CF] text-lg mb-10 max-w-2xl mx-auto">
                  Vous avez un projet en tête ? Discutons-en autour d'un café (virtuel ou réel)
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <motion.a
                    href="mailto:votre@email.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#3CF2FF] text-[#0B0F14] font-semibold hover:bg-[#3CF2FF]/90 transition-all duration-300"
                  >
                    <Mail size={20} />
                    <span>Me contacter</span>
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl border border-[#3CF2FF]/30 text-[#3CF2FF] font-semibold hover:bg-[#3CF2FF]/10 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="/cv.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl border border-white/10 text-[#EAF0FF] font-semibold hover:bg-white/5 transition-all duration-300"
                  >
                    <Download size={20} />
                    <span>Télécharger CV</span>
                  </motion.a>
                </div>

                <div className="flex items-center justify-center space-x-2 text-sm text-[#A8B3CF]">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Disponible pour de nouveaux projets</span>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FinalCTA
