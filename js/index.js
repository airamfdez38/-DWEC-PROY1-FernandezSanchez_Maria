//Lamada al evento

window.addEventListener('load', (e) => {
    carousel();
});

/**
 * Función recursiva para pasar las imágenes cada 3 segundos
 * @param -
 * @returns
 * @author María Fernández 
 * @date 2021/12/05
 */
let index = 0;

function carousel() {
    
    const img = document.getElementsByClassName("images");

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";  
    }
    index++;
    if (index > img.length) {
        index = 1;
    }    
    img[index - 1].style.display = "block";  
    setTimeout(carousel, 3000);
}
