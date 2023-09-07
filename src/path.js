const path = require ('node:path')



//separador de carpetas segun sis operative
//console.log(path.sep)

const sep = path.sep


const filepath = path.join(`${sep} content`,'folder','subfolder')
const basepath = path.basename('yimco/process/portfolio.txt')
const name = path.basename('yimco/process/portfolio.txt', '.txt')
const filename = path.extname('image.jpg')


console.log(filepath)
console.log(basepath)
console.log(name)
console.log(filename)
