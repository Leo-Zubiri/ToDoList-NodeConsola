import colors from 'colors';
import { inquirerMenu } from './helpers/inquirer.js'
//const {mostrarMenu,pausa} = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let opc = '';

    do {
        //opc = await mostrarMenu();
        opc = await inquirerMenu();

    } while (opc !== '0');

}

main();