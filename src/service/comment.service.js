const connection = require('../app/database')

class CommentService {
  async create(info) {
    const { content, moment_id, user_id } = info
    const sql = `INSERT INTO comment(content,moment_id,user_id) VALUES(?,?,?)`
    const [result] = await connection.execute(sql, [
      content,
      String(moment_id),
      String(user_id),
    ])
    return result
  }
  async reply(info) {
    const { content, moment_id, user_id, comment_id } = info
    const sql = `INSERT INTO comment(content,moment_id,user_id,comment_id) VALUES(?,?,?,?)`
    const [result] = await connection.execute(sql, [
      content,
      String(moment_id),
      String(user_id),
      String(comment_id),
    ])
    return result
  }
}

module.exports = new CommentService()
