import colors from 'colors';
import { 
    inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
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
        tareas.cargarTareasFromArray(tareasDB)
    }


    do {
        opc = await inquirerMenu();
       
        switch(opc){
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                //console.log(tareas.ListadoArr);
                tareas.listar();
                break;
            case '3':
                // Listar tareas completadas
                tareas.listarPorEstado(true);
                break;
            case '4':
                tareas.listarPorEstado(false);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.ListadoArr);

                if(id == '0') break;
                
                const confirmed = await confirmar('Confirmar Operación: ')

                if (confirmed){
                    tareas.borrarTarea(id);
                    console.log('Tarea Eliminada'.red)
                }
                break;
        }

        
        guardarDB(tareas.ListadoArr)

        if(opc !== '0') await pausa();

    } while (opc !== '0');

}

main();