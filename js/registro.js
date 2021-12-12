'use strict';

//Declaración de variables

let form       = document.getElementById('form');
let firstname  = document.getElementById('firstname');
let surname    = document.getElementById('surname');
let email      = document.getElementById('email');
let birth      = document.getElementById('birth');
let password   = document.getElementById('password');
let password2  = document.getElementById('password2');
let msg        = document.getElementsByClassName('msg');
let msg_end    = document.getElementById('msg_end') ;
let btn        = document.getElementById('form__btn');


//Expresiones regulares

const strRegExp   = /^[a-zA-ZÀ-ÿ\s]{3,30}$/; // Letras y espacios, pueden llelet acentos.const surname 
const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;// Debe contener @ y punto y sin espacios
const birtRegExph = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const passRegExp  = /^.{6,15}$/; // 6 a 15 digitos.


//Llamada al evento

form.addEventListener('submit',(e) =>{
	e.preventDefault();

	if(validateFirstName()&&
		validateSurname()&&
		validateEmail()&&
		validateBirth()&&
		validatePassword()&&
		matchPasswords()&&
		check()){
		msg_end.style.color = 'green';
		msg_end.innerHTML = "Bienvenido!! Ya está registrado";
		form.reset();
	}else{
		generateCaptcha();
		document.getElementById("inputText").value = "";
		msg_end.innerHTML = "Rellene todos los campos correctamente";
		msg_end.style.color = 'red';
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
			firstname.value = "";
			firstname.nextElementSibling.innerHTML = "Sólo permite letras, espacions y acentos";
			firstname.nextElementSibling.style.color= "red";
		}else{
			firstname.nextElementSibling.innerHTML = "";
			return true		
		}
		
	}

}

/**
 * Función para comprobar si el campo apellidos está o no relleno, así como para validarlo según expresión regular
 * @param -
 * @returns devuelve true en caso de cumplir con la validación y, en caso contrario, un mensaje
 * @author María Fernández
 * @date 2021/12/04
 */

let surnameValue;
function validateSurname(){
	surnameValue= surname.value.trim(); //Hago uso del método trim para borrar posibles espacios en blanco de los extremos

   if(surnameValue == ""){
	   surname.nextElementSibling.innerHTML = "Campo obligatorio";
	   surname.nextElementSibling.style.color = 'red';
   }else{
	   if(!surnameValue.match(strRegExp)){
		   surname.nextElementSibling.innerHTML = "Sólo permite letras, espacions y acentos";
		   surname.nextElementSibling.style.color = 'red';
	   }else{
			surname.nextElementSibling.innerHTML = ""; 
			return true
	   }
   }
}

/**
 * Función para comprobar si el campo email está o no relleno, así como para validarlo según expresión regular
 * @param -
 * @returns devuelve true en caso de cumplir con la validación y, en caso contrario, un mensaje
 * @author María Fernández
 * @date 2021/12/04
 */	

let emailValue;

function validateEmail(){
	emailValue= email.value.trim(); //Hago uso del método trim para borrar posibles espacios en blanco de los extremos

	if(emailValue == ""){
		email.nextElementSibling.innerHTML = "Campo obligatorio";
		email.nextElementSibling.style.color = 'red';
		
	}else{
		if(!emailValue.match(emailRegExp)){
			email.nextElementSibling.innerHTML = "Formato no válido";
			email.nextElementSibling.style.color = 'red';
		}else{
			email.nextElementSibling.innerHTML = "";
			return true
			
		}
		
	}
}

/**
 * Función para comprobar si el campo fecha de nacimiento está o no relleno, así como para validarlo según expresión regular
 * @param -
 * @returns devuelve true en caso de cumplir con la validación y, en caso contrario, un mensaje
 * @author María Fernández
 * @date 2021/12/04
 */	

let birthValue;

function validateBirth(){
	birthValue= birth.value.trim(); //Hago uso del método trim para borrar posibles espacios en blanco de los extremos

	if(birthValue == ""){
		birth.nextElementSibling.innerHTML = "Campo obligatorio";
		birth.nextElementSibling.style.color = 'red';
		
	}else{
		if(!birthValue.match(birtRegExph)){
			birth.nextElementSibling.innerHTML = "Formato no válido";
			birth.nextElementSibling.style.color = 'red';
		}else{
			birth.nextElementSibling.innerHTML = "";
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
 * Función para comprobar si las contraseñas coinciden.
 * @param -
 * @returns devuelve true en caso de coincidir, si no un mensaje 
 * @author María Fernández
 * @date 2021/12/04
 */	

let password2Value;
function matchPasswords(){
	password2Value = password2.value.trim();
	if(passwordValue !== password2Value){
		password2.nextElementSibling.innerHTML = "Las contraseñas tienen que coincidir";
		password2.nextElementSibling.style.color = 'red';
	}else{
		password2.nextElementSibling.innerHTML = "";
		return true	
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
  * @author María Fernández
  * @date 2021/12/05
  */
  
 function check(){
 let input = document.getElementById("inputText").value;
  
	 if(input == (a + b)){
		 return true;
	 }
	 
 }







