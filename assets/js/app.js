//Se declaran valiables de los elementos de la página
const tareasIngresadas = document.getElementById('tareas-ingresadas');
const formularioTareas = document.getElementById('formulario');

//Event listeners

eventListeners();

function eventListeners() {
    formularioTareas.addEventListener('submit', ingresarTarea);

    //Eliminar tarea ingresada
    tareasIngresadas.addEventListener('click', borrarTarea);

    //contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
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

    //Se manda parámetros de tarea al Local Storage
    escribirTareaLocalStorage(descripcionTarea, estimacionTarea);
}


function borrarTarea(e) {
    e.preventDefault();
    //Aplicamos event delegation
    if (e.target.className === 'delete is-small borrar-tarea') {
        e.target.parentElement.remove();
        borrarTareaLocalStorage(e.target.parentElement.innerText);
    }
}

//Con esta función vamos a escribir las tareas al LocalStorage
function escribirTareaLocalStorage(descripcionTarea, estimacionTarea) {
    let descripciones;
    let estimaciones;
    descripciones = obtenerDescripcionesTareasLocalStorage();
    estimaciones = obtenerEstimacionesTareasLocalStorage();

    //Se añade la nueva tarea
    descripciones.push(descripcionTarea);
    estimaciones.push(estimacionTarea);

    //Se convierte de string a arreglo para Local Storage
    localStorage.setItem('descripciones', JSON.stringify(descripciones));
    localStorage.setItem('estimaciones', JSON.stringify(estimaciones));
}

//Esta función comprueba que haya elementos en LocalStorage de Descripciones, retorna un arreglo
function obtenerDescripcionesTareasLocalStorage() {
    let descripciones;

    //Si no hay elementos en el arreglo se creará un arreglo vacio
    if (localStorage.getItem('descripciones') === null) {
        descripciones = [];
    } else {
        //Si hay elementos se creara un arreglo de las descripciones, con formato JSON
        descripciones = JSON.parse(localStorage.getItem('descripciones'));

    }
    return descripciones;
}

//Esta función comprueba que haya elementos en LocalStorage de estimaciones, retorna un arreglo
function obtenerEstimacionesTareasLocalStorage() {
    let estimaciones;
    if (localStorage.getItem('estimaciones') === null) {
        estimaciones = [];
    } else {
        estimaciones = JSON.parse(localStorage.getItem('estimaciones'));
    }
    return estimaciones;
}


//Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let descripciones;
    let estimaciones;
    descripciones = obtenerDescripcionesTareasLocalStorage();
    estimaciones = obtenerEstimacionesTareasLocalStorage();
    //Recorrerá cada uno de los elementos del array para mostrarlo en el div
    descripciones.forEach(function(descripcion, estimacion) {
        //Crear boton eliminar
        const botonEliminar = document.createElement('a');
        botonEliminar.classList.add('delete', 'is-small', 'borrar-tarea');

        //Crear elemento y añadirlo a la lista de tareas
        const li = document.createElement('li');
        li.innerText = descripcion + ", Estimación: " + estimacion;
        li.appendChild(botonEliminar);
        tareasIngresadas.appendChild(li);
    });
}

//Elimina tarea de Local Storage
function borrarTareaLocalStorage(tarea) {

    let tareas, borrarTarea;
    console.log(tarea);

}



//Pasos para crear elementos con JavaScript
// 1.- Declarar variables
// 2.- Crear los event listeners
// 3.- Crear las funciones
// 4.- Para las funciones de borrar, es aconsejable realizar event delegation para así no eliminar elementos no relacionados por accidente
// 5.- Al crear las funciones de guardado, es aconsejable guardar con formato JSON.
// 6.- Para recuperar la información de cada elemento, también se debe crear una condicional para evitar sobreescritura de datos.