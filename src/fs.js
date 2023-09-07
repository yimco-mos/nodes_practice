const fs = require ('node:fs')



//const states = fs.statSync('./src/arch.txt')

/** 
 * 
 * 

const data = {
        
    file:states.isFile(),
    directorio:states.isDirectory(),
    simbolo:states.isSymbolicLink(),
    tamaño:states.size
    }

    * **/




//lectura sincrona del archivo txt
   
//console.table(data)

//---------------------------------->>>>>>>>>>>>>>>>


const txt = fs.readFileSync('./src/arch.txt', 'utf-8')

console.log('primer archivo', txt)


console.log('accioness')

console.log('leyendo segundo archivo')
const sectxt = fs.readFileSync('./src/arch2.txt','utf-8')
console.log('luego esto: ',sectxt)


