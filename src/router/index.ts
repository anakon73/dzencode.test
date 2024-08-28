import {
  type RouteRecordInfo,
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from 'vue-router'
import ProductsPage from '@/pages/ProductsPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'
import NotFound from '@/pages/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'Products',
    path: '/',
    component: ProductsPage,
  },
  {
    name: 'Orders',
    path: '/orders',
    component: OrdersPage,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export interface RouteNamedMap {
  Products: RouteRecordInfo<'Products', '/'>
  Orders: RouteRecordInfo<'Orders', '/orders'>
  NotFound: RouteRecordInfo<'NotFound', '/:pathMatch(.*)*'>
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
