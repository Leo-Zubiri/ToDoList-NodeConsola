import colors from 'colors';
import { inquirerMenu, pausa} from './helpers/inquirer.js'
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';
//const {mostrarMenu,pausa} = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let opc = '';

    do {
        opc = await mostrarMenu();
        opc = await inquirerMenu();
        console.log(opc);

        // const tarea = new Tarea('Nueva Tarea');
        // const tareas = new Tareas();
        // tareas[tarea.id] = tarea;

        // console.log(tarea);
        // console.log(tareas);

        if(opc !== '0') await pausa();

    } while (opc !== '0');

}

main();