const http = require('node:http')
const { findAdvPort } = require('./port.js')


const server = http.createServer((req,res)=>{
    console.log('req resolved')
    res.end('hola mundo')  
})

findAdvPort(0).then(port=>{
    server.listen(port,()=>{
        console.log(`server is runnig on port http://locaalhost:${port}`)
    })
})
