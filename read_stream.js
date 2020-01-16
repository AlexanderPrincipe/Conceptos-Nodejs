const fs = require('fs');

const streamLectura = fs.createReadStream('archivo.txt', {
    encoding: 'utf-8'
});

streamLectura.on('open', () => {
    console.log('Abriendo archivo')
}).on('data', () => {
    console.log('----')
}).on('close', () => {
    console.log('Archivo cerrado')
}).on('error', () => {
    console.log('error en el archivo')
})