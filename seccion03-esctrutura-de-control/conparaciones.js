//conparaciones 

//igual
if (5 == 5) {
    console.log("5 es igual a 5") 
}

if (5 === 5) {
    console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

 // ==  solo compara el valor 
 // === compara el valor y el tipo
if (a == b) {
    console.log("a es igual a b - Debil")
}

if (a === b) {
    console.log("a es igual a b - Fuerte")
}

let c = 4;
let d = 10;

if (c !== d){
    console.log("c es diferente a d - Debil")
}
 //comparaciones mayor que y menos que 
let max = 10;
let min = 5; 

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= 10){
    console.log("max es mayor que min")
}

if (min < max){
    console.log("min es menos que max")
}

if (min <= max) {
    console.log("min es menos o igual que max")
}