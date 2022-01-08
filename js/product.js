'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
   loadProductById(getIdFromUrl())

});



let stock;
let valor = document.getElementById("counter").innerHTML


function getIdFromUrl(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('id')
    return product;
}
function loadProductById(id){
   new Promise(function(resolve, reject) { // Objeto Promise

        const xhr = new XMLHttpRequest(); // Objeto XMLHttpRequest
        xhr.open('GET', `http://localhost:3000/product/${id}`);
        xhr.onload = function() {
          if (this.status == 200 && this.readyState === 4)  {
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
              reject(Error(xhr.statusText));
          }
        };
        xhr.onerror = function() {
            reject(Error('Algo no ha salido bien!!!'));
        };
        xhr.send();
})
}
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
