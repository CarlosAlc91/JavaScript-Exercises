/** ✍🏻 Ejercicio 8: Operadores de comparación */

/* Nota:
 * No modifiques los nombres de las funciones ni de los parámetros.
 * No debers invocar las funciones.
 * Tu soluciones deben ser genericas, es decir, no debes escribir datos directamente, sino utilizar los parámetros que reciben las funciones.
 */

// ✅ Reeplaza null por el valor correspondiente en cada operación

// 1. 📌 Realiza los siguientes ejercicios de operadores lógicos

/** @example@1 {@link null || false || 'hola' || 23 || 'string' || 0 } */

const ejemplo1 = "hola";

/** @example@2 {@link 0 && false && 'hola' && 23 && 'string' && 0 } */

const ejemplo2 = 0;

/** @example@3 {@link null || 0 || '' || false } */

const ejemplo3 = false;

/** @example@4 {@link '0' && true && 25 && 'null' } */

const ejemplo4 = "null";

/** @example@5 {@link '' || 25 && 'hola' || true } */

const ejemplo5 = "hola";

// 2. 📌 Realiza las siguientes funciones de operadores lógicos

const visa = true;
const passaporte = true;
function puedeIngresarAlPais(visa, passaporte) {
  // La función recibe dos booleanos, visa y passaporte, ambos son requeridos.
  // Si visa o passaporte son true, retorna true.
  // De lo contrario, retorna false.
  // Ejemplo: in: true, true, out: true
  // Tu código:

  return visa === passaporte;
}

console.log(puedeIngresarAlPais(visa, passaporte));

const edad = 18;
const permiso = true;
function puedeIngresarAlEvento(edad, permiso) {
  // La función recibe dos booleanos, edad y permiso
  // Para ingresar a un evento, la edad debe ser mayor o igual a 18, o tener permiso de un adulto.
  // Si no tiene la edad requerida y tampoco el permiso, retorna false.
  // Ejemplo: in: 20, true, out: true
  // Tu código:

  return edad >= 18 || permiso || false;
}

console.log(puedeIngresarAlEvento(edad, permiso));

const nombre = "";
function cortoCircuito(nombre) {
  // La función recibe un string, nombre.
  // Tu labor es retornar un mensaje de bienvenida, si el nombre es válido. De lo contrario, retornar un mensaje con el nombre 'visitante'.
  // Ejemplo: in: 'Juan', out: 'Bienvenido Juan'
  // Ejemplo: in: '', out: 'Bienvenido visitante'
  // Tu código:

  /* if (nombre === "") {
    return "bienvenido visitante";
  } else {
    nombre;
  }

  return `bienvenido ${nombre}`; */
  return `Bienvenido ${nombre || "visitante"}`;
}

console.log(cortoCircuito(nombre));
