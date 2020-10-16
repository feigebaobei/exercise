// import {Base64} from 'js-base64'

// // let udid = 'did:ttm:u043829681e922731094502ebffdf1f10389c3ad11c8a67847c68f0482e608'
// let udid = ''
// // udid = 'a小飼弾'
// udid = 'asd枯干上lkj'
// let ct = Base64.encode(udid)
// console.log('ct', ct)
// let mt = Base64.decode(ct)
// console.log('mt', mt)


// import utf8 from 'utf8'
// import basex from 'base-x'
import bytecode from 'bytecode'

// console.log(basex)

var a = '{name: "abCD中国+-*/"}'
// // var b = utf8.encode(a)
// // var c = utf8.decode(b)

// // console.log(a, b, c)

// // var b = BASE16.encode(a)
// // var c = BASE16.decode(b)

// // console.log(a, b, c)
// // console.log(a, b, c)

// var a = '{name: "abCD中国+-*/"}'
// var b = str2hex(a

//   var c = hex2str(b)

// var b = bytecode.encode(a)
// var c = bytecode.decode(b)


// var b = bytecode.decode('中方')
var b = bytecode.decode(a)
// var c = bytecode.encode([97, 98, 99])
var c = bytecode.encode(b)

var d = '61624344E4B8ADE59BBD2B2D2A2F'
var e = []
for (var i = 0, iLen = d.length; i < iLen; i+=2) {
  // e.push(d.slice(i, i+2))
  var t = parseInt(d.slice(i, i+2), 16)
  console.log(t)
  e.push(t)
}
bytecode.encode(e)

console.log(a, b, c)



