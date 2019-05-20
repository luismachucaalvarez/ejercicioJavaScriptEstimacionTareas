//Se declaran valiables de los elementos de la página
const tareasIngresadas = document.getElementById('tareas-ingresadas');

const formularioTareas = document.getElementById('formulario');

//Event listeners

eventListeners();

function eventListeners() {
    formularioTareas.addEventListener('submit', ingresarTarea);

    //Eliminar tarea ingresada
    tareasIngresadas.addEventListener('click', borrarTarea);
}



//Funciones



//Funcion ingresar tarea
function ingresarTarea(e) {
    e.preventDefault();
    //Se extrae valor de elemento tarea
    const descripcionTarea = document.getElementById('descripcion-tarea').value;
    const estimacionTarea = document.getElementById('estimacion-tarea').value;

    //Crear boton eliminar
    const botonEliminar = document.createElement('a');
    botonEliminar.classList.add('delete', 'is-small', 'borrar-tarea');


    //Crear elemento y añadirlo a la lista de tareas
    const li = document.createElement('li');
    li.innerText = descripcionTarea + ", Estimación: " + estimacionTarea;

    //añade el botón de borrar a la tarea
    li.appendChild(botonEliminar);

    //Añade la tarea a la lista
    tareasIngresadas.appendChild(li);
}


function borrarTarea(e){
    e.preventDefault();
    if(e.target.className === 'delete is-small borrar-tarea'){
        // console.log('Funciona');
        console.log(e.target.parentElement.remove());
        alert('Tarea eliminada');
    }
}

//Pasos para crear elementos con JavaScript
// 1.- Declarar variables
// 2.- Crear los event listeners
// 3.- Crear las funciones