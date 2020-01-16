const fs = require('fs');
const streamEscritura = fs.createWriteStream('archivo.txt');
const EventEmitter = require('events');

class Emisor extends EventEmitter {}

const miEmisor = new Emisor();

function escribirEnArchivo() {

    var iteraciones = 5;

    for (var i = 0; i < iteraciones; i++) {
        streamEscritura.write(i + '\n');
    }
    streamEscritura.write('===== FIN =====');
    streamEscritura.end();
}

function notificarPorCorreo() {
    console.log('preparando correo');

    setTimeout(() => {
        miEmisor.emit("correo Ok");
    },1000)
}

function leerDocumento() {

    fs.readFile('archivo.txt', (error, documento) => {
        console.log(documento.toString())
    });
}


streamEscritura.on('close', () => {
    notificarPorCorreo();
});

miEmisor.on('correo Ok', () => {
    leerDocumento();
})

escribirEnArchivo();









