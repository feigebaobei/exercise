import tokenSDKClient from 'token-sdk-client'
import utils from './util'

// console.log(tokenSDKClient)


var hashStr = '64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107' // keccak('123')
var priStr = '4d8126a957af5a3fbfc3e5125dafcc72fab20a15ee71174a21e37ce88b7d0124'

main()
function main () {
  test0()
}
function test0() {
  let keys = tokenSDKClient.sm2.genKeyPair(priStr)
  let sign = keys.signDebug(hashStr)
  console.log('keys', keys, keys.pri.toString())
  console.log('sign', sign)

  console.log('entropy', utils.arrToHexStr([116, 13, 166, 254, 32, 55, 42, 37, 36, 123, 172, 6, 0, 56, 176, 55]))
}



