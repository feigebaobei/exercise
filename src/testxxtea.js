import _ from 'lodash'
import md5 from 'md5'
// import sm from "./testsm"
// import xxtea from "../lib/xxtea"
// import xxtea from "./xxtea"
import xxtea from 'xxtea'
// var xxtea = require('xxtea');

// console.log(xxtea)

// // demo
var pass = 'a123456'
var obj = "tcjxEu4efY0SlzLBBFR5uqYl+R7nV+fjoHldOWlsLaZ+kwL+QcMvEiStoNQRZ5d3o7DfHBxnCfwHeddBbMLX9V4LKi4oeV9S0RWtwmnyFnMw3ugftZleJekAFCrCpW88UAebYAJkq274GSQMp58czSCUq5Sz+mzYxGqz6C3RezN7Tiwd2jUGWQ=="
// var encrypted = xxtea.encrypt(obj, pass)
// console.log(encrypted)
// var decrypted = xxtea.decrypt(encrypted, pass)
// var decrypted = xxtea.decrypt(encrypted, pass)
var decrypted = xxtea.decrypt(obj, pass)
console.log(decrypted)

//
// let data = "{\"encrypted_cpk\":\"/lVSUC1tcJ9rDRiJDU5EMoBUCiSMywcaCEKybx0ljNhPHOEyloQOUiFTUSQSIbvLCjdr944kPYVVIRHTc9O5s7rFRFDWPm+2BbP/lQxiB9yQkoRvwlObKf2WEeo7QV4CCqS6h1E04Au+Aybn16LIP5PY19KAQZ7ULhVbJKU0zRjZlyov1Fau7jTWpThIKL7MsesDfmfDHXZoKg1yDFeeLdqv97BDvya0M+MG/3cH64dW11QxG9xhDtSkqINVGOEvDxB+ihJCz2tgcdkwYcnnvAMqgRrahoh6TzC07y+KQy+nfKVUJb6ydkVsJmvaTRFF1g/kOrPfUuoFQkK+HY0YVenB9onfeKoV0SlkDKOQ3ROP0Lhr+27JZSIq/HRB5D0/Z52JwwaFTn9UCKvxWsLDIXuzJUU6OZEjNQ7zEbte+wBDnKhBHcYgvtFcpORNa8QOYD2dOcfHtzAVybXT/33BBBt0cUeltE+zJlqeZBapVS9IveyQOLdZuCWl5T94Gs7jbBj5Q+9I1QaJlgVu+ktnfoJfl4+hktjgbRO+zP1BbhZl1po7sYIyBj9bIyJ4CpVr5BjMrA2FDbxlHCO2C6ltHcV6JPwOreHjXgM7k5TADIiPOKlNjOplWX1w/KYobFdOC2L+nRAI+18ZxN0Vf2wBNaQSFolbG4303PZMyAqnmQ4saIuw7vQDOwiuJ/iLlVU9GMgUJAYay4csyPmW5Jgu/g==\",\"encrypted_dpk\":\"W9CodgdqaRGsHQyVK51ZxClZA9wccjIIjyP55YXFMWO2Zg3h/KYUGEcWunequonWdr9Lx9551Dn7ishHkpCE0MVKApfOoRpWq6UFWhPpzhrhwxV86Wfl4PTOnIm4MofqL/HILz4+HrF9+j5Thwkz3JDzsdgxIy9GEKwKMt1Ftx+PGxGKpvrqt6r4QMvnfuSqgOC1Jrwhx0s1LZB4f0W5++AIoaBtbTNlHc93bA==\",\"encrypted_phone\":\"zSYsvmeCJ2LuMeimUsTT4A==\",\"encrypted_pwd\":[[{\"keyId\":\"v1\",\"no\":\"0\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000011\",\"value\":\"EFrrqDX9HJMOhFm/6C2reQ==\"},{\"keyId\":\"v1\",\"no\":\"1\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000013\",\"value\":\"HOKlh0eDm7PUUjGL2c16xQ==\"},{\"keyId\":\"v1\",\"no\":\"2\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000012\",\"value\":\"OLpOLui0TeHchShfKorNNQ==\"}],[{\"keyId\":\"v1\",\"no\":\"0\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000012\",\"value\":\"SYhCu9w5EBYWJfqwoHVfFg==\"},{\"keyId\":\"v1\",\"no\":\"1\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000013\",\"value\":\"HOKlh0eDm7PUUjGL2c16xQ==\"},{\"keyId\":\"v1\",\"no\":\"2\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000013\",\"value\":\"+92Il+qC0bqpBQWCeJb8ZQ==\"}]]}"
// // let data = "{\"encrypted_cpk\":\"/lVSUC1tcJ9rDRiJDU5EMoBUCiSMywcaCEKybx0ljNhPHOEyloQOUiFTUSQSIbvLCjdr944kPYVVIRHTc9O5s7rFRFDWPm+2BbP/lQxiB9yQkoRvwlObKf2WEeo7QV4CCqS6h1E04Au+Aybn16LIP5PY19KAQZ7ULhVbJKU0zRjZlyov1Fau7jTWpThIKL7MsesDfmfDHXZoKg1yDFeeLdqv97BDvya0M+MG/3cH64dW11QxG9xhDtSkqINVGOEvDxB+ihJCz2tgcdkwYcnnvAMqgRrahoh6TzC07y+KQy+nfKVUJb6ydkVsJmvaTRFF1g/kOrPfUuoFQkK+HY0YVenB9onfeKoV0SlkDKOQ3ROP0Lhr+27JZSIq/HRB5D0/Z52JwwaFTn9UCKvxWsLDIXuzJUU6OZEjNQ7zEbte+wBDnKhBHcYgvtFcpORNa8QOYD2dOcfHtzAVybXT/33BBBt0cUeltE+zJlqeZBapVS9IveyQOLdZuCWl5T94Gs7jbBj5Q+9I1QaJlgVu+ktnfoJfl4+hktjgbRO+zP1BbhZl1po7sYIyBj9bIyJ4CpVr5BjMrA2FDbxlHCO2C6ltHcV6JPwOreHjXgM7k5TADIiPOKlNjOplWX1w/KYobFdOC2L+nRAI+18ZxN0Vf2wBNaQSFolbG4303PZMyAqnmQ4saIuw7vQDOwiuJ/iLlVU9GMgUJAYay4csyPmW5Jgu/g==\",\"encrypted_dpk\":\"W9CodgdqaRGsHQyVK51ZxClZA9wccjIIjyP55YXFMWO2Zg3h/KYUGEcWunequonWdr9Lx9551Dn7ishHkpCE0MVKApfOoRpWq6UFWhPpzhrhwxV86Wfl4PTOnIm4MofqL/HILz4+HrF9+j5Thwkz3JDzsdgxIy9GEKwKMt1Ftx+PGxGKpvrqt6r4QMvnfuSqgOC1Jrwhx0s1LZB4f0W5++AIoaBtbTNlHc93bA==\",\"encrypted_phone\":\"zSYsvmeCJ2LuMeimUsTT4A==\",\"encrypted_pwd\":[[{\"keyId\":\"v1\",\"no\":\"0\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000011\",\"value\":\"EFrrqDX9HJMOhFm/6C2reQ==\"},{\"keyId\":\"v1\",\"no\":\"1\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000013\",\"value\":\"HOKlh0eDm7PUUjGL2c16xQ==\"},{\"keyId\":\"v1\",\"no\":\"2\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000012\",\"value\":\"OLpOLui0TeHchShfKorNNQ==\"}],[{\"keyId\":\"v1\",\"no\":\"0\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000012\",\"value\":\"SYhCu9w5EBYWJfqwoHVfFg==\"},{\"keyId\":\"v1\",\"no\":\"1\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000013\",\"value\":\"HOKlh0eDm7PUUjGL2c16xQ==\"},{\"keyId\":\"v1\",\"no\":\"2\",\"serviceDid\":\"did:ttm:186495f7da296bf880df3a2200000000000000000000000000000013\",\"value\":\"+92Il+qC0bqpBQWCeJb8ZQ==\"}]]}"
// data = JSON.parse(data)
// console.log(data)
// console.log(data.encrypted_phone)
// console.log(typeof(data.encrypted_phone))
// // var encrypted = xxtea.encrypt(data.encrypted_phone, '111111a')
// // var encrypted = xxtea.encrypt(data, '111111a')
// // console.log(encrypted)
// // var decrypted = xxtea.decrypt(pass, '111111a')
// // // var decrypted = xxtea.decrypt(encrypted, '111111a')
// // var decrypted = xxtea.decrypt(data, '111111a')
// var decrypted = xxtea.decrypt('data.encrypted_phone', '1111112345ya')
// console.log(`str${decrypted}str`)



// var pass = '111111a'
// let key = md5(pass) // 49dec5fb8af4eeef7c95e7f5c66c8ae6
// console.log(key)//
// // var pwd = key.split('').slice(7, 16).join()
// var pwd = key.slice(8, 8+16)
// console.log(pwd)

// var decrypted = xxtea.decrypt(data, '8af4eeef7c95e7f5')
// // var decrypted = xxtea.decrypt(data.encrypted_phone, '8af4eeef7c95e7f5')
// console.log(`str${decrypted}str`)


// // md5('111111a').slice(7, 16)