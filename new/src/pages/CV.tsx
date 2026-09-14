import { Link } from "react-router-dom"
import Timeline from '../components/Timeline'
import HorizontalScrollStats from '../components/HorizontalScrollStats'
import Skills from '../components/Skills'
import ScrollReveal from '../components/ScrollReveal'
import { timelineData, statCards, skills, techStack } from '../data/cv'

export default function CV() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#EAF0FF]">
      {/* Hero section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Space_Grotesk'] text-[#EAF0FF]">
            Mon Parcours
          </h1>
          <p className="text-[#A8B3CF] text-lg md:text-xl mb-8 leading-relaxed">
            De la formation aux projets marquants, découvrez mon évolution en tant que développeur créatif.
            Chaque expérience m'a permis d'affiner mes compétences et ma vision du web moderne.
          </p>

          <a
            href="/cv_alexandre_perez.pdf"
            download="cv_alexandre_perez.pdf"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#7FEAFF] rounded-full font-semibold text-[#0B0F14] hover:bg-[#B9F7FF] transition-all duration-300 hover:scale-105"
          >
            <span>Télécharger mon CV</span>
          </a>

        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-8">
        <div className="text-center mb-4 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Space_Grotesk'] text-[#EAF0FF]">
            En Quelques Chiffres
          </h2>
          <p className="text-[#A8B3CF] text-sm">
            Statistiques et highlights
          </p>
        </div>
        <HorizontalScrollStats cards={statCards} />
      </section>

      {/* Timeline Section */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Space_Grotesk'] text-[#EAF0FF]">
            Timeline
          </h2>
          <p className="text-[#A8B3CF] text-lg">
            Formation, expériences professionnelles et projets marquants
          </p>
        </div>
        <Timeline items={timelineData} />
      </section>

      {/* Skills Section */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Space_Grotesk'] text-[#EAF0FF]">
              Compétences Techniques
            </h2>
            <p className="text-[#A8B3CF] text-lg">
              Niveau d'expertise par catégorie de technologie
            </p>
          </div>
        </ScrollReveal>
        <Skills skills={skills} />
      </section>

      {/* Tech Stack Section */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Space_Grotesk'] text-[#EAF0FF]">
            Stack Préférée
          </h2>
          <p className="text-[#A8B3CF] text-lg">
            Les technologies que j'utilise au quotidien
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="backdrop-blur-xl bg-[#0E1420]/40 border border-[#3CF2FF]/10 rounded-2xl p-8 hover:border-[#3CF2FF]/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_48px_rgba(60,242,255,0.15)] group text-center"
              style={{
                animation: `scaleIn 0.5s ease-out ${index * 0.1}s backwards`
              }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <div
                className="text-xl font-bold font-['Space_Grotesk']"
                style={{ color: tech.color }}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-6 max-w-4xl mx-auto text-center">
        <div className="backdrop-blur-xl bg-gradient-to-br from-[#0E1420]/60 to-[#0B0F14]/60 border border-[#3CF2FF]/20 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Space_Grotesk'] text-[#EAF0FF]">
            Prêt à Collaborer ?
          </h2>
          <p className="text-[#A8B3CF] text-lg mb-8">
            Discutons de votre projet et voyons comment je peux vous aider à le concrétiser.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#7FEAFF] rounded-full font-semibold text-[#0B0F14] hover:bg-[#B9F7FF] transition-all duration-300 hover:scale-105"
            >
              <span>Me contacter</span>
            </Link>

            <Link
              to="/projets"
              className="group relative inline-flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-[#0E1420]/60 border border-[#3CF2FF]/40 rounded-full font-semibold text-[#3CF2FF] hover:bg-[#3CF2FF]/10 transition-all duration-300 hover:scale-105"
            >
              <span>Voir mes projets</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
