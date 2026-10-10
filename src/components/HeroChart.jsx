import PropTypes from 'prop-types'
import { soles } from '@/utils/format'
import styles from '@/styles/HeroChart.module.css'

const W = 640
const H = 220
const PAD = 24

/**
 * Bloque principal: total acumulado, meta y gráfico SVG de ventas diarias.
 * @param {Object} props
 * @param {string} props.label
 * @param {number} props.total
 * @param {number} props.goal
 * @param {string} props.delta
 * @param {{day: string, value: number}[]} props.data
 */
export default function HeroChart({ label, total, goal, delta, data }) {
  const maxValue = Math.max(...data.map((d) => d.value))
  const max = maxValue * 1.15
  const step = (W - PAD * 2) / (data.length - 1)
  const points = data.map((d, i) => [PAD + i * step, H - PAD - (d.value / max) * (H - PAD * 2)])
  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `${line} L${points[points.length - 1][0]},${H} L${points[0][0]},${H} Z`
  const best = data.findIndex((d) => d.value === maxValue)
  const [bx, by] = points[best]
  const goalPct = Math.round((total / goal) * 100)

  return (
    <section className="grid gap-8 rounded-[28px] bg-ink p-6 text-sage sm:p-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <p className="text-sm text-sage/70">{label}</p>
        <p className="mt-2 font-display text-5xl font-bold sm:text-6xl">{soles(total)}</p>
        <p className="mt-4 text-sm text-sage/80">
          <span className="mr-2 rounded-full bg-honey px-2.5 py-1 font-semibold text-ink">+{delta}</span>
          frente al mismo período de septiembre
        </p>

        <div className="mt-10">
          <div className="flex justify-between text-sm">
            <span className="text-sage/80">Meta del mes: {soles(goal)}</span>
            <span className="font-semibold">{goalPct}%</span>
          </div>
          {/* Inline: el ancho depende del porcentaje calculado */}
          <div className="mt-2 h-2 rounded-full bg-sage/15">
            <div className="h-full rounded-full bg-honey" style={{ width: `${goalPct}%` }} />
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <svg viewBox={`0 0 ${W} ${H + 28}`} className="w-full" role="img" aria-label="Ventas diarias del 1 al 10 de octubre">
          <defs>
            <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E0A030" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E0A030" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#heroFill)" />
          <path d={line} pathLength="1" className={styles.line} fill="none" stroke="#E0A030" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={bx} cy={by} r="6" fill="#E8EEE6" stroke="#E0A030" strokeWidth="3" />
          <text x={bx} y={by - 16} textAnchor="middle" fontSize="14" fontWeight="600" fill="#E8EEE6">
            {soles(maxValue)}
          </text>
          {data.map((d, i) => (
            <text key={d.day} x={points[i][0]} y={H + 18} textAnchor="middle" fontSize="12" fill="#E8EEE6" opacity="0.6">
              {d.day}
            </text>
          ))}
        </svg>
      </div>
    </section>
  )
}

HeroChart.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  delta: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({ day: PropTypes.string.isRequired, value: PropTypes.number.isRequired }),
  ).isRequired,
}