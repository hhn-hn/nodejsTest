const { exec } = require('../db/mysql')
// 获取博客列表
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  return exec(sql)
}

// 获取博客详情
const detail = id => {
  let sql = `select id from blogs where id='${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

// 新建一篇博客
const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性
  // debugger
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createtime = Date.now()

  let sql = `insert into blogs (title, content, createtime, author) values ('${title}','${content}','${createtime}','${author}');`
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId // 表示新建博客，插入到数据库里面的id
    }
  })
  
}

// 更新一篇博客
const update = (id, blogData = {}) => {
  // id是要更新博客的id，blogData是一个博客对象
  const title = blogData.title
  const content = blogData.content
  let sql = `update blogs set title='${title}', content='${content}' where id=${id};`
  return exec(sql).then(updataData => {
    if (updataData.affectedRows > 0) {
      return true
    }
    return false
  })
}

// 删除一篇博客
const delBlog = (id, author) => {
  // id 是需要删除的博客 id
  let sql = `delete from blogs where id=${id} and author='${author}';`
  return exec(sql).then(delData => {
    if (delData.affectedRows > 0) {
      return true
    }
    return false
  })
}
module.exports = {
  getList,
  detail,
  newBlog,
  update,
  delBlog
}
