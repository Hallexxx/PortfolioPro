import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {ArrowRight, Sparkles} from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const smoothX = useSpring(0, { damping: 20, stiffness: 100 })
  const smoothY = useSpring(0, { damping: 20, stiffness: 100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      smoothX.set(x)
      smoothY.set(y)
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [smoothX, smoothY])

  const badges = ['React', 'Node.js', 'TypeScript', 'Tailwind CSS']

  const titleWords = "Développeur Web & Applications".split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* 3D Sphere with parallax */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 rounded-full border border-[#3CF2FF]/10"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-8 rounded-full border border-[#FF2B2B]/10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 to-[#FF2B2B]/5 rounded-full blur-3xl" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Animated Title with Split Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#3CF2FF]/10 border border-[#3CF2FF]/20 mb-8">
            <Sparkles size={16} className="text-[#3CF2FF]" />
            <span className="text-sm text-[#3CF2FF] font-medium">Portfolio Alexandre Perez</span>
          </div>
        </motion.div>

        <h1 className="font-['Space_Grotesk'] font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-[#A8B3CF] mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Je crée des{' '}
          <span className="text-[#3CF2FF] font-semibold">expériences performantes</span> et{' '}
          <span className="text-[#3CF2FF] font-semibold">élégantes</span> qui allient design moderne
          et code de qualité
        </motion.p>

        {/* Badges with scroll reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full bg-[#0E1420] border border-white/10 text-sm font-medium hover:border-[#3CF2FF]/30 hover:bg-[#3CF2FF]/5 hover:shadow-[0_0_20px_rgba(60,242,255,0.2)] transition-all duration-300 cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/projets"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#3CF2FF] to-[#3CF2FF]/80 text-[#0B0F14] font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(60,242,255,0.4)] flex items-center space-x-2"
          >
            <span>Voir mes projets</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          <Link
            to="/contact"
            className="group px-8 py-4 rounded-xl border border-[#3CF2FF]/30 text-[#3CF2FF] font-semibold hover:bg-[#3CF2FF]/10 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Me contacter</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
