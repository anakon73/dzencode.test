import { HttpResponse, http } from 'msw'
import products from '@/api/products.db'
import orders from '@/api/orders.db'
import type { Order } from '@/types'

function loadOrders(): Order[] {
  const storedOrders = localStorage.getItem('orders')
  return storedOrders ? JSON.parse(storedOrders) : orders
}

function saveOrders(ordersToSave: Order[]) {
  localStorage.setItem('orders', JSON.stringify(ordersToSave))
}

export const handlers = [
  http.get('/products', () => {
    return HttpResponse.json(products)
  }),
  http.get('/orders', () => {
    const currentOrders = loadOrders()
    return HttpResponse.json(currentOrders)
  }),
  http.delete('/orders/:id', ({ params }) => {
    const { id } = params
    const currentOrders = loadOrders()

    const index = currentOrders.findIndex(order => order.id === +id)
    if (index !== -1) {
      currentOrders.splice(index, 1)
      saveOrders(currentOrders)
      return HttpResponse.json(currentOrders, { status: 200 })
    }
    else {
      return HttpResponse.json({ message: 'Order not found' }, { status: 404 })
    }
  }),
]
