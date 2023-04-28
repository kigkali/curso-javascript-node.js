// trabajar con metodos mas avanzados
// .map .filter() .reduce()

const array = ["San Sebastian", "Madrid", "Barcelona", "alicate", "Bilabao"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})

console.log(val)

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

 const listaObjectos = [
    { nombre: "Leire", edad: 35},
    { nombre: "Elmo", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Lucia", edad: 3},
    { nombre: "Edwin", edad: 24},
]
// cont peronasMayores = listaObjectos.filter(obj => {
//    if (obj.edad > 30) {
//          return true
//    } else {
//        return false
//    }
// })
const personasMayores = listaObjectos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjectos.filter(obj => obj.nombre !== "Edwin")
console.log(nuevaLista)

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})

console.log(suma)