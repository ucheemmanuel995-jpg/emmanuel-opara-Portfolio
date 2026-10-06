import { useState } from 'react'
import { Menu, X, Sun, Moon, Download } from './Icons.jsx'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b rule bg-paper/90 dark:bg-void/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-lg tracking-tight">
          Emmanuel Opara
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft dark:text-paper/70 hover:text-signal dark:hover:text-signal-light transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border rule hover:border-signal transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="/cv/Emmanuel-Opara-CV.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium bg-signal text-white px-4 py-2 rounded-md hover:bg-signal-dark transition-colors"
          >
            <Download size={15} /> Download CV
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t rule bg-paper dark:bg-void px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-ink-soft dark:text-paper/70"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2 border-t rule">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm py-2"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
            <a
              href="/cv/Emmanuel-Opara-CV.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium bg-signal text-white px-4 py-2 rounded-md"
            >
              <Download size={15} /> CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
