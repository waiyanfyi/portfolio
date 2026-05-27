import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FilterBar } from './FilterBar'
import { ProjectCard } from './ProjectCard'
import { getDiscoveredImages, resolveProjectImage } from './projectImageMap'

const ALL = 'All'
const CATEGORIES = [ALL, 'ERP', 'POS', 'Gaming', 'Mobile', 'Enterprise']

function sortProjects(items, sortBy) {
  const sorted = [...items]

  if (sortBy === 'title-asc') {
    sorted.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy === 'title-desc') {
    sorted.sort((a, b) => b.title.localeCompare(a.title))
  } else if (sortBy === 'category') {
    sorted.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title))
  }

  return sorted
}

export function ProjectGallery({ projects }) {
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [activeTags, setActiveTags] = useState([])

  const allTags = useMemo(
    () =>
      [...new Set(projects.flatMap((project) => project.tags || []))]
        .sort((a, b) => a.localeCompare(b))
        .slice(0, 12),
    [projects],
  )

  const galleryProjects = useMemo(() => {
    const normalizedFromData = new Set(
      projects.map((project) => (project.image || project.title).toLowerCase().replace(/[^a-z0-9]+/g, '-')),
    )

    const discovered = getDiscoveredImages()
      .filter((image) => !normalizedFromData.has(image.name))
      .map((image) => ({
        id: `auto-${image.name}`,
        title: image.name
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' '),
        category: 'Enterprise',
        description: 'Auto-discovered project image from public/images. Add this item to project data for custom details.',
        stack: ['Portfolio', 'Enterprise'],
        tags: ['auto-discovered'],
        image: image.name,
        demoUrl: '#',
        githubUrl: '#',
      }))

    return [...projects, ...discovered]
  }, [projects])

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    const searched = galleryProjects.filter((project) => {
      const matchesCategory = activeCategory === ALL || project.category === activeCategory
      if (!matchesCategory) {
        return false
      }

      const tags = project.tags || []
      const matchesTags = activeTags.length === 0 || activeTags.every((tag) => tags.includes(tag))
      if (!matchesTags) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const haystack = [project.title, project.description, ...project.stack, ...tags].join(' ').toLowerCase()
      return haystack.includes(normalizedQuery)
    })

    return sortProjects(searched, sortBy)
  }, [activeCategory, activeTags, galleryProjects, query, sortBy])

  const imageMap = useMemo(() => {
    return filteredProjects.reduce((acc, project) => {
      acc[project.id] = resolveProjectImage(project.image, project.title)
      return acc
    }, {})
  }, [filteredProjects])

  function handleTagToggle(tag) {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]))
  }

  return (
    <div className="space-y-6">
      <FilterBar
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        query={query}
        onQueryChange={setQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        allTags={allTags}
        activeTags={activeTags}
        onTagToggle={handleTagToggle}
        onClearTags={() => setActiveTags([])}
      />

      <motion.div layout className="columns-1 gap-4 space-y-4 sm:columns-2 xl:columns-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div key={project.id} layout className="break-inside-avoid">
              <ProjectCard project={project} imageUrl={imageMap[project.id]} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="glass-card p-8 text-center text-sm text-[var(--text-muted)]">
          No projects match the current search/filter combination.
        </div>
      )}

    </div>
  )
}
