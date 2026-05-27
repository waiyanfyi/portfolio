import { personalInfo } from '../../data/portfolioData'
import { Reveal } from '../ui/Reveal'

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-2">
        <Reveal>
          <article className="glass-card p-6">
            <h3 className="section-title">Contact</h3>
            <p className="text-sm leading-relaxed text-[var(--text-soft)]">
              Let us discuss your enterprise system roadmap, optimization strategy, or product delivery goals.
            </p>

            <div className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">
              <p>Email: {personalInfo.email}</p>
              <p>Phone: {personalInfo.phone}</p>
              <p>Location: {personalInfo.location}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="glass-card space-y-3 p-6" onSubmit={(event) => event.preventDefault()}>
            <label className="flex flex-col gap-1 text-sm text-[var(--text-muted)]">
              Name
              <input className="input" type="text" placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-1 text-sm text-[var(--text-muted)]">
              Email
              <input className="input" type="email" placeholder="your@email.com" />
            </label>
            <label className="flex flex-col gap-1 text-sm text-[var(--text-muted)]">
              Message
              <textarea className="input min-h-28" placeholder="Tell me about your project" />
            </label>
            <button type="submit" className="solid-button w-full justify-center">
              Send Inquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
