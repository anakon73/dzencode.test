<script setup lang="ts">
import { Settings, User } from 'lucide-vue-next'
import { cn } from '@/utils'
import { t } from '@/i18n'
</script>

<template>
  <div
    class="
      absolute top-0 flex min-h-screen w-36 flex-col items-center justify-center gap-20
      bg-white px-8 shadow-md
    "
  >
    <div class="relative">
      <User class="size-20 rounded-full bg-[#6CA533] text-white" />
      <button class="absolute -bottom-2 -right-2">
        <Settings
          class="size-8 rounded-full bg-white p-2 shadow-lg"
        />
      </button>
    </div>
    <div class="flex flex-col items-center gap-3 text-lg font-semibold text-gray-500">
      <RouterLink
        v-slot="{ isActive }"
        :to="{ name: 'Products' }"
      >
        <p :class="cn(isActive && 'font-bold underline')">
          {{ t('navbar.products') }}
        </p>
      </RouterLink>
      <RouterLink
        v-slot="{ isActive }"
        :to="{ name: 'Orders' }"
      >
        <p :class="cn(isActive && 'font-bold underline')">
          {{ t('navbar.orders') }}
        </p>
      </RouterLink>
      <p class="cursor-pointer">
        {{ t('navbar.groups') }}
      </p>
      <p class="cursor-pointer">
        {{ t('navbar.users') }}
      </p>
      <p class="cursor-pointer">
        {{ t('navbar.settings') }}
      </p>
    </div>
  </div>
</template>
