import Tarea from "./tarea.js";

class Tareas {
    _listado = {}

    constructor() {
        this._listado = {};
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }   

    cargarTareasFromArray(tareas = []) {
        tareas.forEach((tarea) => { 
            this._listado[tarea.id] = tarea
        })
    }

    get ListadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado;
    }
}

export default Tareas;