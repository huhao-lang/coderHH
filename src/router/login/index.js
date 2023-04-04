const KoaRouter = require('@koa/router')
const LoginRouter = new KoaRouter({ prefix: '/login' })
const { verifyUser, verifyAuth } = require('../../middleware/login.middleware')
const userController = require('../../controller/login.controller')
LoginRouter.post('/', verifyUser, userController.login)
LoginRouter.get('/test', verifyAuth, (ctx, next) => {
  ctx.body = '允许访问'
})
module.exports = LoginRouter
