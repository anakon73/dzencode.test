import { onBeforeUnmount, ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function useCurrentTime() {
  const currentTime = ref(new Date())
  const updateCurrentTime = () => {
    currentTime.value = new Date()
  }
  const updateTimeInterval = setInterval(updateCurrentTime, 1000)
  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval)
  })
  return {
    currentTime,
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
