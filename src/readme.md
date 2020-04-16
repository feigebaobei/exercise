# sm2.js介绍

这是为投肯科技有限公司特制的sm2.js。使用npm上的`sm2.js`为蓝图修改而来。修改后的sm2.js可以与投肯的后端协同工作。不一定与别的后端协同工作。
这次在添加新功能是保留了原作者的功能。新增了`encrypt/decrypt/signSha512/verify512`，修改了`genKeyPair`。

# install

现在没有发布于互联网。
可以复制`sm.js/dist/sm.js`或`sm.js/dist/sm.min.js`到项目中。

# usage

```
import sm2js from '<path>/sm.js'
import BN from "bn.js"
import crypto from 'crypto'

var hashStr = 'c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a'
var priStr = '55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81'
var sm2 = sm2js.sm2

main()
function main() {
  test0()
  test1()
}

// 使用指定的私钥
function test0() {
  var keyesDefine = sm2.genKeyPair(priStr)
  var ct = keyesDefine.encrypt(hashStr)
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
```

# api

## genKeyPair

生成密钥对。
这个方法被修改了。修改前没有参数。修改后可以输入私钥字符串。

```
var keyesDefine = sm2.genKeyPair(priStr)
// priStr是私钥字符串。它是没有`0x`开头的16进制的字符串。
var keyes = sm2.genKeyPair()

// 生成的密钥对                      对应golang中的sm2生成的密钥对
keyes: {
  pri: BN                              全等于keyes.D
  curve: 椭圆曲线                    大致相当于keyes.PublicKey.Curve
  pub: Point                        大致相当于keyes.PublicKey
}
```

## encrypt

新增的加密方法。
参数是字符串。在投肯的项目中一般是散列值。
返回一个数组。其每个元素是一个10进制表示的1个byte。
即使使用相同的参数，多次加签结果也不相同。（相同的概率很小）

```
keyesDefine.encrypt(hashStr)
```

## decrypt

新增的解密方法。
参数是加密的结果。
返回一个数组。其每个元素是一个10进制表示的1个byte。

```
keyesDefine.decrypt(ct)
```

## signSha512

新增的加签方法。
该方法使用sha512方法进行散列后再进行曲线上的运算。
参数是字符串。
返加一个对象`{r: BN, s: BN}`

```
keyesDefine.signSha512(hashStr)
```

## verify512

新增的验签方法。
参数hashStr     加签前的数据
参数signData.r  加签后的对象的r
参数signData.s  加签后的对象的s
返回boolean。表示是否通过验签。

```
keyesDefine.verify512(hashStr, signData.r, signData.s)
```

## `sign/verify/sm3/_pubFromString/_pubFromBytes`等

这些是原作者开发的方法。这是[说明文档](https://github.com/AlverLyu/sm.js#readme)。

# helper

```
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
```

# 与go联调

```
// 使用tmchain的sm2输出密钥及加签结果。
package main

import (
  "fmt"
  "github.com/TMChain/go-TMChain/crypto/sm_crypto"
  "github.com/TMChain/go-TMChain/crypto/sm_crypto/sm2"
  // "encoding/hex"
  // "github.com/TMChain/go-TMChain/crypto/sm_crypto/sm3"
  "github.com/TMChain/go-TMChain/common"
  "github.com/TMChain/go-TMChain/common/hexutil"
  // icrypto "github.com/TMChain/go-TMChain/crypto/crypto_interface"
  "crypto/elliptic"
  // "encoding/asn1"
  "math/big"
  "errors"

)

  var ele = sm_crypto.SmCrypto{}
  var msg = []byte("123456")
  var priStr = "55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81" // 少玉给的
  var pubStr = "0x0498202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a204154051c06bb1854ef44c0fa08b3b251e1ad40d7ee42f467ac16c644f5f182"
  var priStr2 = "3eddbe3c7950f01d249fd583ec336c9195f40f2f074b93fbcbf9242a0a48325c" // 来自lifesreason sm2.
  var hashStr = "c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a"
  var hashStr32 = "78e731027d8fd50ed642340b7c9a63b3"
  var hashBytes = []byte(hashStr)
  var pubStrSm2 = "0499bf4e0a274c734a1c20c4feb50d71658444f695cf93ee92c9c2184d6bc668e411160f317d76f157338f84a4292bcfc979468019fa2a5b7fb8ef19cdd2272c20" // 使用sm2生成的公钥字符串
  var pubStrCrypto = "0459192e1591040a363cf52e15929f6df7fd8695e88663afa2b656e396b6e1bd57df3b5eb6444bf8196e39c30aa808a718a67e88af71c776f5b48eb9378716e743"
  // var pubStrJs = "0459192e1591040a363cf52e15929f6df7fd8695e88663afa2b656e396b6e1bd57df3b5eb6444bf8196e39c30aa808a718a67e88af71c776f5b48eb9378716e743"
  var pubStrJs = "0x0298202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a"
  var signStrJs = "0xa19931832928557f8ecacbfe7357b185ad18516de20a74c3ae439a6da28a29c48eb04f7070b7b926fbfa5ec279115878673ca4c4500d6bf0949d95999563e5f5"

func main() {
  // fmt.Printf("hashBytes:%+v\n", hashBytes)
  useManual(priStr)
  // useSm2()
  // // 测试33位公钥能否完成验签
  // // 可以通过验证
  // verifyByPubStr33("0x0298202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a",
  //  hashBytes,
  //  bi("47445712827388791104035643654575632542314532676925939574529204593087103787743"),
  //  bi("105972893736586660297525663934959643182668323900141497328647586071889443556266"),
  // )
  // // 测试65位公钥能否完成验签
  // // 可以通过验证
  // verifyByPubStr65("0x0498202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a204154051c06bb1854ef44c0fa08b3b251e1ad40d7ee42f467ac16c644f5f182",
  //  hashBytes,
  //  bi("47445712827388791104035643654575632542314532676925939574529204593087103787743"),
  //  bi("105972893736586660297525663934959643182668323900141497328647586071889443556266"),
  // )
  // // 测试js加签的数据
  // // 可以通过验证
  // verifyByPubStr65("0x0498202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a204154051c06bb1854ef44c0fa08b3b251e1ad40d7ee42f467ac16c644f5f182",
  //  hashBytes,
  //  bi("41639837048588685176067445536836271779773510436131497401607593509559403429689"),
  //  bi("61656787174808236809140838915257463724624498112782424596415817191765182068662"),
  // )
  // // 测试js加签的数据
  // // 可以通过验证
  // verifyByPubStr65("0x0498202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a204154051c06bb1854ef44c0fa08b3b251e1ad40d7ee42f467ac16c644f5f182",
  //  hashBytes,
  //  bi("44322719978853748523034763838674359338861497882491933080677624725427247299812"),
  //  bi("78140087083056403751614196884564266274947163845617446767994845723302587621257"),
  // )
  // test(priStr)
}

// 设置指定的私钥
func useManual(priStr string) {
  // 1. 生成私钥
  // 2. 生成公钥
  // 3. 加密
  // 4. 解密
  // 5. 加签
  // 6. 验签
  // 7. 得到65位的公钥
  // 8. 得到33位的公钥
  // fmt.Printf("明文:%+v\n", hashBytes) // [99 56 56 56 99 57 99 101 57 101 48 57 56 100 53 56 54 52 100 51 100 101 100 54 101 98 99 99 49 52 48 97 49 50 49 52 50 50 54 51 98 97 99 101 51 97 50 51 97 51 54 102 57 57 48 53 102 49 50 98 100 54 52 97]
  pri, errPri := priStrToPri(priStr) // pri是私钥的地址
  if errPri != nil {
    fmt.Printf("errPri\n")
  }
  // fmt.Printf("pri:%+v\n", *pri)
  ct, _ := sm2.Encrypt(&pri.PublicKey, hashBytes) // [118 94 28 219 130 72 80 230 200 65 59 38 174 238 13 119 2 110 185 231 209 89 238 48 197 100 111 245 104 92 100 137 0 84 162 184 41 187 144 220 220 82 135 236 11 32 86 130 50 82 54 133 68 235 87 114 228 149 126 5 6 242 139 82 249 250 133 177 66 177 54 247 182 38 159 88 229 170 245 247 84 194 158 157 13 254 232 236 43 112 242 184 46 125 247 253 81 60 151 156 159 67 217 39 230 109 144 188 180 148 229 143 250 241 29 93 224 92 254 168 50 153 7 220 3 26 37 240 45 249 22 137 82 171 26 3 234 147 210 35 36 126 57 47 25 50 35 197 205 166 202 67 84 47 99 237 93 213 69 64]
  // fmt.Printf("ct:%+v\n", ct)
  // fmt.Printf("ct string:%+v\n", bytesToHexstr(ct))// 0x765e1cdb824850e6c8413b26aeee0d77026eb9e7d159ee30c5646ff5685c64890054a2b829bb90dcdc5287ec0b2056823252368544eb5772e4957e0506f28b52f9fa85b142b136f7b6269f58e5aaf5f754c29e9d0dfee8ec2b70f2b82e7df7fd513c979c9f43d927e66d90bcb494e58ffaf11d5de05cfea8329907dc031a25f02df9168952ab1a03ea93d223247e392f193223c5cda6ca43542f63ed5dd54540
  mt, _ := sm2.Decrypt(pri, ct) // [99 56 56 56 99 57 99 101 57 101 48 57 56 100 53 56 54 52 100 51 100 101 100 54 101 98 99 99 49 52 48 97 49 50 49 52 50 50 54 51 98 97 99 101 51 97 50 51 97 51 54 102 57 57 48 53 102 49 50 98 100 54 52 97]
  fmt.Printf("mt:%+v\n", mt)
  // fmt.Printf("mt:%+v\n", bytesToHexstr(mt)) // 0x63383838633963653965303938643538363464336465643665626363313430613132313432323633626163653361323361333666393930356631326264363461
  r, s, _ := sm2.Sign(pri, hashBytes)
  fmt.Printf("r:%+v\n", r) // +47445712827388791104035643654575632542314532676925939574529204593087103787743
  fmt.Printf("s:%+v\n", s) // +105972893736586660297525663934959643182668323900141497328647586071889443556266
  isok := sm2.Verify(&pri.PublicKey, hashBytes, r, s)
  fmt.Printf("isok:%+v\n", isok)
  // 生成65bytes的公钥
  // fmt.Printf("pub byte:%+v\n", pubToPubBytes(&pri.PublicKey)) // [4 152 32 46 239 253 46 241 85 155 223 168 16 73 58 130 114 163 179 53 138 239 213 121 137 170 84 65 21 165 178 213 122 32 65 84 5 28 6 187 24 84 239 68 192 250 8 179 178 81 225 173 64 215 238 66 244 103 172 22 198 68 245 241 130]
  // fmt.Printf("pub string:%+v\n", pubToPubStr(&pri.PublicKey)) // 0x0498202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a204154051c06bb1854ef44c0fa08b3b251e1ad40d7ee42f467ac16c644f5f182
  // 生成33bytes的公钥
  // pubComp := sm2.Compress(&pri.PublicKey)
  // fmt.Printf("pubComp:%+v\n", pubComp) // [2 152 32 46 239 253 46 241 85 155 223 168 16 73 58 130 114 163 179 53 138 239 213 121 137 170 84 65 21 165 178 213 122] // 33
  // fmt.Printf("pubCompStr:%+v\n", bytesToHexstr(pubComp)) // 0x0298202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a
}

func test(priStr string) {
  pri, _ := priStrToPri(priStr)
  ct, _ := sm2.Encrypt(&pri.PublicKey, []byte("123456"))
  fmt.Printf("mt:%+v\n", "123456")
  fmt.Printf("mt:%+v\n", []byte("123456"))
  fmt.Printf("ct:%+v\n", ct)
  fmt.Printf("ct string:%+v\n", string(ct))
}

// 使用sm2
func useSm2() {
  pri, _ := sm2.GenerateKey()
  fmt.Printf("pri:%+v\n", pri)
}

func verifyByPubStr33(pubStr string, hashBytes []byte, r, s *big.Int) {
  pub := pubStrToPub(pubStr)
  // fmt.Printf("pub:%+v\n", pub)
  isok := sm2.Verify(pub, hashBytes, r, s)
  fmt.Printf("isok:%+v\n", isok)
}
func verifyByPubStr65(pubStr string, hashBytes []byte, r, s *big.Int) {
  pubBytes, _ := hexutil.Decode(pubStr)
  // fmt.Printf("pubBytes:%+v\n", pubBytes)
  x, y := elliptic.Unmarshal(sm2.P256Sm2(), pubBytes)
  pub := new(sm2.PublicKey)
  pub.Curve = sm2.P256Sm2()
  pub.X = x
  pub.Y = y
  // fmt.Printf("pub:%+v\n", pub)
  isok := sm2.Verify(pub, hashBytes, r, s)
  fmt.Printf("isok:%+v\n", isok)
}

func bi (str string) *big.Int {
  b, _ := new(big.Int).SetString(str, 10)
  return b
}

func priStrToPri(priStr string) (*sm2.PrivateKey, error) {
  priBytes := common.FromHex(priStr)
  // priv, err := toSm2_c(priBytes, true)
  pri := new(sm2.PrivateKey)
  pri.PublicKey.Curve = sm2.P256Sm2()
  if 8*len(priBytes) != pri.Params().BitSize {
    return nil, fmt.Errorf("invalid length, need %d bits", pri.Params().BitSize)
  }
  pri.D = new(big.Int).SetBytes(priBytes)
  if pri.D.Sign() <= 0 {
    return nil, fmt.Errorf("invalid private key zero or negative")
  }
  pri.PublicKey.X, pri.PublicKey.Y = pri.PublicKey.Curve.ScalarBaseMult(priBytes)
  if pri.PublicKey.X == nil {
    return nil, errors.New("invalid private key")
  }
  return pri, nil
}

func pubToPubBytes(pub *sm2.PublicKey) []byte { // 65
  if pub == nil || pub.X == nil || pub.Y == nil {
    return nil
  }
  return elliptic.Marshal(sm2.P256Sm2(), pub.X, pub.Y)
}

func compressPub(pub *sm2.PublicKey) []byte {
  return sm2.Compress(pub)
}

func pubToPubStr(pub *sm2.PublicKey) string { // 返回65位的pubStr
  return hexutil.Encode(pubToPubBytes(pub))
}

func pubStrToPub(pubStr string) *sm2.PublicKey { // 来自test19
  b, _ := hexutil.Decode(pubStr)
  return sm2.Decompress(b)
}

func bytesToHexstr(b []byte) string {
  return hexutil.Encode(b)
}
func hexStrToBytes(str string) ([]byte, error) {
  return hexutil.Decode(str)
}
```