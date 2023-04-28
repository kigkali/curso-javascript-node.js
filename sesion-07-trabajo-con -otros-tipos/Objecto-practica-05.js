// Objeto con mis datos personales
const misDatosPersonales = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    altura: 1.75,
    eresDesarrollador: true,
  };
  
  // Variable que obtiene mi edad a partir del objeto anterior
  const miEdad = misDatosPersonales.edad;
  
  // Lista con mi objeto y los objetos de mis dos mejores amigos
  const listaDatosPersonales = [
    misDatosPersonales,
    {
      nombre: "María",
      apellido: "González",
      edad: 28,
      altura: 1.70,
      eresDesarrollador: false,
    },
    {
      nombre: "Luis",
      apellido: "García",
      edad: 32,
      altura: 1.80,
      eresDesarrollador: true,
    }
  ];
  
  // Nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
  const listaOrdenadaPorEdad = listaDatosPersonales.sort((a, b) => b.edad - a.edad);
  