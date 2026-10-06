import { Github } from './Icons.jsx'
import { site } from '../data/site.js'

export default function GithubCTA() {
  return (
    <section className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl">Explore my work</h2>
          <p className="mt-2 text-ink-soft dark:text-paper/70 max-w-prose">
            Explore my projects, analysis, research, and experiments on
            GitHub.
          </p>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border rule px-5 py-3 rounded-md text-sm font-medium hover:border-signal transition-colors shrink-0"
        >
          <Github size={16} /> View GitHub
        </a>
      </div>
    </section>
  )
}
