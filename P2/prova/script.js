$(document).ready(function(){
	valor = $('select#quartos').change(addQuartos);
	dias = $('#datachegada').on('change',calcularDias);
	dias = $('#datasaida').on('change',calcularDias);
	$('#atualizar').atualizar('click',calcularDias);

	function calcularValor(dias) {
		$('#adultos');
	}

	function calcularDias() {
		var a = new Date($('#datachegada').val());
		var b = new Date($('#datasaida').val());
		var c = b.getTime() - a.getTime();
		var dias = Math.ceil(c / (1000 * 3600 * 24));
		
		return dias;
	}

	function addQuartos() {
		tamanho = $(this).val();
		var primeira = true;

		if($('#div-ad-cr').length != 0)
		{
			$('#div-ad-cr').html('');
		}
		else
		{
			$('#div-quartos').append(
				'<div class="form-group row" id="div-ad-cr"></div>'
			);
		}

		for (var i = 0; i < tamanho; i++) {
			


			$('#div-ad-cr').append(
				'<h6 class="center col-sm-12">Quarto</h6>' +
				'<div class="form-group col-sm-6" id="div-adultos'+'-'+i+1+'"></div>' +
				'<div class="form-group col-sm-6" id="div-criancas'+'-'+i+1+'"></div>'
			);

			$('#div-adultos'+'-'+i+1).append(
				'<label for="adultos" class="col-sm-6 col-form-label">Adultos:</label>'+
				'<select class="form-control" id="adultos'+'-'+i+1+'"><option>Selecione Adultos</option><option>1</option><option>2</option><option>3</option></select>'
			);

			$('#div-criancas'+'-'+i+1).append(
				'<label for="criancas" class="col-sm-6 col-form-label">Criancas:</label>'+
				'<select class="form-control" id="criancas'+'-'+i+1+'"><option>Selecione Crianças</option><option>1</option></select>'
			);
		}
	}


});