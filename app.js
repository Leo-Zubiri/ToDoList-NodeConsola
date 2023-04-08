import colors from 'colors';
import { 
    inquirerMenu, 
    pausa,
    leerInput,
} from './helpers/inquirer.js'
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';
//const {mostrarMenu,pausa} = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let opc = '';
    const tareas = new Tareas();

    do {
        opc = await inquirerMenu();
       
        switch(opc){
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas._listado);
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
        }

        

        if(opc !== '0') await pausa();

    } while (opc !== '0');

}

main();