import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { techStack } from '../data/home'

const TechStack = () => {
  const categories = [
    { label: 'Frontend', items: techStack.frontend, color: '#3CF2FF' },
    { label: 'Backend', items: techStack.backend, color: '#FF2B2B' },
    { label: 'Database', items: techStack.database, color: '#3CF2FF' },
    { label: 'Tools', items: techStack.tools, color: '#FF2B2B' },
    { label: 'DevOps', items: techStack.devops, color: '#3CF2FF' },
  ]

  return (
    <section className="py-24 px-6 [content-visibility:auto] [contain-intrinsic-size:760px]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-4">
              Stack & Outils
            </h2>
            <p className="text-[#A8B3CF] text-lg">
              Technologies et outils que je maîtrise
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <ScrollReveal key={category.label} delay={catIndex * 0.1}>
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-4 text-[#A8B3CF]">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -4
                      }}
                      className="group relative px-5 py-3 rounded-xl bg-gradient-to-br from-[#0E1420] to-[#0B0F14] border border-white/5 hover:border-[#3CF2FF]/30 transition-all duration-300 cursor-default"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative font-medium text-[#EAF0FF] group-hover:text-[#3CF2FF] transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
