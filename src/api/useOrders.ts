import { useMutation, useQuery } from '@tanstack/vue-query'
import type { Order } from '@/types'

export function useOrders() {
  return useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: async () => {
      const r = await fetch('/orders')
      if (!r.ok)
        throw new Error('Not found orders')
      return r.json()
    },
  })
}

export function useOrderDelete() {
  return useMutation({
    mutationFn: async (id: number) => {
      const r = await fetch(`/orders/${id}`, { method: 'DELETE' })
      if (!r.ok)
        throw new Error('Order not found')
      return r.json()
    },
  })
}
