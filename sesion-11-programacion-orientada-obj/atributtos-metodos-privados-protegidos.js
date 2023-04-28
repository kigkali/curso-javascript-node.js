class Persona {
    // Private -> #
    // private -> solo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected -> _
    // Protected -> solo puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nom, edad) {
        this.#nombre = nom
        this.#edad = edad
    
    }   

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
    
    obtenNombre() { // funcion getter -> Nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Edwin, 70")
// console.log(persona)
// console.log(persona.nombre)
// persona.saludo() 
// console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad)
//console.log(persona._isDeveloper)

// Getter -> metodos que nos permiten atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// setter -> metodos que nos permitten cambiar el valor de alguno de los atributos privados o protegidos
// quieor cambiar la edad de la persona

persona.setEdad(15)
console.log(persona.getEdad())
