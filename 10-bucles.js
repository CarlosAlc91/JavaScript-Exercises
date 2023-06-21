/** ✍🏻 Ejercicio 10: Bucles */

/* Nota:
 * No modifiques los nombres de las variables y las funciones ni de los parámetros.
 * No debers invocar las funciones.
 * Tu soluciones deben ser genericas, es decir, no debes escribir datos directamente, sino utilizar los parámetros que reciben las funciones.
 */

// 1. 📌 Realiza los siguientes ejercicios con bucles

const texto = "Hola Mundo";
function contadorDeVocales(texto) {
  // Retrona el número de vocales que tiene un texto.
  // Ten en cuenta que una vocal puede estar en mayúscula o minúscula.
  // Ejemplo: in: 'Hola Mundo' out: 4
  // Tu código:

  const vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;

  for (let i = 0; i < texto.length; i++) {
    const letter = texto[i].toLowerCase(vowels);

    if (vowels.includes(letter)) {
      sum++;
    }
  }
  return sum;
}

console.log(contadorDeVocales(texto)); // 4

/* ********************************************************************************* */

const inicio = 1;
const final = 5;
function rango(inicio, final) {
  // Retrona un rango de números entre el número inicial y el número final.
  // El número inicial siempre será menor que el número final.
  // Ejemplo: in: 1, 5 out: [1, 2, 3, 4, 5]
  // Tu código:

  const newArr = [];

  for (let i = inicio; i <= final; i++) {
    newArr.push(i);
  }

  return newArr;
}

console.log(rango(inicio, final)); // [1, 2, 3, 4, 5]
/* ********************************************************************************* */

const numeros = [1, 2, 3];
function sumatoria(numeros) {
  // Retrona la sumatoria de todos los números de un array.
  // Ejemplo: in: [1, 2, 3] out: 6
  // Tu código:
  //* se puede utilizar para sumar el total

  //? counter creation
  let counter = 0;

  //? for loop
  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];

    //? addition assigment
    counter += num;
  }
  return counter;
}

console.log(sumatoria(numeros)); //6
/* ********************************************************************************* */
const multiplo = 20;
const final2 = 100;
function multiplosDeN(multiplo, final) {
  // Retrona los múltiplos de un número entre el número inicial y el número final sin incluir ambos números.
  // Ejemplo: in: 20, 100 out: [40, 60, 80]
  // Tu código:
  // n x m = r

  //? empty array declaration
  const numbersArr = [];

  //? for loop
  for (let i = multiplo + 1; i < final; i++) {
    if (i % multiplo === 0 && i !== multiplo) {
      numbersArr.push(i);
    }
  }
  return numbersArr;
}

console.log(multiplosDeN(multiplo, final2)); //[40, 60, 80]
/* ********************************************************************************* */

const numero = [15, 2, 35, 26];
function numeroMasGrande(numeros) {
  // Retrona el número más grande de un array.
  // Ejemplo: in: [15, 2, 35, 26] out: 35
  // Tu código:

  let max = 0;

  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];

    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(numeroMasGrande(numero)); // 35

/*
 * let max = 0;
 * counter declaration
 * for (let i = 0; i < numeros.length; i++) {
 * index starts at position 0; index is less than colores array in its .length; index iterates++
 * const num = numeros[i];
 * flag creation for ease use
 * if (num > max) => conditional
 * if (num is greater than max)
 * max = num;
 * max receives such number
 */

/* ********************************************************************************* */

const colores = ["rojo", "azul", "rojo", "verde", "azul", "rojo"];
function contarColores(colores) {
  // Retrona el número de veces que se repite un color en un array.
  // Ejemplo: in: ['rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo'] out: { rojo: 3, azul: 2, verde: 1 }
  // Tu código:

  //* empty object declaration
  let colorsObj = {};

  //* for loop declaration to count and read colores array
  for (let i = 0; i < colores.length; i++) {
    const colors = colores[i];

    if (colorsObj[colors]) {
      colorsObj[colors]++;
    } else {
      colorsObj[colors] = 1;
    }
  }

  return colorsObj;
}

console.log(contarColores(colores)); // out: { rojo: 3, azul: 2, verde: 1 }

/*
 * for (let i = 0; i < colores.length; i++)
 * index starts at position 0; index is less than colores array in its .length; index iterates++
 * const colors = colores[i];
 * flag created
 * if (colorsObj[colors])
 * if (the object colorsObj finds a [color])
 * colorsObj[colors]++;
 * object colorsObj will increas it
 *else {
 * colorsObj[colors] = 1;
 * otherwise object colorsObj adds [colors] to itself at position = 1
 */

/* ********************************************************************************* */

const usuarios = [
  { nombre: "John", edad: 19 },
  { nombre: "Jane", edad: 21 },
];

function filtrarPorEdad(usuarios) {
  // Retrona un array con los usuarios que sean mayores de 20 pero menores de 30 años.
  // Ejemplo: in: [{ nombre: 'John', edad: 19 }, { nombre: 'Jane', edad: 21 }] out: [{ nombre: 'Jane', edad: 21 }]
  // Tu código:

  let usersArr = [];

  for (let i = 0; i < usuarios.length; i++) {
    const users = usuarios[i];

    if (users.edad > 20 && users.edad < 30) {
      usersArr.push(users);
    }
  }

  //for (const iterator of object)

  /*  for (const usr of usuarios) {

    if (usr.edad > 20 && usr.edad < 30) {
      usersArr.push(usr);
    }
  } */

  return usersArr;
}

console.log(filtrarPorEdad(usuarios)); //[{ nombre: 'Jane', edad: 21 }]

/*
 * let usersArr = [];
 * empty array declared
 * for (let i = 0; i < usuarios.length; i++)
 * for (idex starts at = 0; index is less than array in its .length; index iterates ++)
 * const users = usuarios[i];
 * flag declaration
 * if (users.edad > 20 && users.edad < 30)
 * if (users in its property .edad is greater than 20 and && users in its property .edad is less than 30)
 * usersArr.push(users);
 * usersArr recieves a .push(from users)
 */
/* ********************************************************************************* */

const usrArr = [
  { nombre: "John", likes: 2 },
  { nombre: "Jane", likes: 3 },
];
function contarLikesDeUsuarios(usuarios) {
  // Retrona el total de likes que tienen todos los usuarios.
  // Ejemplo: in: [{ nombre: 'John', likes: 2 }, { nombre: 'Jane', likes: 3 }] out: 5
  // Tu código:

  let counter = 0;

  for (let i = 0; i < usuarios.length; i++) {
    const user = usuarios[i].likes;

    counter += user;
  }
  return counter;
}

console.log(contarLikesDeUsuarios(usrArr)); //5

/* 
  * let counter = 0;
  * counter declared
  * for (let i = 0; i < usuarios.length; i++)
  * for (index starts at 0; index is less than array on its .length; index iterates ++)
  * const user = usuarios[i].likes;
  * flag user created with usuarios with its property.likes
  * counter += adds and asigns to user 
  * return counter

*/
/* ********************************************************************************* */

const titlePosts = [
  { titulo: "Hola", estado: true },
  { titulo: "Mundo", estado: false },
];

function publicarPosts(posts) {
  // Retrona un array con los posts que tienen en su propiedad "estado" el valor de true.
  // Ejemplo: in: [{ titulo: 'Hola', estado: true }, { titulo: 'Mundo', estado: false }] out: [{ titulo: 'Hola', estado: true }]
  // Tu código:
  let tittleArr = [];

  /*  for (stage of posts) {
    if (stage.estado) {
      // due to a falsy value the conditional if just reads the true value
      tittleArr.push(stage);
    }
    return tittleArr; */

  for (let i = 0; i < posts.length; i++) {
    const stage = posts[i];

    if (stage.estado === true) {
      tittleArr.push(stage);
    }
  }
  return tittleArr;
}

console.log(publicarPosts(titlePosts)); //[{ titulo: 'Hola', estado: true }]

/*
 * let tittleArr = [];
 * declaration of an empty array
 * for (let i = 0; i < posts.length; i++)
 * for (index = starts at position 0; index < has is less than array's .length; index iterates ++)
 * const stage = posts[i];
 * flag stage declared = from parameter posts[i] at its initial position
 * if (stage.estado === true)
 * conditional if (flag stage at its .estado property is equals === than true)
 * tittleArr.push(stage);
 * insede tittleArr will be .pushe(flag stage)
 * return tittleArr
 */
/* ********************************************************************************* */

const productos = [
  { id: 1, nombre: "Mouse" },
  { id: 2, nombre: "Teclado" },
];
const idProducto = 2;
function eliminarProducto(productos, idProducto) {
  // Retrona un array sin el producto que tiene el id que llega por parámetro.
  // Ejemplo: in: [{ id: 1, nombre: 'Mouse' }, { id: 2, nombre: 'Teclado' }], 2 out: [{ id: 1, nombre: 'Mouse' }]
  // Tu código:

  let productoArr = [];

  /*  for (product of productos) {
    if (product.id !== idProducto) {
      productoArr.push(product);
    }
  } */

  for (let i = 0; i < productos.length; i++) {
    const product = productos[i];

    if (product.id !== idProducto) {
      productoArr.push(product);
    }
  }

  return productoArr;
}

console.log(eliminarProducto(productos, idProducto)); //[{ id: 1, nombre: 'Mouse' }]

/*
 * let productoArr = [];
 * creation of an empty array
 * for (let i = 0; i < productos.length; i++)
 * for (let index = starts at position 0; index is less than productos array in its .length; index iterates++)
 * const product = productos[i];
 * product flag creation = productos[i]
 * if (product.id !== idProducto)
 * conditional if (product in its property .id is different than !== parameter idProducto)
 * productoArr.push(product);
 * empty array productArr will get a .push(product)
 * return productArr
 */
/* ********************************************************************************* */
// Retrona un objeto de la persona que tiene el correo que llega por parámetro.
// Ejemplo:
// in: [{ nombre: 'John', correo: 'john@mail.com' }, { nombre: 'Jane', correo: 'jane@mail' }], 'jane@mail.com'
// out: { nombre: 'Jane', correo: 'jane@mail' }
// Tu código:

const personas = [
  { nombre: "John", correo: "john@mail.com" },
  { nombre: "Jane", correo: "jane@mail" },
];

const correo = "jane@mail.com";
function buscarPersona(personas, correo) {
  /* for (const person of personas) {
    if (person.correo === correo) {
    }
    return person;
  } */
  /* for (let i = 0; i < personas.length; i++) {
    const person = personas[i];

    if (person.correo === correo) {
    }
    return person;
  } */
}

console.log(buscarPersona(personas, correo)); //{ nombre: 'Jane', correo: 'jane@mail' }

/*
 * since we're getting asked only for the object:
 * an empty array is not created
 * for (let i = 0; i < personas.length; i++)
 * for (index = starts at position 0; index is less than person in its .length; index iterates ++)
 * const person = personas[i].correo;
 * flag declaration with name person
 * if (person === correo)
 * conditional if (flag person is equal than === parameter correo)
 * return flag person
 */
/* ********************************************************************************* */

/* // Retrona el número de estudiantes que pertenecen a un bootcamp en específico.
 Ejemplo:
 in:
 estudiantes: [{ nombre: 'John', bootcamp_id: 1 }, { nombre: 'Jane', bootcamp_id: 2 }, { nombre: 'Joe', bootcamp_id: 1 }]
 bootcamps: [{ id: 1, nombre: 'Academlo' }, { id: 2, nombre: 'Otros' }]
 bootcamp: 'Academlo'
 out: 2
 Tu código: */

const estudiantes = [
  { nombre: "John", bootcamp_id: 1 },
  { nombre: "Jane", bootcamp_id: 2 },
  { nombre: "Joe", bootcamp_id: 1 },
];
const bootcamps = [
  { id: 1, nombre: "Academlo" },
  { id: 2, nombre: "Otros" },
];
const bootcamp = "Academlo";
function contarSoloEstudiantesDeUnBootcamp(estudiantes, bootcamps, bootcamp) {
  let contador = 0;

  for (let i = 0; i < estudiantes.length; i++) {
    const students = estudiantes[i];

    for (let j = 0; j < bootcamps.length; j++) {
      const classes = bootcamps[j];

      if (students.bootcamp_id === classes.id && classes.nombre === bootcamp) {
        contador++;
      }
    }
  }
  return contador;
}

console.log(
  contarSoloEstudiantesDeUnBootcamp(estudiantes, bootcamps, bootcamp)
);
/* ********************************************************************************* */

function serieMasVistas(series) {
  // Retrona el nombre de la serie que tiene más vistas.
  // Ejemplo:
  // in: { 'Dark': 50, 'Game of Thrones': 10, 'Black Mirror': 100, 'Stranger Things': 80 }
  // out: 'Black Mirror'
  // Tu código:
}
/* ********************************************************************************* */

function estudiantesPorModulo(personas, modulos) {
  // Retrona un array de objetos con el nombre de la persona, el nombre del módulo y el correo.
  // Ejemplo:
  // in:
  // personas: [
  // { nombre: 'Andrea', correo: 'Andrea@mail.com', modulo_id: 1 },
  // { nombre: 'Diego', correo: 'Diego@mail.com', modulo_id: 2 },
  // { nombre: 'Jesus', correo: 'Jesus@mail.com', modulo_id: 1 },
  // { nombre: 'Laura', correo: 'Laura@mail.com', modulo_id: 3 },
  // { nombre: 'Brayan', correo: 'Brayan@mail.com', modulo_id: 1}
  // ]
  // modulos: [{id:1, nombre: 'Fundamentos'}, { id:2, nombre: 'React'}, { id:3, nombre: 'Node'}]
  // out: [{ nombre: 'Andrea', modulo: 'Fundamentos', correo: 'Andrea@mail.com', ...}]
  // Tu código:
}

/* 💡 Para el siguiente investiga sobre un método para arrays llamado arr.sort() */
/* ********************************************************************************* */

function ordenaPorEdad(personas) {
  // Retrona un array de personas ordenadas por edad de menor a mayor.
  // Ejemplo:
  // in: [{ nombre: 'Lukas', edad: 20 }, { nombre: 'Maria', edad: 19 }, { nombre: 'Marcos', edad: 21 }]
  // out: [{ nombre: 'Maria', edad: 19 }, { nombre: 'Lukas', edad: 20 }, { nombre: 'Marcos', edad: 21 }]
  // Tu código:
}
