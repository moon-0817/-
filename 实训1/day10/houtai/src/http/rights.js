import axios from "axios";
// 角色授权
export const grantroles = (type) => axios.get(`rights/${type}`)