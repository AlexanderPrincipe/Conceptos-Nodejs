const fs = require('fs');

const streamLectura = fs.createReadStream( "archivo.txt" );
const streamEscritura = fs.createWriteStream( "archivo2.txt" );

streamLectura.pipe(streamEscritura);

streamLectura.on("end", () =>{
    console.log("proceso finalizado");
});