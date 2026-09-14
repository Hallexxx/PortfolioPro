import { useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  const smoothX = useSpring(0, { damping: 22, stiffness: 90 })
  const smoothY = useSpring(0, { damping: 22, stiffness: 90 })
  const badges = ['React', 'Node.js', 'TypeScript', 'Tailwind CSS']
  const titleWords = 'Développeur Web & Applications'.split(' ')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      smoothX.set((e.clientX / window.innerWidth - 0.5) * 34)
      smoothY.set((e.clientY / window.innerHeight - 0.5) * 34)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [smoothX, smoothY])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <motion.div
        style={{ x: smoothX, y: smoothY, perspective: 900, transformStyle: 'preserve-3d' }}
        className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ rotateX: [62, 70, 62], rotateZ: [0, 360] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-[34%] border border-[#3CF2FF]/[0.14]"
        />
        <motion.div
          animate={{ rotateX: [70, 58, 70], rotateY: [0, 360] }}
          transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-14 rounded-[38%] border border-[#FF2B2B]/[0.12]"
        />
        <div className="absolute inset-24 rounded-[32%] bg-[#10202A]/55 blur-2xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6"
        >
          <div className="mb-8 inline-flex items-center space-x-2 rounded-full border border-[#3CF2FF]/20 bg-[#3CF2FF]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#3CF2FF]" />
            <span className="text-sm font-medium text-[#7FEAFF]">Portfolio Alexandre Perez</span>
          </div>
        </motion.div>

        <h1 className="mb-8 font-['Space_Grotesk'] text-5xl font-bold leading-tight tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-8xl">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 42, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
          className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-[#B7C3D8] sm:text-xl"
        >
          Je construis des interfaces rapides, des API propres et des produits complets, avec un soin particulier pour la lisibilité, les animations utiles et la stabilité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
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
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
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
