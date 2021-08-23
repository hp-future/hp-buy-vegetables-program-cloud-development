// pages/home/index.js
// import { getGoodsList } from '/cloudfunctions/quickstartFunctions/selectRecord/getGoodsList.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsClassList: [],
    activeCode: 0,
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getClassData()
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
    this.getGoodsData()
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

  },

  // 切换分类
  switchGoodsClassHandler: function (e) {
    const code = e.currentTarget.dataset.code
    this.setData({
      activeCode: code
    })
    this.getGoodsData(code)
  },
  // 查询分类列表
  getClassData () {
    wx.cloud.callFunction({
      name: 'getGoodsClass',
      complete: ({ result }) => {
        this.setData({
          goodsClassList: result.data
        })
      }
    })
  },
  // 查询指定分类下的商品
  getGoodsData (code = 0) {
    wx.cloud.callFunction({
      name: 'getGoodsList',
      data: {
        code
      },
      complete: ({ result }) => {
        console.log(result);
        this.setData({
          goodsList: result.data
        })
      }
    })
  },
  // 添加到购物车
  addToCartHandler(e) {
    let { goods, index } = e.currentTarget.dataset
    const count = goods.count + 1

    wx.cloud.callFunction({
      name: 'updateGoodsCount',
      data: {
        count,
        _id: goods._id
      },
      complete: ({ result }) => {
        const goodsList = this.data.goodsList
        goodsList[index].count = count
        this.setData({
          goodsList
        })
      }
    })
  }
})