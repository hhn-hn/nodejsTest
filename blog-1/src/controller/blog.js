// 获取博客列表
const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1546610491112,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1546610999999,
      author: 'lisi'
    }
  ]
}

// 获取博客详情
const detail = id => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1546610491112,
      author: 'zhangsan'
    }
  ]
}

// 新建一篇博客
const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性
  return {
    id: 3 // 表示新建博客，插入到数据库里面的id
  }
}

// 更新一篇博客
const update = (id, blogData = {}) => {
  // id是要更新博客的id，blogData是一个博客对象
  return true
}

// 删除一篇博客
const delBlog = id => {
  // id 是需要删除的博客 id
  return true
}
module.exports = {
  getList,
  detail,
  newBlog,
  update,
  delBlog
}
