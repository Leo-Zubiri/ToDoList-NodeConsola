import inquirer from 'inquirer';
 
import colors from 'colors';


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log("=======================================".white);
    console.log("              TO-DO LIST              ".blue);
    console.log("         Seleccione una opción        ".green);
    console.log("=======================================\n".white);

    const opt = await inquirer.prompt(preguntas)
    const {opcion} = opt;
    return opcion;
}

const pausa = async() => {
    console.log('\n')
    await inquirer.prompt({
        type: 'input',
        name: 'continuar',
        message: `Presione ${'ENTER'.green} para continuar...\n`,
    })
}

const leerInput = async(mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async (tareas=[]) => { 
    const choices = tareas.map((tarea,i) => {

        return {
            value: tarea.id,
            name: `${i+1}. ${tarea.desc}`
        }
    })

    // Agregar al inicio del arreglo
    choices.unshift({
        value: '0',
        name: '0. Cancelar'.yellow
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas)
    return id;
}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'confirmed',
            message
        }
    ]

    const {confirmed} = await inquirer.prompt(question);

    return confirmed;
}


const listadoCheckList = async (tareas=[]) => { 
    const choices = tareas.map((tarea,i) => {

        return {
            value: tarea.id,
            name: `${i+1}. ${tarea.desc}`,
            checked: tarea.completadoEn ? true:false
        }
    })

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccion: ',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(preguntas)
    return ids;
}

export {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoCheckList
}