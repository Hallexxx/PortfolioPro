import React, { useState } from 'react'
import { motion } from 'framer-motion'

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

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
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

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTouched({})
      setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
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
    { label: 'GitHub', href: 'https://github.com/Hallexxx' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexandre-perez-griessmann/' },
    { label: 'Email', href: 'mailto:alex.perezab470@gmail.com' }
  ]

  const FieldError = ({ message }: { message?: string }) => {
    if (!message) return null

    return (
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 text-sm text-[#FF6B6B]"
      >
        {message}
      </motion.p>
    )
  }

  return (
    <div className="relative min-h-screen px-6 pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3CF2FF]/5 via-transparent to-[#FF2B2B]/5" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="mb-6 font-['Space_Grotesk'] text-5xl font-bold tracking-[-0.03em] md:text-6xl">
            Travaillons ensemble
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-8 text-[#A8B3CF]">
            Un projet en tête, une question ou une collaboration ? Je réponds généralement sous 24h.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#A8B3CF]">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={`w-full rounded-xl border bg-[#0E1720]/70 px-4 py-3 text-[#EAF0FF] placeholder-[#A8B3CF]/50 transition duration-300 focus:outline-none focus:ring-2 ${
                      touched.name && errors.name
                        ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/30'
                        : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                    }`}
                    placeholder="Alexandre Perez"
                  />
                  <FieldError message={touched.name ? errors.name : undefined} />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#A8B3CF]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={`w-full rounded-xl border bg-[#0E1720]/70 px-4 py-3 text-[#EAF0FF] placeholder-[#A8B3CF]/50 transition duration-300 focus:outline-none focus:ring-2 ${
                      touched.email && errors.email
                        ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/30'
                        : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                    }`}
                    placeholder="alexandre@email.com"
                  />
                  <FieldError message={touched.email ? errors.email : undefined} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#A8B3CF]">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  className={`w-full rounded-xl border bg-[#0E1720]/70 px-4 py-3 text-[#EAF0FF] placeholder-[#A8B3CF]/50 transition duration-300 focus:outline-none focus:ring-2 ${
                    touched.subject && errors.subject
                      ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/30'
                      : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                  }`}
                  placeholder="Projet web, alternance, mission..."
                />
                <FieldError message={touched.subject ? errors.subject : undefined} />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#A8B3CF]">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`w-full resize-none rounded-xl border bg-[#0E1720]/70 px-4 py-3 text-[#EAF0FF] placeholder-[#A8B3CF]/50 transition duration-300 focus:outline-none focus:ring-2 ${
                    touched.message && errors.message
                      ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/30'
                      : 'border-white/10 focus:border-[#3CF2FF] focus:ring-[#3CF2FF]/30'
                  }`}
                  placeholder="Décrivez votre projet ou votre besoin..."
                />
                <FieldError message={touched.message ? errors.message : undefined} />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ y: status === 'loading' ? 0 : -3 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`w-full rounded-xl px-6 py-4 font-semibold transition duration-300 ${
                  status === 'loading'
                    ? 'cursor-not-allowed bg-[#A8B3CF]/20 text-[#A8B3CF]'
                    : status === 'success'
                    ? 'bg-green-500 text-[#071017]'
                    : 'bg-[#7FEAFF] text-[#071017] hover:bg-[#B9F7FF]'
                }`}
              >
                {status === 'loading'
                  ? 'Envoi en cours...'
                  : status === 'success'
                  ? 'Message envoyé'
                  : 'Envoyer le message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.aside variants={itemVariants} className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0E1720]/70 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold">Disponible</h3>
              </div>
              <p className="text-sm leading-6 text-[#A8B3CF]">
                Ouvert à de nouveaux projets, corrections et collaborations. Réponse sous 24h.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0E1720]/70 p-6">
              <h3 className="mb-4 font-['Space_Grotesk'] text-lg font-semibold">Informations</h3>

              <div>
                <p className="font-medium text-[#EAF0FF]">Localisation</p>
                <p className="text-sm text-[#A8B3CF]">Paris / Sophia Antipolis, France</p>
              </div>

              <div>
                <p className="font-medium text-[#EAF0FF]">Email</p>
                <a href="mailto:alex.perezab470@gmail.com" className="text-sm text-[#A8B3CF] transition-colors hover:text-[#7FEAFF]">
                  alex.perezab470@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0E1720]/70 p-6">
              <h3 className="mb-4 font-['Space_Grotesk'] text-lg font-semibold">Réseaux</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-[#0B1219] p-3 text-sm font-medium text-[#A8B3CF] transition duration-300 hover:border-[#3CF2FF]/30 hover:bg-[#3CF2FF]/10 hover:text-[#7FEAFF]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
