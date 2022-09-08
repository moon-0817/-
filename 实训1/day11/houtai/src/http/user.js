// 用户登录相关的接口
import axios from "@/tool/axios";
// 登录的接口
export const login = (obj) => axios.post("login", obj)
// 左侧的列表
export const menus = () => axios.get('menus')
// 用户列表
export const users = (obj) => axios.get('users', obj)
// 添加
export const addUser = (obj) => axios.post('users', obj)
// 删除
// export const delUser = (id) => axios.delete(`users/${id}`)
export function delUser(data) {
    return axios({
        url: `users/${data.id}`,
        method: 'DELETE',
        data,
    })
}
//编辑
export const editUser = (obj) => axios.put(`users/${obj.id}`, obj)
// 修改用户的状态
export const editFlag = (uId, type) => axios.put(`users/${uId}/state/${type}`)
// 分配新角色
export const garnname = (id, rid) => axios.put(`users/${id}/role`, rid)
