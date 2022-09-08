// pages/home/index.js
// 轮播图请求方法
import {
  getswiperdata,
  getcatitems,
  getfloordata
} from '../../ruquest/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    swiperdata: [],
    // 导航
    catitems: [],
    // 楼层
    floordata: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 轮播图
    getswiperdata().then(res => {
        // console.log(res.data.message);
        this.setData({
          swiperdata: res.data.message
        })
      }),
      // 分类
      getcatitems().then(res => {
        // console.log(res.data.message);
        this.setData({
          catitems: res.data.message
        })
      })
    // 楼层
    getfloordata().then(res => {
      // console.log(res);
      this.setData({
        floordata: res.data.message
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})