'use strict';

//Declaramos variables

let menu = document.getElementById("menu_side");
let btn_open = document.getElementById("btn_open");
let body = document.getElementById("body");

//Lamada al evento 

btn_open.addEventListener("click", (e)=>{
    e.preventDefault();
    
    open_close();
    
});

/**
 * Función para desplegar y recoger menú lateral
 * @param -
 * @author María Fernández
 * @date 2021/12/06
 */

function open_close(){
    body.classList.toggle("resize_menu");
    menu.classList.toggle("resized_menu");
       
}


