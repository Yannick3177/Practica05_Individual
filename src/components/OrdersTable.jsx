// src/components/OrdersTable.jsx
import PropTypes from 'prop-types'

/**
 * Tabla de pedidos. Las filas llegan por children (composición).
 * @param {Object} props
 * @param {string[]} props.columns
 * @param {React.ReactNode} props.children
 */
export default function OrdersTable({ columns, children }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-ink/10 text-ink/55">
            {columns.map((c) => (
              <th key={c} className="pb-3 pr-4 font-medium">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10">{children}</tbody>
      </table>
    </div>
  )
}

OrdersTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
}