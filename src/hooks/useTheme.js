import { useEffect, useState } from 'react'

const THEME_KEY = 'wai-yan-theme'

export function useTheme() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'dark' || stored === 'light') {
      return stored
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
