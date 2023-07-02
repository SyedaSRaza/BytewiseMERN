//console.log(global)

/* const os = require('os')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
 */

const path = require('path')
const {add,sub,mul,div} = require('./math')

console.log(add(2,3))
console.log(sub(2,3))
console.log(mul(2,3))
console.log(div(2,3))

/* console.log(__dirname)
console.log(__filename)
 */

//for basename and extname
/* console.log(path.dirname(__filename))

console.log(path.parse(__filename)) */