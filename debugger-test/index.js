// 引用了node自带的http模块
const http = require('http')
// 通过http模块创建了一个服务
const server = http.createServer((req, res) => {
  // 返回的是一个200 返回格式是html的格式
  res.writeHead(200, { 'content-type': 'text/html' })
  // 返回的内容是h1标签
  res.end('<h1>hello world</h1>')
})
// 开始监听 3000 端口
server.listen(3000, () => {
  console.log('listening on 3000 port')
})
