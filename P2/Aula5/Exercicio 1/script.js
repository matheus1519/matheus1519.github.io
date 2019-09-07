function evento() {
	num = this.id.split('_')[1];
	enlace = document.querySelector('#enlace_'+num)
	conteudo = document.querySelector('#conteudo_'+num);
	if(conteudo.style.display != 'none')
	{
		conteudo.style.display = 'none';
		enlace.text = 'Mostrar Conteúdo';
	}
	else
	{
		conteudo.style.display = 'block';
		enlace.text = 'Ocultar Conteúdo';
	}

}


for (var i = 1; i <= 3; i++) {
	document.querySelector('#enlace_'+i).addEventListener('click',evento, false);
}