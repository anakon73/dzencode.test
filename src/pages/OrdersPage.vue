<script setup lang="ts">
import { ref } from 'vue'
import { useOrders } from '@/api/useOrders'
import OrderDetails from '@/components/OrderDetails.vue'
import OrderCard from '@/components/OrderCard.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import type { Order } from '@/types'
import { cn } from '@/utils'
import { t } from '@/i18n'

const { data: orders } = useOrders()

const selectedOrder = ref<Order | null>(null)
const orderForDelete = ref<Order | null>(null)
const open = ref(true)

function deleteOrder(order: Order) {
  open.value = true
  orderForDelete.value = order
}
</script>

<template>
  <DeleteModal
    v-if="orderForDelete"
    :open="open"
    :order="orderForDelete"
    @close="open = false"
  />
  <div>
    <div class="mb-5 text-4xl font-bold text-gray-700">
      {{ t('order.title') }} / {{ orders?.length }}
    </div>
    <div :class="cn(selectedOrder && 'grid grid-cols-[1fr_2fr] gap-10')">
      <div class="flex w-full flex-col gap-5">
        <OrderCard
          v-for="order in orders"
          :key="order.id"
          :="order"
          :small="!!selectedOrder"
          :selected="selectedOrder === order"
          @change-selected-order="selectedOrder = order"
          @delete="deleteOrder(order)"
        />
      </div>
      <OrderDetails
        v-if="selectedOrder"
        :="selectedOrder"
        @unselect-order="selectedOrder = null"
      />
    </div>
  </div>
</template>
