import { useState } from 'react'
import { Github, ExternalLink, FileText } from './Icons.jsx'
import { projects, filterCategories } from '../data/projects.js'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects" className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl">Projects</h2>
        <p className="mt-3 max-w-prose text-ink-soft dark:text-paper/70">
          A selection of analysis, research, and automation work. Filter by
          the kind of problem it solves.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filterCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-sm px-4 py-2 rounded-md border transition-colors ${
                filter === c
                  ? 'bg-signal border-signal text-white'
                  : 'rule text-ink-soft dark:text-paper/70 hover:border-signal'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {visible.map((p) => (
            <article
              key={p.id}
              className="animate-rise border rule rounded-lg p-6 flex flex-col bg-paper dark:bg-void-raised"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl leading-snug">
                  {p.title}
                </h3>
              </div>

              <p className="mt-3 text-sm text-ink-soft dark:text-paper/70 leading-relaxed">
                {p.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 5).map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[11px] text-ink-faint dark:text-paper/50 border rule px-2 py-1 rounded"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t rule flex items-center justify-between">
                <button
                  onClick={() => setActive(p)}
                  className="text-sm font-medium text-signal hover:text-signal-dark dark:hover:text-signal-light"
                >
                  View project →
                </button>
                <div className="flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="text-ink-soft dark:text-paper/60 hover:text-signal"
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="text-ink-soft dark:text-paper/60 hover:text-signal"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                  {p.isResearch && (
                    <a
                      href={p.publicationUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read research: ${p.title}`}
                      className="text-ink-soft dark:text-paper/60 hover:text-signal"
                    >
                      <FileText size={17} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
