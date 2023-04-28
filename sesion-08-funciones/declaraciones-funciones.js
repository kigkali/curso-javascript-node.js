// Que son las funciones, como se declaran y como se utilizan

const nom = "Edwin"

// saludar("Leonardo")
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`) 
}

/////

let nombre_2 = "Edwin"
console.log(nombre_2)

despedir(nombre_2)

function despedir(nombre) {
    nombre = "Leonardo"
    console.log(`Adios ${nombre}`)
}

//// 

let persona = {nombre: "Edwin", apellido: "Leonardo"}

saludarPersona(persona)

console.log(persona)

function saludarPersona(objecto) {
    objecto.apellido = "Leonardo"
    console.log(`hola ${objecto.nombre} ${objecto.apellido}`)
}

saludar()

//////////////

function imprimeNumero(numero = 7) { // parametro por defecto
    console.log(numero)
}

imprimeNumero()

/////////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 2, 9, 2, "Hola", {id: 9})

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)

////////

let variable = "Hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adios"
    console.log(variable_interna)
    return a + b
}

console.log(multiplicar(4, 9))