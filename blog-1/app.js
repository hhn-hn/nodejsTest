const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')
const querystring = require('querystring')

// 处理postData
const getPostData = req => {
  const promise = new Promise((resolve, reject) => {
    // 如果不是post请求，就返回空
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    // 如果格式不是json格式，就返回空
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    // 如果不是以上两种情况，执行以下代码
    let postData = '' // 定义postData接收参数
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      // 如果没有参数返回空
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')

  // 解析query
  req.query = querystring.parse(req.url.split('?')[1])

  getPostData(req).then(postData => {
    req.body = postData

    // 处理博客类的接口
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        res.end(JSON.stringify(blogData))
      })
      return
    }
    // 处理登录类的接口
    const userResult = handleUserRouter(req, res)
    if (userResult) {
      userResult.then(userData => {
        res.end(JSON.stringify(userData))
      })
      return
    }

    // 未命中路由返回 404
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('404 Not Found\n')
    res.end()
  })
}

module.exports = serverHandle

// const resData = {
//   name: '双越100',
//   site: 'imooc',
//   env: process.env.NODE_ENV
// }

// res.end(JSON.stringify(resData))
