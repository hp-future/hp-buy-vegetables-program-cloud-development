// pages/home/components/count/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 1
    },
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPopup: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 减少数量
    subCountHandler() {
      let { count, goods, index } = this.properties
      if(count === 1) {
        this.setData({
          showPopup: true
        })
        return false
      }
      count -= 1
      wx.cloud.callFunction({
        name: 'updateGoodsCount',
        data: {
          count,
          _id: goods._id
        },
        complete: ({ result }) => {
          this.triggerEvent('subCountEvent', { index, count })
        }
      })
    },
    // 增加数量
    addCountHandler() {
      let { count, goods, index } = this.properties
      count += 1
      wx.cloud.callFunction({
        name: 'updateGoodsCount',
        data: {
          count,
          _id: goods._id
        },
        complete: ({ result }) => {
          this.triggerEvent('addCountEvent', { index, count })
        }
      })
    },
    // 确认从购物车移除商品
    confirmHandler() {
      let { goods, index } = this.properties

      wx.cloud.callFunction({
        name: 'updateGoodsCount',
        data: {
          count: 0,
          _id: goods._id
        },
        complete: ({ result }) => {
          this.triggerEvent('subCountEvent', { index, count: 0 })
        }
      })
    }
  }
})
