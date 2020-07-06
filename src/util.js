

/**
 * 16 => 10
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
let hexToTen = (hex) => hex.toString(10)
/**
 * 10 => 16
 * @param  {[type]} ten [description]
 * @return {[type]}     [description]
 */
let tenToHex = (ten) => ten.toString(16)
/**
 * 16进制的数组 => 10进制的数组
 * @param  {[type]} hexArr) [description]
 * @return {[type]}         [description]
 */
let hexArrToTenArr = (hexArr) => hexArr.reduce((res, curVal, curInd) => {
  res.push(hexToTen(curVal))
  return res
}, [])
/**
 * 10进制的数组 => 16进制的数组
 * @param  {[type]} tenArr) [description]
 * @return {[type]}         [description]
 */
let tenArrToHexArr = (tenArr) => tenArr.reduce((res, curVal, curInd) => {
  res.push(tenToHex(curVal))
  return res
}, [])
/**
 * 循环左移
 * @param  {[type]} x [description]
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
function rotl(x, y) {
    return x << y | x >>> (32 - y);
}
/**
 * 把由十进制数组成的数组转换为字符串
 * @param  {[type]} arr) [description]
 * @return {[type]}      [description]
 */
let arrToStr = (arr) => arr.reduce((res, cur) => res += String.fromCharCode(cur), '')
/**
 * 把由十进制数组成的数组转换为用十六进制表示的字符串
 * @param  {[type]} arr) [description]
 * @return {[type]}      [description]
 */
let arrToHexStr = (arr) => arr.reduce((res, cur) => {
  let s = cur.toString(16)
  if (s.length < 2) {
    s = '0' + s
  }
  return res += s
}, '')
let hexStrToArr = (str) => { // eg: d0c138ee0cfce437352a5af46e31a6
  let res = [], i = 0
  while (i < str.length) {
    res.push(parseInt(str.slice(i, i+2), 16))
    i += 2
  }
  return res
}
/**
 * 生成指定长度的随机元素的数组
 * @param  {[type]} min    [description]
 * @param  {[type]} max    [description]
 * @param  {[type]} length [description]
 * @return {[type]}        [description]
 */
let randomArr = (min, max, length) => {
  let eles = [], i = 0
  let ele = min
  while (ele < max) {
    eles.push(ele++)
  }
  // return eles.
  let res = []
  for (i = 0; i < length; i++) {
    res.push(eles[Math.floor(Math.random() * (max - min))])
  }
  return res
}
/**
 * string => array
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
function stringToArray(string) {
  var arr = [];
  var length = string.length;
  for (var i = 0; i < length; i++) {
    var code = string.charCodeAt(i);
    if (19968 < code && code < 40869) {
      var bin = code.toString(2);
      var bin1 = '1110';
      var bin2 = '10';
      var bin3 = '10';
      var binlen = bin.length;
      if (binlen <= 6) {
        bin3 = bin3 + this.zero(6 - binlen) + bin;
        bin2 = bin2 + this.zero(6);
        bin1 = bin1 + this.zero(4);
      } else if (binlen > 6 && binlen <= 12) {
        bin3 = bin3 + bin.slice(-6);
        bin2 = bin2 + this.zero(12 - binlen) + bin.substr(0, binlen - 6);
        bin1 = bin1 + this.zero(4);
      } else {
        bin3 = bin3 + bin.slice(-6);
        bin2 = bin2 + bin.substr(binlen - 12, 6);
        bin1 = bin1 + this.zero(16 - binlen) + bin.substr(0, binlen - 12);
      }

      arr.push(parseInt(bin1, 2), parseInt(bin2, 2), parseInt(bin3, 2));
    } else {
      arr.push(code);
    }
  }
  return arr;
}
/**
 * 数组 => string
 * @param  {[type]} strBuffer [description]
 * @return {[type]}           [description]
 */
function arrayToString(strBuffer) {
  // if not browser env, then require node.js's util. otherwise just use window's
  // const TextDecoder = (typeof window === 'undefined') ? require('util').TextDecoder : window.TextDecoder
  // var decoder = new TextDecoder('utf-8')
  var string = "";
  var length = strBuffer.length;
  for (var i = 0; i < length;) {
    var chart;
    var bin11 = parseInt(strBuffer[i]).toString(2);
    if (bin11.substr(0, 1) == 1 && bin11.length == 8) {
      var bin1 = parseInt(strBuffer[i]).toString(2).substr(4);
      var bin2 = parseInt(strBuffer[i + 1]).toString(2).substr(2);
      var bin3 = parseInt(strBuffer[i + 2]).toString(2).substr(2);
      var bin = parseInt(bin1 + bin2 + bin3, 2);
      chart = String.fromCharCode(bin);
      i = i + 3;
    } else {
      chart = String.fromCharCode(parseInt(bin11, 2));
      i++;
    }
    string += chart;
  }
  return string;
}

function strHexToBytes(str) {
  var arr = []
  for (var i = 0; i < str.length; i=i+2) {
    arr.push(parseInt(str.slice(i, i+2), 16))
  }
  return arr
}
/**
 * 把字符串 => 10进制的字符串组成的数据
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function strToAscii(str) {
  var arr = []
  for (var i = 0; i < str.length; i++) {
    arr.push(str.slice(i, i+1).charCodeAt())
  }
  return arr
}

/**
 * 把16进制的字符串组成的数据 => 字符串
 * @param  {[]string} arr string型的16进制
 * @return {[type]}     [description]
 */
function ascii16ToStr(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    str += String.fromCharCode(parseInt(arr[i]).toString(16))
  }
  return str
}


export default {
  hexToTen: hexToTen,
  tenToHex: tenToHex,
  hexArrToTenArr: hexArrToTenArr,
  tenArrToHexArr: tenArrToHexArr,
  rotl: rotl,
  arrToStr: arrToStr,
  arrToHexStr: arrToHexStr,
  hexStrToArr: hexStrToArr,
  randomArr: randomArr,
  stringToArray: stringToArray,
  arrayToString: arrayToString,
  strHexToBytes: strHexToBytes,
  // isEqualArr: isEqualArr
  strToAscii: strToAscii,
  ascii16ToStr: ascii16ToStr
}