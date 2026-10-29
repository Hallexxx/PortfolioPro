import type { PortfolioProject } from '../data/portfolio'

export default function PortfolioVisual({ project, compact = false }: { project: PortfolioProject; compact?: boolean }) {
  const phoneOnly = project.id === 'watchlist' || project.id === 'elan' || project.id === 'qualiecho'
  return (
    <div className={`portfolio-visual visual-${project.accent} ${phoneOnly ? 'visual-phone-only' : ''} ${compact ? 'visual-compact' : ''}`}>
      <div className="visual-halo" aria-hidden="true" />
      {!phoneOnly && <div className="visual-laptop"><div className="visual-browser"><i /><i /><i /><span>{project.name}</span></div><img src={project.image} alt={`Capture de ${project.name} sur ordinateur`} loading="lazy" /><div className="visual-laptop-foot" /></div>}
      {(project.mobile || phoneOnly) && <div className="visual-phone"><div className="visual-phone-island" aria-hidden="true" /><img src={phoneOnly ? project.image : project.mobile} alt={`Capture de ${project.name} sur téléphone`} loading="lazy" /></div>}
    </div>
  )
}
