class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    
    }   

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("edwin", 24, true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 // inicializar
let persona_2 = new Persona("Maria", 35, false)
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

// instanceop -> similar pero para clases