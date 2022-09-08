import request from './request'
export function getgoods(params) {
  return request({
    url: "/public/v1/goods/search",
    data:params
  })
}