<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import type { ProductTypes } from '@/types'

defineProps<{ selectedType: ProductTypes }>()

defineEmits<{ changeType: [type: ProductTypes] }>()

const productTypesArray = [
  'All',
  'Monitors',
  'Laptops',
  'Tablets',
  'Smartphones',
  'Smartwatches',
  'Desktops',
] as const
</script>

<template>
  <div>
    <label class="mr-2">{{ $t('product.label') }}</label>
    <SelectRoot
      :model-value="selectedType"
      @update:model-value="$emit('changeType', $event as ProductTypes)"
    >
      <SelectTrigger
        class="
          inline-flex h-[35px] min-w-[160px] items-center justify-between gap-[5px]
          rounded bg-white px-[15px] text-[13px] leading-none text-grass11 border
          outline-none
        "
        aria-label="Customise options"
      >
        <SelectValue placeholder="Select a fruit..." />
        <ChevronDown class="size-4" />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="z-[100] min-w-[160px] rounded bg-white shadow-sm"
          :side-offset="5"
        >
          <SelectScrollUpButton
            class="
              flex h-[25px] cursor-default items-center justify-center bg-white
              text-violet11
            "
          >
            <ChevronDown class="text-black" />
          </SelectScrollUpButton>

          <SelectViewport class="p-[5px]">
            <SelectGroup>
              <SelectItem
                v-for="type in productTypesArray"
                :key="type"
                class="
                  text-[13px] leading-none text-grass11 relative flex h-[25px] select-none
                  items-center rounded-[3px] pl-[25px] pr-[35px]
                "
                :value="type"
              >
                <SelectItemIndicator
                  class="absolute left-0 inline-flex w-[25px] items-center justify-center"
                >
                  <Icon icon="radix-icons:check" />
                </SelectItemIndicator>
                <SelectItemText>
                  {{ type }}
                </SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
