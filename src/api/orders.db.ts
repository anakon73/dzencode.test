import type { Product } from '@/types'
import products from './products.db'

const groupedProducts = products.reduce<Record<number, Product[]>>((acc, product) => {
  const orderId = product.order
  if (!acc[orderId]) {
    acc[orderId] = []
  }
  acc[orderId].push(product)
  return acc
}, {})

const orders = Object.keys(groupedProducts).map(orderId => ({
  id: Number(orderId),
  title: `Order ${orderId}`,
  date: '2024-08-24T12:09:33',
  description: `Order description for Order ${orderId}`,
  products: groupedProducts[Number(orderId)],
}))

export default orders
