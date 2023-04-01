require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log("=======================================".white);
        console.log("              TO-DO LIST              ".blue);
        console.log("         Seleccione una opción        ".green);
        console.log("=======================================\n".white);
    
        console.log(`${'1.'.blue} Crear Tarea`);
        console.log(`${'2.'.blue} Listar Tareas`);
        console.log(`${'3.'.blue} Listar Tareas Completadas`);
        console.log(`${'4.'.blue} Listar Tareas Pendientes`);
        console.log(`${'5.'.blue} Completar Tarea(s)`);
        console.log(`${'6.'.blue} Borrar Tarea`);
        console.log(`${'0.'.blue} Salir \n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question('Seleccione una opción: ', (opc) => {
            readLine.close();
            resolve(opc);
        })
    });

    
}

const pausa = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar...\n`, (opc) => {
            readLine.close();
            resolve();
        })
    });
}

module.exports = {
    mostrarMenu,
    pausa
}