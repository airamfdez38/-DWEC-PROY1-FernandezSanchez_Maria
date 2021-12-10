// Declaración de variables

let title = document.getElementById('listado_title');

/**
 * Función que al pasar el ratón por encima del título cambia el color del texto
 * @param -
 * @author María Fernández
 * @date 2021/12/09
 */

function changeColor(){
    title.style.color = 'red';
}

/**
 * Función que al sacar el ratón del título devuelve el texto a su color original
 * @param -
 * @author María Fernández
 * @date 2021/12/09
 */
function resetColor(){
    title.style.color = 'green';
}

// Delegación de eventos

let lista = document.getElementById('lista');
let btnAgregar = document.getElementById('btnAgregar');

lista.childNodes.forEach((elemento) => {
    elemento.addEventListener('click', (e) =>{
        console.log(e.target);
    });
});



