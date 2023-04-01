const connection = require('../app/database')

class UserService {
  async create(ctx, next) {
    const { name, password } = ctx

    const sql = `INSERT INTO user(name,password) VALUES(?,?);`
    const [values, fields] = await connection.execute(sql, [name, password])
    console.log(values)
    return values
  }
  // 查询当前账号是否存在
  async findUserByName(name) {
    const statement = 'SELECT * FROM `user` WHERE name = ?;'
    const [values] = await connection.execute(statement, [name])
    return values
  }
}

module.exports = new UserService()
