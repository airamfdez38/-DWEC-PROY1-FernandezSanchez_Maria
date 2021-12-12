'use strict';

//Declaración de variables

let hoodies = ["cup"];
let actual_hoodie = -1;

//Llamada al evento desde el objeto window

window.addEventListener('DOMContentLoaded', (e) =>{
    setInterval(changeItem, 2000);
  
})

/**
 * Función recursiva para pasar las imágenes cada 3 segundos
 * @param -
 * @returns
 * @author María Fernández 
 * @date 2021/12/10
 */


function changeItem(){
    actual_hoodie++;
    if(actual_hoodie >= hoodies.length){
        actual_hoodie = 0;
    }

    document.querySelector('#slider_hoodies').innerHTML = `<img src="img/slider_${hoodies[actual_hoodie]}.png" class = "img_size">`;
  
}

/**
 * Función para aumentar o disminuir unidades de compra
 * @param -elem (referido a los botones + y -)
 * @author María Fernández
 * @date 2021/12/11
 */
 let valor = 0;

 function unities(elem){
    
    if (elem.value == 'more') {
        valor++;
    }else if(valor == 0){
        valor = 0;
    }else{
        valor--;
    }
    document.getElementById("counter").innerHTML = valor;
    
}
