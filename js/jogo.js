/*function criar_cenario{

	var cenario = document.createElement('table');
	
	for(var x = 1; x <=3; x++){
		var coluna = document.createElement('tr');
		coluna.id = 'c' + x;
		coluna.style.border = '1px solid red';
		for(var y = 1; y <= 3; y++){
			var linha = createElement('td');
			linha.id = 'l' + x;
			linha.style.border = '1px solid red';

			var caixa = createElement('div');
			caixa.style.height = '100px';
			caixa.style.width = '100px';
			caixa.id = 'cx' + y;

			linha.appendChild(caixa);

			coluna.appendChild(linha);
		}
		cenario.appendChild(coluna);
	}

	document.getElementById('cenario').appendChild(cenario);
} */