// principales oparaciones  aritmeticas

let a = 3.5
let b = 4.8

console.log(a + b);

// Resta (-)
console.log( a - b);
// Multiplicacion (*)
console.log(a * b);
// Division
console.log(a / b)

//representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// rendodeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);

// .toFixied() - limitar el numero de decimales al valor
console.log(d.toFixed(4))
console.log(typeof d.toFixed(4));

let e = 1839.123456780;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x) - limite el numero de cifras significativa

console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));