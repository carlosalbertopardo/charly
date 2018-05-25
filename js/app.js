
// map = array transformations

var animales = ['Loro', 'Ballena','Ratón']

var animalesGrandes = animales.map(function (element, index) {
	return element + ' grande'
})

console.log(animalesGrandes);

//Filter - array delete

var colores = ['Negro', 'Blanco', 'Verde botella']

var coloresConE = colores.filter(function (element, index) {
	return valor
})

console.log(coloresConE)

// reduce - combinacion

var numeros = [2,4,6,8];

var resultado = numeros.reduce(function(valorAnterior, valorActual){
	return valorAnterior + valorActual
})


//forEach - recorrer

colores.forEach(function (elemento, index) {
	console.log(elemento);
})
