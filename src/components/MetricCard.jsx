// src/components/MetricCard.jsx (reemplazar todo) - CSS Modules
import PropTypes from 'prop-types'
import Sparkline from '@/components/Sparkline'
import styles from '@/styles/MetricCard.module.css'

/**
 * Tarjeta de un indicador.
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.value
 * @param {string} props.delta
 * @param {'up'|'down'} props.trend - dirección de la flecha
 * @param {'positive'|'negative'} props.tone - si el cambio es bueno o malo
 * @param {number[]} props.series - datos para el mini gráfico
 * @param {React.ReactNode} [props.children] - nota al pie
 */
export default function MetricCard({ label, value, delta, trend, tone, series, children }) {
  return (
    <article className={`${styles.card} ${styles[tone]}`}>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.value}>{value}</p>
      <p className={styles.delta}>
        {trend === 'up' ? '▲' : '▼'} {delta}
      </p>
      <Sparkline values={series} className={styles.spark} />
      <div className={styles.note}>{children}</div>
    </article>
  )
}

MetricCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  delta: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['up', 'down']).isRequired,
  tone: PropTypes.oneOf(['positive', 'negative']).isRequired,
  series: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.node,
}