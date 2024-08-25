<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { ChevronRight, Logs, Trash2 } from 'lucide-vue-next'
import type { Product } from '@/types'
import { t } from '@/i18n'

interface Props {
  title: string
  products: Product[]
  date: string
  small: boolean
  selected: boolean
}

const props = defineProps<Props>()

defineEmits<{ delete: [], changeSelectedOrder: [] }>()

const { products } = toRefs(props)

const totalByCurrency = computed(() => {
  return products.value.reduce((totals, product) => {
    product.price.forEach((p) => {
      if (!totals[p.symbol]) {
        totals[p.symbol] = 0
      }
      totals[p.symbol] += p.value
    })
    return totals
  }, {} as Record<string, number>)
})
</script>

<template>
  <div
    class="
      relative flex items-center justify-between whitespace-nowrap rounded-md border
      bg-white px-8 py-4 font-semibold text-gray-700
    "
  >
    <div class="flex w-full items-center gap-4">
      <p v-if="!small" class="w-1/3 text-xl underline">
        {{ title }}
      </p>
      <button @click="$emit('changeSelectedOrder')">
        <Logs class="size-10 rounded-full border bg-white p-2" />
      </button>
      <div class="w-1/6">
        <p>{{ products.length }}</p>
        <p class="text-xs text-gray-500">
          {{ t('order.products') }}
        </p>
      </div>
      <div class="w-1/6">
        <p class="text-xs text-gray-500">
          {{
            new Date(date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'numeric',
            })
          }}
        </p>
        <p>
          {{
            new Date(date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })
          }}
        </p>
      </div>
      <div v-if="!small">
        <p class="text-xs text-gray-500">
          {{ totalByCurrency.USD }} USD
        </p>
        <p>
          {{ totalByCurrency.UAH }} UAH
        </p>
      </div>
    </div>
    <button v-if="!small" @click="$emit('delete')">
      <Trash2 class="size-5" />
    </button>
    <button v-if="selected" class="absolute right-0 h-full bg-slate-300">
      <ChevronRight class="size-8 px-2 text-white" />
    </button>
  </div>
</template>
