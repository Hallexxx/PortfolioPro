import React, { useEffect, useRef, useState } from 'react'
import { StatCard } from '../data/cv'

function useIntersectionObserver(ref: React.RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1, rootMargin: '80px' })
    
    observer.observe(element)
    
    return () => {
      observer.unobserve(element)
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
  return (
    <div ref={containerRef} className="px-6 py-8 md:px-12 [content-visibility:auto] [contain-intrinsic-size:900px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.06}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.06}s`
            }}
          >
            <div className="h-full backdrop-blur-xl bg-[#0E1420]/60 border border-[#3CF2FF]/10 rounded-2xl p-5 hover:border-[#3CF2FF]/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_48px_rgba(60,242,255,0.2)] focus-within:border-[#3CF2FF]/60 focus-within:ring-2 focus-within:ring-[#3CF2FF]/30">
              <div className="mb-2 font-['Space_Grotesk'] text-2xl font-bold transition-transform duration-300 group-hover:scale-105">
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
    </div>
  )
}
