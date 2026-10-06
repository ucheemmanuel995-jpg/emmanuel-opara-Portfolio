const stats = [
  { label: 'BSc Statistics' },
  { label: 'Data Analytics' },
  { label: 'AI & Automation' },
  { label: 'Published Research' },
]

export default function About() {
  return (
    <section id="about" className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <h2 className="font-display text-3xl">About</h2>
          <p className="mt-5 max-w-prose text-ink-soft dark:text-paper/70 leading-relaxed">
            I studied Statistics and work at the intersection of data
            analytics, statistical research, AI, and automation. My
            background gives me a grounding in how to test whether a pattern
            in data is real — and I pair that with modern tooling to turn
            that understanding into working software: dashboards, models,
            and automated pipelines that solve practical problems rather than
            just describing them.
          </p>
          <p className="mt-4 max-w-prose text-ink-soft dark:text-paper/70 leading-relaxed">
            My work spans data cleaning and exploratory analysis, regression
            and hypothesis testing, and building AI-assisted tools that
            automate the repetitive parts of analysis and reporting.
          </p>
        </div>

        <div className="md:col-span-2">
          <dl className="grid grid-cols-2 gap-px bg-ink/10 dark:bg-void-line border rule">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-paper dark:bg-void p-5 flex items-center"
              >
                <dt className="font-display text-base leading-snug">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
