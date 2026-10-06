import { useEffect } from 'react'
import { X, Github, ExternalLink, FileText, ArrowRight } from './Icons.jsx'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <button
        className="absolute inset-0 bg-ink/50 dark:bg-black/70"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative bg-paper dark:bg-void-raised border rule rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 sm:p-9 animate-rise">
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 text-ink-soft dark:text-paper/60 hover:text-signal"
        >
          <X size={20} />
        </button>

        <p className="font-mono text-xs text-signal">{project.category}</p>
        <h3 className="font-display text-2xl sm:text-3xl mt-2 leading-tight pr-8">
          {project.title}
        </h3>

        {project.workflow && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.workflow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="text-xs font-mono border rule px-2.5 py-1 rounded">
                  {step}
                </span>
                {i < project.workflow.length - 1 && (
                  <ArrowRight size={13} className="text-ink-faint" />
                )}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-5">
          <div>
            <h4 className="font-mono text-xs text-ink-faint dark:text-paper/50 tracking-wide">
              Problem
            </h4>
            <p className="mt-1.5 text-sm text-ink-soft dark:text-paper/75 leading-relaxed">
              {project.detail.problem}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-ink-faint dark:text-paper/50 tracking-wide">
              Objective
            </h4>
            <p className="mt-1.5 text-sm text-ink-soft dark:text-paper/75 leading-relaxed">
              {project.detail.objective}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-ink-faint dark:text-paper/50 tracking-wide">
              Approach
            </h4>
            <p className="mt-1.5 text-sm text-ink-soft dark:text-paper/75 leading-relaxed">
              {project.detail.approach}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-ink-faint dark:text-paper/50 tracking-wide">
              Key findings
            </h4>
            <ul className="mt-1.5 space-y-1">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm text-ink-soft dark:text-paper/75 flex gap-2"
                >
                  <span className="text-signal">–</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs text-ink-faint dark:text-paper/50 tracking-wide">
              Technologies
            </h4>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="font-mono text-[11px] border rule px-2 py-1 rounded"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 pt-5 border-t rule flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border rule px-4 py-2.5 rounded-md text-sm font-medium hover:border-signal"
            >
              <Github size={15} /> GitHub
              {project.githubIsPlaceholder && (
                <span className="text-ink-faint dark:text-paper/40">
                  (placeholder)
                </span>
              )}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-signal text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-signal-dark"
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
          {project.publicationUrl && (
            <a
              href={project.publicationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border rule px-4 py-2.5 rounded-md text-sm font-medium hover:border-signal"
            >
              <FileText size={15} /> Read research
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
