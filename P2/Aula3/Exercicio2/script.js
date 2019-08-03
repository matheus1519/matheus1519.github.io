function validarEmail() {
	email = new String(prompt("Insira um email: "));
	var valido = false;
	
	// Tem apenas um @
	splitArroba = email.split("@");
	if(!(splitArroba.length != 2))
	{
		// Tem pelo menos um caractere antes do arroba
		if(splitArroba[0].length >= 1)
		{
			// Tem um ou mais caracteres após o @
			if(splitArroba[1].length >= 1)
			{
				// Apenas um ponto
				var splitPonto = splitArroba[1].split(".");
				if(!(splitPonto.length != 2))
				{
					// Após o ponto tem dois ou mais caracteres
					if(splitPonto[1].length >= 2)
					{
						valido = true;
					}
				}
			}
		}
	}


	valido ? alert("O email é válido!") : alert("O email é inválido!")
}