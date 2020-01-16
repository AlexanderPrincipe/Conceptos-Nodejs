const fs = require('fs');
const { Duplex } = require('stream');

const streamLectura = fs.createReadStream( "archivo.txt" );
const streamEscritura = fs.createWriteStream( "archivo2.txt" );

const reporte = new Duplex({
    write(data, encode, callback){
        console.log(data)
        callback();
    },
    read(size){}
});

streamLectura.pipe(reporte).pipe(streamEscritura);