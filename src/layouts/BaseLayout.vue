<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue'
import TopMenu from '@/components/TopMenu.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-100">
    <div class="sticky top-0">
      <TopMenu />
      <NavigationMenu />
    </div>
    <div class="mx-auto max-w-[1440px] px-[150px] pt-36">
      <slot />
    </div>
  </div>
</template>
