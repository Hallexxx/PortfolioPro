import { Skill } from '../data/cv'

interface SkillsProps {
  skills: Skill[]
}

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de données',
  tools: 'Outils',
  devops: 'DevOps'
}

const categoryColors = {
  frontend: '#3CF2FF',
  backend: '#FF2B2B',
  database: '#68A063',
  tools: '#A259FF',
  devops: '#FF9900'
}

export default function Skills({ skills }: SkillsProps) {
  const categories = ['frontend', 'backend', 'database', 'tools', 'devops'] as const
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {categories.map((category) => {
        const categorySkills = skills.filter(s => s.category === category)
        if (categorySkills.length === 0) return null
        
        return (
          <div
            key={category}
            className="backdrop-blur-xl bg-[#0E1420]/40 border border-[#3CF2FF]/10 rounded-2xl p-6 hover:border-[#3CF2FF]/30 transition-all duration-300"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1 h-8 rounded-full"
                style={{ backgroundColor: categoryColors[category] }}
              />
              <h3
                className="text-xl font-bold font-['Space_Grotesk']"
                style={{ color: categoryColors[category] }}
              >
                {categoryLabels[category]}
              </h3>
            </div>
            
            {/* Skills list */}
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#EAF0FF] font-medium">{skill.name}</span>
                    <span className="text-[#A8B3CF] text-sm font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-[#0E1420] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: categoryColors[category],
                        boxShadow: `0 0 12px ${categoryColors[category]}60`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
