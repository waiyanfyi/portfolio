import { experience } from '../../data/portfolioData'
import { Reveal } from '../ui/Reveal'

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h3 className="section-title">Professional Experience</h3>
        </Reveal>

        <div className="timeline mt-8 space-y-6">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.07}>
              <article className="timeline-item glass-card p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg font-bold text-[var(--text-main)]">
                    {item.role} · {item.company}
                  </h4>
                  <span className="text-sm text-[var(--text-muted)]">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--accent)]">{item.location}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Team: {item.teamSize}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--text-soft)]">
                  {item.responsibilities.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
