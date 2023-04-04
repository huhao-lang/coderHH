const KoaRouter = require('@koa/router')
const userRouter = new KoaRouter({ prefix: '/users' })
const {
  verifyUser,
  handlePassword,
} = require('../../middleware/user.middleware')
const userController = require('../../controller/user.controller')
userRouter.post('/', verifyUser, handlePassword, userController.create)

module.exports = userRouter
