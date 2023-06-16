/** ✍🏻 Ejercicio 11: Métodos de arreglos */

/* Nota:
 * No modifiques los nombres de las variables y las funciones ni de los parámetros.
 * No debers invocar las funciones.
 * Tu soluciones deben ser genericas, es decir, no debes escribir datos directamente, sino utilizar los parámetros que reciben las funciones.
 */

// 1. 📌 Realiza los siguientes ejercicios con arreglos

const arr = [1, 2, 3];

function regresaElUltimoElemento(arr) {
  // Retrona el último elemento de un arreglo.
  // Ejemplo: in: [1, 2, 3] out: 3
  // Tu código:

  return arr[2];
}

console.log(regresaElUltimoElemento(arr));

/* ********************************************************** */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
function combinaDosArreglos(arr, arr2) {
  // Retrona un array que contenga los elementos de dos arrays.
  // Ejemplo: in: [1, 2, 3], [4, 5, 6] out: [1, 2, 3, 4, 5, 6]
  // Tu código:

  return arr.concat(arr2);
}

console.log(combinaDosArreglos(arr1, arr2));

/* ********************************************************** */

const arr3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function aplanarArreglo(arr) {
  // Retrona un array que contenga los elementos de un arreglo de arreglos.
  // Ejemplo: in: [[1, 2], [3, 4], [5, 6]] out: [1, 2, 3, 4, 5, 6]
  // Tu código:

  return arr.flat();
}

console.log(aplanarArreglo(arr3));

/* ********************************************************** */

const arr4 = [1, 3, 2];

function odenarDeMayorAmenor(arr) {
  // Retrona un array que contenga los elementos de un arreglo ordenados de mayor a menor.
  // Ejemplo: in: [1, 3, 2] out: [3, 2, 1]
  // Tu código:

  return arr.sort((a, b) => b - a);
}

console.log(odenarDeMayorAmenor(arr4));

/* ********************************************************** */

function ordenarPorFecha(arr) {
  // Retrona un array que contenga los elementos de un arreglo ordenados por fecha de publicación.
  // Ejemplo: in: [{ fecha: '2020-01-01' }, { fecha: '2019-01-01' }] out: [{ fecha: '2019-01-01' }, { fecha: '2020-01-01' }]
  // Tu código:
}
/* ********************************************************** */
function agregarElementoSinModificarOriginal(arr, elemento) {
  const nuevoArreglo = null;
  // Retrona un array que contenga los elementos de un arreglo y un elemento adicional al final.
  // Ejemplo: in: [1, 2, 3], 4 out: [1, 2, 3, 4]
  // Tu código:

  return {
    nuevoArreglo,
    arregloOriginal: arr,
  };
}
/* ********************************************************** */
function eliminarElementoSinModificarOriginal(arr, elemento) {
  const nuevoArreglo = null;
  // Retrona un array que contenga los elementos de un arreglo sin un elemento específico.
  // Ejemplo: in: [1, 2, 3, 4], 3 out: [1, 2, 4]
  // Tu código:

  return {
    nuevoArreglo,
    arregloOriginal: arr,
  };
}
/* ********************************************************** */
function contarCantidadDeArticulos(arr) {
  // De un arreglo de objetos, donde cada objeto es un artículo, retorna la cantidad total de artículos.
  // Ejemplo: in: [{qty: 1}, {qty: 2}, {qty: 3}] out: 6
  // Tu código:
}
/* ********************************************************** */
function palindromo(texto) {
  // Retrona true si el texto es un palíndromo, de lo contrario retorna false.
  // Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
  // Ejemplo: in: 'anita lava la tina' out: true
  // Tu código:
}
/* ********************************************************** */
function unirCadenaDeTexto(arr) {
  // Retrona un texto que contenga los elementos de un arreglo separados por un espacio.
  // Ejemplo: in: ['JavaScript', 'es', 'genial'] out: 'JavaScript es genial'
  // Tu código:
}
/* ********************************************************** */
function invieteElOrdenDeLaCadena(texto) {
  // Retrona un texto en orden inverso.
  // Ejemplo: in: 'Hola mundo' out: 'odnum aloH'
  // Tu código:
}
/* ********************************************************** */
function buscarCoincidencias(arr, arr2) {
  // Retrona un arreglo que contenga los elementos que se repiten en dos arreglos.
  // Ejemplo: in: [4, 2, 3], [3, 4, 5] out: [4, 3]
  // Nota: Los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}
