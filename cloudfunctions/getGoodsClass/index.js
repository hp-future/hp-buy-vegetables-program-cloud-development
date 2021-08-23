// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    // 返回字段
    const field = {
      _id: false,
      name: true,
      code: true
    }
  
    // 返回数据
    const resData = {
      code: 0,
      data: null,
      msg: 'success'
    }
    try {
      const { data } = await db.collection('goods_class').field(field).get()
      resData.data = data
      return resData
    }catch(error){
      resData.data = null
      resData.msg = 'error'
      return resData
    }
}