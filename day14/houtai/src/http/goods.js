import axios from "axios";
// 商品列表
export const getgoods = (obj) => axios.get(`goods`, obj)
// 搜索
export const searchgoods = () => axios.get(`goods/${id}`)
// 删除
export const delgoods = (id) => axios.delete(`goods/${id}`)
//  ### .1. 商品分类数据列表

// - 请求路径：categories
// - 请求方法：get
// - 请求参数
export const categories = (obj) => axios.get('categories', obj)

// ### 1.6.2.添加分类

//   请求路径：categories
//   请求方法：post
//   请求参数
export const addcategories = (obj) => axios.post('categories', obj)
// ### 1.6.5.删除分类

//     - 请求路径：categories /: id
//         - 请求方法：delete
//             - 请求参数
export const delcategories = (id) => axios.delete(`categories/${id}`)
// ### 1.6.4.编辑提交分类

//     - 请求路径：categories /: id
//         - 请求方法：put
//             - 请求参数
export const editcategories = (obj) => axios.put(`categories/${obj.id}`, obj)
// ### 1.7.1.参数列表
//     - 请求路径：categories /: id / attributes
//         - 请求方法：get
//             - 请求参数
export const getCategories = (id, obj) => axios.get(`categories/${id}/attributes`, {
    params: obj
})
// ### 1.7.4.根据 ID 查询参数

//     - 请求路径：categories /: id / attributes /: attrId
//         - 请求方法：get
//             - 请求参数
export const editCategories = (id, attrId, obj) => axios.put(`categories/${id}/attributes/${attrId}`, obj)
// ### 1.7.2.添加动态参数或者静态属性

//     - 请求路径：categories /: id / attributes
//         - 请求方法：post
//             - 请求参数
export const editscategorie = (id, obj) => axios.post(`categories/${id}/attributes`, obj)