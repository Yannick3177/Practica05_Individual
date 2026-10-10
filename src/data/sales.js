export const salesByDay = [
  { day: 'Jue 1', value: 3200 },
  { day: 'Vie 2', value: 3480 },
  { day: 'Sáb 3', value: 5200 },
  { day: 'Dom 4', value: 4700 },
  { day: 'Lun 5', value: 2850 },
  { day: 'Mar 6', value: 3100 },
  { day: 'Mié 7', value: 3650 },
  { day: 'Jue 8', value: 3900 },
  { day: 'Vie 9', value: 4150 },
  { day: 'Sáb 10', value: 4480 },
]

export const salesGoal = 90000
export const salesDelta = '14.2%'
export const totalSales = salesByDay.reduce((acc, d) => acc + d.value, 0) // 38,710

export const origins = [
  { id: 1, name: 'Chanchamayo', region: 'Junín', amount: 13850, share: 100 },
  { id: 2, name: 'Quillabamba', region: 'Cusco', amount: 9720, share: 70 },
  { id: 3, name: 'Cajamarca', region: 'Cajamarca', amount: 7600, share: 55 },
  { id: 4, name: 'Satipo', region: 'Junín', amount: 4380, share: 32 },
  { id: 5, name: 'Otros orígenes', region: 'Varios', amount: 3160, share: 23 },
]

export const channels = [
  { id: 1, label: 'Tienda', value: 20130, color: '#12332B' },
  { id: 2, label: 'Delivery', value: 12000, color: '#C8283C' },
  { id: 3, label: 'Web', value: 6580, color: '#E0A030' },
]

export const orderColumns = ['Pedido', 'Cliente', 'Producto', 'Total', 'Estado']

export const orders = [
  { id: 1, code: '#10482', customer: 'Lucía Paredes', product: 'Chanchamayo, 1 kg en grano', total: 'S/ 118.00', status: 'entregado' },
  { id: 2, code: '#10481', customer: 'Marco Salas', product: 'Quillabamba, 250 g molido', total: 'S/ 46.00', status: 'en camino' },
  { id: 3, code: '#10480', customer: 'Cafetería Alba', product: 'Cajamarca, 5 kg en grano', total: 'S/ 410.00', status: 'preparando' },
  { id: 4, code: '#10479', customer: 'Inés Campos', product: 'Satipo, 500 g en grano', total: 'S/ 79.00', status: 'entregado' },
  { id: 5, code: '#10478', customer: 'Diego Rivas', product: 'Chanchamayo, 1 kg molido', total: 'S/ 118.00', status: 'devuelto' },
]