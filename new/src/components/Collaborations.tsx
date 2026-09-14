import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { collaborations } from '../data/home'

const Collaborations = () => {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-[#A8B3CF] text-sm uppercase tracking-wider mb-4">
              Ils m'ont fait confiance
            </p>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold">
              Projets réalisés pour
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {collaborations.map((collab, i) => (
            <ScrollReveal key={collab.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative px-6 py-4 rounded-xl border border-white/5 bg-gradient-to-br from-[#0E1420] to-[#0B0F14] hover:border-[#3CF2FF]/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative font-['Space_Grotesk'] text-lg font-semibold text-[#A8B3CF] group-hover:text-[#EAF0FF] transition-colors">
                  {collab.logo}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collaborations
