const fs = require('fs');
const archivo = fs.createWriteStream('archivo.txt');

for (let i=0; i<= 1e6; i++) {
    archivo.write('Lorem ipsum solor sit amet.')
}

archivo.end();