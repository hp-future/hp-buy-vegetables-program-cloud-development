// pages/address/edit-address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: {
      user_name: '',
      gender: '0',
      mobile: '',
      address: '',
      house_number: '',
      is_default: true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getAddress',
      complete: ({ result }) => {
        console.log(result);
      }
    })
  },
  
  /**
   * 选择性别， 默认 0
   * 0： 先生  1： 女士
   */
  selectGenderHandler({ detail }) {
    const { addressInfo } = this.data
    addressInfo.gender = detail.value
    this.setData({
      addressInfo
    })
  },

  /**
   * 选择收货地址
   */
  selectAddressHandler() {

  },

  /**
   * 设为默认地址
   */
  setDefaultAddressHandler({ detail }) {
    const { addressInfo } = this.data
    addressInfo.is_default = detail.value
    this.setData({
      addressInfo
    })
  },

  /**
   * 保存
   */
  saveHandler() {},
  /**
   * 删除
   */
  deleteHandler() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})