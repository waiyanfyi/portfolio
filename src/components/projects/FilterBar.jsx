import { HiMagnifyingGlass, HiAdjustmentsHorizontal } from 'react-icons/hi2'

export function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  sortBy,
  onSortChange,
  allTags,
  activeTags,
  onTagToggle,
  onClearTags,
}) {
  return (
    <div className="glass-card p-4 sm:p-5">
      <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative">
          <HiMagnifyingGlass className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-lg text-[var(--text-muted)]" />
          <input
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            className="input w-full py-2.5 pr-3 pl-10"
            placeholder="Search project title, description, technology..."
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <HiAdjustmentsHorizontal className="text-base" />
          Sort
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="input min-w-42 py-2"
          >
            <option value="featured">Featured</option>
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
            <option value="category">Category</option>
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`chip-button ${activeCategory === category ? 'chip-button-active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">Tags</span>
        {allTags.map((tag) => {
          const isActive = activeTags.includes(tag)
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onTagToggle(tag)}
              className={`chip-button ${isActive ? 'chip-button-active' : ''}`}
            >
              #{tag}
            </button>
          )
        })}
        {activeTags.length > 0 && (
          <button type="button" onClick={onClearTags} className="text-xs font-semibold text-[var(--accent)] hover:opacity-80">
            Clear tags
          </button>
        )}
      </div>
    </div>
  )
}
