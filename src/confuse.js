// import utils from './util.js'

let imgUrl = '@/images/business_license.jpeg'
// imgUrl = 'http://lixiaodan.org/images/business_license.jpeg'
// // let b = utils.getImgBase64(imgUrl)
// utils.getImgBase64(imgUrl).then(response => {
//   console.log('response', response)
// })
// // console.log(b)



function getImgBase64(imgUrl) {
  var base64 = ''
  let img = new Image()
  img.src = imgUrl
  img.onload = () => {
    let canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    var ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, img.width, img.height)
    let dataURL = canvas.toDataURL('image/png')
    // base64 = dataURL
    console.log(dataURL)
    return dataURL
  }
  // return new Promise(resolve => {
  //   resolve(img.onload())
  // })
}

getImgBase64(imgUrl)