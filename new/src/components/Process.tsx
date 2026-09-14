import ScrollReveal from './ScrollReveal'
import { processSteps } from '../data/home'

const Process = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold sm:text-4xl">
              Ma façon de travailler
            </h2>
            <p className="text-lg text-[#A8B3CF]">
              Un cadre simple pour avancer sans perdre la qualité en route
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <article className="group h-full bg-[#0B1219] p-7 transition duration-300 hover:bg-[#111B24]">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-[#3CF2FF]/35">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-[#3CF2FF]/25" />
                </div>

                <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-[#A8B3CF]">
                  {step.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
