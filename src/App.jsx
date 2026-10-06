import { useTheme } from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import Journey from './components/Journey.jsx'
import GithubCTA from './components/GithubCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Journey />
        <GithubCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
