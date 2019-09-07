function palindromo()
{
	var entrada = prompt("Insira uma frase: ");
	var resultado = entrada.split('').reverse().join('') == entrada 
	resultado ? alert("A palavra é palindromo!") : alert("A palavra NÃO é palindromo!");
}