const fs = require('fs');
const util = require('util');

// fs.writeFile('archivo.txt', '123456789', () =>{
//    console.log("ok");
 //})

// convertir a promesas, ya que utiliza callbacks
const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa('archivo.txt', '123456789')
    .then(() => {
        console.log("ok")
    })
    .catch(() => {
        console.log("error")
    })