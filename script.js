import { barcelona, roma, paris, londres } from './cuidades.js';


let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');
let botonElemento= document.getElementById('boton');


//agregar el evento click a cada enlace

enlaces.forEach(function (enlace) {

    enlace.addEventListener('click', function () {
        //remover activo de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        })
        //agregar el activo al elemento actual
        this.classList.add('active')

        //traer informacion del objeto correspondiente 
        let contenido = obtenerContenido(this.textContent)

        //mostrar contenido
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

        botonElemento.style.display =  'block'

    });
});

//traer la informacion correcta desde cuidades.js

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
};
