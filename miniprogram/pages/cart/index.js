// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    selectGoodsArr: [],
    showPopup: false,
    totalPrice: 0,
    showSettlement: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 获取购物车列表
   */
  getCartData() {
    wx.cloud.callFunction({
      name: 'getCartList',
      complete: ({ result }) => {
        const cartList = result.data
        // 默认全选
        let totalPrice = 0
        const selectGoodsArr = cartList.map(item => {
          totalPrice += item.price * item.count
          return item
        })

        this.setData({
          cartList,
          selectGoodsArr,
          totalPrice
        })
      }
    })
  },
  /**
   * 减少数量
   */
  subCountHandler({ detail }) {
    const { index, count } = detail
    const { cartList, selectGoodsArr } = this.data
    
    if(count === 0) {
      cartList.splice(index, 1)
      selectGoodsArr.splice(index, 1)
    }else{
      cartList[index].count = count
    }
    
    let totalPrice = 0
    selectGoodsArr.forEach(item => {
      totalPrice += item.price * item.count
    })
    this.setData({
      cartList,
      totalPrice
    })
  },
  /**
   * 增加数量
   */
  addCountHandler({ detail }) {
    const { index, count } = detail
    const { cartList, selectGoodsArr } = this.data

    cartList[index].count = count

    let totalPrice = 0
    selectGoodsArr.forEach(item => {
      totalPrice += item.price * item.count
    })

    this.setData({
      cartList,
      totalPrice
    })
  },
  /**
   * 全选
   */
  selectAllHandler() {
    const { cartList, selectGoodsArr } = this.data
    let arr = []

    if(cartList.length !== selectGoodsArr.length) {
      arr = cartList.map(item => item)
    }
    this.setData({
      selectGoodsArr: arr
    })
  },
  /**
   * 复选框状态切换事件
   */
  selectChange({ currentTarget, detail }) {
    const { selectGoodsArr } = this.data
    const { dataset } = currentTarget

    if(detail.value.length === 0) {
      selectGoodsArr.splice(dataset.index, 1)
    }else{
      selectGoodsArr[dataset.index] = dataset.goods
    }
    let totalPrice = 0
    selectGoodsArr.forEach(item => {
      totalPrice += item.price * item.count
    })
    this.setData({
      selectGoodsArr,
      totalPrice
    })
  },
  /**
   * 移除选中的商品
   */
  deleteCartGoods() {
    this.setData({
      showPopup: true
    })
  },
  /**
   * 确认移除选中的商品
   */
  confirmHandler() {
    let { selectGoodsArr, cartList } = this.data

    wx.cloud.callFunction({
      name: 'updateMultiGoodsCount',
      data: {
        ids: selectGoodsArr.map(item => item._id)
      },
      complete: () => {
        if(selectGoodsArr.length === cartList.length) {
          this.setData({
            cartList: [],
            selectGoodsArr: []
          })
        }else{
          selectGoodsArr.forEach((item, index) => {
            if(item) {
              cartList.splice(index, 1)
            }
          })
          this.setData({
            cartList,
            selectGoodsArr: []
          })
        }
      }
    })
  },
  /**
   * 去结算
   */
  goSettlementHandler() {
    this.setData({
      showSettlement: true
    })
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
    this.getCartData()
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