$(document).ready(function(){
	var dias = -1;
	$('select#quartos').change(addQuartos);
	$('#datachegada').on('change',calcularDias);
	$('#datasaida').on('change',calcularDias);
	$('#atualizar').on('click',calcularValor);
	
	function calcularDias() {
		var a = new Date($('#datachegada').val());
		var b = new Date($('#datasaida').val());
		var c = b.getTime() - a.getTime();
		dias = Math.ceil(c / (1000 * 3600 * 24));
	}
	function calcularValor() {
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

		if(valor == 0 || dias == -1) 
		{
			$('#total').html('Valor total: Preencha tudo!'); 
		}
		else
		{
			$('#total').html('Valor total: R$'+valor*dias);
		}
		
	}


	function addQuartos() {
		tamanho = $(this).val();

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
				'<div class="form-group col-sm-6" id="div-pessoas'+'-'+i+'"></div>' +
				'<div class="form-group col-sm-6" id="div-criancas'+'-'+i+'"></div>'
			);

			$('#div-pessoas'+'-'+i).append(
				'<label for="pessoas" class="col-sm-6 col-form-label">Pessoas:</label>'+
				'<select class="form-control" id="pessoas'+'-'+i+'"><option>Selecione as Pessoas</option><option>1</option><option>2</option><option>3</option></select>'
			);

			$('#div-criancas'+'-'+i).append(
				'<label for="criancas" class="col-sm-6 col-form-label">Criancas:</label>'+
				'<select class="form-control" id="criancas'+'-'+i+'"><option>Selecione Crianças</option><option>1</option></select>'
			);
		}
	}


});