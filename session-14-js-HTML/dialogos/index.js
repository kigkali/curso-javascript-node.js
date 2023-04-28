const boton = document.querySelector("#btn")

// console.log(boton)

boton.addEventListener("click", () => {
    // alert("se ha hecho click")
    //  confirm("Estas de acuerdo") && console.log("OK")
    // confirm("estas de acuerdo")
    // ? console.log("OK")
    // : console.log("NO!!")

    const respuesta = confirm("seguro")
    if (respuesta) {
        console.log("estas de acuerdo")
    } else {
        console.log("No estas de acuerdo")
    }
})

const botoninfo = document.querySelector("#info")
botoninfo.addEventListener("click", () => {
    const nombre = prompt("cual es tu nombre")
    if (nombre){
    console.log("Tu nombre es " + nombre)
    } else {
        console.log("NOhas introducido nada")
    }
})

const lista = [{
    nombre: "Edwin",
    edad: 24
}, {
    nombre: "keila",
    edad: 24
}, {
    nombre: "amaia",
    edad: 35

}]

console.log(lista)