// 测试sm4
import util from './util.js'
import md5 from 'md5'

// import Sm4js from 'sm4js'; //esmodule
// // const Sm4js = require('sm4js');//commonjs
// var sm4Config = {
//     key: 'JeF8U9wHFOMfs2Y8',
//     mode: 'ecb', 
//     iv: 'UISwD9fW6cFh9SNS', 
//     cipherType: 'base64' 
// }
// var sm4 = new Sm4js(sm4Config);
// var plaintext = '{"records":[["31","129501868966","1","80.00","6","激进型","20191226","20211225","1","自然人客户风险承受能力问卷","01235","1","3.0","20200623","","-1"]],"columns":["SURVEY_SN","USER_CODE","USER_ROLE","SURVEY_SCORE","RATING_LVL","RATING_LVL_NAME","RATING_DATE","EXP_DATE","SURVEY_CLS","SURVEY_NAME","SURVEY_SYN","ORDINAL","VERSION","NEXT_RATING_DATE","REMARK","SURVEY_USABLE_NUM"]}'
// var ciphertext = sm4.encrypt(plaintext);
// console.log(ciphertext);
// var plaintext1 = sm4.decrypt(ciphertext);
// console.log(plaintext1);

// import sm4 from 'asiaCrypto'
// console.log(sm4)

// import {init, Bjca} from 'bjca'
// console.log(init, Bjca)







// const SM4 = require('gm-crypt').sm4
// let sm4Config = {
//   // encrypt/decypt main key; cannot be omitted
//   // key: 'JeF8U9wHFOMfs2Y8',
//   // key: '96e79218965eb72c92a549dd5a330112',
//   key: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10],
//   // optional; can be 'cbc' or 'ecb'
//   mode: 'cbc', // default
//   // optional; when use cbc mode, it's necessary
//   // iv: 'UISwD9fW6cFh9SNS', // default is null
//   // iv: '96e79218965eb72c92a549dd5a330112', // default is null
//   iv: [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166],
//   // optional: this is the cipher data's type; Can be 'base64' or 'text'
//   // cipherType: 'base64' // default is base64
//   cipherType: 'text' // default is base64
// }
// let sm4 = new SM4(sm4Config)
// // let plaintext = '中国国密加解密算法'
// // let ciphertext = sm4.encrypt(plaintext)
// // console.log(ciphertext)
// // let ciphertext1 = 'j/+HgSpv8RZQI2YtSq0L1RnemiSokMm1VvLHSTt245U='
// // let plaintext1 = sm4.decrypt(ciphertext)
// // console.log(plaintext1)

// // let ciphertext2 = sm4.encrypt('{"privatekey":"01837f014db7fc5acd914f53839bdb5dbf4cd80ecbbb7bf966ba9619f34b627a"}')
// // console.log("ct", ciphertext2)
// // // let plaintext2 = sm4.decrypt('7b22707269766174656b6579223a2230313833376630313464623766633561636439313466353338333962646235646266346364383065636262623762663936366261393631396633346236323761227d')
// // let plaintext2 = sm4.decrypt(ciphertext2)
// // console.log("mt", plaintext2)
// let mt = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10],





import Sm4js from 'sm4js'; //esmodule
// // const Sm4js = require('sm4js');//commonjs
// var sm4Config = {
//     // key: 'JeF8U9wHFOMfs2Y8',
//     // key: 'JeF8U9wHFOMfs2Y8JeF8U9wHFOMfs2Y8',
//     key: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10],
//     // mode: 'ecb', 
//     mode: 'cbc', 
//     // iv: 'UISwD9fW6cFh9SNS', 
//     // iv: [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166],
//     // iv: 'random',
//     iv: util.randomArr(0, 255, 16),
//     cipherType: 'base64' 
// }
// var sm4 = new Sm4js(sm4Config);
// // var plaintext = '{"records":[["31","129501868966","1","80.00","6","激进型","20191226","20211225","1","自然人客户风险承受能力问卷","01235","1","3.0","20200623","","-1"]],"columns":["SURVEY_SN","USER_CODE","USER_ROLE","SURVEY_SCORE","RATING_LVL","RATING_LVL_NAME","RATING_DATE","EXP_DATE","SURVEY_CLS","SURVEY_NAME","SURVEY_SYN","ORDINAL","VERSION","NEXT_RATING_DATE","REMARK","SURVEY_USABLE_NUM"]}'
// // var plaintext = '12345678z'
// // var plaintext = 'd0c1380ee0cfce4373052a5af46e31a6'
// var plaintext = '01230123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba9876'

// var ciphertext = sm4.encrypt(plaintext);
// console.log('ct', ciphertext);
// var plaintext1 = sm4.decrypt(ciphertext);
// console.log('mt', plaintext1);


// // 使用ecb模式加密前16个byte。16 * 8 = 128
// let sm4ConfigFront = {
//   key: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10],
//   mode: 'ecb',
//   // iv: [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166],
//   cipherType: ''
// }
// let sm4Front = new Sm4js(sm4ConfigFront)
// // let plainTextFront = sm4ConfigFront.iv // '01230123456789ab' // cdeffedcba987601'
// // let plainTextFront = 'a中b' // 国国密加解密算法'
// // let plainTextFront = [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166]
// // let plainTextFront = '01230123456789ab' // cdeffedcba987601'
// // let plainTextFront = 'UISwD9fW6cFh9SNSasdf' // cdeffedcba987601'
// // let plainTextFront = [1, 35, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 18, 170, 148, 69, 88, 143, 213, 81, 137, 41, 174, 176, 173, 178, 186, 154, 3, 3, 3] // 112
// let plainTextFront = [1, 35, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 18, 170, 148, 69, 88, 143, 213, 81, 137, 41, 174, 176, 173, 178, 186, 154] // 109
// let ctFront = sm4Front.encrypt(plainTextFront)
// let mtFront = sm4Front.decrypt(ctFront)
// console.log('ctFront', ctFront)
// console.log('mtFront', mtFront)

// // 使用cbc模式加密非前16个byte。
// let sm4ConfigEnd = {
//   key: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10],
//   mode: 'cbc',
//   iv: [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166],
//   cipherType: 'array'
// }
// let sm4End = new Sm4js(sm4ConfigEnd)
// let plainTextEnd = [1, 35, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 18, 170, 148, 69, 88, 143, 213, 81, 137, 41, 174, 176, 173, 178, 186, 154] // 109
// let ctEnd = sm4End.encrypt(plainTextEnd)
// console.log('ctEnd', ctEnd)
// // let mtEnd = sm4End.decrypt(ctEnd)
// // console.log('mtEnd', mtEnd)






const sm4 = require('sm-crypto').sm4;
// const key = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10];
// // const key = [209, 226, 57, 45, 165, 168, 71, 232, 190, 234, 212, 134, 78, 246, 71, 167]
// // let encryptData = sm4.encrypt([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10], key); // 加密
// // const key = '0123456789abcdef' // 只有前16个有用
// // const data = '0123456789abcdeffedcba9876543210' // 32
// // const data = [71, 62, 250, 171, 199, 46, 71, 163, 253, 30, 207, 178, 7, 202, 251, 69]
// const data = [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166]
// // const data = [1, 35, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 18, 170, 148, 69, 88, 143, 213, 81, 137, 41, 174, 176, 173, 178, 186, 154, 3, 3, 3] // 112
// // const data = [209, 226, 57, 45, 165, 168, 71, 232, 190, 234, 212, 134, 78, 246, 71, 167]
// // const key = '0123456789abcdeffedcba9876543210'
// let encryptData = sm4.encrypt(data, key)
// // console.log('加密结果：', encryptData, util.tenArrToHexArr(encryptData), util.tenArrToHexArr(encryptData).reduce((res, cur) => cur.length < 2 ? res += '0' + cur : res += cur, ''))
// console.log('加密结果：', encryptData)
// let decryptData = sm4.decrypt(encryptData, key)
// console.log('解密结果：', decryptData)







// 整合2个加密过程
let key = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10] // 16
// let data = '01230123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba9876'
let data = 'P1230123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba98760123456789abcdeffedcba9876'
// let data = '{"prikey":"0xa992486c5af9cb39c130ca4b3897da021ba6dbaf602f50eaf500ae3f211a16c7","pdid":"did:ttm:u070bac11747d0edd762d8d5faebb1d5f4a48fd63f2b84938f26f024cf2655","phone":"","node":"47.95.242.110:8587"}'
let encrypt = (mt, key) => {
  // 使用util生成iv
  // let iv = [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166]
  let iv = util.randomArr(0, 255, 16)
  let encryptData = sm4.encrypt(iv, key)

  let dataBytes = util.hexStrToArr(mt)
  console.log('dataBytes', dataBytes)
  let hashCode = md5(dataBytes)
  dataBytes = dataBytes.concat(util.hexStrToArr(hashCode))
  let sm4ConfigEnd = {
    key: key,
    mode: 'cbc',
    iv: iv, // cbc模式时必须有iv
    cipherType: 'array', // 密文格式
    mtType: 'array' // 明文格式
  }
  let sm4End = new Sm4js(sm4ConfigEnd)
  let ctEnd = sm4End.encrypt(dataBytes) // sm4会把dataBytes补成128倍的。
  return encryptData.concat(ctEnd)
}
let decrypt = (ct, key) => {
  let iv = sm4.decrypt(ct.slice(0, 16), key)
  let sm4ConfigEnd = {
    key: key,
    mode: 'cbc',
    // iv: [208, 193, 56, 14, 224, 207, 206, 67, 115, 5, 42, 90, 244, 110, 49, 166],
    iv: iv,
    cipherType: 'array',
    mtType: 'array'
  }
  let sm4End = new Sm4js(sm4ConfigEnd)
  let origText = sm4End.decrypt(ct.slice(16)) // 解密中包括去除补上的内容
  let hashCode = md5(origText.slice(0, -16))
  if (hashCode === util.arrToHexStr(origText.slice(-16))) {
    return util.arrToHexStr(origText.slice(0, -16))
  } else {
    return null
  }
}



let ct = encrypt(data, key)
console.log('加密结果：', ct)
let mt = decrypt(ct, key)
console.log('解密结果：', mt)

let temp = "1f521bd208c2f69ef5fc90c9b706eb972efca67a20b37932c18a3796a60bfb760f818cfcf506c6da7bb413255addfd44d63ebde1ed3fe258fd42f83b8399aeaf8c2ad263439122dba6410ec40fd0e826523fa152e1773c96ca0d79e8309e950a11126fe0b68c32ae93a64d7f5e8ecc88703bbfbd627d887acfbfa4621afe9da9840055abf7d73a0b297c0c62ac67fec3ea9b17c4468f68dda7a631fe8633984692e18c234d6f32d842d25c54c80dd418420b6d1b0376a950b6734e4b4682c9970dbbbf90f859a77a06f155a71af3b1203e32038d7d18bb1c529d730432bc3951efa17f26cb86040cb0723ebf171bd5fe"
// let temp = "5ba8157f9bf70197455fd30dc676ac5f9f53e397f170d4006c839d5539358cc442794b4db007aa427e19d0702d58cd328b6351f99fce38da82b63709193fd308565fdd7767335b0e88308661a8398f8ba8dee98abc2147faad8a088bba565d063ff3fe5d5591d85deb58ef52b9535803fe863b38cdceaca1617b4d8516c77ea0ea7bc4e7422ef7c5ffdbce3f065f46eb804adecc76b12d1e8261a83c3a426afc622a3668ea160828e0d0469283120d302940040a108e35676fcc2ec6478e2bb66b8be7cb90d4a4e855d5c8d296b1c717948de0d4739530fbe26fad38febc0b0eaec0dbdbeb21bc482e7da80559d54735"
temp = util.hexStrToArr(temp)
// console.log('temp', temp, `[${temp.join(', ')}]`)
let idpwd = '1234qwerA'
// let idpwd = '123456a.'
idpwd = util.hexStrToArr(md5(idpwd))
// console.log('idpwd', idpwd)
let dres = decrypt(temp, idpwd)
let decimalismArr = util.strHexToBytes(dres)
let resStr = util.arrToStr(decimalismArr)
console.log('解密temp', decrypt(temp, idpwd), resStr)
// console.log('解密temp', decrypt(temp, idpwd))

function decimalismArrToStr(arr) {

}

// console.log('123md后', md5('123')) // 202cb962ac59075b964b07152d234b70
// 202cb962ac59075b964b07152d234b70
// 与庆雪给的数据相同


// console.log('整理结果为：', [].concat(encryptData, ctEnd).join(' '))