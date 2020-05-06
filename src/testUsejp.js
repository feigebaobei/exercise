import testJsonRpc from './testJsonRpc'

testJsonRpc.fn()
testJsonRpc.getPubByDid('did:ttm:u0ece7b787c097d55b87d4c01efae0fbe6a27b10cec8a67847c68f0482a8dc')
  .then((res) => {
    console.log('res', res)
  })
  .catch((err) => {
    console.log('err', err)
  })
