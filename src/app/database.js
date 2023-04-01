const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'person',
  password: 'huhao',
  connectionLimit: 10,
})
// 获取数据库连接是否成功
pool.getConnection((error, connection) => {
  // 是否有错误信息
  if (error) {
    console.log('获取连接失败~', err)
    return
  }
  // 2.获取connection, 尝试和数据库建立一下连接
  connection.connect((err) => {
    if (err) {
      console.log('和数据库交互失败', err)
    } else {
      console.log('数据库连接成功, 可以操作数据库~')
    }
  })
})
const connection = pool.promise()
module.exports = connection
