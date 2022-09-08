import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { user } from '@/store/modules/user'
export default new Vuex.Store({
  state: {
  },
  getters: {
    getusername(state) {
      return state.user.username
    },
    gettoken(state) {
      return state.user.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
