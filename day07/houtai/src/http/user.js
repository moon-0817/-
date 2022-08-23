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
export const del = () => axios.delete(`'users/:${id}`)