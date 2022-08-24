import axios from "@/tool/axios";
// 请求角色列表
export const getroles = () => axios.get('roles')
