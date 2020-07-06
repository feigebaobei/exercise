// import sm2js from './sm.js'
import util from './util.js'
import {SHA3, Keccak} from 'sha3'


// var hash = new Keccak(256)

// // var h = hash.sum('123')
// console.log(hash.update('123'))
// console.log(hash.digest('123'))



// import { Keccak } from 'sha3';

const hash = new Keccak(256);
// console.log(hash.update('123'))
// console.log(hash.update('123'))
// console.log(hash.digest('hex'))

// hash.reset()
hash.update('姓名0x410a60f1ec9deb2c916a637b7fc7ec295df48691a09d033f54739ce12ef91776性别0x3413fb3605a3d7a620f5891017e81860d27d81ce788d9907bf22f4f3daa99fdb民族0x363d6e42116600da7d5cfb99ef1852dc1ec9d489cb55cfd1954e6a381e4177f3出生日期0x486fda22a5572cc309f32a37f70cebc75aa0fb216f676342960d147f031c33c7住址0x8d930e748a4a72d6b0bfec4cf79cd9b11311cd9493a05e774e442c1abc2fb9a8公民身份号码0xbf947516265e26d05b8f5b7b2a5003cf2daf1c44c34f2d82d05471fc367b95e7签发机关0x7feb3bfbbe77d8ae7dbc762810deb152e4313baf36be063529b037f65b4fdb34开始时间0x3bd0d3a143ee9e05654d385c5e9ffc37d354af967a9337e59a59284238f80207结束时间0x245aa940916f04dd64c2ca6d507c0f012d539f591d2b568cabf5b37dfd37fc36')
console.log(hash.digest('hex'))


console.log(util.strHexToBytes('64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107'))

