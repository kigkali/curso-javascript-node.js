const persona = {
    nombre: "Edwin",
    edad: 34,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola')
    }
}

//console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Martin",
    edad: 15,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola')
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, //  nombre: nombre
        edad,
        isDeveloper, 
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Edwin", 23, true)
console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Maria", 44, false)

