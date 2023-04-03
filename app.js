import colors from 'colors';
import { inquirerMenu, pausa} from './helpers/inquirer.js'
//const {mostrarMenu,pausa} = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let opc = '';

    do {
        //opc = await mostrarMenu();
        opc = await inquirerMenu();
        console.log(opc);

        if(opc !== '0') await pausa();

    } while (opc !== '0');

}

main();