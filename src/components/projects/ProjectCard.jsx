import { motion } from 'framer-motion'

export function ProjectCard({ project, imageUrl }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -6, rotateX: 2.5, rotateY: -2.5 }}
      className="project-card glass-card group relative overflow-hidden rounded-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative block aspect-[16/10] w-full overflow-hidden text-left">
        <img
          src={imageUrl}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width="1280"
          height="800"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.src = '/images/fallback-project.svg'
          }}
        />
        <span className="project-overlay pointer-events-none absolute inset-0" aria-hidden />
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{project.category}</p>
          <h4 className="mt-1 text-lg font-bold text-[var(--text-main)]">{project.title}</h4>
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-soft)]">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <span className="project-border-glow" aria-hidden />
    </motion.article>
  )
}
