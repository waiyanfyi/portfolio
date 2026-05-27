import { services } from '../../data/portfolioData'
import { Reveal } from '../ui/Reveal'

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h3 className="section-title">Services</h3>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="glass-card p-6">
                <h4 className="text-lg font-bold text-[var(--text-main)]">{service.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
