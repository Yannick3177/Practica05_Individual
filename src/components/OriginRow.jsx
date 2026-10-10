// src/components/OriginRow.jsx
import PropTypes from 'prop-types'
import { soles } from '@/utils/format'

/**
 * Fila de ventas por origen con barra proporcional.
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.region
 * @param {number} props.amount
 * @param {number} props.share - porcentaje 0-100 relativo al origen líder
 */
export default function OriginRow({ name, region, amount, share }) {
  return (
    <li className="grid gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold">
          {name} <span className="font-normal text-ink/55">{region}</span>
        </p>
        <p className="font-display font-bold">{soles(amount)}</p>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-sage">
        {/* Inline: el ancho viene de una prop */}
        <div className="h-full rounded-full bg-ink" style={{ width: `${share}%` }} />
      </div>
    </li>
  )
}

OriginRow.propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  share: PropTypes.number.isRequired,
}