/** ✍🏻 Ejercicio 7: Operadores de comparación */

/* Nota:
 * No modifiques los nombres de las funciones ni de los parámetros.
 * No debers invocar las funciones.
 * Tu soluciones deben ser genericas, es decir, no debes escribir datos directamente, sino utilizar los parámetros que reciben las funciones.
 */

// ✅ Reeplaza null por el valor correspondiente en cada operación

// 1. 📌 Realiza los siguientes ejercicios de operadores de comparación

/** @example@1 {@link 18 == '18' } */

const ejemplo1 = true;

/** @example@2 {@link true < false } */

const ejemplo2 = false;

/** @example@3 {@link null <= 0 } */

const ejemplo3 = true;

/** @example@4 {@link 'tierna' >= 'tierra' } */

const ejemplo4 = false;

/** @example@5 {@link 0 != '' } */

const ejemplo5 = false;

// 2. 📌 Realiza las siguientes funciones de operadores de comparación

function sonIguales(num1, num2) {
  // Retorna true si num1 y num2 son iguales, de lo contrario, retorna false.
  // Ten en cuenta que 1 y '1' son tipos diferentes por lo cual deben retornar false.
  // Ejemplo: in: 18, 18, out: true
  // Tu código:

  
}
function tienenMismaLongitud(str1, str2) {
  // Retorna true si las dos strings tienen el mismo largo, de lo contrario, retorna false.
  // Ejemplo: in: 'hi', 'ha', out: true
  // Tu código:
  // const resutl = str1.length === str2.length;
  // return resutl;
}

function menosQueNoventa(num) {
  // Retorna true si num es menor que noventa, de lo contrario, retorna false.
  // Ejemplo: in: 89, out: true
  // Tu código:

  
}

function mayorQueCincuenta(num) {
  // Retorna true si num es mayor que cincuenta, de lo contrario, retorna false.
  // Ejemplo: in: 49, out: false
  // Tu código:

  
}

function esPar(num) {
  // Retorna true si num es par, de lo contrario, retorna false.
  // Ejemplo: in: 8, out: true
  // Tu código:

  return num % 2 === 0;
}

function esImpar(num) {
  // Retorna true si num es impar, de lo contrario, retorna false.
  // Ejemplo: in: 7, out: true
  // Tu código:

  return num % 2 !== 0;
}
