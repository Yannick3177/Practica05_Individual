// src/components/OrderRow.jsx
import PropTypes from 'prop-types'

const STATUS_STYLES = {
  entregado: 'bg-moss/15 text-moss',
  'en camino': 'bg-honey/25 text-amber-800',
  preparando: 'bg-ink/10 text-ink',
  devuelto: 'bg-cherry/10 text-cherry',
}

/**
 * Fila de la tabla de pedidos.
 * @param {Object} props
 * @param {string} props.code
 * @param {string} props.customer
 * @param {string} props.product
 * @param {string} props.total
 * @param {'entregado'|'en camino'|'preparando'|'devuelto'} props.status
 */
export default function OrderRow({ code, customer, product, total, status }) {
  return (
    <tr>
      <td className="py-4 pr-4 font-medium">{code}</td>
      <td className="py-4 pr-4">{customer}</td>
      <td className="py-4 pr-4 text-ink/70">{product}</td>
      <td className="py-4 pr-4 font-semibold">{total}</td>
      <td className="py-4">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  )
}

OrderRow.propTypes = {
  code: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['entregado', 'en camino', 'preparando', 'devuelto']).isRequired,
}