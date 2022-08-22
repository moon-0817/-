// 用户登录相关的接口
import axios from "@/tool/axios";
// 登录的接口
export const login = (obj) => axios.post("login", obj)
// 左侧的列表
export const menus = () => axios.get('menus')
// 用户列表
export const users = (obj) => axios.get('users', obj)
