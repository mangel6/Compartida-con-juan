console.log("Conected");

//Importacion de archivos Js

//Constantes y variables

let contactos = []; //vector
let data = {}; //objeto literal
let formulario = document.querySelector(".formulario");
console.log(formulario);

//Funciones
const mostrarMensaje = (mensaje, error = null) => {

    let alerta = document.createElement("p");
    alerta.innerHTML = mensaje;
    if(error){
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto");
    }
    
    formulario.appendChild(alerta);

    setTimeout(() =>{
        alerta.remove();
    },3000);
    
}
//Funciones Flechas
const validarFormulario = (e) => {
    e.preventDefault();
    console.log("Validar Formulario");

    let nombre = document.querySelector("#nombre").value;

    let telefono = document.querySelector("#telefono").value;

    let correo = document.querySelector("#correo").value;

    let mensaje = document.querySelector("#mensaje").value;

    if ([nombre, telefono, correo, mensaje].includes("")) {
       mostrarMensaje("Todos los campos son obligatorios",true);
        return;
    }

    mostrarMensaje("Enviando la informacion a la base de datos");


    datos = {
        //se puede obviar el nombre de la clave si el id se llama igual a la clave que le queremos poner
        "nombre": nombre,
        "telefono" : telefono,
        "correo" : correo,
        "mensaje" : mensaje
    }
    contactos.push(datos);
    console.log(contactos);
    formulario.reset();
    console.out("hola");
}
//Programa principal

//Escuchador de eventos
formulario.addEventListener("submit", validarFormulario);
