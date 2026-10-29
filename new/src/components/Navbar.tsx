import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const links = [{ label: 'Accueil', to: '/' }, { label: 'Projets', to: '/projets' }, { label: 'CV & compétences', to: '/cv' }, { label: 'Contact', to: '/contact' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  useEffect(() => setOpen(false), [location.pathname])

  return <><motion.div className="nav-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" /><nav className="portfolio-nav" aria-label="Navigation principale"><div className="nav-inner"><Link className="nav-brand" to="/">Alexandre Perez<span>.</span><small>Portfolio</small></Link><div className="nav-links">{links.slice(0, 3).map(link => <Link key={link.to} to={link.to} aria-current={location.pathname === link.to ? 'page' : undefined}>{link.label}</Link>)}</div><Link className="nav-contact" to="/contact">Parlons d'un projet <span aria-hidden="true">↗</span></Link><button className="nav-menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">{open ? 'Fermer' : 'Menu'}</button></div>{open && <div id="mobile-nav" className="nav-mobile">{links.map(link => <Link key={link.to} to={link.to} aria-current={location.pathname === link.to ? 'page' : undefined}>{link.label}</Link>)}</div>}</nav></>
}
