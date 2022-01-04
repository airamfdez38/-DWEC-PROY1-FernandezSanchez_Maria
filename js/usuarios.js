
const API_URL= 'http://localhost:3000/user';
const xhr =  new XMLHttpRequest();

function onRequestHandler(){
    if( this.readyState === 4 && this.status === 200){
    
        const data = JSON.parse(this.response);
        console.log(data);

        const HTMLResponse = document.querySelector('#userInfoTableBody');
        const tpl = data.map((user) => `<td>${user.name}</td><td>${user.surname}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.dni}</td>`);
        HTMLResponse.innerHTML = `<tr>${tpl}</tr>`;
    }
}


xhr.addEventListener('load', onRequestHandler);
xhr.open('GET',`${API_URL}`);
xhr.send();

