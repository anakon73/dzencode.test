<script setup lang="ts">
import { Trash2, X } from 'lucide-vue-next'
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
} from 'radix-vue'
import type { Order } from '@/types'

interface Props {
  open: boolean
  order: Order
}

defineProps<Props>()

defineEmits<{ close: [], delete: [] }>()
</script>

<template>
  <AlertDialogRoot :open="open">
    <AlertDialogPortal>
      <AlertDialogOverlay
        class="fixed inset-0 z-30 bg-black/25"
        @click.stop="$emit('close')"
      />
      <AlertDialogContent
        class="
          fixed left-[50%] top-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px]
          translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white text-[15px]
          font-semibold text-gray-700 shadow-xl

          data-[state=open]:animate-contentShow

          focus:outline-none
        "
      >
        <AlertDialogCancel
          class="absolute -right-3 -top-3 rounded-full border bg-white p-2"
          @click.stop="$emit('close')"
        >
          <X class="size-5 text-gray-500" />
        </AlertDialogCancel>
        <AlertDialogTitle class="mb-5 px-6 pt-6 text-2xl">
          {{ $t('order.modalTitle') }}
        </AlertDialogTitle>
        <div>
          <div
            v-for="product in order.products"
            :key="product.serialNumber"
            class="flex gap-2 border-t px-6 py-1"
          >
            <img
              class="mr-2 size-12 object-cover"
              :src="product.photo"
              :alt="`${product.title} photo`"
            >
            <p>
              {{ product.title }}
            </p>
          </div>
        </div>
        <div
          class="
            flex items-center justify-end gap-6 bg-lime-500 px-8 py-6 tracking-widest
            text-white
          "
        >
          <button @click.stop="$emit('close')">
            {{ $t('order.modalCancel') }}
          </button>
          <button
            class="flex items-center gap-2 rounded-[20px] bg-white px-8 py-2 text-red-600"
          >
            <Trash2 class="size-4" />
            <p>{{ $t('order.modalConfirm') }}</p>
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
