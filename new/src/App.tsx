import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AnimatedBackground from './components/AnimatedBackground'
import PageTransition from './components/PageTransition'
import Collaborations from './components/Collaborations'
import Services from './components/Services'
import Process from './components/Process'
import FeaturedCase from './components/FeaturedCase'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Projects from './pages/Projects'
import CV from './pages/CV'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Contact from './pages/Contact'

function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Process />
        <FeaturedCase />
        <TechStack />
        <FinalCTA />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#080D12] text-[#EAF0FF] font-['Manrope'] antialiased overflow-x-hidden">
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </div>
    </Router>
  )
}

export default App
