
/*
Esconder paragráfo um
*/
document.getElementById("esconder-p").onclick = function (event) {
	// Seleciona o objeto
	var paragrafo = document.querySelector('p');
	paragrafo.style.display = 'none';
	//paragrafo.style.visibility = 'hidden';
};

/*
Mostrar paragráfo um
*/
document.getElementById("mostrar-p").onclick = function (event) {
	// Seleciona o objeto
	var paragrafo = document.querySelector('p');
	paragrafo.style.display = '';
	//paragrafo.style.visibility = 'visible';
};

//--------------------------------------------------------

/*
Esconder paragráfo dois
*/
document.getElementById("esconder-paragrafo-1").onclick = function (event) {
	// Seleciona o objeto
	var paragrafo = document.querySelector('#paragrafo-1');
	paragrafo.style.display = 'none';
	//paragrafo.style.visibility = 'hidden';
};

/*
Mostrar paragráfo dois
*/
document.getElementById("mostrar-paragrafo-1").onclick = function (event) {
	// Seleciona o objeto
	var paragrafo = document.querySelector('#paragrafo-1');
	paragrafo.style.display = '';
	//paragrafo.style.visibility = 'visible';
};

//--------------------------------------------------------

/*
Esconder paragráfo três
*/
document.getElementById("esconder-prf-mensagem").onclick = function (event) {
	// Seleciona o objeto
	var paragrafo = document.querySelector('.prf'); //our '.prf.mensagem' pra ser mais específico
	paragrafo.style.display = 'none';
	//paragrafo.style.visibility = 'hidden';
};


/*
Mostrar paragráfo um
*/
document.getElementById("mostrar-prf-mensagem").onclick = function (event) {
	// Seleciona o objeto
	var paragrafo = document.querySelector('.prf');
	paragrafo.style.display = '';
	//paragrafo.style.visibility = 'visible';
};

//--------------------------------------------------------

/*
Aplica estilo em todos os elementos
*/
document.getElementById("btn-frutas-e-verduras").onclick = function (event) {
	
	var itens_da_lista = document.querySelectorAll('ul.lista li');
	
	// iteração em todos os elementos da lista para aplicar o estilo
	// em cada elemento individualmente
	for (var i = 0; i < itens_da_lista.length; i++) {
		itens_da_lista[i].style.backgroundColor = 'yellow';
		itens_da_lista[i].style.color = 'black';
	};
};

/*
Aplica estilo somente nas frutas
*/
document.getElementById("btn-frutas").onclick = function (event) {
	
	var itens_da_lista = document.querySelectorAll('ul.lista li.fruta');
	
	// iteração em todos os elementos da lista para aplicar o estilo
	// em cada elemento individualmente
	for (var i = 0; i < itens_da_lista.length; i++) {
		itens_da_lista[i].style.backgroundColor = 'red';
		itens_da_lista[i].style.color = 'white';
	};
};

/*
Aplica estilo somente nas verduras
*/
document.getElementById("btn-verduras").onclick = function (event) {
	
	var itens_da_lista = document.querySelectorAll('ul.lista li.verdura');
	
	// iteração em todos os elementos da lista para aplicar o estilo
	// em cada elemento individualmente
	for (var i = 0; i < itens_da_lista.length; i++) {
		itens_da_lista[i].style.backgroundColor = 'green';
		itens_da_lista[i].style.color = 'yellow';
	};
};