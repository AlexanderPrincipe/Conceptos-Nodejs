const fs = require('fs');

var contenido = "1234567890";
var iteraciones = 15;

for (var i = 0; i < iteraciones; i++) {
    contenido += contenido;
}

fs.writeFile("archivo2.txt", contenido, () => {
    console.log("escritura directa finalizada");
});

const streamEscritura = fs.createWriteStream("archivo.txt");

streamEscritura.write(contenido, res => {
    console.log("stream finalizado");
});