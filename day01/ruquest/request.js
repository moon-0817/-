const baseurl = "https://api-hmugo-web.itheima.net/api"
const request = (params) => {
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url: baseurl + params.url,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
}
export default request