//practica 03
// Altura en centímetros
var alturaCentimetros = 165;

// Altura en metros
var alturaMetros = 1.65;

// Peso en kilogramos
var pesoKilogramos = 60.5;

// Altura en metros redondeada hacia arriba
var alturaMetrosRedondeada = Math.ceil(alturaMetros);

// Peso en kilogramos redondeado hacia abajo
var pesoKilogramosRedondeado = Math.floor(pesoKilogramos);

// Comprobar si el máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript
var maximoValor = Number.MAX_VALUE;
var comprobarMaximoValor = (maximoValor + 1) === maximoValor;

console.log('Altura en centímetros: ' + alturaCentimetros);
console.log('Altura en metros: ' + alturaMetros);
console.log('Peso en kilogramos: ' + pesoKilogramos);
console.log('Altura en metros redondeada hacia arriba: ' + alturaMetrosRedondeada);
console.log('Peso en kilogramos redondeado hacia abajo: ' + pesoKilogramosRedondeado);
console.log('El máximo valor que se puede obtener en Javascript + 1 es igual al máximo')