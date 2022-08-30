import axios from "axios";
// 权限列表
export const grantroles = (type) => axios.get(`rights/${type}`)
// 角色授权
// export const grantrole = (roleId, rids) => axios.post(`roles/${roleId}/rights`, rids)
export const setrolesrights = (roleId, rids) => axios.post(`roles/${roleId}/rights`, rids)
// export function setrolesrights(roleId, rids) {
//     return axios({
//         url: `roles/${roleId}/rights`,
//         method: 'post',
//         data: { rids }
//     })
// }
// 删除角色
export const delRoles = (roleId, rightId) => axios.delete(`roles/${roleId}/rights/${rightId}`)
// 权限列表
export const getrights = (type) => axios.get(`rights/${type}`)