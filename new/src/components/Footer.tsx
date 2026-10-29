import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="portfolio-footer"><span>© {new Date().getFullYear()} Alexandre Perez</span><div><a href="https://github.com/Hallexxx" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/alexandre-perez-griessmann/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="mailto:alex.perezab470@gmail.com">E-mail</a></div><Link to="/">Retour en haut ↑</Link></footer>
}
