const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
} = require('../config/error')

const { findUserByName } = require('../service/user.service')
const verifyUser = async (ctx, next) => {
  // 验证客户端传递过来的user是否可以保存到数据库中
  // 1.验证用户名和密码是否为空
  const { name, password } = ctx.request.body
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  const result = await findUserByName(name)
  if (result.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
  }
  await next()
}
module.exports = {
  verifyUser,
}
