import axios from 'axios'

axios.get('http://127.0.0.1:9876/news').then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
})