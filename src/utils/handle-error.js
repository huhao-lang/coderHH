const { app } = require('../app')
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  SERVICE_ERROR,
  NAME_IS_NULL,
  PASSWORD_ERROR,
  TOKEN_PAST_DUE,
  USER_JUERISDICTION,
} = require('../config/error')

app.on('error', (err, ctx) => {
  let code = 0
  let message = ''
  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '账号和密码不能为空'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经被占用, 请输入新的用户名~'
      break
    case SERVICE_ERROR:
      code = 500
      message = '服务器错误'
      break
    case NAME_IS_NULL:
      code = 500
      message = '用户名不存在'
      break
    case PASSWORD_ERROR:
      code = 500
      message = '密码错误'
      break
    case TOKEN_PAST_DUE:
      code = 401
      message = '未授权'
      break
    case USER_JUERISDICTION:
      code = -1003
      message = '权限限制'
  }
  ctx.body = { code, message }
})
