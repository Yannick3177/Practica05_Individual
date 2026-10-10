// src/components/ChannelDonut.jsx
import PropTypes from 'prop-types'

/**
 * Gráfico de dona en SVG: cada segmento es un círculo con stroke-dasharray.
 * @param {Object} props
 * @param {{id: number, label: string, value: number, color: string}[]} props.segments
 * @param {string} props.centerValue
 * @param {string} props.centerLabel
 */
export default function ChannelDonut({ segments, centerValue, centerLabel }) {
  const total = segments.reduce((acc, s) => acc + s.value, 0)
  let offset = 25 // empieza en la parte superior
  const arcs = segments.map((s) => {
    const pct = (s.value / total) * 100
    const arc = { ...s, pct, dash: `${pct} ${100 - pct}`, offset }
    offset -= pct
    return arc
  })

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row lg:flex-col xl:flex-row">
      <div className="relative h-44 w-44 shrink-0">
        <svg viewBox="0 0 42 42" className="h-full w-full" role="img" aria-label="Pedidos por canal de venta">
          <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#E8EEE6" strokeWidth="5" />
          {arcs.map((a) => (
            <circle key={a.id} cx="21" cy="21" r="15.9155" fill="none" stroke={a.color} strokeWidth="5" strokeDasharray={a.dash} strokeDashoffset={a.offset} />
          ))}
        </svg>
        <div className="absolute inset-0 grid place-content-center text-center">
          <p className="font-display text-3xl font-bold leading-none">{centerValue}</p>
          <p className="text-xs text-ink/60">{centerLabel}</p>
        </div>
      </div>

      <ul className="w-full space-y-3 text-sm">
        {arcs.map((a) => (
          <li key={a.id} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: a.color }} />
              {a.label}
            </span>
            <span className="font-semibold">{Math.round(a.pct)}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

ChannelDonut.propTypes = {
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  centerValue: PropTypes.string.isRequired,
  centerLabel: PropTypes.string.isRequired,
}