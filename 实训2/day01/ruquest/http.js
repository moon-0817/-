import request from './request'
// 首页轮播图
export function getswiperdata() {
  return request({
    url: "/public/v1/home/swiperdata"
  })
}
// 首页导航
export function getcatitems() {
  return request({
    url: "/public/v1/home/catitems"
  })
}
// 首页楼层
export function getfloordata() {
  return request({
    url: "/public/v1/home/floordata"
  })
}