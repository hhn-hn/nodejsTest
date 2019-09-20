const { add, mul } = require('./a')

const num = add(10, 5)
const res = mul(10, 5)

console.log(num)
console.log(res)

const _ = require('lodash')

var arr = _.concat([1, 2], 3)
console.log('arr...', arr)
