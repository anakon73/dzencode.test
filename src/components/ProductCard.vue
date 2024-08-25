<script setup lang="ts">
import { cn } from '@/utils'

interface Props {
  photo: string
  title: string
  type: string
  guarantee: {
    start: Date
    end: Date
  }
  price: { value: number, symbol: string, isDefault: boolean }[]
  isNew: boolean
  orderName: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex rounded-md border bg-white p-4 font-semibold text-gray-700">
    <img class="mr-2 size-12 object-cover" :src="photo" :alt="`${title} image`">
    <p class="w-1/5 truncate text-xl">
      {{ title }}
    </p>
    <div class="w-1/6">
      <p>
        <span class="inline-block w-12">{{ $t('product.guaranteeFrom') }}</span>
        <span>{{ new Date(guarantee.start).toLocaleDateString("en-Us") }}</span>
      </p>
      <p>
        <span class="inline-block w-12">{{ $t('product.guaranteeTo') }}</span>
        <span>{{ new Date(guarantee.end).toLocaleDateString("en-Us") }}</span>
      </p>
    </div>
    <p
      :class="cn(
        'w-1/12 self-center',
        isNew && 'text-green-500',
      )"
    >
      {{ isNew ? $t('product.new') : $t('product.used') }}
    </p>
    <div class="w-1/6">
      <p
        v-for="p in price"
        :key="p.value"
        :class="cn(!p.isDefault && `text-xs text-gray-500`)"
      >
        {{ p.value }} {{ p.symbol }}
      </p>
    </div>
    <p class="self-center">
      {{ orderName }}
    </p>
  </div>
</template>
