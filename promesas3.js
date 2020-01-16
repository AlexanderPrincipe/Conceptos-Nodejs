// Promesas, ejecuciones paralelas de tareas

function mensajesPrivados(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('mensajes');
        }, 1500);
    });
}

function fotos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fotos');
        }, 1500);
    });
}

function transacciones(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('transacciones');
        }, 1500);
    });
}

Promise.all( [ mensajesPrivados(), fotos(), transacciones() ] ).then((valores) =>{
    console.log( valores );
})