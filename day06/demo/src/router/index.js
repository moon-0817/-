import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/meiguanxi",
    component: () => import("@/views/meiguanxi.vue")
  },
  {
    path: "/xiongdi",
    component: () => import("@/views/xiongdi.vue")
  },
  {
    path: "/kuaceng",
    component: () => import("@/views/kuaceng.vue")
  },
  {
    path: "/houdai",
    component: () => import("@/views/houdai.vue")
  },
  {
    path: "/",
    redirect: "/xiongdi"
  }
]

const router = new VueRouter({
  routes
})

export default router
