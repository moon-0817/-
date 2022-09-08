import request from './request'
// 左侧滚动
export function getcategories() {
  return request({
    url:"/public/v1/categories"
  })
}