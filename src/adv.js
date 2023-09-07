const fs = require('node:fs/promises')


const folder = process.argv[2] ?? '.'

fs.readdir(folder)
  .then((txt) => {
    txt.forEach((tx) => {
        console.log(tx);
    });
  }).catch((err) => {
    if (err) {
      console.log("error: ", err);
      
      return
    }
  });
  console.log('el directorio es: ',process.cwd())
  