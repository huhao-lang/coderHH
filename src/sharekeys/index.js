const fs = require('fs')
const path = require('path')
function resolve(url) {
  return path.resolve(__dirname, url)
}
const privateKey = fs.readFileSync(resolve('./private.key'))
const publicKey = fs.readFileSync(resolve('./public.key'))

module.exports = {
  privateKey,
  publicKey,
}
