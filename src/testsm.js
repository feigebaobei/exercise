import md5 from 'md5'
import sm2 from 'sm2'
import sm2js from 'sm.js'
import BN from "bn.js"
import crypto from 'crypto'
// import randomBytes from 'randomBytes'
// var sm2 = require('sm.js').sm2;
import {SHA3, Keccak} from 'sha3'

const randomBytes = crypto.randomBytes



main()
function main() {
  var msg = '123456'
  var msgMd5 = md5(msg) // e10adc3949ba59abbe56e057f20f883e
  var hashGo = '78e731027d8fd50ed642340b7c9a63b3' // 与go代码里一样的字符串
  hashGo = 'c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a' // 与go代码里一样的字符串
  // var hashGo = '1234rt' // 与go代码里一样的字符串
  // console.log('msgMd5', msgMd5)
  const keccak256 = new Keccak(256)
  keccak256.update(msg)
  var hash = keccak256.digest('hex')
  // console.log('msg hash', hash) // c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a

  // exersm2()
  // exersm2js()
  // priToPub()
  var priKeyString = '55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81'
  // var priKeyString = '648f97994e3e6fe0fdeba88111e78fb91a7a3d15d5326d132208e8dadfb6901b'
  var keyes = createKeyes(priKeyString)
  console.log('keyes', keyes)
  // console.log('keyes.curve.g.mul(k);', keyes.pub.getX())
  console.log('pub compress', keyes.pubToString('compress')) // 0298202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a
  console.log('pub string', keyes.pubToString()) // 0298202eeffd2ef1559bdfa810493a8272a3b3358aefd57989aa544115a5b2d57a
  // console.log('pub string', keyes.pubToString()) // 使用04开头
  // console.log('pub byte', keyes.pubToBytes()) // 使用0x04开头
  var signRes = signfn(keyes, hashGo)
  verifyfn(keyes, hashGo, signRes.r ,signRes.s)
}
function exersm2() {
  var ec = new KJUR.crypto.ECDSA({ "curve": curve });
  var keypair = ec.generateKeyPairHex();
  console.log("ec: ", ec)
  console.log("keypair: ", keypair)
  var privateKey = keypair.ecprvhex;
  var publickey = keypair.ecpubhex;
  console.log("privateKey: ", privateKey)
  console.log("publickey: ", publickey)
  var encryptData = sm2Encrypt("hello world", publickey);
  var decryptData = sm2Decrypt(encrypData, privateKey);
  console.log("encryptData: ", encryptData)
  console.log("decryptData: ", decryptData)

  // privateKey: 54232 d8aaa3209ee123e07c34314e50e29fbb941496f92e219eb62c5bd40d968

  // publickey: 044 a77c33fa976ddab1d8e2ad05694f01151ed39892832947fbcb4a89199db72bc5db91b29616009f0b504459ad72f97b078cf35aebd32b6066003dd81db9a3244


  // encryptData: 04193e23 bd85dcaae13f0a7d2abf90459710942f98f9813536019d282ed5466c81efed9573da77bf69c1c3c9e3eaff0316abe3581fab08f1897b969fe1d0dd520e7797ffaa2005daa993d9b94171137970e25bf7b5c84b7e39d3a2fd95cecdac780ea3c706a64315e6b06e8f


  // decryptData: hello world
}
function exersm2js() {
  var sm2 = sm2js.sm2
  var keyes = sm2.genKeyPair();
  console.log("密钥对：", keyes)
  // console.log("密钥对：", JSON.stringify(keyes))
  let [pubKeyString, pubKeyBytyesCompress, pubKeyBytyesNoCompress, pubKeyBytyesMex] = [keyes.pubToString(), keyes.pubToBytes('compress'), keyes.pubToBytes('nocompress'), keyes.pubToBytes('mex')]
  // console.log("pubKeyString", pubKeyString)
  // console.log("pubKeyBytyesCompress", pubKeyBytyesCompress)
  // console.log("pubKeyBytyesNoCompress", pubKeyBytyesNoCompress)
  // console.log("pubKeyBytyesMex", pubKeyBytyesMex)
  // var key = new sm2.SM2KeyPair(pubKeyString);
  // console.log('key', key)
  // signature
  var msg = 'Tongji Fintech Research Institute'
  // var msg = '123456'
  // var msg = ''
  var signature = keyes.sign(msg) // keyes 里有私钥。
  // var signature = key.sign(msg) // key 里没有私钥。
  console.log("signature", signature)
  if (keyes.verify(msg, signature.r), signature.s) {
    console.log("pass verify.")
  }
  // console.log("r", strToBytes(signature.r))
  // console.log("s", strToBytes(signature.s))
  // console.log("r", new BN(signature.r, 10))
  // console.log("s", new BN(signature.s, 10))

  // var sm3 = sm2js.sm3
  // // var msg = 'abc';
  // var hash = new sm3();
  // var digest = hash.sum(msg);
  // // var digest = hash.sum("123456");
  // console.log("msg hash: ", digest)
  console.log(keyes.toString())
  // console.log(keyes.pri.toString())
  // console.log(keyes.pri.toString(16))
  // console.log(keyes.pubToString())
  // keyes里的pri是大数。keyes.toString()：得到公钥的x/y转换为16进制的字符串。私钥转换为16进制的字符串，若不够64位，则用0在开头补够。
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

// 使用私钥生成公钥
function priToPub(pri) {
  let str16 = getRandomBytes(16) // str16 uint8Array
  let str = str16.toString('hex') // eg: 21c70c4aede244f27b4af01cb0cee522
  console.log('str16', str16)
  console.log('str', str)
  let s = uint8ArrayToString(str16) // eg: åÐJ£î¿¡&è8À?L
  console.log('s', s)
  console.log('s.length', s.length)
}
// 生成指定长度的bytes
function getRandomBytes (n) {
  return randomBytes(n)
  // let [rb16, rb32, rb64] = [randomBytes(16), randomBytes(32), randomBytes(64)]
  // console.log('rb16', rb16)
  // console.log('rb32', rb32)
  // console.log('rb64', rb64)
}

function uint8ArrayToString(fileData){
  var dataString = "";
  for (var i = 0; i < fileData.length; i++) {
    dataString += String.fromCharCode(fileData[i]);
  }
  return dataString
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
  let signRes = keyes.sign(msg)
  console.log('加签结果：', signRes)

  console.log('适用于go环境的加签结果r：', biTo10(signRes.r))
  console.log('适用于go环境的加签结果s：', biTo10(signRes.s))

  return signRes
}

function verifyfn(keyes, msg, r, s) {
  let res = keyes.verify(msg, r, s)
  console.log('验签结果：', res)
}

function biTo10 (str) {
  // str = 'd98d9a131862b1dbaece45fb8e3674fa4f42eac0265543a04c0068248ed8c63b'
  // console.log('from biTo10', str)
  return new BN(str, 16).toString(10)
}
