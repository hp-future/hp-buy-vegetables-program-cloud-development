// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success({ authSetting, subscriptionsSetting, miniprogramAuthSetting }){
        console.log(authSetting, subscriptionsSetting, miniprogramAuthSetting);
        wx.getUserInfo({
          // withCredentials: true,
          success({userInfo, rawData}){
            console.log(userInfo);
          }
        })
      }
    })
    // wx.authorize({
    //   scope: 'scope.userInfo',
    //   success() {
    //     console.log(22);
    //     wx.getUserInfo({
    //       // withCredentials: true,
    //       success({userInfo, rawData}){
    //         console.log(userInfo);
    //       }
    //     })
    //   }
    // })

    // wx.getUserProfile({
    //   desc: '00',
    //   success({ userInfo }) {
    //     console.log(userInfo);
    //   }
    // })
  },

  getUserInfo(e) {
    console.log(e);
  },

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