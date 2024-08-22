import {
  type RouteRecordInfo,
  type RouteRecordRaw,
  createMemoryHistory,
  createRouter,
} from 'vue-router'
import ProductsPage from '@/pages/ProductsPage.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'Products',
    path: '/',
    component: ProductsPage,
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export interface RouteNamedMap {
  Products: RouteRecordInfo<'Products', '/'>
}
