//Se declaran valiables de los elementos de la página
const tareasIngresadas = document.getElementById('tareas-ingresadas');
const formularioTareas = document.getElementById('formulario');

//Event listeners

eventListeners();

function eventListeners() {
    formularioTareas.addEventListener('submit', ingresarTarea);
}



//Funciones



//Funcion ingresar tarea
function ingresarTarea(e) {
    e.preventDefault();
    //Se extrae valor de elemento tarea
    const descripcionTarea = document.getElementById('descripcion-tarea').value;

    //Crear boton eliminar
    const botonEliminar = document.createElement('a');
    botonEliminar.classList = 'delete';


    //Crear elemento y añadirlo a la lista de tareas
    const li = document.createElement('li');
    li.innerText = descripcionTarea;

    //añade el botón de borrar a la tarea
    li.appendChild(botonEliminar);

    //Añade la tarea a la lista
    tareasIngresadas.appendChild(li);
}

//Pasos para crear elementos con JavaScript
// 1.- Declarar variables
// 2.- Crear los event listeners
// 3.- Crear las funciones