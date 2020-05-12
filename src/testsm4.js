// 测试sm4

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

const SM4 = require('gm-crypt').sm4
let sm4Config = {
  // encrypt/decypt main key; cannot be omitted
  // key: 'JeF8U9wHFOMfs2Y8',
  key: '96e79218965eb72c92a549dd5a330112',
  // optional; can be 'cbc' or 'ecb'
  mode: 'cbc', // default
  // optional; when use cbc mode, it's necessary
  // iv: 'UISwD9fW6cFh9SNS', // default is null
  iv: '96e79218965eb72c92a549dd5a330112', // default is null
  // optional: this is the cipher data's type; Can be 'base64' or 'text'
  // cipherType: 'base64' // default is base64
  cipherType: 'text' // default is base64
}
let sm4 = new SM4(sm4Config)
// let plaintext = '中国国密加解密算法'
// let ciphertext = sm4.encrypt(plaintext)
// console.log(ciphertext)
// let ciphertext1 = 'j/+HgSpv8RZQI2YtSq0L1RnemiSokMm1VvLHSTt245U='
// let plaintext1 = sm4.decrypt(ciphertext)
// console.log(plaintext1)

let ciphertext2 = sm4.encrypt('{"privatekey":"01837f014db7fc5acd914f53839bdb5dbf4cd80ecbbb7bf966ba9619f34b627a"}')
console.log("ct", ciphertext2)
// let plaintext2 = sm4.decrypt('7b22707269766174656b6579223a2230313833376630313464623766633561636439313466353338333962646235646266346364383065636262623762663936366261393631396633346236323761227d')
let plaintext2 = sm4.decrypt(ciphertext2)
console.log("mt", plaintext2)






