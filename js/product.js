'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
   loadProductById(getIdFromUrl())

});

//Declaración de variables

let stock;
let valor = document.getElementById("counter").innerHTML

/**
 * Función para obtener el id de la url del producto
 * @param -0
 * @returns producto
 * @author María Fernández
 * @date 2022/01/07
 */

function getIdFromUrl(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('id')
    return product;
}

/**
 * Función para cargar un producto por medio de su id
 * @param -id
 * @author María Fernández
 * @date 2022/01/07
 */

function loadProductById(id){
   new Promise(function(resolve, reject) { // Objeto Promise

        const xhr = new XMLHttpRequest(); // Objeto XMLHttpRequest
        xhr.open('GET', `https://apiqr.happycoding.es/product/${id}`);
        xhr.onload = function() {
          if (this.status == 200 && this.readyState === 4)  {//Cuando la  promesa pasa a estado de resuelta
              resolve(xhr.response);
              const data = JSON.parse(this.response);
              console.log(data);
                //Pintar el listado en el HTML
            stock = data.stock;
            document.title = `${data.name} - ${data.description_short}`
            document.querySelector('#slider_hoodies').innerHTML = `<img src="${data.img_featured}" class = "img_size">`;
            document.querySelector('#title').innerHTML = `${data.name}`;
            document.querySelector('#description').innerHTML = `${data.description_short}`;
            document.querySelector('#price').innerHTML = `${data.price} €`;
            document.querySelector('#stock').innerHTML = `${data.stock} uds.`;
              
          } else {
              reject(Error(xhr.statusText));//cuando la promesa está en estado de rechazada
          }
        };
        xhr.onerror = function() {
            reject(Error('Algo no ha salido bien!!!'));
        };
        xhr.send();
})
}

/**
 * Función para aumentar o disminuir unidades de compra
 * @param -0
 * @author María Fernández
 * @date 2022/01/07
 */
function more(){
    if(valor < stock ){
        valor++;
        document.getElementById("counter").innerHTML = valor;
    }
}
function less(){  
    if(valor > 0 ){
        valor--;
        document.getElementById("counter").innerHTML = valor;
    }
}
