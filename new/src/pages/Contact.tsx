import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioPages.css'

export default function Contact() {
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = `Nom : ${name}\nAdresse e-mail : ${email}\n\n${message}`
    window.location.href = `mailto:alex.perezab470@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return <main className="portfolio-page contact-page"><header className="page-hero"><span className="page-index">Portfolio / Contact</span><h1>Racontez-moi<br /><em>votre idée.</em></h1><p>Un projet, une collaboration ou une question sur une application ? Quelques lignes suffisent pour ouvrir la conversation.</p></header><section className="contact-layout"><div className="contact-aside"><span>01 / Premier échange</span><h2>Une bonne discussion commence ici.</h2><p>Le formulaire prépare un e-mail dans votre messagerie. Vous pourrez le relire avant de l'envoyer.</p><div><span>Écrire directement</span><a href="mailto:alex.perezab470@gmail.com">alex.perezab470@gmail.com <span aria-hidden="true">↗</span></a></div><div className="contact-social"><a href="https://github.com/Hallexxx" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/alexandre-perez-griessmann/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div><form onSubmit={prepareEmail} className="contact-form"><span>02 / Votre message</span><div className="contact-form-row"><label>Votre nom<input name="name" autoComplete="name" value={name} onChange={event => setName(event.target.value)} required placeholder="Votre nom" /></label><label>Votre e-mail<input name="email" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} required placeholder="vous@exemple.fr" /></label></div><label>Sujet<select name="subject" value={subject} onChange={event => setSubject(event.target.value)} required><option value="">Choisir un sujet</option><option>Nouveau projet web ou mobile</option><option>Collaboration</option><option>Planète Crèche</option><option>Watchlist</option><option>Élan</option><option>Nova</option><option>QualiÉcho</option><option>Planète Immo</option><option>Autre question</option></select></label><label>Votre message<textarea name="message" rows={7} value={message} onChange={event => setMessage(event.target.value)} minLength={10} required placeholder="Décrivez votre projet ou posez votre question..." /></label><button type="submit">Préparer mon e-mail <span aria-hidden="true">↗</span></button></form></section><div className="contact-back"><Link to="/">← Retour à l'accueil</Link></div></main>
}
