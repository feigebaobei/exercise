import md5 from 'md5'
import sm2 from 'sm2'
import sm2js from 'sm.js'
import BN from "bn.js"
import crypto from 'crypto'
// import randomBytes from 'randomBytes'
// var sm2 = require('sm.js').sm2;
import {SHA3, Keccak} from 'sha3'
// var shajs = require('sha.js')
import shajs from 'sha.js'

const randomBytes = crypto.randomBytes



main()
function main() {
  // console.log(randomBytes(1))
  // console.log(randomBytes(1).toString('hex'))
  var hashStr = 'c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a' // 与go代码里一样的字符串
  var priStr = '55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81'
  var keyes = createKeyes(priStr)
  console.log('keyes', keyes)
  var signRes = signfn(keyes, hashStr)
  verifyfn(keyes, hashStr, signRes.r ,signRes.s)
  // keyes.encrypt('c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a')
  test(keyes, 'c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a')
  // test(keyes, '123456')
}

function test (keyes, msg) {
  var ct = keyes.encrypt(msg)
  // console.log('ct', ct)
  var mt = keyes.decrypt(ct)
  console.log('mt', mt)
}

// 根据输入条件生成密钥对
function createKeyes (priString) {
  let priBn = new BN(priString, 16)
  var sm2 = sm2js.sm2
  var keyes = sm2.genKeyPair();
  // console.log('keyes', keyes)
  //
  keyes.pri = priBn
  //
  // console.log('priBn instanceof BN', priBn instanceof BN)
  // console.log('priBn', priBn)
  // sm2.SM2KeyPair(null, priBn)
  keyes.pub = keyes.curve.g.mul(priBn)
  // console.log(keyes)
  return keyes
}

function signfn(keyes, msg) {
  let signRes = keyes.signSha512(msg)
  // console.log('加签结果：', signRes)
  // console.log('适用于go环境的加签结果r：', biTo10(signRes.r))
  // console.log('适用于go环境的加签结果s：', biTo10(signRes.s))
  return signRes
}

function verifyfn(keyes, msg, r, s) {
  // let res = keyes.verify(msg, r, s)
  let res = keyes.verify512(msg, r, s)
  // console.log('验签结果：', res)
}

function byteToStr (arr) {
  var res = ''
  for (var i = 0; i < arr.length; i++) {
    var hex = arr[i].toString(16)
    if (hex.length < 2) {
      hex = '0'+hex
    }
    res += hex
  }
  return res
}

function strToBytes(s) {
  var ch, st, re = [];
  for (var i = 0; i < s.length; i++ ) {
    ch = s.charCodeAt(i);  // get char
    st = [];                 // set up "stack"
    do {
      st.push( ch & 0xFF );  // push byte to stack
      ch = ch >> 8;          // shift value down by 1 byte
    }
    while ( ch );
    // add stack contents to result
    // done because chars have "wrong" endianness
    re = re.concat( st.reverse() );
  }
  return re;
}

function biTo10 (str) {
  // str = 'd98d9a131862b1dbaece45fb8e3674fa4f42eac0265543a04c0068248ed8c63b'
  // console.log('from biTo10', str)
  return new BN(str, 16).toString(10)
}

function asciiToStr(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i])
  }
  return str
}
function strToAscii(str) {
  var arr = []
  for (var i = 0; i < str.length; i++) {
    arr.push(str.slice(i, i+1).charCodeAt())
  }
  return arr
}