'use strict';

//Declaración de variables
let products = document.querySelectorAll('.product');

// Bucle para introducir a cada elemento el icono de basura

for(let i = 0; i < products.length; i++){

    products[i].insertAdjacentHTML("afterbegin", '<i class="fas fa-trash-alt"></i>'); //Incluir icono por cada producto.
    products[i].firstChild.onclick = () => products[i].remove();//Eliminar producto al hacer click sobre el icono.
}

/**
 * Función para aumentar el tamaño de la imagen al pasar el ratón sobre ella
 * @param -elem (imagen por la que se pasa el ratón)
 * @author María Fernández 
 * @date 2021/12/08
 */

function makeBig(elem) {
    elem.style.width = "120%";
    elem.style.height = "120%";
}

/**
* Función para devolver la imagen a su tamañoo inicial al pasar el ratón sobre la misma
* @param -elem (imagen por la que se pasa el ratón)
* @author María Fernández 
* @date 2021/12/08
*/
  
function resize(elem) {
    elem.style.width = "100%";
    elem.style.height = "100%";
    
}