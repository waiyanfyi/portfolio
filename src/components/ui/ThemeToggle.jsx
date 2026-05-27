import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2'

export function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="glass-button inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? <HiMiniSun className="text-lg" /> : <HiMiniMoon className="text-lg" />}
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
