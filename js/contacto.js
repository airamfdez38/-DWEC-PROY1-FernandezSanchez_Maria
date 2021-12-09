// Declaración de variables

let form       = document.getElementById("form");
let firstname  = document.getElementById('firstname');
let surname    = document.getElementById('surname');
let email      = document.getElementById('email');
let text       = document.getElementById("textareabox");
let msg        = document.getElementById("msg");
let msg_end    = document.getElementById('msg_end');

//Declaración de expresiones regulares

const strRegExp   = /^[a-zA-ZÀ-ÿ\s]{3,30}$/; // Letras y espacios, pueden llelet acentos.const surname 
const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passRegExp  = /^.{6,15}$/; // 6 a 15 digitos.

//Llamada al evento

form.addEventListener('submit',(e) =>{
	e.preventDefault();

	if(validateFirstName()&&
		validateSurname()&&
		validateEmail()&&
        isMessage()){
		msg_end.style.color = 'green';
		msg_end.innerHTML = "Gracias por contactar con nosotros";
		form.reset();
	}else{
		msg.innerHTML = "Rellene todos los campos correctamente";
		msg.style.color = 'red';
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
 * Función para comprobar si el campo textarea está o no relleno
 * @param -
 * @returns devuelve mensaje informativo en caso de estar vacío, si no devuelve true.
 * @author María Fernández
 * @date 2021/12/04
 */	

let textValue;

function isMessage(){
    textValue = text.value.trim();

    if(textValue == ""){
		text.nextElementSibling.innerHTML = "Campo obligatorio";
		text.nextElementSibling.style.color = 'red';
		
	}else{
		
        text.nextElementSibling.innerHTML = "";
        return true
		
	}
		
	
}

let captcha;
let a;
let b;
 
/**
 * Función para generar Captcha
 * @param -
 * @returns Inserta el valor generado en un input
 * @author María Fernández
 * @date 2021/12/05
 */

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