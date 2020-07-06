import BN from "bn.js"

// var a = new BN(3)
// var b = new BN(13)
// var d = new BN(-14)
// var f = new BN(72)
// var g = new BN(108)
// // a = new BN(-8)
// var c = new BN('38802535502374206891411174763586804683196591384396604534997141283792833686401', 10) // 这是私钥
// // console.log('c 10', c.toString(10))
// // console.log('c 16', c.toString(16)) // 55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81
// // // a.iadd(d)
// // // console.log(a.toString())
// // // console.log(b.toString())
// // // console.log(d.toString())
// // // console.log(b.mod(a).toString())
// // // console.log(d.mod(a).toString())
// // // // console.log(a.mod(d).toString())
// // // console.log(d.umod(a).toString())
// // // d.umod(a) // d*n-|a|=结果 d*(n-1)<a<=d*n

// // console.log(b.invm(a).toString())
// // console.log(a.invm(b).toString())
// // // console.log(b.toString(16))
// // // console.log(a.invm(b))
// // // console.log(a.invm(b).toString())
// // // console.log(b.invm(a).toString())
// // var red = BN.red('p192')
// // console.log('red', red)

// // console.log('gcd:', f.gcd(g).toString())
// // console.log(BN.red(g))
// // var red = BN.red(a)
// // var redG = g.toRed(red)
// // var G = redG.fromRed()
// // console.log(red)
// // console.log(redG)
// // console.log(G)
// // console.log(BN.red('k256'))
// // var red = BN.red(a)
// // var reda = a.toRed(red)
// // var redb = reda.redAdd(reda)
// // var an = reda.fromRed()
// // console.log(red)
// // console.log(reda)
// // console.log(redb)
// // console.log(an)
// // console.log(new BN(''))

// go里执行SetBytes()的结果
// [99 56 56 56 99 57 99 101 57 101 48 57 56 100 53 56 54 52 100 51 100 101 100 54 101 98 99 99 49 52 48 97 49 50 49 52 50 50 54 51 98 97 99 101 51 97 50 51 97 51 54 102 57 57 48 53 102 49 50 98 100 54 52 97]
// 64位
// 5196552519450233702023162345467827940482895665641485577997579095426608914932863953695532586457148646339627042190932937355716765117521660910122192560600161
// 154位

// function asciiToStr(arr) {
//   var str = ''
//   for (var i = 0; i < arr.length; i++) {
//     str += String.fromCharCode(arr[i])
//   }
//   return str
// }
// function strToAscii(str) {
//   var arr = []
//   for (var i = 0; i < str.length; i++) {
//     arr.push(str.slice(i, i+1).charCodeAt())
//   }
//   return arr
// }

// var hashStr = 'c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a'
// var a = new BN(hashStr, 16) // 90704253738871127881848720053493704415782249742745782116386190790874918278730
// console.log('a.toString():', a.toString())
// var arrAscii = strToAscii(hashStr)
// console.log("arrAscii:", arrAscii)
// var s0 = arrAscii.join('') // 99565656995799101571014857561005356545210051100101100541019899994952489749504952505054519897991015197505197515410257574853102495098100545297
// console.log("s0:", new BN(s0).toString()) // 99565656995799101571014857561005356545210051100101100541019899994952489749504952505054519897991015197505197515410257574853102495098100545297


// // 99565656995799101571014857561005356545210051100101100541019899994952489749504952505054519897991015197505197515410257574853102495098100545297

// //   x := new(big.Int).SetBytes(data[:32])
// //   y := new(big.Int).SetBytes(data[32:64])

// // parseInt(str, radix) // 把str按照radix进制转换为十进制。
// // // 2/8/10/16
// // parseInt(str, 2) // 2 => 10
// // parseInt(str, 8) // 8 => 10
// // parseInt(str, 16) // 16 => 10
// // parseInt(str).toString(2) // 10 => 2
// // parseInt(str).toString(8) // 10 => 8
// // parseInt(str).toString(16) // 10 => 16
// // parseInt(str, 2).toString(8) // 2 => 8
// // parseInt(str, 2).toString(16) // 2 => 16
// // parseInt(str, 8).toString(2) // 8 => 2
// // parseInt(str, 8).toString(16) // 8 => 16
// // parseInt(str, 16).toString(2) // 16 => 2
// // parseInt(str, 16).toString(8) // 16 => 8

// function strAsciiTo2(str) {
//   // 把str中每个字符转换为ascii码的二进制，再拼接起来。即二进制组成的字符串。
//   var res = ''
//   for (var i = 0; i < str.length; i++) {
//     var temp10 = str.slice(i, i+1).charCodeAt()
//     var temp = Number(temp10).toString(2)
//     while (temp.length < 8) {
//       temp = '0' + temp
//     }
//     // console.log('temp', temp)
//     res += temp
//   }
//   return res
// }
// function bnSetBytesStr(str) {
//   // 使用str转换为二进制组成的字符串，再转换为大数。
//   // 该方法的功能与go math/big里的SetBytes()功能相同。
//   return new BN(strAsciiTo2(str), 2)
// }
// function arrAsciiTo2(arr, radix) {
//   // 按照radix进制解析arr
//   // 把str中每个字符转换为ascii码的二进制，再拼接起来。即二进制组成的字符串。
//   var res = ''
//   for (var i = 0; i < arr.length; i++) {
//     var temp10 = parseInt(arr[i], radix)
//     var temp = temp10.toString(2)
//     while (temp.length < 8) {
//       temp = '0' + temp
//     }
//     // console.log('temp', temp)
//     res += temp
//   }
//   return res
// }
// function bnSetBytesArr(arr, radix) {
//   return new BN(arrAsciiTo2(arr, radix), 2)
// }

// var nStr = bnSetBytesStr(hashStr)
// console.log(nStr.toString()) // 5196552519450233702023162345467827940482895665641485577997579095426608914932863953695532586457148646339627042190932937355716765117521660910122192560600161

// var nByte = bnSetBytesArr([99, 56, 56, 56, 99, 57, 99, 101, 57, 101, 48, 57, 56, 100, 53, 56, 54, 52, 100, 51, 100, 101, 100, 54, 101, 98, 99, 99, 49, 52, 48, 97, 49, 50, 49, 52, 50, 50, 54, 51, 98, 97, 99, 101, 51, 97, 50, 51, 97, 51, 54, 102, 57, 57, 48, 53, 102, 49, 50, 98, 100, 54, 52, 97])
// console.log(nByte.toString()) // 5196552519450233702023162345467827940482895665641485577997579095426608914932863953695532586457148646339627042190932937355716765117521660910122192560600161


// a = new BN('1234')
// console.log(a.toArray('le', 32))
// // console.log(a.toArray('be', 32))
// // console.log(a.toArrayLike())


var a = new BN('dead', 16)
var b = new BN('76', 16)
var c = new BN('b8ae5a5190632e9730035d19f47ecbe32b1ac9b8b77a55d4a64b6b5e26d80243', 16)
console.log('a', a)
console.log('b', b, b.toString(10))
console.log('c', c.toString(10))