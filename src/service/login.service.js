const connection = require('../app/database')
const { SERVICE_ERROR } = require('../config/error')
class LoginService {
  async login(ctx, next) {
    const { name, password } = ctx
    const sql = `SELECT * FROM user WHERE name=? and password=?`
    try {
      const [result] = await connection.execute(sql, [name, password])
      return result
    } catch (error) {
      ctx.app.emit('error', SERVICE_ERROR, ctx)
    }
  }
}

module.exports = new LoginService()
