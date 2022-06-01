const { join, resolve } = require('path')

console.log(join('a', '/b', 'c'))
console.log(resolve('a', '/b', 'c'))
