import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/fuzi",
    component: () => import("@/views/fuzi.vue")
  },
  {
    path: "/zifu",
    component: () => import("@/views/zifu.vue")
  },
  {
    path: "/",
    redirect: "/zifu"
  }
]

const router = new VueRouter({
  routes
})

export default router
