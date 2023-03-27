require('colors');

const mostrarMenu = () => {
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
}

module.exports = {
    mostrarMenu
}