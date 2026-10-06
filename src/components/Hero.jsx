import { Github, Linkedin, Mail, Download } from './Icons.jsx'
import HeroChart from './HeroChart.jsx'
import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p className="font-mono text-xs text-signal tracking-wide">
          Statistics graduate — building with data
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] mt-3">
          Emmanuel Uchenna Opara
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-ink-soft dark:text-paper/75 font-display">
          Data Analyst · AI &amp; Automation · Statistical Research
        </p>
        <p className="mt-5 max-w-prose text-ink-soft dark:text-paper/70 leading-relaxed">
          Statistics graduate building data-driven solutions through
          analytics, statistical modeling, AI, and automation.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="bg-signal hover:bg-signal-dark text-white px-5 py-3 rounded-md text-sm font-medium transition-colors"
          >
            View my projects
          </a>
          <a
            href="/cv/Emmanuel-Opara-CV.pdf"
            download
            className="inline-flex items-center gap-2 border rule px-5 py-3 rounded-md text-sm font-medium hover:border-signal transition-colors"
          >
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-soft dark:text-paper/60 hover:text-signal transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft dark:text-paper/60 hover:text-signal transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-ink-soft dark:text-paper/60 hover:text-signal transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <HeroChart />
      </div>
    </section>
  )
}
