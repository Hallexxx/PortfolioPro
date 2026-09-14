import { TimelineItem } from '../data/cv'

interface TimelineProps {
  items: TimelineItem[]
}

const typeColors = {
  education: '#3CF2FF',
  experience: '#FF2B2B',
  project: '#A8B3CF'
}

const typeLabels = {
  education: 'Formation',
  experience: 'Expérience',
  project: 'Projet'
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3CF2FF]/20 via-[#3CF2FF]/50 to-[#3CF2FF]/20" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative pl-8 md:pl-16 group"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
            }}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-[-8px] md:left-[16px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg"
              style={{
                borderColor: typeColors[item.type],
                backgroundColor: '#0B0F14',
                boxShadow: `0 0 12px ${typeColors[item.type]}40`
              }}
            />
            
            {/* Content card */}
            <div className="backdrop-blur-xl bg-[#0E1420]/40 border border-[#3CF2FF]/10 rounded-2xl p-6 hover:border-[#3CF2FF]/30 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(60,242,255,0.1)] group-hover:translate-x-1">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-[200px]">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{
                      backgroundColor: `${typeColors[item.type]}20`,
                      color: typeColors[item.type]
                    }}
                  >
                    {typeLabels[item.type]}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#EAF0FF] mb-1 font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <p className="text-[#A8B3CF] font-medium">
                    {item.organization} • {item.location}
                  </p>
                </div>
                <div className="text-[#3CF2FF] font-semibold text-sm whitespace-nowrap">
                  {item.period}
                </div>
              </div>
              
              {/* Description */}
              <ul className="space-y-2 mb-4">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#A8B3CF]">
                    <span className="mt-3 h-px w-3 flex-shrink-0 bg-[#3CF2FF]" />
                    <span className="text-sm leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#3CF2FF]/5 text-[#3CF2FF] border border-[#3CF2FF]/20 hover:bg-[#3CF2FF]/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
