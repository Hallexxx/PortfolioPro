import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Palette, MapPin, Calendar, Layers, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { label: "Années d'expérience", value: '2+' },
    { label: 'Projets réalisés', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ]

  const services = [
    {
      icon: Code2,
      title: 'Front-end Development',
      description: 'Interfaces modernes et réactives avec React, TypeScript et Tailwind CSS',
      color: '#3CF2FF',
    },
    {
      icon: Server,
      title: 'Back-end Development',
      description: 'APIs robustes et scalables avec Node.js, Express et bases de données',
      color: '#FF2B2B',
    },
    {
      icon: Palette,
      title: 'UI/UX & Performance',
      description: 'Design élégant et optimisation pour des expériences fluides (90+ Lighthouse)',
      color: '#3CF2FF',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          {/* Left: Photo + Bio */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF] to-[#FF2B2B] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0E1420] to-[#0B0F14]">
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(/pere.jpg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold">
                Alexandre Perez
              </h2>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[#A8B3CF]">
                <div className="flex items-center space-x-2">
                  <MapPin size={18} className="text-[#3CF2FF]" />
                  <span>France (Paris / Nice)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Disponible dès octobre</span>
                </div>
              </div>

              <p className="text-lg text-[#A8B3CF] leading-relaxed">
                Passionné de 21 ans, étudiant en 1re année de Master Développement Web à Ynov Sophia Antipolis.
                Mes technologies préférées sont React, Node.js, React Native et Tailwind, avec lesquelles je conçois des applications web modernes, performantes et des applis mobiles. J’ai une forte appétence pour le full-stack, les API et les interfaces propres.
                J’ai également déjà travaillé avec d’autres technologies comme 4D, Java, C, ainsi qu’avec Angular et Vue.js.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0E1420] to-[#0B0F14] border border-white/5 hover:border-[#3CF2FF]/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#3CF2FF] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#A8B3CF]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/cv"
              className="group inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-[#3CF2FF]/30 text-[#3CF2FF] font-semibold hover:bg-[#3CF2FF]/10 transition-all duration-300"
            >
              <span>Voir mon parcours</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
