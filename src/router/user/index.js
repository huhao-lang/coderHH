const KoaRouter = require('@koa/router')
const userRouter = new KoaRouter({ prefix: '/users' })
const { verifyUser } = require('../../middleware/user.middleware')
const userController = require('../../controller/user.controller')
userRouter.post('/', verifyUser, userController.create)

module.exports = {
  userRouter,
}
