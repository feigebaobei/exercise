import sm2js from './sm.js'

var hashStr = 'c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a' // 与go代码里一样的字符串
var priStr = '55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81'
var sm2 = sm2js.sm2
var priStrBox = []

main()
function main() {
  // test0()
  // test1()
  // test2()
  // for (var i = 0; i < 100; i++) {
  //   test0(genRandPriStr())
  // }
  var a = [137.1162109375, 38.355712890625, 26.14892578125, 23.9443359375, 26.174072265625, 26.280029296875, 24.5859375, 23.23388671875, 23.699951171875, 24.346923828125, 23.220947265625, 23.44189453125, 24.35400390625, 25.60205078125, 27.935791015625, 24.116943359375, 27.243896484375, 24.962890625, 24.029052734375, 22.85791015625, 24.6640625, 25.5849609375, 23.523193359375, 26.762939453125, 23.4541015625, 24.681884765625, 26.52880859375, 25.005859375, 24.800048828125, 27.5498046875, 28.2822265625, 28.459228515625, 30.381103515625, 27.535888671875, 25.994140625, 19.9638671875, 18.9169921875, 17.7978515625, 18.780029296875, 19.195068359375, 19.078125, 18.2529296875, 18.1591796875, 19.604248046875, 20.9609375, 18.364990234375, 18.912109375, 18.827880859375, 18.823974609375, 18.3779296875, 19.058837890625, 18.214111328125, 18.977294921875, 18.64111328125, 20.696044921875, 17.99609375, 18.196044921875, 18.60498046875, 18.51708984375, 18.3271484375, 18.43408203125, 18.56298828125, 18.410888671875, 17.793212890625, 18.050048828125, 18.513916015625, 18.723876953125, 18.06689453125, 18.6328125, 17.932861328125, 20.72998046875, 18.55615234375, 18.431884765625, 19.11083984375, 18.2431640625, 17.90673828125, 18.248046875, 18.516845703125, 19.092041015625, 18.23876953125, 18.3251953125, 18.597900390625, 18.44921875, 17.88623046875, 18.031982421875, 18.298095703125, 19.34423828125, 18.59814453125, 19.529052734375, 18.170654296875, 17.77099609375, 17.927001953125, 18.01708984375, 18.95703125, 18.498779296875, 17.925048828125, 18.161865234375, 17.833984375, 18.38427734375, 18.117919921875]
  console.log(Math.max.call(null, ...a))
  console.log(Math.min.call(null, ...a))
  var sum = 0
  for (var i = 0; i < 100; i++) {
    sum += a[i]
  }
  console.log(sum / 100)

}

function genRandPriStr () {
  var res = ''
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
  var randomIndex = Math.floor(Math.random() * 36)
  for (var i = 0; i<64; i++) {
    res += arr[i]
  }
  return res
}

// 使用指定的私钥
function test0() {
  console.time('gen key')
  var keyesDefine = sm2.genKeyPair(priStr)
  console.timeEnd('gen key')
  var ct = keyesDefine.encrypt(hashStr)
  // console.log('ct:', `[${ct.join(', ')}]`)
  // ct: [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 253, 36, 73, 156, 146, 2, 200, 250, 44, 127, 17, 67, 162, 208, 186, 195, 225, 179, 163, 180, 116, 102, 126, 226, 35, 154, 39, 58, 206, 129, 255, 188, 61, 178, 253, 3, 203, 218, 136, 187, 226, 146, 186, 169, 2, 171, 209, 211, 186, 73, 67, 86, 61, 69, 97, 52, 88, 225, 75, 208, 231, 225, 45, 118, 46, 15, 250, 16, 193, 84, 3, 152, 135, 81, 63, 19, 170, 94, 178, 101, 148, 187, 41, 86, 30, 219, 31, 72, 230, 44, 144, 144, 155, 171, 205, 173]
  var mt = keyesDefine.decrypt(ct)
  console.log('mt:', `[${mt.join(', ')}]`)
  // mt: [99, 56, 56, 56, 99, 57, 99, 101, 57, 101, 48, 57, 56, 100, 53, 56, 54, 52, 100, 51, 100, 101, 100, 54, 101, 98, 99, 99, 49, 52, 48, 97, 49, 50, 49, 52, 50, 50, 54, 51, 98, 97, 99, 101, 51, 97, 50, 51, 97, 51, 54, 102, 57, 57, 48, 53, 102, 49, 50, 98, 100, 54, 52, 97]
  var signData = keyesDefine.signSha512(hashStr)
  // console.log('signData:', signData)
  // signData: {r: "4e403f48d144c3077ea0cc2070535a9d9ccad580459b735f9c988b6f64851000", s: "6db31e8b77902d72417b4593b9e3734cb8f10389ce3382774d75b0d3a317b8a4"}
  var isok = keyesDefine.verify512(hashStr, signData.r, signData.s)
  console.log('isok:', isok)
  // isok: true
}

// 使用自动生成的私钥
function test1() {
  var keyesAuto = sm2.genKeyPair(priStr)
  var ct = keyesAuto.encrypt(hashStr)
  console.log('ct:', `[${ct.join(', ')}]`)
  // ct: [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 253, 36, 73, 156, 146, 2, 200, 250, 44, 127, 17, 67, 162, 208, 186, 195, 225, 179, 163, 180, 116, 102, 126, 226, 35, 154, 39, 58, 206, 129, 255, 188, 61, 178, 253, 3, 203, 218, 136, 187, 226, 146, 186, 169, 2, 171, 209, 211, 186, 73, 67, 86, 61, 69, 97, 52, 88, 225, 75, 208, 231, 225, 45, 118, 46, 15, 250, 16, 193, 84, 3, 152, 135, 81, 63, 19, 170, 94, 178, 101, 148, 187, 41, 86, 30, 219, 31, 72, 230, 44, 144, 144, 155, 171, 205, 173]
  var mt = keyesAuto.decrypt(ct)
  console.log('mt:', `[${mt.join(', ')}]`)
  // mt: [99, 56, 56, 56, 99, 57, 99, 101, 57, 101, 48, 57, 56, 100, 53, 56, 54, 52, 100, 51, 100, 101, 100, 54, 101, 98, 99, 99, 49, 52, 48, 97, 49, 50, 49, 52, 50, 50, 54, 51, 98, 97, 99, 101, 51, 97, 50, 51, 97, 51, 54, 102, 57, 57, 48, 53, 102, 49, 50, 98, 100, 54, 52, 97]
  var signData = keyesAuto.signSha512(hashStr)
  console.log('signData:', signData)
  // signData: {r: "8fa4acb8ed782e0aadd2a03c49ab60abe3a1ad625c17f7207294762dbdcf63bd", s: "a1899998f6d57b6e9eb7c133f07032a910c5acf0b53c58b2cccd0755ff78afed"}
  var isok = keyesAuto.verify512(hashStr, signData.r, signData.s)
  console.log('isok:', isok)
  // isok: true
}

// 使用原版sm2.js的方法
function test2() {
  var keyes = sm2.genKeyPair()
  var sign = keyes.sign(hashStr)
  console.log('sign:', sign)
  // sign: {r: "64590e43b91e7a6c1249c9f3e19cb1f84e9fe56160d9f502a764e856193c9336", s: "2063cb56b981581a333b11ade303106c6c388a86955a01915ee5e6cfcba8faab"}
  var isok = keyes.verify(hashStr, sign.r, sign.s)
  console.log('isok:', isok)
  // isok: true
}
