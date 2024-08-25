<script setup lang="ts">
import { Plus, Trash2, X } from 'lucide-vue-next'
import type { Product } from '@/types'

interface Props {
  title: string
  products: Product[]
}

defineProps<Props>()

defineEmits<{ unselectOrder: [] }>()
</script>

<template>
  <div class="relative rounded-md border bg-white p-8 font-semibold text-gray-700">
    <button
      class="absolute -right-3 -top-3 rounded-full border bg-white p-2"
      @click="$emit('unselectOrder')"
    >
      <X class="size-5 text-gray-500" />
    </button>
    <h2 class="mb-2 text-2xl">
      {{ title }}
    </h2>
    <button class="mb-2 flex items-center gap-1">
      <Plus class="size-6 rounded-full bg-lime-500 p-1 text-white" />
      <p class="text-sm text-lime-500">
        {{ $t('order.add') }}
      </p>
    </button>
    <div class="-mx-8">
      <div
        v-for="product in products"
        :key="product.serialNumber"
        class="flex items-center justify-between border-t py-2 pl-8"
      >
        <div class="flex items-center gap-4">
          <img
            class="mr-2 size-12 object-cover"
            :src="product.photo"
            :alt="`${product.title} photo`"
          >
          <p>{{ product.title }}</p>
        </div>
        <button class="pr-8">
          <Trash2 class="text-gray-500" />
        </button>
      </div>
    </div>
  </div>
</template>
