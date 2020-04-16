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

// function strToBytesLi(str) {
//   var res = []
//   for (var i = 0; i < str.length; i++) {
//     res.push(str.slice(i, i+1).charCodeAt())
//   }
//   return res
// }

// function bytesToStrLi(arr) {
//   var str = ''
//   for (var i = 0; i < arr.length; i++) {
//     str += String.fromCharCode(arr[i])
//   }
//   return str
// }
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
//     var temp = str.slice(i, i+1).charCodeAt()
//     if (temp.length < 2) {
//       temp = '0' + temp
//     }
//     arr.push(temp)
//   }
//   return arr
// }

var arr = [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 253, 36, 73, 156, 146, 2, 200, 250, 44, 127, 17, 67, 162, 208, 186, 195, 225, 179, 163, 180, 116, 102, 126, 226, 35, 154, 39, 58, 206, 129, 255, 188, 61, 178, 253, 3, 203, 218, 136, 187, 226, 146, 186, 169, 2, 171, 209, 211, 186, 73, 67, 86, 61, 69, 97, 52, 88, 225, 75, 208, 231, 225, 45, 118, 46, 15, 250, 16, 193, 84, 3, 152, 135, 81, 63, 19, 170, 94, 178, 101, 148, 187, 41, 86, 30, 219, 31, 72, 230, 44, 144, 144, 155, 171, 205, 173]
var a = bytesToStrHex(arr)
var b = strToBytes(a)
// console.log(a)
var c = strHexToBytes(a)
console.log(a, a.length)
console.log(b, b.length)
// console.log(b)
console.log(c, c.length)
// console.log(bytesToStrLi(arr))




