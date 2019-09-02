$(document).ready(function(){

	$('select#quartos').change(addQuartos);
	$('#datachegada').change(calcularValor);
	$('#datasaida').on('change',calcularValor);
	
	function calcularDias() {
		var a = new Date($('#datachegada').val());
		var b = new Date($('#datasaida').val());
		var c = b.getTime() - a.getTime();
		dias = Math.ceil(c / (1000 * 3600 * 24));
		if(a=='Invalid Date')
		{
			return -1;
		}
		else
		{
			return dias;
		}
	}
	
	function calcularValor() {
		dias = calcularDias();
		tamanho = $('select#quartos').val();
		var valor = 0;
		for (var i = 0; i < tamanho; i++) {
			switch(Number($('#pessoas'+'-'+i).val()))
			{
				case 1:
					valor += 139;
					break;
				case 2:
					valor += 220;
					break;
				case 3:
					valor += 340;
					break;
			}
			if($('#criancas'+'-'+i).val()==1)
			{
				valor += 30;
			}
		}
		if(valor == 0 || dias < 0 || isNaN(dias)) 
		{
			$('#total').html('Valor total: Preencha tudo!');
			$('#total').removeClass('alert-success').addClass('alert-danger'); 
		}
		else
		{
			$('#total').html('Valor total: R$'+valor*dias);
			$('#total').removeClass('alert-danger').addClass('alert-success'); 
		}
	}

	function addQuartos() {
		tamanho = $(this).val();
		$('#div-ad-cr').remove();
		$('#div-quartos').append(
			'<div class="" id="div-ad-cr"></div>'
		);
		for (var i = 0; i < tamanho; i++) {
			$('#div-ad-cr').append(
				`<h6 class="text-center mt-4 alert alert-info col-sm-12">Quarto ${i+1}</h6>` +
				'<div class="row"><div class="form-group col-sm-6" id="div-pessoas'+'-'+i+'"></div>' +
				'<div class="form-group col-sm-6" id="div-criancas'+'-'+i+'"></div></div>'
			);

			$('#div-pessoas'+'-'+i).append(
				'<label for="pessoas" class="col-sm-6 col-form-label">Pessoas:</label>'+
				'<select class="custom-select" id="pessoas'+'-'+i+'"><option>Selecione as Pessoas</option><option>1</option><option>2</option><option>3</option></select>'
			);
			$('#pessoas-'+i).on('change',calcularValor);

			$('#div-criancas'+'-'+i).append(
				'<label for="criancas" class="col-sm-6 col-form-label">Criancas:</label>'+
				'<select class="custom-select" id="criancas'+'-'+i+'"><option>Selecione Crianças</option><option>1</option></select>'
			);
			$('#criancas'+'-'+i).on('change',calcularValor);
		}
		$('#div-ad-cr').css('transition','1s');
		tam = $('#div-ad-cr').height();
		$('#div-ad-cr').css('height',0);
		$('#div-ad-cr').css('height',tam);
		calcularValor();
	}
});