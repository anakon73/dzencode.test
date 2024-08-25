<script setup lang="ts">
import { Clock, User } from 'lucide-vue-next'
import { useCurrentTime } from '@/utils'

const { currentTime } = useCurrentTime()
</script>

<template>
  <div class="absolute z-10 w-full bg-white shadow">
    <header
      class="mx-auto flex max-w-[1440px] items-center justify-between border-gray-200 p-5"
    >
      <div class="flex items-center gap-10">
        <div class="flex items-center gap-2">
          <User class="rounded-full bg-[#6CA533] text-white" />
          <span class="text-lg font-bold tracking-wide text-[#6CA533]">
            {{ $t('header.name') }}
          </span>
        </div>
        <input
          type="text"
          placeholder="Поиск"
          class="
            w-full max-w-xs rounded-lg border border-gray-300 bg-gray-100 px-3 py-1
            font-bold shadow-inner

            focus:outline-none focus:ring-2 focus:ring-gray-400
          "
        >
      </div>
      <div class="flex items-center text-sm text-gray-500">
        <div class="relative mr-4 font-bold">
          <p class="absolute -top-4">
            {{ currentTime.toLocaleDateString('en-GB', { weekday: 'long' }) }}
          </p>
          <p>
            {{ currentTime.toLocaleDateString('en-GB', {
              day: 'numeric', month: 'short', year: 'numeric',
            }) }}
          </p>
        </div>
        <div class="flex items-center">
          <Clock class="mr-1 size-3 text-lime-500" />
          <span>
            {{ currentTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }) }}
          </span>
        </div>
      </div>
    </header>
  </div>
</template>
