const { app } = require('../app')
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
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
  }
  ctx.body = { code, message }
})
