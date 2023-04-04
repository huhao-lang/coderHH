const fs = require('fs')
const path = require('path')
function registerRouters(app) {
  const file = fs.readdirSync(__dirname)
  for (let i = 0; i < file.length; i++) {
    if (file[i].endsWith('.js')) continue
    const router = require(`${path.resolve(__dirname, file[i])}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  }
}

module.exports = registerRouters
