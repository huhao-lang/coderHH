const Koa = require('koa')

const app = new Koa()
const { userRouter } = require('../router/user')
const { LoginRouter } = require('../router/login')
const registerRouters = require('../router')
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())
// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())
// app.use(LoginRouter.routes())
// app.use(LoginRouter.allowedMethods())
registerRouters(app)
// const KoaRouter = require('@koa/router')

module.exports = {
  app,
}
