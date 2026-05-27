import { metrics, personalInfo } from '../../data/portfolioData'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Reveal } from '../ui/Reveal'

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <Reveal>
          <h3 className="section-title">About Me</h3>
          <p className="max-w-4xl text-base leading-relaxed text-[var(--text-soft)] sm:text-lg">
            {personalInfo.summary}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <article className="glass-card p-5">
                <p className="text-3xl font-black text-[var(--text-main)]">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
