import { useEffect, useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { personalInfo } from '../../data/portfolioData'

const fallback = {
  public_repos: 30,
  followers: 120,
  public_gists: 18,
}

export function GitHubStatsSection() {
  const [stats, setStats] = useState(fallback)

  useEffect(() => {
    let isMounted = true

    async function loadGithubStats() {
      try {
        const response = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}`)
        if (!response.ok) {
          throw new Error('GitHub API not available')
        }

        const data = await response.json()
        if (isMounted) {
          setStats({
            public_repos: data.public_repos,
            followers: data.followers,
            public_gists: data.public_gists,
          })
        }
      } catch {
        if (isMounted) {
          setStats(fallback)
        }
      }
    }

    loadGithubStats()

    return () => {
      isMounted = false
    }
  }, [])

  const cards = [
    { label: 'Public Repositories', value: stats.public_repos },
    { label: 'Followers', value: stats.followers },
    { label: 'Public Gists', value: stats.public_gists },
  ]

  return (
    <section id="github" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h3 className="section-title">GitHub Statistics</h3>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.1}>
              <article className="glass-card p-5 text-center">
                <p className="text-3xl font-black text-[var(--text-main)]">{card.value}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{card.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
