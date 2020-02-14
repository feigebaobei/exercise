import _ from 'lodash'
import md5 from 'md5'
import sm2 from 'sm2'
import sm2js from 'sm.js'
// var sm2 = require('sm.js').sm2;
function component() {
  const element= document.createElement('div')
  // console.log(_)
  // console.log(md5)
  // console.log(md5('1234'))
  element.innerHTML = _.concat(['hello'], [' str '], ['webpack'], [' ']).join('')
  return element
}
document.body.appendChild(component())

main()
function main() {
  console.log("main start!")
  // exersm2()
  exersm2js()
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
  let [pubKeyString, pubKeyBytyesCompress, pubKeyBytyesNoCompress, pubKeyBytyesMex] = [keyes.pubToString(), keyes.pubToBytes('compress'), keyes.pubToBytes('nocompress'), keyes.pubToBytes('mex')]
  console.log("pubKeyString", pubKeyString)
  console.log("pubKeyBytyesCompress", pubKeyBytyesCompress)
  console.log("pubKeyBytyesNoCompress", pubKeyBytyesNoCompress)
  console.log("pubKeyBytyesMex", pubKeyBytyesMex)
  var key = new sm2.SM2KeyPair(pubKeyString);
  console.log('key', key)
  // signature
  var msg = 'Tongji Fintech Research Institute'
  var signature = keyes.sign(msg) // keyes 里有私钥。
  // var signature = key.sign(msg) // key 里没有私钥。
  console.log("signature", signature)
  if (keyes.verify(msg, signature.r), signature.s) {
    console.log("pass verify.")
  }
}