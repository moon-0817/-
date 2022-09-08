// pages/class/index.js
import {
  getcategories
} from '../../ruquest/class'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧数据
    boxLeft: [],
    boxRight: [],
    leftIndex: 0
  },
  // 点击左侧
  setIndex(e) {
    // console.log(e);
    let {
      index
    } = e.currentTarget.dataset
    this.setData({
      leftIndex: index,
      boxRight: this.data.boxLeft[e.currentTarget.dataset.index].children

    })
    // console.log(this.data.boxRight);
    // console.log(index);
  },
  // 点击右侧
  go(e) {
    // console.log(e);
    let cid = e.currentTarget.dataset.cat_id
    wx.navigateTo({
      url: '/pages/goods/index?cid=' + cid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getcategories().then(res => {
      // console.log(res);
      this.setData({
        boxLeft: res.data.message,
        boxRight: res.data.message[this.data.leftIndex].children
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