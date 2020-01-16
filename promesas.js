const promesasNode = require('fs').promises;

promesasNode.copyFile("archivo.txt", "archivo2.txt")
            .then(() => console.log("copia terminada"))
            .catch(() => console.log("No se puede copiar el archivo"))
            .finally(() => console.log("..."))