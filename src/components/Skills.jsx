const groups = [
  {
    title: 'Data Analytics',
    skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Pandas', 'Data Cleaning', 'Exploratory Data Analysis'],
  },
  {
    title: 'Statistics & Research',
    skills: [
      'Statistical Modeling',
      'Regression Analysis',
      'Hypothesis Testing',
      'Time Series Analysis',
      'Statistical Diagnostics',
      'Research Analysis',
      'Data Interpretation',
    ],
  },
  {
    title: 'AI & Automation',
    skills: ['Generative AI', 'AI APIs', 'Prompt Engineering', 'FastAPI', 'Streamlit', 'Workflow Automation'],
  },
  {
    title: 'Development',
    skills: ['Python', 'React', 'Vite', 'FastAPI', 'SQLite', 'Git', 'GitHub'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl">Skills</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-xs text-signal tracking-wide">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="text-sm border rule px-3 py-1.5 rounded-md text-ink-soft dark:text-paper/75"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
