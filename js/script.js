'use strict';

//Declaración de variables

let images = ["sudaderas","camiseta","taza"];
let actual_img = -1;

//Lamada al evento desde el objeto window

window.addEventListener('load', (e) => {
    
    setInterval(startCarousel, 2000);
});

/**
 * Función recursiva para pasar las imágenes cada 3 segundos
 * @param -
 * @returns
 * @author María Fernández 
 * @date 2021/12/05
 */

function startCarousel(){
    actual_img++;
    if(actual_img >= images.length){
        actual_img = 0;
    }
    document.querySelector('#carousel').innerHTML =`<img src = "img/slider_${images[actual_img]}.png" id="sliderContent">`;
    document.getElementById('carousel').style.display = 'flex';
    document.getElementById('carousel').style.justifyContent = 'center';

   
}




