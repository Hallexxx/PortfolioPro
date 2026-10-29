import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'
import HomeExperience from './components/HomeExperience'
import Footer from './components/Footer'

const Projects = lazy(() => import('./pages/Projects'))
const CV = lazy(() => import('./pages/CV'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogArticle = lazy(() => import('./pages/BlogArticle'))

export default function App() {
  return <BrowserRouter><Navbar /><PageTransition><Suspense fallback={<div className="page-loading">Chargement...</div>}><Routes><Route path="/" element={<HomeExperience />} /><Route path="/projets" element={<Projects />} /><Route path="/cv" element={<CV />} /><Route path="/contact" element={<Contact />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<BlogArticle />} /></Routes></Suspense><Footer /></PageTransition></BrowserRouter>
}
