import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const FinalCTA = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="relative">
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0E1720] p-10 text-center lg:p-14">
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-6 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
                  On travaille ensemble ?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[#A8B3CF]">
                  Vous avez un projet en tête ? Je peux vous aider à cadrer, développer, corriger ou remettre à niveau une interface existante.
                </p>

                <div className="mb-8 flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="mailto:alex.perezab470@gmail.com"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex rounded-xl bg-[#7FEAFF] px-8 py-4 font-semibold text-[#071017] transition duration-300 hover:bg-[#B9F7FF]"
                  >
                    Me contacter
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/alexandre-perez-griessmann/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex rounded-xl border border-[#3CF2FF]/30 px-8 py-4 font-semibold text-[#7FEAFF] transition duration-300 hover:bg-[#3CF2FF]/10"
                  >
                    LinkedIn
                  </motion.a>

                  <motion.a
                    href="/cv_alexandre_perez.pdf"
                    download
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex rounded-xl border border-white/10 px-8 py-4 font-semibold text-[#EAF0FF] transition duration-300 hover:bg-white/5"
                  >
                    Télécharger CV
                  </motion.a>
                </div>

                <div className="flex items-center justify-center space-x-2 text-sm text-[#A8B3CF]">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
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
