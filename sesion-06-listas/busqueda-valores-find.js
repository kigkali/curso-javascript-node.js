// itera los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined];

//forma antigua (poco eficiente)
for (let i = 0; i< array.length; i++){
    console.log(array[i])
}

// forma ES^ (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2,3, 93, 19]
arrayNums.forEach(valor =>{
    suma += valor;
    console.log(valor)
})
console.log(suma)

// Busqueda de un valor dentro de una lista .find()
// quiero encontrar el elemento 90

const variable = array.find(valor =>{
    if (valor === 90) {
    return true
    }
})

console.log(variable)

const listaObjectos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Elmo", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Edwin", edad: 24},

]

//const objecto = listaObjectos.find(o => {
//    if (o.nombre === "Edwin"){
//        return true
//    }
//})
const objecto = listaObjectos.find(o => o.nombre === "Edwin")
console.log(objecto.edad)

const { edad } = listaObjectos.find(o => o.nombre === "Edwin")
console.log(edad)