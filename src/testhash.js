import {SHA3, Keccak} from 'sha3'
import sm2js from 'sm.js'

const sha512 = new SHA3(512)
const keccak256 = new Keccak(256)
const sha256 = new SHA3(256)

const hashGo = '78e731027d8fd50ed642340b7c9a63b3' // 与go代码里一样的字符串

// sha512.update('foo')
// var h = sha512.digest('hex') // 4bca2b137edc580fe50a88983ef860ebaca36c857b1f492839d6d7392452a63c82cbebc68e3b70a2a1480b4bb5d437a7cba6ecf9d89f9ff3ccd14cd6146ea7e7
// console.log(h)

// keccak256.update('123456')
// var x = keccak256.digest('hex') // c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a
// console.log(x)

// sha256.update('foo')
// h = sha256.digest('hex') // 4bca2b137edc580fe50a88983ef860ebaca36c857b1f492839d6d7392452a63c82cbebc68e3b70a2a1480b4bb5d437a7cba6ecf9d89f9ff3ccd14cd6146ea7e7
// console.log(h)


var str = [1, 2]

var sm3 = sm2js.sm3
var sm3SmjsLi = new sm3();
var a = new sm3()
var b = new sm3()
var c = new sm3()
console.log('sm3SmjsLi', sm3SmjsLi.sum([0,0,0,1]))
// console.log('a', 
// a.write([1])
// a.write([2])
var d = new Uint32Array([0,0,0,1])
console.log(d)
console.log('a', a.sum(d))
// console.log('a', a.sum(null))
// console.log('b', b.sum(str))
// console.log('c', c.sum(null))
// console.log()


// import shajs from 'sha.js'
// console.log(shajs('sha256').update('42').digest('hex')) // 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049 // 64
// console.log(shajs('sha512').update('42').digest('hex')) // 39ca7ce9ecc69f696bf7d20bb23dd1521b641f806cc7a6b724aaa6cdbffb3a023ff98ae73225156b2c6c9ceddbfc16f5453e8fa49fc10e5d96a3885546a46ef4 // 128
// console.log(shajs('sha512').update('4').update('2').digest('hex')) // 39ca7ce9ecc69f696bf7d20bb23dd1521b641f806cc7a6b724aaa6cdbffb3a023ff98ae73225156b2c6c9ceddbfc16f5453e8fa49fc10e5d96a3885546a46ef4 // 128
// console.log(shajs('sha512').update('55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b81') // 64 pri.D
//                            .update('7a4ef5844f07d191bd77f8069af28ca0') // 32 entropy
//                            .update('c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a') // 64 hashStr
//                            .digest('hex')) // fd30f3229aaa010bce47f6f598a61b2bf97e38fad3d5f00dfa54d2b39498ef3b4dcc21d8bc1f83d65a1e32b54fcf83f0d6bc01913716d56a06c9c466a5ca2c27 // 128









// hash前
// 55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b817a4ef5844f07d191bd77f8069af28ca0c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a
// go hash后
// 0xfd30f3229aaa010bce47f6f598a61b2bf97e38fad3d5f00dfa54d2b39498ef3b4dcc21d8bc1f83d65a1e32b54fcf83f0d6bc01913716d56a06c9c466a5ca2c27
// js hash后
// fd30f3229aaa010bce47f6f598a61b2bf97e38fad3d5f00dfa54d2b39498ef3b4dcc21d8bc1f83d65a1e32b54fcf83f0d6bc01913716d56a06c9c466a5ca2c27

// // b4ad711e90a96e405272ae3e06eb857114d4cba1668d463ed851a077f9320dbcea3860b8a456c960177900da790468e9171818c7167a2213ef67de3f3e81a6b4
// // 55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b817d6d5610e2839d6195db17b4d5708a4463383838633963653965303938643538363464336465643665626363313430613132313432323633626163653361323361333666393930356631326264363461





// 0000000000
// 0000000000
// 55c974f17a0b44178d982dcd478150b8a4c0f206f397d7880d06bf5a72932b817a4ef5844f07d191bd77f8069af28ca0c888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000