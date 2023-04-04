const KoaRouter = require('@koa/router')
const momentRouter = new KoaRouter({ prefix: '/moment' })
const { verifyAuth } = require('../../middleware/login.middleware')
const momentController = require('../../controller/moment.controller')
const { verifyPermission } = require('../../middleware/permission.middleware')
momentRouter.post('/', verifyAuth, momentController.create)
momentRouter.get('/list', verifyAuth, momentController.query)
momentRouter.get('/:momentId', verifyAuth, momentController.detail)
momentRouter.delete('/:momentId', verifyAuth, momentController.remove)
momentRouter.post(
  '/update',
  verifyAuth,
  verifyPermission,
  momentController.update
)
module.exports = momentRouter
