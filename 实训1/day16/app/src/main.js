import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const Icon = () => import('./Icon')

const components = {
  Icon
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
