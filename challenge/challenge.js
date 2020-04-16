/*
*> Challenge - Buscando anagramas
---------------------------------
Se provee una cadena de caracteres de largo N y una subcadena de largo M. Se desea
saber cuántas veces aparece la subcadena o un anagrama de la misma dentro de la cadena
principal.
Por ejemplo, si se tiene la cadena A y la subcadena B
---
A = “hola, que buena ola Laomir”
B = “OAL”
---
El resultado deberá ser 3, dado lo siguiente
A = “hola, que buena ola Laomir”
---
Escribir una función
solution(string A, string B)
que devuelva la cantidad de veces que aparece B en A, o un anagrama de B en A.
Asumir:
No hay distinción entre mayúsculas y minúsculas N > M.
---------------
> Requerimiento
 Escribir el challenge en JavaScript
 */
let A = 'hola, que buena ola Laomir';
let B = 'OAL';
/*****************************************************/
let buscandoAnagramas = (palabra, posibleAnagrama) =>{
	let cont = 0;
	let lengthCont = 0;
	let cont3 = 0;
	let cont4 = 0;
	let cont2 = 0;
	let valoresAcertados = [];
	let valoresAprobados = [];
	let valoresAprobadosPosibleAnagrama = [];
	palabra = palabra.toLowerCase();
	posibleAnagrama = posibleAnagrama.toLowerCase();
	palabra = palabra.split('');
	posibleAnagrama = posibleAnagrama.split('');
	posibleAnagrama.forEach((element, value) =>{
		if (element == ',' || element == ' ') {
			element = element.splice;
		}
		if (element != undefined) {
			cont++;
			valoresAprobadosPosibleAnagrama[cont - 1] = element;
			valoresAprobadosPosibleAnagrama = valoresAprobadosPosibleAnagrama.sort();
		}
	});
	palabra.forEach((element, value) =>{
		if (element == ',' || element == ' ') {
			element = element.splice;
		}
		if (element != undefined) {
			valoresAprobados[cont - 1] = element;
			valoresAprobados = valoresAprobados.sort();
			cont++;
		}
	});
	valoresAprobados.forEach((element, value) =>{
		let aprobados = () =>{
			cont2++;
			valoresAcertados[cont2 - 1] = element;
			//console.log(`valores acertados ${valoresAcertados.length} (${valoresAcertados})`);			

			valoresAcertados.forEach((value, increment) =>{				 
				if(valoresAcertados[increment + 2] == value){
					cont4++;
					console.log('Anagramas tiene 2 posibilidades posibles: ' + cont4 + '%');
					document.querySelector('.anagram').innerHTML = '';
					document.querySelector('.anagram').innerHTML = `
						The Anagram, have 2 posibilities<br>
						<a href="https://github.com/TobiasBregante/anagram.git">Go to code in Github</a><br>
						or<br> open to console!`;
				}else{
					cont3++;
					console.log('Anagramas tiene 3 posibilidades posibles: ' + cont3 + '%');
					document.querySelector('.anagram').innerHTML = '';
					document.querySelector('.anagram').innerHTML = `
						The Anagram, have 3 posibilities<br>
						<a href="https://github.com/TobiasBregante/anagram.git">Go to code in Github</a><br>
						or<br> open to console!`;
				}
			});
		}
		lengthCont = 0;
		let desaprobados = () => lengthCont++;
		if (element == valoresAprobadosPosibleAnagrama[lengthCont]) {
			aprobados()
		}
		if (element != valoresAprobadosPosibleAnagrama[lengthCont]) {
			desaprobados();
			if (element == valoresAprobadosPosibleAnagrama[lengthCont]) {
				aprobados()
			}else{
				desaprobados();
				if (element == valoresAprobadosPosibleAnagrama[lengthCont]) {
					aprobados()
				}
			}
		}
	});
}
buscandoAnagramas(A, B);
