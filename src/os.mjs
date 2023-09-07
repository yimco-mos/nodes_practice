/*
metodos para ver memoria y otra in fo de la pc

const os = require('node:os')


console.log('information')

console.log('informacion del sisttema operativo: ',os.platform());
console.groupCollapsed('version del sis opetc:' , os.release());
console.log('arch: ',os.arch());
console.log('cpus',os.cpus());
console.log('memoria libre: ',os.freemem()/1024/1024);
console.log('informacion de todo: ',os.totalmem()/1024/1024)
console.log('uptime',os.uptime()/68/68)

*/

import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./src/arch.txt", "utf-8"),
  readFile("./src/arch2.txt", "utf-8"),
]).then(([txt, sectxt]) => {
  console.log("primer treto: ", txt);
  console.log("second text: ", sectxt);
});
