const connection = require('../app/database')
const { SERVICE_ERROR } = require('../config/error')
class MomentService {
  async create(ctx, next) {
    const { content, user_id } = ctx
    const sql = `INSERT INTO moment(content,user_id) VALUES(?,?)`
    try {
      const [result] = await connection.execute(sql, [content, user_id])
      return result
    } catch (error) {
      // ctx.app.emit('error', SERVICE_ERROR, ctx)
    }
  }
  async query(size = 10, offset = 0) {
    const sql = `SELECT a.id,a.content,JSON_OBJECT('user_id',a.user_id,'createAt',a.createAt,'updateAt',a.updataAt,'name',b.name) AS userInfo FROM moment a LEFT JOIN user b ON a.user_id=b.id LIMIT ? OFFSET ?`
    try {
      const [result] = await connection.execute(sql, [
        String(size),
        String(offset),
      ])
      return result
    } catch (error) {
      console.log(error)
      // ctx.app.emit('error', SERVICE_ERROR, ctx)
    }
  }
  async detail(id) {
    const sql = `SELECT a.id,a.content,JSON_OBJECT('user_id',a.user_id,'createAt',a.createAt,'updateAt',a.updataAt,'name',b.name) AS userInfo FROM moment a LEFT JOIN user b ON a.user_id=b.id WHERE a.id=?`
    try {
      const [result] = await connection.execute(sql, [id])
      return result
    } catch (error) {
      console.log(error)
      // ctx.app.emit('error', SERVICE_ERROR, ctx)
    }
  }
  async update({ id, content }) {
    const sql = `UPDATE moment SET content=? WHERE id=?`
    try {
      const [result] = await connection.execute(sql, [content, id])
      return result
    } catch (error) {
      console.log(error)
      // ctx.app.emit('error', SERVICE_ERROR, ctx)
    }
  }
  async remove(id) {
    const sql = `DELETE FROM moment WHERE id=?`
    try {
      const [result] = await connection.execute(sql, [id])
      console.log(result)
      return result
    } catch (error) {
      console.log(error)
      // ctx.app.emit('error', SERVICE_ERROR, ctx)
    }
  }
}

module.exports = new MomentService()
