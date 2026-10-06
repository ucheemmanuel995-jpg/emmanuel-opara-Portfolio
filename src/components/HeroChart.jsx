// A small line chart with a mean line and a confidence band —
// evokes statistical process control rather than a generic "AI squiggle".
const points = [32, 41, 38, 52, 49, 61, 58, 70, 66, 78, 74, 88]
const W = 420
const H = 260
const PAD = 24

function toPath(vals) {
  const max = Math.max(...vals)
  const min = Math.min(...vals)
  const stepX = (W - PAD * 2) / (vals.length - 1)
  return vals
    .map((v, i) => {
      const x = PAD + i * stepX
      const y = H - PAD - ((v - min) / (max - min)) * (H - PAD * 2)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

export default function HeroChart() {
  const path = toPath(points)
  const mean = points.reduce((a, b) => a + b, 0) / points.length
  const max = Math.max(...points)
  const min = Math.min(...points)
  const meanY = H - PAD - ((mean - min) / (max - min)) * (H - PAD * 2)

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-md"
      role="img"
      aria-label="Illustrative line chart trending upward, representing statistical trend analysis"
    >
      {/* gridlines, like a stats notebook */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={PAD}
          x2={W - PAD}
          y1={PAD + (i * (H - PAD * 2)) / 3}
          y2={PAD + (i * (H - PAD * 2)) / 3}
          className="stroke-ink/10 dark:stroke-void-line"
          strokeWidth="1"
        />
      ))}

      {/* mean reference line */}
      <line
        x1={PAD}
        x2={W - PAD}
        y1={meanY}
        y2={meanY}
        strokeDasharray="3 4"
        className="stroke-ink/30 dark:stroke-paper/30"
        strokeWidth="1"
      />
      <text
        x={W - PAD}
        y={meanY - 6}
        textAnchor="end"
        className="fill-ink/40 dark:fill-paper/40 font-mono"
        style={{ fontSize: 10 }}
      >
        mean
      </text>

      {/* trend line */}
      <path
        d={path}
        fill="none"
        stroke="#1F7A63"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ '--len': 700 }}
        className="animate-draw"
      />

      {/* final data point, marked like a significant result */}
      <circle
        cx={PAD + 11 * ((W - PAD * 2) / 11)}
        cy={H - PAD - ((points[11] - min) / (max - min)) * (H - PAD * 2)}
        r="4.5"
        fill="#D9762E"
      />
    </svg>
  )
}
