const mysql = require('mysql')
const { MYSQL_CONF } = require('../config/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)
// 开始连接
con.connect()

// 统一执行sql的函数
function exec(sql) {
  const promese = new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) {
        console.log(err)
        return
      }
      resolve(res)
    })
  })
  return promese
}

module.exports = { exec }
