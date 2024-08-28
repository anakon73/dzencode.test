<script setup lang="ts">
import { Clock, User } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { cn, useCurrentTime } from '@/utils'
import { t } from '@/i18n'

const { currentTime } = useCurrentTime()

const i18n = useI18n()

type LocaleType = typeof i18n.availableLocales[number]

function changeLocale(l: LocaleType) {
  localStorage.setItem('locale', l)
  i18n.locale.value = l
}
</script>

<template>
  <div class="absolute z-10 w-full bg-white shadow">
    <header
      class="mx-auto flex max-w-[1440px] items-center justify-between border-gray-200 p-5"
    >
      <div class="flex items-center gap-10">
        <button class="flex items-center gap-2">
          <User class="rounded-full bg-[#6CA533] text-white" />
          <span class="text-lg font-bold tracking-wide text-[#6CA533]">
            {{ t('header.name') }}
          </span>
        </button>
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
        <div class="mr-2 flex gap-2">
          <button
            class="
              rounded-lg bg-green-500 px-4 py-1 text-sm font-semibold text-white

              disabled:bg-gray-500
            "
            :disabled="$i18n.locale === 'ua'"
            @click="changeLocale('ua')"
          >
            {{ t('navbar.languages.ua') }}
          </button>
          <button
            class="
              rounded-lg bg-green-500 px-4 py-1 text-sm font-semibold text-white

              disabled:bg-gray-500
            "
            :disabled="$i18n.locale === 'en-Us'"
            @click="changeLocale('en-Us')"
          >
            {{ t('navbar.languages.eng') }}
          </button>
        </div>
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
