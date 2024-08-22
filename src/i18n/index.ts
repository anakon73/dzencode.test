import { createI18n } from 'vue-i18n'
import en from './en.json'

export const i18n = createI18n({
  fallbackLocale: 'en',
  locale: 'en',
  messages: {
    en,
  },
})
