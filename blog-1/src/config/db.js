const env = process.env.NODE_ENV

let MYSQL_CONF = {}

if (env === 'dev') {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblogs'
  }
}
if (env === 'production') {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblogs'
  }
}

module.exports = { MYSQL_CONF }
