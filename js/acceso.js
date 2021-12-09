
//Declaración de variables 

let form       = document.getElementById('form');
let login      = document.getElementById('login_btn');
let firstname  = document.getElementById('firstname');
let password   = document.getElementById('password');
let msg        = document.getElementById('msg');
let msg_end    = document.getElementById('msg_end');
let btn        = document.getElementById('btn_login');


//Expresiones regulares

const strRegExp   = /^[a-zA-ZÀ-ÿ\s]{3,30}$/; // Letras y espacios, pueden llelet acentos.const surname 
const passRegExp  = /^.{6,15}$/; // 6 a 15 digitos.

//Llamada al evento

form.addEventListener('submit',(e) =>{
	e.preventDefault();

	if(validateFirstName()&&
		validatePassword()){
        msg_end.innerHTML = "Sesión iniciada";
        msg_end.style.color = "green";
		form.reset();
	}else{
        msg_end.innerHTML ="Rellene todos los campos";
        
       
    }	
});

/**
 * Función para comprobar si el campo nombre está o no relleno, así como para validarlo según expresión regular
 * @param -
 * @returns devuelve true en caso de cumplir con la validación y, en caso contrario, un mensaje
 * @author María Fernández
 * @date 2021/12/04
 */	
	
let nameValue;
function validateFirstName(){
 	nameValue= firstname.value.trim(); //Hago uso del método trim para borrar posibles espacios en blanco de los extremos

	if(nameValue == ""){
		firstname.nextElementSibling.innerHTML = "Campo obligatorio";
		firstname.nextElementSibling.style.color = 'red';
		
	}else{
		if(!nameValue.match(strRegExp)){
			firstname.nextElementSibling.innerHTML = "Sólo permite letras, espacions y acentos";
			firstname.nextElementSibling.style.color= "red";
		}else{
			firstname.nextElementSibling.innerHTML = "";
			return true		
		}
		
	}

}

/**
 * Función para comprobar si el campo contraseña está o no relleno, así como para validarlo según expresión regular
 * @param -
 * @returns devuelve true en caso de cumplir con la validación y, en caso contrario, un mensaje
 * @author María Fernández
 * @date 2021/12/04
 */	

let passwordValue;
function validatePassword(){
	passwordValue= password.value.trim(); //Hago uso del método trim para borrar posibles espacios en blanco de los extremos

	if(passwordValue == ""){
		password.nextElementSibling.innerHTML = "Campo obligatorio";
		password.nextElementSibling.style.color = 'red';
		
	}else{
		if(!passwordValue.match(passRegExp)){
			password.nextElementSibling.innerHTML = "Formato no válido";
			password.nextElementSibling.style.color = 'red';
		}else{
			password.nextElementSibling.innerHTML = "";
			return true
		
		}
		
	}
}

/**
 * Función para generar Captcha
 * @param -
 * @returns Inserta el valor generado en un input
 * @author María Fernández
 * @date 2021/12/05
 */
let captcha;
let a;
let b;
 
function generateCaptcha() {
     a = Math.floor((Math.random() * 10));
     b = Math.floor((Math.random() * 10));
 
    captcha = `${a} + ${b}`;
    document.getElementById("captcha").value = captcha;
}

/**
 * Función para comprobar Captcha
 * @param -
 * @returns alert tanto en caso de que sea correcto como no el valor introducido en el input
 * @author María Fernández
 * @date 2021/12/05
 */
 
function check(){
let input = document.getElementById("inputText").value;
 
    if(input == (a + b)){
    alert("Captcha aceptado");
    }
    else{
    alert("Intentar de nuevo");
    }
}