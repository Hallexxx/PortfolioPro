import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Blog retiré, texte remplacé
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projets' },
    { name: 'CV', path: '/cv' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3CF2FF] to-[#FF2B2B] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F14]/80 backdrop-blur-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* ✅ Logo : A + "Portfolio Alexandre Perez" */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3CF2FF] to-[#FF2B2B] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#0B0F14] font-['Space_Grotesk'] font-bold text-lg">
                  A
                </span>
              </div>
              <span className="font-['Space_Grotesk'] font-semibold text-lg hidden sm:block">
                Portfolio Alexandre Perez
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive(link.path)
                      ? 'text-[#3CF2FF]'
                      : 'text-[#A8B3CF] hover:text-[#EAF0FF]'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-[#3CF2FF]/10 rounded-lg border border-[#3CF2FF]/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="absolute inset-x-4 -bottom-1 h-[2px] bg-[#3CF2FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* ✅ CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* ✅ Téléchargement CV : met ton PDF dans /public/cv_alexandre_perez.pdf */}
              <a
                href="/cv_alexandre_perez.pdf"
                download="cv_alexandre_perez.pdf"
                className="px-4 py-2 rounded-lg border border-[#3CF2FF]/30 text-[#3CF2FF] hover:bg-[#3CF2FF]/10 transition-all duration-300 flex items-center space-x-2 group"
              >
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                <span className="text-sm font-medium">CV</span>
              </a>

              {/* ✅ Bon lien contact */}
              <Link
                to="/contact"
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#3CF2FF] to-[#3CF2FF]/80 text-[#0B0F14] font-semibold hover:shadow-[0_0_20px_rgba(60,242,255,0.3)] transition-all duration-300 transform hover:scale-105"
              >
                Me contacter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0E1420]/95 backdrop-blur-lg border-t border-white/5"
            >
              <div className="px-6 py-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-[#3CF2FF]/10 text-[#3CF2FF] border border-[#3CF2FF]/20'
                        : 'text-[#A8B3CF] hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 space-y-3">
                  {/* ✅ Téléchargement CV mobile */}
                  <a
                    href="/cv_alexandre_perez.pdf"
                    download="cv_alexandre_perez.pdf"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-3 rounded-lg border border-[#3CF2FF]/30 text-[#3CF2FF] hover:bg-[#3CF2FF]/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Télécharger CV</span>
                  </a>

                  {/* ✅ Bon lien contact mobile */}
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#3CF2FF] to-[#3CF2FF]/80 text-[#0B0F14] font-semibold text-center"
                  >
                    Me contacter
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
