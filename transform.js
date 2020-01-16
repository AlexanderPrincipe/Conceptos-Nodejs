// Transforma a mayuscula el texto de archivo.txt y lo copia a archivo2.txt

const fs = require('fs');
const { Transform } = require('stream');

const streamLectura = fs.createReadStream( "archivo.txt" );
const streamEscritura = fs.createWriteStream( "archivo2.txt" );

streamLectura.setEncoding("utf8");


const filtro = new Transform({

    writableObjectMode: true, 
    transform( data, encoding, callback ){
        this.push(data.toString().toUpperCase())
        callback();
    },
    final(callback){
        callback();
    }
})

streamLectura.pipe(filtro).pipe(streamEscritura);