/** ✍🏻 Ejercicio 10: Bucles */

/* Nota:
 * No modifiques los nombres de las variables y las funciones ni de los parámetros.
 * No debers invocar las funciones.
 * Tu soluciones deben ser genericas, es decir, no debes escribir datos directamente, sino utilizar los parámetros que reciben las funciones.
 */

// 1. 📌 Realiza los siguientes ejercicios con bucles

function contadorDeVocales(texto) {
  // Retrona el número de vocales que tiene un texto.
  // Ten en cuenta que una vocal puede estar en mayúscula o minúscula.
  // Ejemplo: in: 'Hola Mundo' out: 4
  // Tu código:

  //? se c
  const vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();

    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

function rango(inicio, final) {
  // Retrona un rango de números entre el número inicial y el número final.
  // El número inicial siempre será menor que el número final.
  // Ejemplo: in: 1, 5 out: [1, 2, 3, 4, 5]
  // Tu código:

  const numeros = [];

  for (let n = inicio; n <= final; n++) {
    numeros.push(n);
  }
  return numeros;
}

function sumatoria(numeros) {
  // Retrona la sumatoria de todos los números de un array.
  // Ejemplo: in: [1, 2, 3] out: 6
  // Tu código:

  //* se puede utilizar para sumar el total
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    //? a suma quiero sumarle y agregarle += numero
    suma += numero;
  }

  return suma;
}

function multiplosDeN(multiplo, final) {
  // Retrona los múltiplos de un número entre el número inicial y el número final sin incluir ambos números.
  // Ejemplo: in: 20, 100 out: [40, 60, 80]
  // Tu código:

  // n x m = r

  const multiplos = [];
  //? multiplo + 1 (empieza desde el siguiente numero); n < final (ya no esta agregando el numero final; incrementa)
  for (let n = multiplo + 1; n < final; n++) {
    //?n (numero) el resultado entre el multiplo es === 0 && numero sea diferente al multiplo iniicial
    if (n % multiplo === 0 && n !== multiplo) {
      multiplos.push(n);
    }
  }
  return multiplos;
}

//? podemos resolver el ejercicio de la edad que mas se repite, esta es la segunda parte.

function numeroMasGrande(numeros) {
  // Retrona el número más grande de un array.
  // Ejemplo: in: [15, 2, 35, 26] out: 35
  // Tu código:

  //? se crea una bandera para guardar el numero maximo tiene que ser menor al primero
  let max = 0;

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    //?si el numero actual es mayor que el maximo
    if (numero > max) {
      //?entonces el maximo sera el numero actual.
      max = numero;
    }
  }
  return max;
}

//? podemos resolver el ejercicio de la edad que mas se repite, esta es la primer parte.

function contarColores(colores) {
  // Retrona el número de veces que se repite un color en un array.
  // Ejemplo: in: ['rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo'] out: { rojo: 3, azul: 2, verde: 1 }
  // Tu código:

  //? primero se crea un objeto para guardar el resultado
  let box = {};

  //? creamos nuestro for
  for (let i = 0; i < colores.length; i++) {
    //?creacion de variable para colores
    const color = colores[i];

    //?creacion de condicional
    if (box[color]) {
      //?si dentro de box tenemos colo, lo incrementas
      box[color]++;
    } else {
      //? sino hay color, lo agregas en la posicion 1
      box[color] = 1;
    }
  }
  return box;
}

function filtrarPorEdad(usuarios) {
  // Retrona un array con los usuarios que sean mayores de 20 pero menores de 30 años.
  // Ejemplo: in: [{ nombre: 'John', edad: 19 }, { nombre: 'Jane', edad: 21 }] out: [{ nombre: 'Jane', edad: 21 }]
  // Tu código:

  const usuarioFiltrados = [];

  for (const user of usuarios) {
    if (user.edad > 20 && user.edad < 30) {
      usuarioFiltrados.push(user);
    }
  }
  return usuarioFiltrados;
}

//* for of, for in

function contarLikesDeUsuarios(usuarios) {
  // Retrona el total de likes que tienen todos los usuarios.
  // Ejemplo: in: [{ nombre: 'John', likes: 2 }, { nombre: 'Jane', likes: 3 }] out: 5
  // Tu código:

  let total = 0;

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];

    total += usuario.likes;
  }
  return total;
}

function publicarPosts(posts) {
  // Retrona un array con los posts que tienen en su propiedad "estado" el valor de true.
  // Ejemplo: in: [{ titulo: 'Hola', estado: true }, { titulo: 'Mundo', estado: false }] out: [{ titulo: 'Hola', estado: true }]
  // Tu código:

  const postPublicados = [];

  for (const post of posts) {
    if (post.estado) {
      //? cuando tengamos un falsy, automaticamente se valida e ingresa al arreglo
      postPublicados.push(post);
    }
  }
  return postPublicados;
}

function eliminarProducto(productos, idProducto) {
  // Retrona un array sin el producto que tiene el id que llega por parámetro.
  // Ejemplo: in: [{ id: 1, nombre: 'Mouse' }, { id: 2, nombre: 'Teclado' }], 2 out: [{ id: 1, nombre: 'Mouse' }]
  // Tu código:

  let productosFiltrados = [];
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    if (producto.id !== idProducto) {
      productosFiltrados.push(producto);
    }
  }
  return productosFiltrados;
}

function buscarPersona(personas, correo) {
  // Retrona un objeto de la persona que tiene el correo que llega por parámetro.
  // Ejemplo:
  // in: [{ nombre: 'John', correo: 'john@mail.com' }, { nombre: 'Jane', correo: 'jane@mail' }], 'jane@mail.com'
  // out: { nombre: 'Jane', correo: 'jane@mail' }
  // Tu código:

  for (const person of personas) {
    if (person.correo === correo) {
      //? cuando solamente estamos buscando un solo resultado, si podemos usar return dentro del if
      return person;
    }
  }
}

function contarSoloEstudiantesDeUnBootcamp(estudiantes, bootcamps, bootcamp) {
  // Retrona el número de estudiantes que pertenecen a un bootcamp en específico.
  // Ejemplo:
  // in:
  // estudiantes: [{ nombre: 'John', bootcamp_id: 1 }, { nombre: 'Jane', bootcamp_id: 2 }, { nombre: 'Joe', bootcamp_id: 1 }]
  // bootcamps: [{ id: 1, nombre: 'Academlo' }, { id: 2, nombre: 'Otros' }]
  // bootcamp: 'Academlo'
  // out: 2
  // Tu código:

  //? es uno de los ejercicios finales de replit
  let contador = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    const students = estudiantes[i];

    for (let j = 0; j < bootcamps.length; j++) {
      const course = bootcamps[j];

      if (students.bootcamp_id === course.id && course.nombre === bootcamp) {
        contador++;
      }
    }
  }
  return contador;
}

function serieMasVistas(series) {
  // Retrona el nombre de la serie que tiene más vistas.
  // Ejemplo:
  // in: { 'Dark': 50, 'Game of Thrones': 10, 'Black Mirror': 100, 'Stranger Things': 80 }
  // out: 'Black Mirror'
  // Tu código:

  let max = 0;
  let serieMasVista = "";
  for (const serie in series) {
    if (series[serie] > max) {
      max = series[serie];
      serieMasVista = serie;
    }
  }
  return serieMasVista;
}

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

  const estudiantesPorModulo = [];

  for (const persona of personas) {
    for (const modulo of modulos) {
      if (persona.modulo_id === modulo.id) {
        estudiantesPorModulo.push({
          nombre: persona.nombre,
          modulo: modulo.nombre,
          correo: persona.correo,
        });
      }
    }
  }
  return estudiantesPorModulo;
}

/* 💡 Para el siguiente investiga sobre un método para arrays llamado arr.sort() */

function ordenaPorEdad(personas) {
  // Retrona un array de personas ordenadas por edad de menor a mayor.
  // Ejemplo:
  // in: [{ nombre: 'Lukas', edad: 20 }, { nombre: 'Maria', edad: 19 }, { nombre: 'Marcos', edad: 21 }]
  // out: [{ nombre: 'Maria', edad: 19 }, { nombre: 'Lukas', edad: 20 }, { nombre: 'Marcos', edad: 21 }]
  // Tu código:

  return personas.sort(function (a, b) {
    return a.edad - b.edad;
  });
}
