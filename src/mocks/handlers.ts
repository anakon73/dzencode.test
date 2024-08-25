import { HttpResponse, http } from 'msw'
import products from '@/api/products.db'
import orders from '@/api/orders.db'

export const handlers = [
  http.get('/products', () => {
    return HttpResponse.json(products)
  }),
  http.get('/orders', () => {
    return HttpResponse.json(orders)
  }),
]
