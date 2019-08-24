function digitar() {
	document.querySelector('span').contentText = document.querySelector('input').value;
}

input = document.querySelector('input').addEventListener('keypress', digitar, false);