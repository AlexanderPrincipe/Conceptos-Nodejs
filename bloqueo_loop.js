const fs = require('fs');
var http = require('http');

function leerArchivo(){
    // Mala performance
    //fs.readFileSync('archivo.txt', 'utf8');

    // Mejora el performance
    const streamLectura = fs.createReadStream('archivo.txt', {
        encoding: 'utf-8'
    });
}

http
    .createServer(function(req, res) {
        for (let a = 0; a < 500; a++){
            leerArchivo();
        }

        res.write('Hola Mundo');
        res.end();
    })
    .listen(8000);