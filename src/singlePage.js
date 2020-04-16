// console.log('singlePage.js')

import {SHA3, Keccak} from 'sha3'
// import sm2js from './sm.js/dist/sm.js'
import sm2js from './sm.js'
// import smDup from './smDup'

const keccak256 = new Keccak(256)
const sm2 = sm2js.sm2
var keyes = null
// console.log(sm2js)
// console.log(smDup)
// genKeyPair

var mt = document.querySelector("#mt").value
function dq (str) {
  return document.querySelector(str)
}
let [priI, priB, mtI, keccakB, resHashT, signB, resSignT, gorS, gosS, verifyB, resVerifyT, encryptB, encryptT, decryptB, decryptT] = [dq('#priStr'), dq('#priB'), dq('#mt'), dq('#keccak256'), dq('#resHash'), dq('#sign'), dq('#resSign'), dq('#gor'), dq('#gos'), dq('#verify'), dq('#resVerify'), dq('#encrypt'), dq('#resEncrypt'), dq('#decrypt'), dq('#resDecrypt'), ]

priB.onclick = function () {
  useKey()
  alert('已经使用。')
}
useKey()
function useKey () {
  keyes = sm2.genKeyPair(priI.value)
}

keccakB.onclick = function (argument) {
  genHashStr()
}

function genHashStr () {
  keccak256.reset()
  var resHash = keccak256.update(mt).digest('hex')
  resHashT.value = resHash
  return resHash
}

signB.onclick = function () {
  var resHash = genHashStr()
  var resSign = keyes.signSha512(resHash)
  resSignT.value = JSON.stringify(resSign)
  gor.value = JSON.stringify(strHexToBytes(resSign.r)).split(',').join(' ')
  gos.value = JSON.stringify(strHexToBytes(resSign.s)).split(',').join(' ')
}

verifyB.onclick = function () {
  var resHash = resHashT.value
  var resSign = JSON.parse(resSignT.value)
  var isok = keyes.verify512(resHash, resSign.r, resSign.s)
  resVerifyT.value = isok
}
encryptB.onclick = function () {
  var resHash = genHashStr()
  var resEncrypt = keyes.encrypt(resHash)
  encryptT.value = `[${resEncrypt}]`
}
decryptB.onclick = function () {
  var bytesArr = keyes.decrypt(encryptT.value.slice(1, encryptT.value.length-1).split(','))
  decryptT.value = asciiToStr(bytesArr)
}

/**
 * 把byte型的数据 => 16进制的字符串
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function bytesToStrHex(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    var temp = parseInt(arr[i], 10).toString(16)
    if (temp.length < 2) {
      temp = '0' + temp
    }
    str += temp
  }
  return str
}
/**
 * 把16进制的字符串 => byte型的数据
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
function strHexToBytes(str) {
  var arr = []
  for (var i = 0; i < str.length; i=i+2) {
    arr.push(parseInt(str.slice(i, i+2), 16))
  }
  return arr
}
/**
 * 把10进制的字符串组成的数据 => 字符串
 * @param  {[]string} arr string型的十进制
 * @return {[type]}     [description]
 */
function asciiToStr(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i])
  }
  return str
}