/** ✍🏻 Ejercicio 9: Condicionales */

/* Nota:
 * No modifiques los nombres de las variables y las funciones ni de los parámetros.
 * No debers invocar las funciones.
 * Tu soluciones deben ser genericas, es decir, no debes escribir datos directamente, sino utilizar los parámetros que reciben las funciones.
 */

// 1. 📌 Realiza los siguientes ejercicios de condicionales

// Realiza una condición simple (if) que evalúe si la variable "condicion" es true
// De ser así, asigna el valor 'verdadero' a la variable resultado.
const condicion = true;

let resultado;
// Tu código debajo de esta línea

if (condicion) {
  resultado = "verdadero";
}

// Realiza una condición compuesta (if-else) que evalúe si x es mayor que y, de ser así, asigna el valor 'x es mayor que y' a la variable resultadoPositivo, de lo contrario, asigna el valor 'x es menor o igual que y' a la variable resultadoNegativo.
const x = 10;
const y = 5;

let resultadoPositivo;
let resultadoNegativo;
// Tu código debajo de esta línea

if (x > y) {
  resultadoPositivo = "x es mayor que y";
} else {
  resultadoNegativo = "x es menor o igual que y";
}

/* *********************************************** */

// 2. 📌 Realiza las siguientes funciones

const numero = 8;
function positivoNegativo(numero) {
  // Retorna 'positivo' si el número es mayor que cero, 'negativo' si es menor que cero y 'cero' si es igual a cero.
  // Ejemplo: in: 1, out: 'positivo'
  // Tu código:

  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "cero";
  }
}

console.log(positivoNegativo(numero));

/* *********************************************** */

const nota = 8;
function asignarCalificacion(nota) {
  // La función recibe una nota de 0 a 10 y deberá devolver un string de la siguiente forma:
  // 'Insuficiente' si la nota es menor a 6 y mayor o igual a 0.
  // 'Suficiente' si la nota es igual a 6.
  // 'Bien' si la nota es mayor o igual a 7 y menor a 9.
  // 'Excelente' si la nota es mayor o igual a 9 y menor o igual a 10.
  // R'Nota inválida' si no cumple ninguno de los valores anteriores.
  // Ejemplo: in: 8, out: 'Bien'
  // Tu código:

  if (nota < 6 && nota > 0) {
    return "Insuficiente";
  } else if (nota === 6) {
    return "Suficiente";
  } else if (nota >= 7 && nota < 9) {
    return "Bien";
  } else if (nota >= 9 && nota <= 10) {
    return "Excelente";
  } else {
    return "Nota no valida";
  }
}

console.log(asignarCalificacion(nota));

/* *********************************************** */

const usuario = "admin";
const password = "12345";
function iniciarSesion(usuario, password) {
  // Necesitamos saber si un usuario inició sesión correctamente tomando en cuenta los siguientes datos:
  // Si el usuario es 'admin' y la contraseña es '12345', el sistema mostrará 'Bienvenido admin'. 👍
  // Si el usuario es 'admin' y la contraseña está vacía o es null, el sistema mostrará 'Debes ingresar tu contraseña'.👍
  // De lo contrario, mostrará 'Contraseña incorrecta'.
  // Si el usuario está vacío o es null, debe mostrar 'Debes ingresar tu usuario'.👍
  // Si el usuario es distinto de 'admin', debe mostrar 'Usuario incorrecto'.
  // Ejemplo: in: 'admin', '12345', out: 'Bienvenido admin'
  // Ejemplo: in: 'admin', '', out: 'Debes ingresar tu contraseña'
  // Ejemplo: in: 'admin', '1234', out: 'Contraseña incorrecta'
  // Ejemplo: in: 'pepe', '12345', out: 'Usuario incorrecto' R
  // Ejemplo: in: null, '12345', out: 'Debes ingresar tu usuario'
  // Tu código:

  /* if (usuario === "admin") {
    if (password === "12345") {
      return "Bienvenido admin";
    } else if (password === "" || password === null) {
      return "Debes ingresar tu contraseña";
    } else {
      return "Contraseña incorrecta";
    }
  } else if (usuario === "" || usuario === null) {
    return "Debes ingresar tu usuario";
  } else {
    return "Usuario incorrecto";
  } */

  if (usuario === "admin" && password === "12345") {
    return "Bienvenido usuario";
  } else if ((usuario === "admin" && password === " ") || password === null) {
    return "Debes ingresar tu contrasena";
  } else if (usuario === "" || usuario === null) {
    return "Ingresa tu usuario";
  } else if (usuario !== "admin") {
    return "Usuario incorrecto";
  } else {
    return "Contrasena incorrecta";
  }
}

console.log(iniciarSesion(usuario, password));

/* *********************************************** */

const articulo = "manzanas";
const carrito = {};
function carritoDeCompras(articulo, carrito) {
  // Necesitamos agregar un artículo al carrito de compras, pero debemos validar si el artículo existe, de ser así, debemos sumar uno a la cantidad, de lo contrario, debemos agregarlo y asignarle el valor de 1.
  // Ejemplo: in: 'manzanas', out: { manzanas: 1 }

  if (carrito[articulo]) {
    carrito[articulo]++;
  } else {
    carrito[articulo] = 1;
  }
  return carrito;
}

console.log(carritoDeCompras(articulo, carrito));

/* *********************************************** */

function losDeLaMitad(arreglo) {
  // La función recibe un arreglo de números.
  // Si el arreglo tiene un número de elementos par, retorna los dos elementos del medio en un arreglo.
  // Ejemplo: in: [1, 2, 3, 4], out: [2, 3]
  // Si el arreglo tiene un número de elementos impar, retorna el elemento del medio.
  // Ejemplo: in: [1, 2, 3], out: 2
  // Tu código:
  //? Math.float(x)
}

//* sacar la mitad

const num1 = [1, 2, 3];
//? objeto Math
const mitad = Math.floor(num1.length / 2);
console.log(num1[mitad]);

/* *********************************************** */
let number = 8;
function dobleONada(num) {
  // La función recibe un número. Usa el operador ternario para retornar:
  // Si es mayor a 10, retorna ese mismo número.
  // Si no es mayor a 10, retorna el doble del número recibido.
  // Ejemplo: in: 8, out: 16
  // Ejemplo: in: 12, out: 12
  // Tu código:

  /*  if (num > 10) {
    return num;
  } else {
    return num * 2;
  } */

  /* 
  
  * ? => if
  * : => else

  */
  return num > 10 ? num : num * 2;
}

console.log(dobleONada(number));

/* *********************************************** */

let str = "Hola";

function soloMinusculas(str) {
  // La función recibe un string. Usa el operador ternario para retornar:
  // Si el string tiene al menos un caracter en mayúscula, retorna 'No, no me gusta'.
  // De lo contrario, retorna 'Si, me gusta'.
  // Ejemplo: in: 'hola', out: 'Si, me gusta'
  // Tu código:

  return str === str.toUpperCase(str) ? "No, megusta" : "Si, me gusta";
}

console.log(soloMinusculas(str));

/* *********************************************** */

let isPair = 11;

function parOImpar(num) {
  // La función recibe un número. Usa el operador ternario para retornar:
  // Si el número es par, retorna el número y el texto ' es par' en un string.
  // Ejemplo: in: 8, out: '8 es par'
  // De lo contrario, retorna el número y el texto ' es impar'.
  // Ejemplo: in: 11, out: '11 es impar'
  // Tu código:

  return num % 2 === 0
    ? `El numero ${num} es par`
    : `El numero ${num} no es par`;
}

console.log(parOImpar(isPair));

/* *********************************************** */

let pizza = "veggie";
function pizzaNapolis(pizza) {
  let precio;
  // Utiliza la sentencia switch para evaluar el parámetro pizza y asignarle un precio:
  // 'pepperoni' => 100
  // 'hawaiana' => 150
  // 'mexicana' => 200
  // 'cuatro quesos' => 250
  // 'especial' => 300
  // Deberás retornar el siguiente mensaje: 'El precio de la [pizza] es de $[precio]'
  // Si la pizza no existe, debemos retornar 'No tenemos la pizza [pizza]'
  // Ejemplo: in: 'pepperoni', out: 'El precio de la pizza napolitana es de $100'
  // Ejemplo: in: 'veggie', out: 'No tenemos la pizza veggie'
  // Tu código:

  switch (pizza) {
    case "pepperoni":
      console.log(`El precio de la pizza con ${pizza} es de $100`);
      break;
    case "hawaiana":
      console.log(`El precio de la pizza ${pizza} es de $150`);
      break;
    case "mexicana":
      console.log(`El precio de la pizza ${pizza} es de $200`);
      break;
    case "cuatro quesos":
      console.log(`El precio de la pizza ${pizza} es de $250`);
      break;
    case "especial":
      console.log(`El precio de la pizza ${pizza} es de $300`);
      break;

    default:
      `No tenemos la pizza ${pizza}`;
      break;
  }
}

console.log(pizzaNapolis(pizza));
