var rodada = 1;
var matriz_jogo = Array(3);

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

$(document).ready( function(){

	$('#btn_iniciar').click( function(){

		if($('#nome_1').val() == ''){
			alert("Por favor informe o nome do 1º jogador");
			return false;
		}

		if($('#nome_2').val() == ''){
			alert("Por favor informe o nome do 2º jogador");
			return false;
		}
		
		$("#nome_jogador_1").html($('#nome_1').val());
		$("#nome_jogador_2").html($('#nome_2').val());

		//$("#pagina_inicial").hide();
		//$("#palco_jogo").show();
	});

	$('.jogada').click( function(){
		var id_campo = this.id;
		jogada(id_campo);
	});

	function jogada(id_campo){
		var icone = '';
		var ponto = 0;

		if(rodada % 2 == 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = 1;
		}else {
			icone = 'url("imagens/marcacao_2.png")';
			ponto = -1;
		}

		$('#'+id_campo).css('background-image', icone);
		rodada++;
	}
});

