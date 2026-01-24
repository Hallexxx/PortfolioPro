import React from 'react'
import {Search, Figma, Code, TrendingUp} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { processSteps } from '../data/home'

const iconMap = {
  Search,
  Figma,
  Code,
  TrendingUp
}

const Process = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0E1420]/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-4">
              Ma façon de travailler
            </h2>
            <p className="text-[#A8B3CF] text-lg">
              Un process éprouvé pour des résultats optimaux
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3CF2FF]/20 via-[#3CF2FF]/50 to-[#3CF2FF]/20" />
            
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, i) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap]
                return (
                  <ScrollReveal key={step.title} delay={i * 0.15}>
                    <div className="relative">
                      {/* Node */}
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3CF2FF] border-4 border-[#0B0F14] z-10" />
                      
                      <div className="pt-32 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3CF2FF]/20 to-transparent border border-[#3CF2FF]/30 mb-4">
                          <Icon size={28} className="text-[#3CF2FF]" />
                        </div>
                        
                        <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#3CF2FF]/30 mb-2">
                          {step.number}
                        </div>
                        
                        <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-2">
                          {step.title}
                        </h3>
                        
                        <p className="text-sm text-[#A8B3CF]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="relative flex items-start gap-6">
                  {/* Timeline line */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#3CF2FF]/50 to-[#3CF2FF]/20" />
                  )}
                  
                  {/* Node */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3CF2FF]/20 to-transparent border border-[#3CF2FF]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={28} className="text-[#3CF2FF]" />
                  </div>
                  
                  <div className="pt-2 flex-1">
                    <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#3CF2FF]/30 mb-1">
                      {step.number}
                    </div>
                    
                    <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-[#A8B3CF]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
