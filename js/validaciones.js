




/*FUNCIONES PARA VALIDAR LOS FORMULARIOS

comprobarVacio(campo) 
comprobarTexto(campo, size)
comprobarExpresionRegular(campo, exprreg, size)
comprobarAlfabetico(campo, size) 
comprobarEntero(campo, valormenor, valormayor) 
comprobarReal(campo, numero decimales, valormenor, valormayor)
comprobarDni(campo)
comprobarTelf(campo) // teléfono español, tanto nacional como internacional

*/

function comprobarVacio(campo) {

	var valor = document.getElementById(campo).value;

	if (valor == "") {
		document.getElementById(campo).style.borderColor = "red";
		return false;
	}
	document.getElementById(campo).borderColor = "green";
	return true;

}

function comprobarTexto(campo, size) {

	var expr = /^([^\s\t]+)+$/;
	

	if (comprobarExpresionRegular(campo, expr, size)) {

		document.getElementById(campo).style.borderColor = "green";
		return true;
	}
	document.getElementById(campo).style.borderColor = "red";
	return false;

}

function comprobarExpresionRegular(campo, exprreg, size) {

	var valor = document.getElementById(campo).value;



	if (comprobarVacio(campo) && exprreg.test(valor) && valor.length <= size) {
		return true;
	}
	return false;

}

function comprobarAlfabetico(campo, size) {

	var expr = /^([a-zñáéíóúA-ZÁÉÍÓÚ]+[\s]*)+$/;

	if (comprobarExpresionRegular(campo, expr, size)) {
		document.getElementById(campo).style.borderColor = "green";
		return true;
	}
	document.getElementById(campo).style.borderColor = "red";


	return false;

}

function comprobarEntero(campo, valormenor, valormayor) {

	var expr = /^[0-9]+$/;
	var valor = document.getElementById(campo).value;


	if (valor >= valormenor && valor <= valormayor && expr.test(valor)) { //Comprobamos que la variable sea aceptada por la ER y que su tamaño esté entre los marcados
		document.getElementById(campo).style.borderColor = "green";
		return true;
	} else {//Si la variable no coincide con la ER o el tamaño excede el size
		document.getElementById(campo).style.borderColor = "red";
		return false;
	}
}
function comprobarReal(campo, numeros_decimales, valormenor, valormayor) {


	var expr = "^[0-9]*.[0-9]{1," + numeros_decimales + "}$";
	var expr2 = new RegExp(expr);
	var valor = document.getElementById(campo).value;


	if (valor >= valormenor && valor <= valormayor && expr2.test(valor)) {
		document.getElementById(campo).style.borderColor = "green";
		return true;
	}
	document.getElementById(campo).style.borderColor = "red";
	return false;

}
function comprobarDni(campo, size) {

	var valor = document.getElementById(campo).value;
	var expr = /^\d{8}[a-zA-Z]?$/
	var numero;
	var modulo;
	var letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
	var letraIntroducida;
	if (comprobarExpresionRegular(campo, expr, size)) {
		if (valor.length == 8) {
			numero = valor.substr(0, valor.length);
			modulo = numero % 23;
			letra = letra.substring(modulo, modulo + 1);
			valor = valor + letra;

		}
		else {
			numero = valor.substr(0, valor.length - 1);
			letraIntroducida = valor.substr(valor.length - 1, valor.length);
			modulo = numero % 23;
			letra = letra.substring(modulo, modulo + 1);
			if (letraIntroducida.toUpperCase() != letra) {
				document.getElementById(campo).style.borderColor = "red";
				return false;
			}
		}
		document.getElementById(campo).style.borderColor = "green";
		return true;
	}
	document.getElementById(campo).style.borderColor = "red";
	return false;

}
function comprobarTelf(campo){
	var valor = document.getElementById(campo).value; //Guardamos la variable recibida con id=campo
    var expr = /^(\+34|0034|34)?[\s|\-|\.]?[6|7|9][\s|\-|\.]?([0-9][\s|\-|\.]?){8}$/; //Expresión regular para los telefonos nacionales e internacionales en españa
    
     if(expr.test(valor)){ //Comprobamos si el valor se corresponde con la ER
        document.getElementById(campo).style.borderColor="green";
        return true;
       }else{//Si la variable no coincide con la ER 
        document.getElementById(campo).style.borderColor="red";
           return false;
       }
}

function comprobarEmail(campo, size) {
    
    var valor = document.getElementById(campo).value; //Guardamos la variable recibida con id=campo
    var expr = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/; //Expresión regular para los correos electronicos
    
    if(comprobarExpresionRegular(campo, expr, size)){ //Comprobamos si el valor se corresponde con la ER
        document.getElementById(campo).style.borderColor="green";
        return true;
       }else{//Si la variable no coincide con la ER
        document.getElementById(campo).style.borderColor="red";
           return false;
       }
    
}
function registrar(){

	if(comprobarDni("dniAdd",9) && comprobarTelf("telefonoAdd") && comprobarTexto("usuarioAdd",25) && comprobarTexto("contraseñaAdd",20) && comprobarVacio("dateAdd") && comprobarEmail("emailAdd",50) &&  comprobarAlfabetico("nombreAdd",25) && comprobarAlfabetico("apellidosAdd",50) && comprobarAlfabetico("titulacionAdd",60)){
		return true;
	}
	alert('Error insertando');
	return false;
}

function editar(){
	if(comprobarDni("dniEdit",9) && comprobarTelf("telefonoEdit") && comprobarTexto("contraseñaEdit",20) && comprobarVacio("dateEdit") && comprobarEmail("emailEdit",50) &&  comprobarAlfabetico("nombreEdit",25) && comprobarAlfabetico("apellidosEdit",50) && comprobarAlfabetico("titulacionEdit",60)){
		return true;
	}
	alert('Error al editar');
	return false;
}



