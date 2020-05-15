import {Base64} from 'js-base64'

let udid = 'did:ttm:u043829681e922731094502ebffdf1f10389c3ad11c8a67847c68f0482e608'
let ct = Base64.encode(udid)
console.log('ct', ct)
let mt = Base64.decode(ct)
console.log('mt', mt)
