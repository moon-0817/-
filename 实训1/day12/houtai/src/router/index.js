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
        component: () => import('../components/users/users.vue'),
        meta: { list: [{ title: "用户管理", }, { title: '用户列表' }] }
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/roles/roles.vue'),
        meta: { list: [{ title: "权限管理", }, { title: '角色列表' }] }
      },
      {
        path: '/rights',
        name: 'rights',
        component: () => import('../components/roles/rights.vue'),
        meta: { list: [{ title: "权限管理", }, { title: '权限列表' }] }
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../components/goods/goods.vue'),
        meta: { list: [{ title: "商品管理", }, { title: '商品列表' }] },
      },
      {
        path: '/add',
        name: 'add',
        component: () => import('../components/goods/add.vue'),
        meta: { list: [{ title: "商品管理", }, { title: '添加商品' }] },
      },

      {
        path: '/params',
        name: 'params',
        component: () => import('../components/goods/params.vue'),
        meta: { list: [{ title: "商品管理", }, { title: '分类参数' }] }
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('../components/goods/categories.vue'),
        meta: { list: [{ title: "商品管理", }, { title: '商品分类' }] }
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../components/orders/orders.vue'),
        meta: { list: [{ title: "订单管理", }, { title: '订单列表' }] }
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../components/reports/reports.vue'),
        meta: { list: [{ title: "数据统计", }, { title: '数据报表' }] }
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../components/welcome.vue'),
      },
      {
        path: '/',
        redirect: '/welcome'
      },
    ]
  }
]

const router = new VueRouter({
  routes
})
import store from '@/store/index'
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  }
  else {
    if (store.getters.gettoken) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
