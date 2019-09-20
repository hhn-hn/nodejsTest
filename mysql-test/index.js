const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'myblog'
})
// 开始连接
con.connect()

// 执行sql语句
const sql = 'select * from users;'
con.query(sql, (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
})

// 结束连接
con.end()
