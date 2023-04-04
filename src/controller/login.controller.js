// const userService = require('../service/user.service')
const userLogin = require('../service/login.service')
const { privateKey } = require('../sharekeys/index')
const jwt = require('jsonwebtoken')
const { PASSWORD_ERROR } = require('../config/error')
class UserController {
  async login(ctx, next) {
    // 1.获取用户传递过来信息
    const user = ctx.request.body
    // 2.将user信息存储到数据库中
    const [result] = await userLogin.login(user)
    // 查询条数为空或者密码不一致
    if (!result || result.password !== user.password) {
      ctx.app.emit('error', PASSWORD_ERROR, ctx)
    } else {
      const token = jwt.sign(result, privateKey, {
        expiresIn: 1000,
        algorithm: 'RS256',
      })
      ctx.body = {
        message: '用户登录成功~',
        code: 200,
        data: {
          token,
          userInfo: {
            user_id: ctx.userInfo.id,
            name: ctx.userInfo.name,
          },
        },
        // data: result,
      }
    }
  }
}

module.exports = new UserController()
