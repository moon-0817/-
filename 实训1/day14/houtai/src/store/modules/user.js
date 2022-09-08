import { login } from '@/http/user'
export let user = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token'),
        get username() {
            localStorage.getItem('houtaiusername')
        },
        set username(v) {
            if (v) {
                localStorage.setItem('houtaiusername', v)
            } else {
                localStorage.removeItem('houtaiusername')
            }
        }
    },
    actions: {
        // 请求登录的接口
        async loginFn({ commit }, obj) {
            let res = await login(obj)
            console.log(res);
            // console.log(1);
            if (res.meta.status == 200) {
                commit('SET_TOKEN', res.data.token)
                commit('SET_USERNAME', res.data.username)
            }
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('token', token)
            // console.log(state.token);
        },
        SET_USERNAME(state, username) {
            state.username = username
        },
        DEL_USERNAME(state) {
            state.username = ''
        },
        DEL_TOKEN(state) {
            localStorage.removeItem('token')
        }
    }
}