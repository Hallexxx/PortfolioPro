import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroScene3D = lazy(() => import('./HeroScene3D'))

function HeroSceneFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute right-[-5rem] top-[32%] h-[18rem] w-[18rem] rotate-12 rounded-[30%] bg-[#102532] lg:right-[7%] lg:h-[24rem] lg:w-[24rem]" />
      <div className="absolute right-[7%] top-[29%] h-28 w-28 rotate-12 rounded-3xl bg-[#7FEAFF]/35 lg:right-[18%] lg:h-40 lg:w-40" />
      <div className="absolute right-[4%] top-[52%] h-20 w-20 -rotate-12 rounded-2xl bg-[#FF6868]/25 lg:right-[10%] lg:h-28 lg:w-28" />
    </div>
  )
}

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()
  const badges = ['React', 'Node.js', 'TypeScript', 'Tailwind CSS']
  const titleWords = 'Développeur Web & Applications'.split(' ')

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {prefersReducedMotion ? (
        <HeroSceneFallback />
      ) : (
        <Suspense fallback={<HeroSceneFallback />}>
          <HeroScene3D reducedMotion={false} />
        </Suspense>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,transparent_0%,rgba(8,13,18,0.14)_28%,rgba(8,13,18,0.88)_78%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_42%_50%,rgba(8,13,18,0.92)_0%,rgba(8,13,18,0.68)_36%,transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080D12] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 lg:flex"
        >
          <div className="mb-8 inline-flex items-center space-x-2 rounded-full border border-[#3CF2FF]/20 bg-[#3CF2FF]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#3CF2FF]" />
            <span className="text-sm font-medium text-[#7FEAFF]">Portfolio Alexandre Perez</span>
          </div>
        </motion.div>

        <h1
          aria-label="Développeur Web et Applications"
          className="mb-8 max-w-4xl font-['Space_Grotesk'] text-5xl font-bold leading-tight tracking-normal sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              aria-hidden="true"
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.78,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-4 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-[#B7C3D8] sm:text-xl lg:mx-0"
        >
          Je construis des interfaces rapides, des API propres et des produits complets, avec un soin particulier pour la lisibilité, les animations utiles et la stabilité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.72 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="cursor-default rounded-full border border-white/10 bg-[#0E1720] px-4 py-2 text-sm font-medium transition duration-300 hover:border-[#3CF2FF]/30 hover:text-[#7FEAFF]"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
        >
          <Link
            to="/projets"
            className="relative overflow-hidden rounded-xl bg-[#7FEAFF] px-8 py-4 font-semibold text-[#071017] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B9F7FF] active:translate-y-0"
          >
            Voir mes projets
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-[#3CF2FF]/30 px-8 py-4 font-semibold text-[#7FEAFF] transition duration-300 hover:bg-[#3CF2FF]/10"
          >
            Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
