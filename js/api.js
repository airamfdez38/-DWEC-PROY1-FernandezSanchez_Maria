//Obtención de datos de los usuarios con fetch

fetch('https://apiqr.happycoding.es/user').then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length > 0){
                    let temp = "";
                    // Pintar los datos en la tabla
                    
                     data.forEach((u) => {
                         temp += "<tr>";
                         temp += `<td>${u.name}</td>`;
                         temp += `<td>${u.surname}</td>`;
                         temp += `<td>${u.email}</td>`;
                         temp += `<td>${u.phone}</td>`;
                         temp += `<td>${u.dni}</td></tr>`;

                     });

                     document.getElementById("data").innerHTML = temp;
                 
                }
            }
        )
    }
)

//Obtención información de los productos con XMLHttpRequest

if(window.Promise) {

    var promise = new Promise(function(resolve, reject) { // Objeto Promise

    const xhr = new XMLHttpRequest(); // Objeto XMLHttpRequest
    xhr.open('GET', 'https://apiqr.happycoding.es/product'); 
    xhr.onload = function() {
      if (this.status == 200 && this.readyState === 4)  {
          resolve(xhr.response); //Cuando la  promesa pasa a estado de resuelta
          const data = JSON.parse(this.response);
          console.log(data);
            //Pintar el listado en el HTML
          const HTMLResponse = document.querySelector('#dataProduct');
          const tpl = data.map((product) => `<tr><td><a href="./product.html?id=${product.uuid}"><img src="${product.img_featured}" width="80"/></a></td><td>${product.name}</td><td> ${product.description_short}</td> <td>${product.price}€</td><td>${product.stock}</td></tr>`);
          HTMLResponse.innerHTML = `${tpl}`;
      } else {
          reject(Error(xhr.statusText)); //cuando la promesa está en estado de rechazada
      }
    };
    xhr.onerror = function() {
        reject(Error('Algo no ha salido bien!!!'));
    };
    xhr.send();
  });

}

/* La tercera llamada  se realiza al clickar en cada uno de los productos que aparecen en el listado.
*  El código de esta tercera llamada está en el archivo product.js
*/






