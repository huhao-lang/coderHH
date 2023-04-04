const connection = require('../app/database')
const { SERVICE_ERROR } = require('../config/error')
class UserService {
  async create(ctx, next) {
    const { name, password } = ctx

    const sql = `INSERT INTO user(name,password) VALUES(?,?);`
    try {
      const [values, fields] = await connection.execute(sql, [name, password])
      return values
    } catch (error) {
      ctx.app.emit('error', SERVICE_ERROR, ctx)
    }
  }
  // 查询当前账号是否存在
  async findUserByName(name) {
    const statement = 'SELECT * FROM `user` WHERE name = ?;'
    const [values] = await connection.execute(statement, [name])

    return values
  }
}

module.exports = new UserService()
