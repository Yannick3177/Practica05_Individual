import PropTypes from 'prop-types'

/**
 * Estructura de la página con tres "slots" de composición:
 * hero (bloque principal), children (tarjetas KPI) y footer (paneles).
 * @param {Object} props
 * @param {string} props.brand
 * @param {string} props.title
 * @param {string} props.period
 * @param {string} [props.note]
 * @param {React.ReactNode} props.hero
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} [props.footer]
 */
export default function Dashboard({ brand, title, period, note, hero, children, footer }) {
  return (
    <div className="min-h-screen bg-sage font-sans text-ink">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold text-cherry">{brand}</p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          </div>
          <p className="text-sm text-ink/70">{period}</p>
        </header>

        {hero}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
        <div className="mt-6 grid gap-6 lg:grid-cols-5">{footer}</div>

        {note && <p className="mt-8 text-xs text-ink/55">{note}</p>}
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  note: PropTypes.string,
  hero: PropTypes.node.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
}