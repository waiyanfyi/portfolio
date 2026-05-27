import { ThemeToggle } from '../ui/ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--surface-nav)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-main)]">
            Wai Yan
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="glass-button hidden px-3 py-2 text-sm font-semibold sm:inline-flex">
              Contact Us
            </a>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>

        <nav className="mt-3 flex gap-3 overflow-x-auto pb-1 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="chip-button whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
