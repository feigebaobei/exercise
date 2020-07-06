import sm2js from './sm.js'
import util from './util.js'

// var sm2 = sm2js.sm2
var sm3 = sm2js.sm3

var hash = new sm3;
var h = hash.sum('claim_sn=0xf8e82013a882a00b75511f3988c1b58c5ac718be32dd27e8ea0ed1f78e93e024,templateId=0xd74c92c0fe1f03b7b34a1ee2256bb48df13c44accaf0a02330f4b08e46ddb315,hashCont=0xee13bcefe5e19a501ecfa41f30ad5f279349ba2493d0440333bddb3cdc2dfec7,did=did:ttm:a0e01cb27c8e5160a907b1373f083af3d2eb64fd8ee9800998ecf8427eab11,name=plainadid,explain=签发身份证的固定字段,expire=1618934400000')
console.log(h)


// console.log(util.strHexToBytes('64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107'))


// { "title": "身份证书", "id": "t008", "type": "identify", "label": "身份证书", "background": "http://localhost:9876/images/bYOICidm04GJMZeb.png", "example": "http://localhost:9876/images/certifySale.jpeg", "keys": { "name": { "type": "text", "label": "姓名", "name": "name", "default": "", "index": 0 }, "gender": { "type": "radio", "label": "性别", "name": "gender", "default": "", "options": ["男", "女"], "index": 1 }, "nation": { "type": "text", "label": "民族", "name": "nation", "default": "", "index": 2 }, "birthday": { "type": "date", "label": "出生日期", "name": "birthday", "default": "", "index": 3 }, "nativePlace": { "type": "text", "label": "住址", "name": "nativePlace", "default": "", "index": 4 }, "identidy": { "type": "text", "label": "公民身份号码", "name": "identidy", "default": "", "index": 5 } }, "desc": "姓名$name$性别$gender$民族$nation$出生日期$birthday$住址$nativePlace$公民身份号码$identidy$" }