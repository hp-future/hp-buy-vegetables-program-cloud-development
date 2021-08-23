// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID, APPID, UNIONID } = cloud.getWXContext()
console.log(OPENID);
  // 返回数据
  const resData = {
    code: 0,
    data: null,
    msg: 'success'
  }
  try {
    const { data } = await db.collection('address_list').where({ open_id: OPENID }).get()
    resData.data = data
    return resData
  }catch(error){
    resData.data = null
    resData.msg = 'error'
    return resData
  }
}