// import tokenSDKClient from 'token-sdk-client'
// import crypto from 'crypto'
// import eccrypto from 'eccrypto'
import utils from './util'
import { ecsign, isValidSignature, keccak256 } from 'ethereumjs-util'
import {SHA3, Keccak, SHAKE} from 'sha3'

// tokenSDKClient.ecdsa.test()

// let priv = eccrypto.generatePrivate()
// let hs = '64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107'
// console.log('priv', priv)

// var str = "message to sign";
// // Always hash you message to sign!
// var msg = crypto.createHash("sha256").update(str).digest();
// console.log('msg', msg)

// eccrypto.sign(priv, msg).then(sign => {
//   console.log('sign', sign)
// }).catch(error => {
//   console.log('error', error)
// })

import * as eccryptoJS from 'eccrypto-js'
// const length = 32;
// const key = eccryptoJS.randomBytes(length)
// console.log(key)

// aes
// const key = eccryptoJS.randomBytes(32);
// const iv = eccryptoJS.randomBytes(16);

// const str = 'test message to encrypt';
// const msg = eccryptoJS.utf8ToBuffer(str);

// // const ciphertext = await eccryptoJS.aesCbcEncrypt(iv, key, msg);

// // const decrypted = await eccryptoJS.aesCbcDecrypt(iv, key, ciphertext);
// console.log(msg)
// eccryptoJS.aesCbcEncrypt(iv, key, msg).then(response => {
//   // console.log(response)
//   return eccryptoJS.aesCbcDecrypt(iv, key, response)
// }).then(response => {
//   console.log(response)
// })
// // console.log(ciphertext)
// // console.log(decrypted)


// hmac
// const key = eccryptoJS.randomBytes(32);
// const iv = eccryptoJS.randomBytes(16);
 
// const macKey = eccryptoJS.concatBuffers(iv, key);
// const str = 'test message to encrypt';
// const msg = eccryptoJS.utf8ToBuffer(str);
// const dataToMac = eccryptoJS.concatBuffers(iv, key, msg);
// // console.log(macKey)
// // console.log(dataToMac)
 
// eccryptoJS.hmacSha256Sign(macKey, dataToMac).then(response => {
//   console.log(response)
//   return eccryptoJS.hmacSha256Verify(macKey, dataToMac, response)
// }).then(response => {
//   console.log(response)
// })
 

// sha2
// 异步方法
// SHA256
// 必须使用buffer
// let str = 'test message to hash';
// let msg = eccryptoJS.utf8ToBuffer(str);
// // const hash = await 
// eccryptoJS.sha256(msg).then(response => {
//   console.log(response)
// })
 
// // SHA512
// str = 'test message to hash';
// msg = eccryptoJS.utf8ToBuffer(str);
// // const hash = await 
// eccryptoJS.sha512(msg).then(response => {
//   console.log(response)
// })


// sha3
// 异步方法
// SHA3
// let str = 'test message to hash';
// let msg = eccryptoJS.utf8ToBuffer(str);
// let hash = ''
// // let hash = await 
// // const 
// hash = eccryptoJS.sha3(str);
// // 传入string / buffer结果一样
// console.log(hash)
// // eccryptoJS.sha3(str).then(response => {
// //   console.log(response)
// // })
 
// // // KECCAK256
// // str = 'test message to hash';
// // msg = eccryptoJS.utf8ToBuffer(str);
// hash = eccryptoJS.keccak256(msg)
// // 传入string / buffer结果一样
// console.log(hash)


// ecdas
// let keyPair = eccryptoJS.generateKeyPair();
// let str = 'test message to hash';
// let msg = eccryptoJS.utf8ToBuffer(str);
// // let hash = ''
// eccryptoJS.sha256(msg).then(response => {
//   console.log('hs', response) // hash
//   console.log('keys', keyPair, keyPair.publicKey)
//   let sig = eccryptoJS.sign(keyPair.privateKey, response)
//   console.log('sign', sig)
//   console.log(!eccryptoJS.verify(keyPair.publicKey, response, sig))
//   // return eccryptoJS.verify(keyPair.publicKey, response, sig) // 若通过验签则返回null.否则返回'bad sign'
// })


// // // 使用ethereumjs-util里的ecsign
// // console.log(Keccak)
// let priv = '4d8126a957af5a3fbfc3e5125dafcc72fab20a15ee71174a21e37ce88b7d0124'
// priv = utils.hexStrToArr(priv)
// // console.log(priv)
// let privOp = new Uint8Array(priv)
// console.log('privOp', privOp)
// let hash = new Keccak(256)
// hash.update('123')
// let msgHash = hash.digest('hex')
// msgHash = new Uint8Array(utils.hexStrToArr(msgHash))
// console.log('msgHash', msgHash, utils.arrToHexStr(msgHash))

// let t = ecsign(msgHash, privOp)// keyPair.privateKey)
// console.log('t', t, '0x' + utils.arrToHexStr(t.r) + utils.arrToHexStr(t.s) + t.v)
// function append(buf, data, idx) {
//   for (let i = 0; i < data.length; i++) {
//     buf[idx + i] = data[i]
//   }
//   return buf
// }
// let data = new Buffer(65)
//   append(data, sign.r, 0)
//   append(data, sign.s, 32)
//   data[64] = sign.v

// // let isok = isValidSignature(t.v, t.r, t.s)
// let isok = isValidSignature(data.)
// console.log('isok', isok)




// ecdsa签名算法，已验证
// msg: 字符串
// privKey: 16进制字符串
// export 
// let s = sign('123', '0x4d8126a957af5a3fbfc3e5125dafcc72fab20a15ee71174a21e37ce88b7d0124')
// let msg = 'hello'
let msg = 'claim_sn=0xf8e82013a882a00b75511f3988c1b58c5ac718be32dd27e8ea0ed1f78e93e024,templateId=0xd74c92c0fe1f03b7b34a1ee2256bb48df13c44accaf0a02330f4b08e46ddb315,hashCont=0xee13bcefe5e19a501ecfa41f30ad5f279349ba2493d0440333bddb3cdc2dfec7,did=did:ttm:a0e01cb27c8e5160a907b1373f083af3d2eb64fd8ee9800998ecf8427eab11,name=plainadid,explain=签发身份证的固定字段,expire=1618934400000'
// msg = '123'
// let priv = '0x4d8126a957af5a3fbfc3e5125dafcc72fab20a15ee71174a21e37ce88b7d0124'
let priv = '0xcf0fbbdac3353253cec457a81a560d916bfb229a710774747e29f0ff1c1daa59'
// let msgHash = keccak256(Buffer.from(msg, 'utf8'))
// console.log('msgHash', msgHash, msgHash.toString('hex'))
console.log('sign', sign(msg, priv))
// console.log('sign', sign(msg, priv))

function sign(msg, privKey) {
  console.log('msg', msg)
  console.log('privKey', privKey)
  let priv = null;
  if (typeof privKey === 'string' && privKey.slice(0, 2) === '0x') {
    priv = Buffer.from(privKey.slice(2), 'hex');
  }

  // let msgHash = keccak256(Buffer.from(msg, 'ascii'));
  let msgHash = keccak256(Buffer.from(msg, 'utf8'));
  console.log('msgHash', msgHash, utils.arrToHexStr(msgHash))

  // console.log("msg hash: ", msg, Buffer.from(msg, 'ascii'), msgHash);
  // 签名
  let sig = ecsign(msgHash, priv);

  let data = new Buffer(65);
  append(data, sig.r, 0);
  append(data, sig.s, 32);
  data[64] = sig.v;
  // console.log("signature: ", data.toString('hex'));
  return "0x" + data.toString('hex');
}

function append(buf, data, idx) {
  for (let i = 0; i < data.length; i++) {
    buf[idx + i] = data[i];
  }
  return buf;
}

// verifySign(sign(msg, priv))
function verifySign (signEcdsaRes) {
  // let isok = isValidSignature(t.v, t.r, t.s)
  if (signEcdsaRes.slice(0, 2) === '0x') {
    signEcdsaRes = signEcdsaRes.slice(2)
  }
  let [v, r, s] = [signEcdsaRes.slice(0, 2), signEcdsaRes.slice(2, 66), signEcdsaRes.slice(66)]
  let isok = isValidSignature(v, r, s)
  console.log('isok', isok)
}