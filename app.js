import colors from 'colors';
import { 
    inquirerMenu, 
    pausa,
    leerInput,
} from './helpers/inquirer.js'
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';
import { guardarDB,leerDB } from './helpers/guardarArchivo.js';
//const {mostrarMenu,pausa} = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let opc = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if(tareasDB){
        // Establecer las tareas
    }

    await pausa()

    do {
        opc = await inquirerMenu();
       
        switch(opc){
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.ListadoArr);
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
        }

        
        guardarDB(tareas.ListadoArr)

        if(opc !== '0') await pausa();

    } while (opc !== '0');

}

main();