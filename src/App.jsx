import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Interests />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-surface py-6 text-center">
        <p className="text-muted text-sm font-mono">
          Built by Bryan Baldie &mdash; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
