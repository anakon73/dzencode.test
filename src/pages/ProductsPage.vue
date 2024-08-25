<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ProductTypes } from '@/types'
import { useProducts } from '@/api/useProducts'
import { useOrders } from '@/api/useOrders'
import ProductCard from '@/components/ProductCard.vue'
import SelectType from '@/components/SelectType.vue'
import { t } from '@/i18n'

const { data: products } = useProducts()
const { data: orders } = useOrders()

const selectedType = ref<ProductTypes>('All')

const productWithOrderAndFilter = computed(() => {
  if (!products.value || !orders.value) {
    return []
  }

  const enhancedProducts = products.value.map((product) => {
    const order = orders.value.find(order => order.id === product.order)
    return {
      ...product,
      orderName: order ? order.title : 'Unknown Order',
    }
  })

  if (selectedType.value === 'All') {
    return enhancedProducts
  }
  else {
    return enhancedProducts.filter(product => product.type === selectedType.value)
  }
})
</script>

<template>
  <div>
    <div class="mb-5 flex items-center gap-10">
      <div class="text-4xl font-bold text-gray-700">
        {{ t('product.title') }} / {{ products?.length }}
      </div>
      <SelectType
        :selected-type="selectedType"
        @change-type="selectedType = $event"
      />
    </div>
    <div class="flex w-full flex-col gap-5 pb-20">
      <ProductCard
        v-for="product in productWithOrderAndFilter"
        :key="product.id"
        :="product"
      />
    </div>
  </div>
</template>
