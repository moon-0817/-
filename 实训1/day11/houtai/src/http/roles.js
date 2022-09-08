import axios from "@/tool/axios";
// 请求角色列表
export const getroles = () => axios.get('roles')
// 添加角色
export const addroles = (obj) => axios.post('roles', obj)
// 删除角色
export const delroles = (id) => axios.delete(`roles/${id}`)
// 编辑角色
export const editroes = (obj) => axios.put(`roles/${obj.id}`, obj)
