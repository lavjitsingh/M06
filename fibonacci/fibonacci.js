// Fes un petit programa que demani el nombre de termes que es vol mostrar de la successió i calculi i escrigui aquests termes.
var numero = prompt("Posa un numero");
	var num1 = 0;
	var num2 = 1;
	var num3;

	document.write(num1+" ");
 	document.write(num2+" ");

	for(var i = 0; i < numero -2 ; i++){
		num3 = num1 + num2;
		//Lavjit Singh
		num1 = num2;
		num2 = num3;
		document.write(num3+" ");
	}
