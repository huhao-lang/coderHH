const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NULL,
  TOKEN_PAST_DUE,
} = require('../config/error')
const jwt = require('jsonwebtoken')
const { publicKey } = require('../sharekeys/index')
const { findUserByName } = require('../service/user.service')
const verifyUser = async (ctx, next) => {
  // 验证客户端传递过来的user是否可以保存到数据库中
  // 1.验证用户名和密码是否为空
  const { name, password } = ctx.request.body
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  const result = await findUserByName(name)
  ctx.userInfo = result[0]
  if (result.length <= 0) {
    return ctx.app.emit('error', NAME_IS_NULL, ctx)
  }
  await next()
}
const verifyAuth = async (ctx, next) => {
  let token = ctx.request.header.authorization
  try {
    token = token.replace('Bearer ', '')
    const result = jwt.verify(token, publicKey, {
      algorithm: 'RS256',
    })
    ctx.user = result
  } catch (error) {
    return ctx.app.emit('error', TOKEN_PAST_DUE, ctx)
  }
  await next()
}
module.exports = {
  verifyUser,
  verifyAuth,
}
