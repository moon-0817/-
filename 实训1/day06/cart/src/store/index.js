import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {
  },
  mutations: {
    add(state, obj) {
      state.list.push(obj)
      var index = state.list.findIndex(item => item.id == obj.id)
      if (index == -1) {
        obj.num = 1
        state.list.push(obj)
      } else {
        state.list[index].num += 1
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
