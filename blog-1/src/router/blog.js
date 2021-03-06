const {
  getList,
  detail,
  newBlog,
  update,
  delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const id = req.query.id

  // 获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    // 获取作者名，如果为空就返回空
    const author = req.query.author || ''
    // 获取关键字，如果为空就返回空
    const keyword = req.query.keyword || ''
    // 定义常量接收数据
    const result = getList(author, keyword)
    return result.then(listData => {
      // 通过 SuccessModel 创建一个模型
      return new SuccessModel(listData)
    })
    
  }
  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    // const data = detail(id)
    // return new SuccessModel(data)
    const result = detail(id)
    result.then(data => {
      return new SuccessModel(data)
    })
  }
  // 新建一篇博客
  if (method === 'POST' && path === '/api/blog/new') {
    const blogData = req.body
    blogData.author = 'zhangsan'
    const result = newBlog(blogData)
    // return blogData
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  // 更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    const result = update(id, req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
  }
  // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/del') {
    const id = req.query.id
    const author = 'zhangsan'
    const result = delBlog(id, author)
    return result.then(data => {
      if (data) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter
