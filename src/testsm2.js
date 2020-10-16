import sm2js from './sm.js'
import utils from './util'


// import sm2js from './sm.js/dist/sm.js' // 这个不能正确运行，后续我会把它做好。
// import distTest from './sm.js/dist/test.js'
// import BN from "bn.js"

// var hashStr = '64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107' // 与go代码里一样的字符串
var hashStr = '1234561234567890abcdef' // 与go代码里一样的字符串
// var priStr = '55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81'
var priStr = '4d8126a957af5a3fbfc3e5125dafcc72fab20a15ee71174a21e37ce88b7d0124'
var hs = '0x64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107'
var sm2 = sm2js.sm2

// main3() // 三月份时的非对称加密
mainEcdsa()

function main3() {
  test0()
  // test1()
  // test2()
  // test3()
  // test4()
}

function mainEcdsa () {
  // test5()
  // test6()
  // test7()
  // test8()
  // test9()
  // test10()
  // test11()
  test12()
  // confuse()
}

function test6() {
  // console.log('test5')
  // 解密go生成的密文
  // let ct = '556ba529a9c56936b248e76660c3992f9fabc1300a865a4590ef36204d73ce1e259049d24b9b0b211d959b50ddeeb934bca9facac1b038c4a57c450333bb9582470e9f8af98e5e17fe56defe05d6700a78078d2914d6b6362edee43f975ba4c991b2fb7147fedf'
  var keys = sm2.genKeyPair(priStr)
  var ct = keys.encrypt(hashStr)
  // console.log('ct', ct)
  // console.log('ct:', `[${ct.join(', ')}]`, utils.arrToHexStr(ct))
  let mt = keys.decrypt(ct)
  console.log('mt', mt, utils.arrToStr(mt))
}

// 解密go的加密结果
function test7() {
  var ct = 'f4dae553d3a2325f95fb1b4419a4ae3e7a34ea0b103b05ed418c3d53f801836a7c3f8ffd915969b4056d7e4e5604d57bb599831c64bdfd8a6b9f981948e1c4bd3af1c8fe1a67154608139dd3942962dfe2739e4c9fbbd28cf406d785d15a0897d56b52dbf2cffee14f048d'
  var keys = sm2.genKeyPair(priStr)
  let mt = keys.decrypt(ct)
  console.log('mt', mt, utils.arrToStr(mt))
}

// 比对公钥是否相同
// 是相同的
function test8() {
  var keys = sm2.genKeyPair(priStr)
  console.log('pub defaul:', keys.pubToString())
}

// 比对加密结果是否一样
function test9() {
  var keys = sm2.genKeyPair(priStr)
  // var ct = keys.encrypt(utils.strToStr16(hashStr))
  var ct = keys.encrypt(hashStr)
  console.log('ct:', ct, utils.arrToHexStr(ct))
}

// 比对解密结果是否一样
function test10 () {
  var keys = sm2.genKeyPair(priStr)
  let ct = '9b995ccf25c18cf2813c0fa65e103de8c30646afae6cd7dd1678b9e183934a5f11b87019d6454947fae25d6665c5f3bdf3a6c6fdb73879cd19f7a232155d86f2b783be3b0c50aaa709d4ee895c2214024c633b0dc3b26a5eb8859c1fbd3e917b7595996714700417d1eabf'
  let mt = keys.decrypt(ct)
  console.log('mt:', mt)
}

// 比对验签结果
function test11 () {
  var keys = sm2.genKeyPair(priStr)
  // var isok = keys.verify512(hs, signData.r, signData.s)
  var isok = keys.verify512(hs, '8b8d6351831dfa8b692eb8375052ef7c3fd0076147fd0ac9b1dbd2c9acb5963f', 'eca4b93d7bc618e7d63a93be2f41a9266b758ca3006ee20059fdca4a0633d247')
  console.log('isok:', isok)
}

// 比对签名结果
function test12 () {
  var keys = sm2.genKeyPair(priStr)
  // var isok = keys.verify512(hs, signData.r, signData.s)
  var sign = keys.signSha512(hs)
  console.log('sign:', sign)
}



function test5() {
  var keyesDefine = sm2.genKeyPair(priStr)
  console.log('keyesDefine', keyesDefine)
  // console.log('hashStr', hashStr)
  // var ct = keyesDefine.encrypt(hashStr)
  // console.log('ct', ct, utils.arrToHexStr(ct))
  // console.log('ct:', `[${ct.join(', ')}]`)
  // var mt = keyesDefine.decrypt(ct)
  var ctgo = '592d33f0ddef85da70c7852bc732bca1071a9fd27383d78bc8acb5631dfafe55aebd2d0c11e257863e2768438ebcac9f83f48ce62db2ece3d5fd65fbcb18e3e7e699e081e7810dff52f5008dcf8b8fef98089220cc4504773d305819bd9389a1f3fa73f2cbc9511faad878'
  // console.log('ctgo:', ctgo)
  // var mt = keyesDefine.decrypt(ct)
  var mt = keyesDefine.decrypt(ctgo)
  console.log('mt:', `[${mt.join(', ')}]`, utils.arrToHexStr(mt))
  // var signData = keyesDefine.signSha512(hashStr)
  // console.log('signData:', signData)
  // var isok = keyesDefine.verify512(hashStr, signData.r, signData.s)
  // console.log('isok:', isok)
}

function test3() {
  var keys = sm2.genKeyPair(priStr)
  let hs = '64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107'
  var sign = keys.signSha512(hs)
  console.log('sign', sign)
  console.log('0x+r+s', `0x${sign.r}${sign.s}`)
  let isok = keys.verify512(hs, sign.r, sign.s)
  console.log('isok', isok)
}

// 在js中验签go中的签名。
function test4() {
  var keys = sm2.genKeyPair(priStr)
  let hs = '64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107'
  // var sign = keys.signSha512(hs)
  var signGo = '57cf73df84c6b554d28efab9746eacee456110669391d37915c9d75ae91610e658576557294ed0a3ccbcc9a82acbef49302ebcf19daa46d00f74f072458a8856'
  var signJs = 'ab623df8982082fed7e67d121798e72e4bd97a96d03c2378f3e3b691cc5667cbf476db3c3f7e9d96c73b234fac61dd2b17c4b150ace1337c488d899906569e26'
             // '57cf73df84c6b554d28efab9746eacee456110669391d37915c9d75ae91610e6 58576557294ed0a3ccbcc9a82acbef49302ebcf19daa46d00f74f072458a8856'
  // var r = signGo.slice(0, 64)
  // var s = signGo.slice(64)
  // console.log('signGo', signGo)
  // console.log(`0x${r}`, `${s}`)
  // let isok = keys.verify512(hs, r, s)
  // console.log('isok', isok)
  console.log('isok', keys.verify512(hs, signGo.slice(0, 64), signGo.slice(64)))
  console.log('isok', keys.verify512(hs, signJs.slice(0, 64), signJs.slice(64)))
}

// 使用指定的私钥
function test0() {
  var keyesDefine = sm2.genKeyPair(priStr)
  console.log('keyesDefine', keyesDefine)
  var ct = keyesDefine.encrypt(hashStr)
  console.log('ct', ct)
  console.log('ct:', `[${ct.join(', ')}]`)
  // ct: [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 253, 36, 73, 156, 146, 2, 200, 250, 44, 127, 17, 67, 162, 208, 186, 195, 225, 179, 163, 180, 116, 102, 126, 226, 35, 154, 39, 58, 206, 129, 255, 188, 61, 178, 253, 3, 203, 218, 136, 187, 226, 146, 186, 169, 2, 171, 209, 211, 186, 73, 67, 86, 61, 69, 97, 52, 88, 225, 75, 208, 231, 225, 45, 118, 46, 15, 250, 16, 193, 84, 3, 152, 135, 81, 63, 19, 170, 94, 178, 101, 148, 187, 41, 86, 30, 219, 31, 72, 230, 44, 144, 144, 155, 171, 205, 173]
  var mt = keyesDefine.decrypt(ct)
  console.log('mt:', `[${mt.join(', ')}]`)
  // mt: [99, 56, 56, 56, 99, 57, 99, 101, 57, 101, 48, 57, 56, 100, 53, 56, 54, 52, 100, 51, 100, 101, 100, 54, 101, 98, 99, 99, 49, 52, 48, 97, 49, 50, 49, 52, 50, 50, 54, 51, 98, 97, 99, 101, 51, 97, 50, 51, 97, 51, 54, 102, 57, 57, 48, 53, 102, 49, 50, 98, 100, 54, 52, 97]
  var signData = keyesDefine.signSha512(hashStr)
  console.log('signData:', signData)
  // signData: {r: "4e403f48d144c3077ea0cc2070535a9d9ccad580459b735f9c988b6f64851000", s: "6db31e8b77902d72417b4593b9e3734cb8f10389ce3382774d75b0d3a317b8a4"}
  var isok = keyesDefine.verify512(hashStr, signData.r, signData.s)
  console.log('isok:', isok)
  // isok: true
}

// 使用自动生成的私钥
function test1() {
  var keyesAuto = sm2.genKeyPair(priStr)
  // console.log('keyesAuto', keyesAuto, keyesAuto)
  console.log('keyesAuto', keyesAuto, keyesAuto.pub.x.toString(16), keyesAuto.pub.y.toString(16))
  var ct = keyesAuto.encrypt(hashStr)
  console.log('ct:', `[${ct.join(', ')}]`)
  // // ct: [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 253, 36, 73, 156, 146, 2, 200, 250, 44, 127, 17, 67, 162, 208, 186, 195, 225, 179, 163, 180, 116, 102, 126, 226, 35, 154, 39, 58, 206, 129, 255, 188, 61, 178, 253, 3, 203, 218, 136, 187, 226, 146, 186, 169, 2, 171, 209, 211, 186, 73, 67, 86, 61, 69, 97, 52, 88, 225, 75, 208, 231, 225, 45, 118, 46, 15, 250, 16, 193, 84, 3, 152, 135, 81, 63, 19, 170, 94, 178, 101, 148, 187, 41, 86, 30, 219, 31, 72, 230, 44, 144, 144, 155, 171, 205, 173]
  // var mt = keyesAuto.decrypt(ct)
  // console.log('mt:', `[${mt.join(', ')}]`)
  // // mt: [99, 56, 56, 56, 99, 57, 99, 101, 57, 101, 48, 57, 56, 100, 53, 56, 54, 52, 100, 51, 100, 101, 100, 54, 101, 98, 99, 99, 49, 52, 48, 97, 49, 50, 49, 52, 50, 50, 54, 51, 98, 97, 99, 101, 51, 97, 50, 51, 97, 51, 54, 102, 57, 57, 48, 53, 102, 49, 50, 98, 100, 54, 52, 97]
  // var signData = keyesAuto.signSha512(hashStr)
  // console.log('signData:', signData)
  // // signData: {r: "8fa4acb8ed782e0aadd2a03c49ab60abe3a1ad625c17f7207294762dbdcf63bd", s: "a1899998f6d57b6e9eb7c133f07032a910c5acf0b53c58b2cccd0755ff78afed"}
  // var isok = keyesAuto.verify512(hashStr, signData.r, signData.s)
  // console.log('isok:', isok)
  // // isok: true
}

// 使用原版sm2.js的方法
function test2() {
  var keys = sm2.genKeyPair()
  var sign = keys.sign(hashStr)
  console.log('sign:', sign)
  // sign: {r: "64590e43b91e7a6c1249c9f3e19cb1f84e9fe56160d9f502a764e856193c9336", s: "2063cb56b981581a333b11ade303106c6c388a86955a01915ee5e6cfcba8faab"}
  var isok = keys.verify(hashStr, sign.r, sign.s)
  console.log('isok:', isok)
  // isok: true
}

// 处理杂事的方法
function confuse () {
  // let s = 'b376bdabf136a7d012d1174e346fc2bbee2fe5c672913107c4328825a95690efcfbc28abce517f8d'
  // console.log(utils.hexStrToArr(s))
  // let str16 = utils.strToStr16(s)
  let s = "7a4ef5844f07d191bd77f8069af28ca0"
  let str16 = utils.hexStrToArr(s)
  console.log('str16', str16)
}