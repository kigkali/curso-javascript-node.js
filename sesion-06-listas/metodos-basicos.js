// como trabajar con listas (arrays, arreglos, vectores...)
let varl = {id: false}
let array = [1, "hola", false, {id: 5}, null, undefined, varl]

console.log(array)

// Aacceder a los valores de un array a traves de su posicion
// array[indice] => 0, 1, 2, 3, 4, 5,....
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => mutan el valor de nuestros array

// valores al final -> Push
array.push("final", 45, 100, false);
console.log(array);

//valores principio -> Unshift
array.unshift("inicio", 87, 99);
console.log(array)

//Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => multan el valor del array

const array2 = [1, 3, "Hola", false]
// valores al final -> Pop

array2.pop()
console.log(array2)

// valores al principio -> shift

array2.shift()
console.log(array2)

// metodo para eliminar , modificar o anadir valores en nuestro array
// .splice(x, y, z)

const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numvaloresa Eliminar)
array3.splice(2, 3);
console.log(array3);

// anadir Valores .splice(indice, 0, valores)

array3.splice(2, 0, "Hola");
console.log(array3)

// Modificar valores .plice(indice, 1, valores)

array3.splice(2, 1, 3);
console.log(array3);