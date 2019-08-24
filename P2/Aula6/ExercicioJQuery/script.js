$(document).ready(digitar);

function digitar() {
	$('#campo').on('keyup',function(){
		$('span').text($('#campo').val());
	});
}