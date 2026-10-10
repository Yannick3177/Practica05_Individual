// src/components/Panel.jsx
import PropTypes from 'prop-types'

/**
 * Panel con título. El contenido llega por children; className permite
 * que el padre decida cuántas columnas ocupa.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Panel({ title, description, className = '', children }) {
  return (
    <section className={`rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8 ${className}`}>
      <h2 className="font-display text-xl font-bold">{title}</h2>
      {description && <p className="mt-1 text-sm text-ink/60">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}