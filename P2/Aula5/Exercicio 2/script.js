
function adiciona() {
	lista = document.querySelector('ul')
	li = document.createElement('li')
	li.innerText = document.querySelector('input').value;
	lista.appendChild(li);
}

function troca() {
	atual = document.querySelector('img');
	if (atual.src.split('_')[1] == 'on.gif') {
		atual.src = 'lampada_off.gif'
	}
	else
	{
		atual.src = 'lampada_on.gif'
	}
}

document.querySelector('button').addEventListener('click', adiciona,false);

document.querySelector('img').addEventListener('click', troca,false);

