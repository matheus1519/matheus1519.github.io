function evento() {
	num = this.id.split('_')[1];
	enlace = document.querySelector('#enlace_'+num)
	conteudo = document.querySelector('#conteudo_'+num);
	if(conteudo.style.display != 'none')
	{
		conteudo.style.transform = 'scaleY(0) translateY(-200px)';
		setTimeout(function(){
			conteudo.style.display = 'none';
		},300);
		enlace.text = 'Mostrar Conteúdo';
	}
	else
	{
		conteudo.style.display = 'block';
		setTimeout(function(){
			conteudo.style.transform = 'scaleY(1)';
		},300);
		
		
		enlace.text = 'Ocultar Conteúdo';
	}

}


for (var i = 1; i <= 3; i++) {
	document.querySelector('#enlace_'+i).addEventListener('click',evento, false);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}