
const net = require('node:net');



/*
//utilizando medodo http----->>>>>>

const http= require('node:http')


const server= http.createServer((req,res)=>{
    res.end('hola mundo')
    console.log('req recibida')
})


server.listen(0,()=>{
    console.log(`server listeningin on port http://localhost:${server.address().port} `)
})*/



//funcion para controlar un servidor

const findAdvPort = ( desPort)=>{

      
    return new Promise((res,rej)=>{
  const server = net.createServer();

        server.listen(desPort,()=>{
            const{ port }= server.address()
            server.close(()=>{
                res(port)
                console.log(port)
            })

        })

  server.on('error',()=>{
            if(err.code == 'EADDRINUSE'){
                res(findAdvPort(0).then(port=>res(port)))
            }
            else{
                rej(err)
            }
        })
    })

      
}

module.exports = {findAdvPort}