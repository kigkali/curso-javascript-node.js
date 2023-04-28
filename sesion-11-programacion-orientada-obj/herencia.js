// Inheritance - herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad,) {
        this._nombre = nombre
        this._edad = edad
    
    }   

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.edad = edad
        this.lenguaje = lenguaje
    }

    saludo() { // Override
        super.saludo()
        console.log(`Y soy desarrolladoe de ${this.leguanje}`)
    }
}

const nuevodev = new Desarrollador("Edwin", 24, "javascript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo => varias formas

