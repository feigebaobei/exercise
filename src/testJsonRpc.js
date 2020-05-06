import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://47.95.242.110:8587',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'keyli': 'valueli'
  }
})

/**
 * 用于测试的方法
 * @return {Function} [description]
 */
function fn () {
  console.log('welcome to here')
}

/**
 * 使用did请求公钥
 * @param  {string} did [description]
 * @return {[type]}     [description]
 */
function getPubByDid (did) {
  let reqBody = {
    "jsonrpc":"2.0",
    "method":"did_getPubkeyByDid",
    "params":[
      "did:ttm:u0ece7b787c097d55b87d4c01efae0fbe6a27b10cec8a67847c68f0482a8dc"
    ],
    "id":1
  }
  return instance.get(did, {params: reqBody})
  // .then((res) => {
  //   console.log('res', res)
  // }).catch((err) => {
  //   console.log('err', err)
  // })
}

export default {
  fn,
  getPubByDid
}