import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/tool/element'

Vue.config.productionTip = false
//   标签进行过滤
Vue.filter('level', function (v) {
  // console.log(v);
  switch (v) {
    case 0:
      return "一级"
    case 1:
      return "二级"
    case 2:
      return "三级"
  }


})
// 对标签颜色惊醒过滤
Vue.filter('levelcolor', function (v) {
  // console.log(v);
  switch (v) {
    case 0:
      return ""
    case 1:
      return "success"
    case 2:
      return "warning"
    default:
      return ""
  }

})
// 引入tree-table插件
import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable)
// Apache ECharts
// 引入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
