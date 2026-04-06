import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Interests', href: '#interests' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-accent font-medium text-sm tracking-widest">
          BB
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === href.slice(1)
                    ? 'text-accent'
                    : 'text-muted hover:text-text'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-surface px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    active === href.slice(1)
                      ? 'text-accent'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
