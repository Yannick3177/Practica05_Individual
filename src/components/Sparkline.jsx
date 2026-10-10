import PropTypes from 'prop-types'

/**
 * Mini gráfico de línea calculado a partir de una serie de números.
 * @param {Object} props
 * @param {number[]} props.values
 * @param {string} [props.className]
 */
export default function Sparkline({ values, className }) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const step = 100 / (values.length - 1)
  const d = values
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(30 - ((v - min) / range) * 28).toFixed(1)}`)
    .join(' ')

  return (
    <svg viewBox="0 0 100 32" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

Sparkline.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.string,
}