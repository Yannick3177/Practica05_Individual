import PropTypes from 'prop-types'

/**
 * Fila de ranking de producto.
 * @param {Object} props
 * @param {number} props.rank
 * @param {string} props.name
 * @param {number} props.units
 * @param {number} props.share - porcentaje 0-100 relativo al líder
 */
export default function ProductRow({ rank, name, units, share }) {
  return (
    <li className="flex items-center gap-4">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-800 text-sm font-bold text-violet-300">
        {rank}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex justify-between text-sm">
          <span className="truncate text-slate-200">{name}</span>
          <span className="font-semibold text-slate-100">{units} uds.</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
          {/* Inline: el ancho depende de una prop, es un valor dinámico */}
          <div
            className="h-full rounded-full bg-linear-to-r from-violet-500 to-cyan-400"
            style={{ width: `${share}%` }}
          />
        </div>
      </div>
    </li>
  )
}

ProductRow.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  share: PropTypes.number.isRequired,
}