import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { services } from '../data/home'

const serviceCodes = ['FE', 'API', 'AUTO', 'OPS']

const Services = () => {
  return (
    <section className="px-6 [content-visibility:auto] [contain-intrinsic-size:720px]">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold sm:text-4xl">
              Ce que je propose
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#A8B3CF]">
              Des solutions complètes pour vos projets digitaux
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotateX: 2 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1720] p-6 transition duration-300 hover:border-[#3CF2FF]/30"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative">
                  <div className="mb-5 inline-flex rounded-md border border-[#3CF2FF]/25 bg-[#3CF2FF]/10 px-3 py-1 font-['Space_Grotesk'] text-sm font-semibold text-[#7FEAFF]">
                    {serviceCodes[i]}
                  </div>

                  <h3 className="mb-2 font-['Space_Grotesk'] text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-[#A8B3CF]">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="grid grid-cols-[10px_1fr] gap-2 text-xs leading-5 text-[#A8B3CF]">
                        <span className="mt-2 h-px bg-[#7FEAFF]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
