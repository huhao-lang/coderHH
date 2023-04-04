const connection = require('../app/database')
const { SERVICE_ERROR } = require('../config/error')

class PermissionService {
  async checkMoment(id, user_id) {
    console.log(id, user_id)
    try {
      const sql = `SELECT * FROM moment WHERE user_id=? AND id=?`
      const [result] = await connection.execute(sql, [
        String(user_id),
        String(id),
      ])
      return !!result.length
    } catch (error) {
      console.log(error)
    }
  }

  async checkResouce() {}
}
module.exports = new PermissionService()
