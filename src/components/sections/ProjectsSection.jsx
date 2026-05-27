import { projects } from '../../data/portfolioData'
import { Reveal } from '../ui/Reveal'
import { ProjectGallery } from '../projects/ProjectGallery'

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h3 className="section-title">Enterprise Projects</h3>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <ProjectGallery projects={projects} />
        </Reveal>
      </div>
    </section>
  )
}
