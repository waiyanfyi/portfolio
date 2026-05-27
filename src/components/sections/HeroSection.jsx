import { motion } from 'framer-motion'
import { TypingText } from '../ui/TypingText'
import { personalInfo } from '../../data/portfolioData'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pt-16 pb-12 md:px-6 md:pt-20 md:pb-16">
      <div className="aurora" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-5"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Premium Portfolio
          </span>
          <h1 className="text-4xl font-black leading-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <h2 className="text-lg font-semibold text-[var(--text-muted)] sm:text-xl">
            <TypingText
              words={[
                'Senior Software Engineer',
                'Business Solutions Consultant',
                'Enterprise Systems Architect',
              ]}
            />
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--text-soft)] sm:text-lg">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="solid-button">
              Explore Projects
            </a>
            <a href="#contact" className="glass-button px-5 py-3 text-sm font-semibold">
              Book Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Core Expertise</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--text-soft)]">
            <li>Laravel + Spring enterprise platforms</li>
            <li>ERP, POS, gaming, and accounting systems</li>
            <li>Myanmar and Japan offshore experience</li>
            <li>Leadership across multi-team delivery</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
