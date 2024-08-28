import { createI18n } from 'vue-i18n'
import enUs from './en.json'
import ua from './ua.json'

type MessageSchema = typeof enUs

export const i18n = createI18n<[MessageSchema], 'en-Us' | 'ua'>({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en-Us',
  globalInjection: true,
  messages: { 'en-Us': enUs, ua },
})

export const t: typeof i18n.global.t = i18n.global.t
