// src/App.jsx (reemplazar todo) - solo orquesta, sin lógica de negocio
import Dashboard from '@/components/Dashboard'
import HeroChart from '@/components/HeroChart'
import MetricCard from '@/components/MetricCard'
import Panel from '@/components/Panel'
import OriginRow from '@/components/OriginRow'
import ChannelDonut from '@/components/ChannelDonut'
import OrdersTable from '@/components/OrdersTable'
import OrderRow from '@/components/OrderRow'
import { metrics } from '@/data/metrics'
import { salesByDay, salesGoal, salesDelta, totalSales, origins, channels, orderColumns, orders } from '@/data/sales'

export default function App() {
  return (
    <Dashboard
      brand="Tupay Café"
      title="Panel de ventas"
      period="1 al 10 de octubre de 2026"
      note="Datos de ejemplo para la práctica. Los cambios se comparan con el mismo período de septiembre."
      hero={
        <HeroChart
          label="Ventas acumuladas del mes"
          total={totalSales}
          goal={salesGoal}
          delta={salesDelta}
          data={salesByDay}
        />
      }
      footer={
        <>
          <Panel title="Ventas por origen del café" description="Soles vendidos en lo que va del mes" className="lg:col-span-3">
            <ul className="grid gap-5">
              {origins.map((o) => (
                <OriginRow key={o.id} name={o.name} region={o.region} amount={o.amount} share={o.share} />
              ))}
            </ul>
          </Panel>

          <Panel title="Canal de venta" description="De dónde llegan los pedidos" className="lg:col-span-2">
            <ChannelDonut segments={channels} centerValue="164" centerLabel="pedidos" />
          </Panel>

          <Panel title="Últimos pedidos" description="Los cinco más recientes" className="lg:col-span-5">
            <OrdersTable columns={orderColumns}>
              {orders.map((o) => (
                <OrderRow key={o.id} code={o.code} customer={o.customer} product={o.product} total={o.total} status={o.status} />
              ))}
            </OrdersTable>
          </Panel>
        </>
      }
    >
      {metrics.map((m) => (
        <MetricCard key={m.id} label={m.label} value={m.value} delta={m.delta} trend={m.trend} tone={m.tone} series={m.series}>
          <small>{m.note}</small>
        </MetricCard>
      ))}
    </Dashboard>
  )
}