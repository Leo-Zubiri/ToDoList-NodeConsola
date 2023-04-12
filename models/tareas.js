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

    listar(){
        this.ListadoArr.forEach((tarea,index) => {
            console.log(`${index+1}. ${tarea.desc} | ${tarea.completadoEn ? 'Completada'.green: 'Pendiente'.red}`)
        })
    }

    listarPorEstado(completadas = true){
        let i = 0;
        this.ListadoArr.forEach((tarea,i) => {

            if(completadas){
                if(tarea.completadoEn){
                    i++;
                    console.log(`${i}. ${tarea.desc} | ${tarea.completadoEn + ''.green}`)
                }
            }else{
                if(!tarea.completadoEn){
                    i++;
                    console.log(`${i}. ${tarea.desc} | ${'Pendiente'.red}`)
                }
            }
        })
    }
}

export default Tareas;