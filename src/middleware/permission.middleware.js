const permissionService = require('../service/permission.service')
const { USER_JUERISDICTION } = require('../config/error')
const verifyPermission = async (ctx, next) => {
  const { id } = ctx.request.body
  const user_id = ctx.user.id
  const result = await permissionService.checkMoment(id, user_id)
  if (result) {
    await next()
  } else {
    ctx.app.emit('error', USER_JUERISDICTION, ctx)
  }
}

module.exports = {
  verifyPermission,
}
