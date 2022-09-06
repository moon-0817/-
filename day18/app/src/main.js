import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
// 映入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

Vue.use(dataV)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
