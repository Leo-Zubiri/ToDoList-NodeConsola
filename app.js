require('colors');
const {mostrarMenu,pausa} = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let opc = '';

    do {
        opc = await mostrarMenu();
        if(opc !== '0') await pausa();
    } while (opc !== '0');

}

main();