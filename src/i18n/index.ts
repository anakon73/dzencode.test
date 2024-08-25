import { createI18n } from 'vue-i18n'
import enUs from './en.json'

type MessageSchema = typeof enUs

export const i18n = createI18n<[MessageSchema], 'en-Us'>({
  legacy: false,
  locale: 'en-Us',
  globalInjection: true,
  messages: { 'en-Us': enUs },
})

export const t: typeof i18n.global.t = i18n.global.t
