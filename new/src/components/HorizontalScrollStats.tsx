import React, { useEffect, useRef, useState } from 'react'
import { StatCard } from '../data/cv'

// Hook pour détecter l'entrée dans le viewport
function useIntersectionObserver(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1, ...options })
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])
  
  return isVisible
}

interface HorizontalScrollStatsProps {
  cards: StatCard[]
}

export default function HorizontalScrollStats({ cards }: HorizontalScrollStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(containerRef)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  // Détecter prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <div ref={containerRef} className="px-6 md:px-12 py-8">
      {/* Grid layout pour desktop, slider pour mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              filter: isVisible && !prefersReducedMotion ? 'blur(0)' : isVisible ? 'blur(0)' : 'blur(6px)',
              transition: prefersReducedMotion 
                ? 'opacity 0.4s ease-out' 
                : `opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s, filter 0.7s ease-out ${index * 0.1}s`,
              willChange: 'opacity, transform, filter'
            }}
          >
            <div className="h-full backdrop-blur-xl bg-[#0E1420]/60 border border-[#3CF2FF]/10 rounded-2xl p-5 hover:border-[#3CF2FF]/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_48px_rgba(60,242,255,0.2)] focus-within:border-[#3CF2FF]/60 focus-within:ring-2 focus-within:ring-[#3CF2FF]/30">
              {/* Icon */}
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              
              {/* Value */}
              <div
                className="text-2xl md:text-3xl font-bold mb-1 font-['Space_Grotesk']"
                style={{ color: card.color }}
              >
                {card.value}
              </div>
              
              {/* Label */}
              <div className="text-[#EAF0FF] font-semibold text-sm mb-1">
                {card.label}
              </div>
              
              {/* Detail */}
              {card.detail && (
                <div className="text-[#A8B3CF] text-xs mb-2">
                  {card.detail}
                </div>
              )}
              
              {/* Category badge */}
              <div className="mt-2 pt-2 border-t border-[#3CF2FF]/10">
                <span className="text-xs text-[#3CF2FF] uppercase tracking-wider font-semibold">
                  {card.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styles pour prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.15s !important;
          }
        }
      `}</style>
    </div>
  )
}
