import { useQuery } from '@tanstack/vue-query'
import type { Product } from '@/types'

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const r = await fetch('/products')
      if (!r.ok)
        throw new Error('Not found products')
      return r.json()
    },
  })
}
