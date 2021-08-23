// pages/cart/components/popup/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    content: {
      type: String,
      value: '确定删除该商品吗？'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 数据监听
   */
  observers: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 取消
    cancleHandler() {
      this.setData({
        show: false
      })
    },
    // 确定
    confirmHandler() {
      this.setData({
        show: false
      })
      this.triggerEvent('confirmEvent')
    },
  }
})
