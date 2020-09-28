import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Container from '@/container/index.vue'

const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: 'error',
    meta: { title: '404', hidden: true },
    component: () => import(/* webpackChunkName: "error" */ '@/views/error/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录', hidden: true },
    component: () => import(/* webpackChunkName: "account" */ '@/views/account/login/index.vue')
  },
  {
    path: '',
    meta: { title: 'routes.dashboard', icon: 'el-icon-extend-dashboard' },
    redirect: '/dashboard',
    component: Container,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: { title: 'routes.dashboard', showParent: false },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap
})

export default router
