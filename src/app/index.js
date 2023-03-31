const Koa = require('koa')

const app = new Koa()
const { userRouter } = require('../router/user')
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
// const KoaRouter = require('@koa/router')

module.exports = {
  app,
}
