class Agenda 
{
	constructor()
	{
		this.contato = [];
	}

	adicionarContato(nome,idade)
	{
		this.contato.push(new Contato(nome,idade));
	}

	removeContato()
	{
		this.contato.pop();
	}
}

class Contato 
{
	constructor(nome,idade)
	{
		this.pessoa = new Pessoa(nome,idade);
	}
}

class Pessoa
{
	constructor(nome, idade)
	{

		this.nome = nome;
		this.idade = idade;
		this.email = [];
		this.telefone = [];
		this.endereco = [];
	}
	adicionarEmail(email)
	{
		this.email.push(new Email(email));
	}
	removeEmail()
	{
		this.email.pop();
	}

	adicionarTelefone(ddd, telefone)
	{
		this.telefone.push(new Telefone(ddd, telefone));
	}
	removeTelefone()
	{
		this.telefone.pop();
	}

	adicionarEndereco(rua,numero)
	{
		this.endereco.push(new Endereco(rua,numero));
	}
	removeEndereco()
	{
		this.endereco.pop();
	}

}
class Email
{
	constructor(email)
	{
		this.email = email;
	}
}


class Telefone
{
	constructor(ddd,telefone)
	{
		this.ddd = ddd;
		this.telefone = telefone;
	}
}

class Endereco
{
	constructor(rua,numero)
	{
		this.rua = rua;
		this.numero = numero;
	}
}
