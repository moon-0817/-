import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: "login",
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: "home",
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/users/users.vue'),
        meta: { list: [{ title: "用户管理", }, { title: '用户列表' }] }
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../views/roles/roles.vue'),
        meta: { list: [{ title: "权限管理", }, { title: '角色列表' }] }
      },
      {
        path: '/rights',
        name: 'rights',
        component: () => import('../views/roles/rights.vue'),
        meta: { list: [{ title: "权限管理", }, { title: '权限列表' }] }
      }

    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  }
  else {
    if (localStorage.getItem('loginToken')) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
