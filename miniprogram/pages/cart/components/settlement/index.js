// pages/cart/components/settlement/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Array,
      value: []
    },
    totalPrice: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    addressInfo: {
      address: '长德公寓XXXXXXXX',
      name: 'xx',
      mobile: 'xxxxxxxxxxx'
    },
    settlementMethod: 0,  // 0: 支付宝（默认）   1: 微信
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选择支付方式
    selectSettlementMethodHandler({ detail }) {
      this.setData({
        settlementMetho: detail.value
      })
    },
    // 跳转到我的地址页面
    goAddressHandler() {
      console.log(22);
      wx.navigateTo({
        url: '/pages/address/index',
        // success(res) {
        //   console.log(res);
        // },
        // fail(error) {
        //   console.log(error);
        // }
      })
    }
  }
})
