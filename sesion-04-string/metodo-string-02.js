// longitud de string (parte 2)
let input = "ESCORpio"
let db = "escorpio"

//toLoweCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

//formar de concatenar dos cadenas de caracter
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

//eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final    "
console.log(str_3.length)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obotener el caracter que hay en ciertas posicion

let str_4 = "Hola souy el string numero 4"

console.log(str_4.charAt(5))
console.log(str_4[5])

// obtener la posicion de una palabra dentro de una cadena de caracter

let str_5 = "Hola soy Edwin y me gusta el trap. Mi nombre es edwin mi apellido es Leonardo"
console.log(str_5.indexOf("Edwin"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Edwin"))