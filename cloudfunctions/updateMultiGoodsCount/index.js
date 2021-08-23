// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.ids);
  const params = {
    _id: _.in(event.ids)
  }
  // 返回数据
  const resData = {
    code: 0,
    data: null,
    msg: 'success'
  }
  try {
    const { data } = await db.collection('goods_list').where(params).update({
      data: {
        count: 0
      }
    })
    resData.data = data
    return resData
  }catch(error){
    resData.data = null
    resData.msg = 'error'
    return resData
  }
}