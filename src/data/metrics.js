// src/data/metrics.js (reemplazar)
// trend = dirección de la flecha; tone = si el cambio es bueno o malo para el negocio
export const metrics = [
  { id: 1, label: 'Pedidos', value: '164', delta: '9.3%', trend: 'up', tone: 'positive', series: [14, 12, 16, 15, 18, 22, 20, 15, 16, 16], note: 'Promedio de 16 por día' },
  { id: 2, label: 'Ticket promedio', value: 'S/ 236', delta: '4.6%', trend: 'up', tone: 'positive', series: [229, 238, 218, 207, 231, 236, 235, 243, 244, 280], note: 'Crecen las bolsas de 1 kg' },
  { id: 3, label: 'Clientes nuevos', value: '41', delta: '12%', trend: 'up', tone: 'positive', series: [3, 2, 4, 3, 5, 6, 5, 4, 4, 5], note: 'El 25% de los pedidos' },
  { id: 4, label: 'Devoluciones', value: '2.4%', delta: '0.5 pts', trend: 'up', tone: 'negative', series: [0, 1, 0, 1, 0, 1, 0, 0, 1, 0], note: '4 de 164 pedidos' },
]