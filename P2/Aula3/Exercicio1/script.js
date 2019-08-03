function verificarData() {
	var data = prompt("Insira uma data");
	var dataUsuario = new Date(data).getTime();
	var dataAtual = new Date().getTime();
	data = dataAtual - dataUsuario;
	var dias = Math.ceil(data / (1000 * 3600 * 24));
	console.log(dias);
}