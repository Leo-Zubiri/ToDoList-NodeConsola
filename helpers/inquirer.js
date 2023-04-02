import inquirer from 'inquirer';
 
import colors from 'colors';


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: ['op1','op2','op3']
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log("=======================================".white);
    console.log("              TO-DO LIST              ".blue);
    console.log("         Seleccione una opción        ".green);
    console.log("=======================================\n".white);

    const opt = await inquirer.prompt(preguntas)

    return opt;
}

export {
    inquirerMenu
}