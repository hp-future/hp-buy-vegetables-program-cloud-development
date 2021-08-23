// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  // 查询参数
  const params = {
    count: _.gt(0)
  }
  // 返回字段
  const field = {
    _id: true,
    name: true,
    price: true,
    weight: true,
    count: true,
  }

  // 返回数据
  const resData = {
    code: 0,
    data: null,
    msg: 'success'
  }
  try {
    const { data } = await db.collection('goods_list').where(params).field(field).get()
    resData.data = data
    return resData
  }catch(error){
    resData.data = null
    resData.msg = 'error'
    return resData
  }
}