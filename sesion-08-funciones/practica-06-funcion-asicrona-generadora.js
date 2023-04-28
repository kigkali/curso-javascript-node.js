// Función que siempre devuelve true
function alwaysTrue() {
    return true;
  }
  
  // Función asíncrona que imprime un mensaje después de 5 segundos
  async function asyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Hola soy una promesa');
  }
  
  // Función generadora de índices pares automáticos
  function* generaId() {
    let  id = 0 
    while(true) {
        id++
        yield id // esperando hasta que se vuelva a llamar
        if (id === 10) {
            return
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value)



