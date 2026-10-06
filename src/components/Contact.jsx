import { useState } from 'react'
import { Github, Linkedin, Mail } from './Icons.jsx'
import { site } from '../data/site.js'

// This form uses a mailto: fallback so the site can stay fully static and
// free to host. To collect messages without opening the visitor's email
// client, swap handleSubmit to POST to a free form backend (e.g. Formspree
// or Web3Forms) — see the README section "Wiring up the contact form".
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-3xl">Let's work together</h2>
          <p className="mt-4 max-w-prose text-ink-soft dark:text-paper/70 leading-relaxed">
            I'm open to opportunities involving data analytics, AI,
            automation, statistical analysis, research, and data-driven
            projects. Reach out and I'll get back to you.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-ink-soft dark:text-paper/75 hover:text-signal"
            >
              <Mail size={16} /> {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-ink-soft dark:text-paper/75 hover:text-signal"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-ink-soft dark:text-paper/75 hover:text-signal"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-sm text-ink-soft dark:text-paper/70">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1.5 w-full border rule rounded-md px-3.5 py-2.5 bg-transparent text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-ink-soft dark:text-paper/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1.5 w-full border rule rounded-md px-3.5 py-2.5 bg-transparent text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-ink-soft dark:text-paper/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1.5 w-full border rule rounded-md px-3.5 py-2.5 bg-transparent text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-signal hover:bg-signal-dark text-white px-5 py-3 rounded-md text-sm font-medium self-start transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
