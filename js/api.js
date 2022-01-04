//Obtención de datos de los usuarios 

fetch('http://localhost:3000/user').then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length > 0){
                    let temp = "";
                    
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

//Obtención información de los productos

const API_URL= 'http://localhost:3000/product';
const xhr =  new XMLHttpRequest();

function onRequestHandler(){
    if( this.readyState === 4 && this.status === 200){
    
        const data = JSON.parse(this.response);
        console.log(data);

        const HTMLResponse = document.querySelector('#dataProduct');
        const tpl = data.map((product) => `<tr><td>${product.name}</td><td> ${product.description_short}</td> <td>${product.price}€</td><td>${product.stock}</td></tr>`);
        HTMLResponse.innerHTML = `${tpl}`;
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET',`${API_URL}`);
xhr.send();




