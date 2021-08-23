// pages/cart/components/bottom-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectGoodsCount: {
      type: Number,
      value: 0
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

  },

  observers: {
    totalPrice(a) {
      // console.log(a);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 去结算
    goSettlementHandler() {
      this.triggerEvent('goSettlementEvent')
    }
  }
})
