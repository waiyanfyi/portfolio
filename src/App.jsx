import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { GitHubStatsSection } from './components/sections/GitHubStatsSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <GitHubStatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
