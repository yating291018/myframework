import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import PageHome from '../views/PageHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/11111',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/render',
    component: () => import('@/views/Render')
  },
  {
    path: '/test',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/test1',
    component: () => import('@/views/Test1.vue')
  },
  {
    path: '/animate',
    component: () => import('@/views/animation')
  },
  {
    path: '/fadeIn',
    component: () => import('@/views/FadeIn.vue')
  },
  {
    path: '/sku',
    component: () => import('@/views/SKU.vue')
  },
  {
    path: '/slot',
    component: () => import('@/views/slot/Parent.vue')
  },
  {
    path: '/pdf',
    component: () => import('@/views/pdf/pdf.vue')
  },
  {
    path: '/tabbar',
    component: () => import('@/views/tabbar/TabBar.vue')
  },
  {
    path: '/stack',
    component: () => import('@/views/stack/Stack.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
