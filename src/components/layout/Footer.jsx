export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-[var(--text-muted)] md:flex-row md:px-6">
        <p>© {new Date().getFullYear()} Wai Yan. Built for enterprise impact.</p>
        <p>Senior Software Engineer · Business Solutions Consultant</p>
      </div>
    </footer>
  )
}
