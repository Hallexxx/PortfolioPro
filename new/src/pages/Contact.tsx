import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Send, Mail, Github, Linkedin, Calendar, CheckCircle2, AlertCircle, MapPin} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email invalide'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true })
    validateForm()
  }

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (touched[field]) {
      validateForm()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    })
    
    if (!validateForm()) {
      return
    }
    
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTouched({})
      setTimeout(() => setStatus('idle'), 5000)
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Hallexxx', color: 'hover:text-[#3CF2FF]' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexandre-perez-griessmann/', color: 'hover:text-[#3CF2FF]' },
    { icon: Mail, label: 'Email', href: 'mailto:alex.perezab470@gmail.com', color: 'hover:text-[#3CF2FF]' }
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 via-transparent to-[#FF2B2B]/5 pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-['Space_Grotesk'] font-bold mb-6">
            <span className="bg-gradient-to-r from-[#3CF2FF] to-[#EAF0FF] bg-clip-text text-transparent">
              Travaillons ensemble
            </span>
          </h1>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter, je réponds généralement sous 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#A8B3CF] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={`w-full px-4 py-3 bg-[#0E1420]/50 backdrop-blur-sm border rounded-xl text-[#EAF0FF] placeholder-[#A8B3CF]/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      touched.name && errors.name
                        ? 'border-[#FF2B2B] focus:ring-[#FF2B2B]/30'
                        : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                    }`}
                    placeholder="John Doe"
                  />
                  {touched.name && errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-[#FF2B2B] flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#A8B3CF] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-3 bg-[#0E1420]/50 backdrop-blur-sm border rounded-xl text-[#EAF0FF] placeholder-[#A8B3CF]/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      touched.email && errors.email
                        ? 'border-[#FF2B2B] focus:ring-[#FF2B2B]/30'
                        : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                    }`}
                    placeholder="john@example.com"
                  />
                  {touched.email && errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-[#FF2B2B] flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#A8B3CF] mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  className={`w-full px-4 py-3 bg-[#0E1420]/50 backdrop-blur-sm border rounded-xl text-[#EAF0FF] placeholder-[#A8B3CF]/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    touched.subject && errors.subject
                      ? 'border-[#FF2B2B] focus:ring-[#FF2B2B]/30'
                      : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                  }`}
                  placeholder="Projet web, collaboration, question..."
                />
                {touched.subject && errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-[#FF2B2B] flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#A8B3CF] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-3 bg-[#0E1420]/50 backdrop-blur-sm border rounded-xl text-[#EAF0FF] placeholder-[#A8B3CF]/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    touched.message && errors.message
                      ? 'border-[#FF2B2B] focus:ring-[#FF2B2B]/30'
                      : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                  }`}
                  placeholder="Décrivez votre projet ou posez votre question..."
                />
                {touched.message && errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-[#FF2B2B] flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`w-full px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                  status === 'loading'
                    ? 'bg-[#A8B3CF]/20 text-[#A8B3CF] cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                    : 'bg-gradient-to-r from-[#3CF2FF] to-[#3CF2FF]/80 text-[#0B0F14] hover:shadow-[0_0_30px_rgba(60,242,255,0.3)]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#A8B3CF] border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Status Card */}
            <div className="p-6 bg-[#0E1420]/50 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-semibold text-lg">Disponible</h3>
              </div>
              <p className="text-[#A8B3CF] text-sm leading-relaxed">
                Actuellement ouvert à de nouveaux projets et collaborations. Réponse sous 24h.
              </p>
            </div>

            {/* Quick Info */}
            <div className="p-6 bg-[#0E1420]/50 backdrop-blur-sm border border-white/10 rounded-2xl space-y-4">
              <h3 className="font-['Space_Grotesk'] font-semibold text-lg mb-4">Informations</h3>
              
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#3CF2FF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#EAF0FF]">Localisation</p>
                  <p className="text-sm text-[#A8B3CF]"> Paris / Sophia Antipolis, France</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#3CF2FF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#EAF0FF]">Email</p>
                  <a href="mailto:alex.perezab470@gmail.com" className="text-sm text-[#A8B3CF] hover:text-[#3CF2FF] transition-colors">
                    alex.perezab470@gmail.com
                  </a>
                </div>
              </div>

              {/*<div className="flex items-start gap-3">
                <Calendar size={20} className="text-[#3CF2FF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#EAF0FF]">Réunion</p>
                  <p className="text-sm text-[#A8B3CF]">Planifier un appel</p>
                </div>
              </div>*/}
            </div>

            {/* Social Links */}
            <div className="p-6 bg-[#0E1420]/50 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="font-['Space_Grotesk'] font-semibold text-lg mb-4">Réseaux</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 bg-[#0B0F14]/50 border border-white/5 rounded-xl transition-all duration-300 hover:border-[#3CF2FF]/30 hover:bg-[#3CF2FF]/5 group ${social.color}`}
                  >
                    <social.icon size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium truncate">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
