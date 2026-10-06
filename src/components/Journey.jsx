const stages = [
  {
    n: '01',
    title: 'Statistics',
    text: 'Formal grounding in statistical theory, modeling, and inference during my Statistics degree.',
  },
  {
    n: '02',
    title: 'Data Analytics',
    text: 'Applied that grounding to real datasets — cleaning, exploring, and visualizing data with SQL, Python, and Power BI.',
  },
  {
    n: '03',
    title: 'AI',
    text: 'Started using AI tools and APIs to extend analysis work — from generation to prompt-driven workflows.',
  },
  {
    n: '04',
    title: 'Automation',
    text: 'Built pipelines and services that turn recurring analysis and reporting work into automated systems.',
  },
  {
    n: '05',
    title: 'Research',
    text: 'Carried the same rigor into peer-reviewed research, publishing statistical findings on real-world data.',
  },
]

export default function Journey() {
  return (
    <section className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl">Journey</h2>
        <ol className="mt-10 grid sm:grid-cols-5 gap-6">
          {stages.map((s) => (
            <li key={s.n} className="border-t-2 border-signal pt-4">
              <span className="font-mono text-xs text-ink-faint dark:text-paper/40">
                {s.n}
              </span>
              <h3 className="font-display text-lg mt-1">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft dark:text-paper/70 leading-relaxed">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
