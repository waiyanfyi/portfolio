import { skills } from '../../data/portfolioData'
import { Reveal } from '../ui/Reveal'

const groups = [
  { key: 'core', label: 'Core Technologies' },
  { key: 'domain', label: 'Domain Expertise' },
  { key: 'leadership', label: 'Leadership & Delivery' },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h3 className="section-title">Skills & Technologies</h3>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.key} delay={index * 0.1}>
              <article className="glass-card p-5">
                <h4 className="text-base font-bold text-[var(--text-main)]">{group.label}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
