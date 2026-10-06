import { FileText, Github, Archive } from './Icons.jsx'
import { projects } from '../data/projects.js'

export default function Research() {
  const paper = projects.find((p) => p.isResearch)
  if (!paper) return null

  return (
    <section id="research" className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl">Research &amp; Publications</h2>

        <div className="mt-10 border rule rounded-lg overflow-hidden">
          <div className="p-7 sm:p-9 border-b rule">
            <p className="font-mono text-xs text-signal">Published research</p>
            <h3 className="font-display text-xl sm:text-2xl mt-2 leading-snug max-w-2xl">
              {paper.title}
            </h3>
            <p className="mt-4 max-w-prose text-sm text-ink-soft dark:text-paper/70 leading-relaxed">
              {paper.summary}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x rule">
            <div className="p-7 sm:p-9">
              <h4 className="font-mono text-xs text-ink-faint dark:text-paper/50 tracking-wide">
                Key statistical methods
              </h4>
              <ul className="mt-3 space-y-1.5">
                {paper.tech.map((t) => (
                  <li key={t} className="text-sm text-ink-soft dark:text-paper/75">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 sm:p-9">
              <h4 className="font-mono text-xs text-ink-faint dark:text-paper/50 tracking-wide">
                Publication details
              </h4>
              <ul className="mt-3 space-y-3 text-sm">
                <li>
                  <a
                    href={paper.publicationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-signal hover:text-signal-dark"
                  >
                    <FileText size={15} /> View publication (DOI)
                  </a>
                </li>
                <li>
                  <a
                    href={paper.zenodoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-signal hover:text-signal-dark"
                  >
                    <Archive size={15} /> Zenodo data record
                  </a>
                </li>
                <li>
                  <a
                    href={paper.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-signal hover:text-signal-dark"
                  >
                    <Github size={15} /> Analysis repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
