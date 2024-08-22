import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { worker } from './mocks/browser'
import './assets/main.css'
import { i18n } from './i18n'
import { router } from './router'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

worker.start({ onUnhandledRequest: 'bypass' })

app.use(VueQueryPlugin)
app.use(pinia)
app.use(i18n)
app.use(router)
app.mount('#app')
