const fs = require("node:fs");
/*
fs.stat('')
fs.readFile(".")
  .then((txt) => {
    txt.forEach((tx) => {
      console.log(tx);
    });
  })

  .catch((err) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
  });

  */ 

  console.log('directorio',process.cwd())

  console.log(process.env.yimco)


  console.log(process.argv)
