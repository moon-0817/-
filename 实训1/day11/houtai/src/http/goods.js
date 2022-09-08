import axios from "axios";
// 商品列表
export const getgoods = (obj) => axios.get(`goods`, obj)
// 搜索
export const searchgoods = () => axios.get(`goods/${id}`)
// 删除
export const delgoods = (id) => axios.delete(`goods/${id}`)