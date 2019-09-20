// nodejs读取文件
const fs = require('fs')
const path = require('path')

// callback 方式获取一个文件的内容
// function getFileContent(fileName, callback) {
//   const fullFileName = path.resolve(__dirname, 'files', fileName)
//   fs.readFile(fullFileName, (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     callback(JSON.parse(data.toString()))
//     // callback()
//   })
// }

// 这种形式的东西就是 callback-hell 回调地狱
// getFileContent('a.json', aData => {
//   console.log(aData)
//   getFileContent(aData.next, bData => {
//     console.log(bData)
//     getFileContent(bData.next, cData => {
//       console.log(cData)
//     })
//   })
// })

// 用 promise 方式解决回调地狱
function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        console.log(err)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
  return promise
}

getFileContent('a.json')
  .then(aData => {
    console.log(aData)
    return getFileContent(aData.next)
  })
  .then(bData => {
    console.log(bData)
    return getFileContent(bData.next)
  })
  .then(cData => {
    console.log(cData)
  })
