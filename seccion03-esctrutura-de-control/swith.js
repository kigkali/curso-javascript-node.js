//sentencias swith

let nota = 5

switch (nota){
    case 5:
        console.log("enhorabuena, has obtenido un sobresaliente");
        break;
    case 4:
        console.log("buem trabajo, pero podria haberlo hecho mejor");
        break;
    case 3:
        console.log("has obtenido un sufieciente");
        break;
    case 2:
        console.log("no has aprobado por poco");
        break;
    case 1:
        console.log("no has estidoado nada, trabaja un poquito mas para la proxima");
        break;
        default:
            console.log("error")
            break;

}