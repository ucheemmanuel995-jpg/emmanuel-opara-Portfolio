import { Github, Linkedin, Mail } from './Icons.jsx'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg">{site.name}</p>
          <p className="text-sm text-ink-soft dark:text-paper/60">{site.role}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-soft dark:text-paper/60 hover:text-signal">
            <Github size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-soft dark:text-paper/60 hover:text-signal">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="text-ink-soft dark:text-paper/60 hover:text-signal">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-8 text-xs text-ink-faint dark:text-paper/40">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
