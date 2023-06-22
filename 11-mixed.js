// exercise 1

/* 
Instrucciones
Encuentra la última letra de un string
La función findLastLetter(text) recibe como parámetro text que es una cadena de texto string cualquiera, tu labor es tomar ese string obtener el último carácter y retornar el valor.

Entrada de muestra: 
'JavaScript'

Salida de muestra:
't'
*/

const text = "JavaScript";

function findLastLetter(text) {
  // escribe tu solución aquí

  const lastCharacter = text.length - 1;
  return text[lastCharacter];
}

console.log(findLastLetter(text));

/* ********************************************* */

// exercise 2

/* 

Instrucciones
Encuentra la última palabra de un string
La función findLastWord(text) recibe como parámetro text que es una cadena de texto string cualquiera, tu labor es tomar ese string obtener la última palabra y retornar el valor.

Entrada de muestra
'Hola, me llamo Jesús'

Salida de muestra
'Jesús'

*/

const str = "Hola, me llamo Jesús";
function findLastWord(text) {
  // escribe tu solución aquí

  const slicing = text.slice(15);

  return slicing;
}
console.log(findLastWord(str));

/* ********************************************* */

// exercise 3

/* 

Instrucciones
Encuentra la segunda palabra de un string
La función findSecondWord(text) recibe como parámetro text que es una cadena de texto string cualquiera, tu labor es obtener la segunda palabra de la cadena y retornar el valor.

Entrada de muestra
'Estoy aprendiendo JavaScript en Academlo'

Salida de muestra
'aprendiendo'

*/

const txt = "Estoy aprendiendo JavaScript en Academlo";
function findSecondWord(text) {
  const second = text.split(" ")[1];

  return second;
}

console.log(findSecondWord(txt));

/* ********************************************* */

// exercise 4

/* 

Instrucciones
Obtener el correo de un usuario
La función getEmail(user) recibe como parámetro user que es un objeto object que representa a un usuario cualquiera, tu labor es acceder a ese objeto y encontrar su propiedad email y retornar su valor.

Entrada de muestra
user = { name: 'Jesús', email: 'jesus@academlo.com' }

Salida de muestra
'jesus@academlo.com'

*/

const user = { name: "Jesús", email: "jesus@academlo.com" };
function getEmail(user) {
  // escribe tu solución aquí

  const userEmail = user.email;
  return userEmail;
}

console.log(getEmail(user));

/* ********************************************* */

// exercise 5

/* 

Instrucciones

## Suma los elementos de un arreglo
La función `sumValues(numbers)` recibe como **parámetro** `numbers` que es un arreglo `array` de 3 elementos de tipo `number`, tu labor es acceder a cada uno de sus elementos y sumarlos, deberás **retornar** el resultado de la suma.

### Entrada de muestra
```javascript
numbers = [1, 2, 3]
```

### Salida de muestra
```javascript
6
```

*/

const numbers = [1, 2, 3];
function sumValues(numbers) {
  // escribe tu solución aquí

  const sumNumbers = numbers[0] + numbers[1] + numbers[2];
  return sumNumbers;
}
console.log(sumValues(numbers));

/* ********************************************* */

// exercise 6

/* 

Instrucciones
Contar los números
La función countNumbers(number) recibe como parámetro number que efectivamente es un número number cualquiera, tu labor es encontrar la cantidad de números individuales que componen dicho número y retornar el total.

Entrada de muestra
number = 128

Salida de muestra
3

*/

const number = 128;
function countNumbers(number) {
  // escribe tu solución aquí

  const eachNumber = number.toString().split("").length;
  return eachNumber;
}

console.log(countNumbers(number));

/* ********************************************* */

// exercise 7

/* 

Instrucciones
Obten los correso de tdos los usuarios
La función getEmails(users) recibe como parámetro un arreglo users que contiene objetos, cada objeto dentro del array representa un usuario, tu labor es tomar ese array, recorrerlo y obtener los correos de todos los usuarios, deberás retornar un nuevo arreglo con los correos.

Entrada de muestra
users = [
  { name: "Jesús", email: "jesus@academlo.com", age: 20 },
  { name: "Andrés", email: "andres@academlo.com", age: 30 },
  { name: "Brayan", email: "brayan@academlo.com", age: 40 }
]

Salida de muestra
["jesus@academlo.com", "andres@academlo.com", "brayan@academlo.com"]

*/
const userss = [
  { name: "Jesús", email: "jesus@academlo.com", age: 20 },
  { name: "Andrés", email: "andres@academlo.com", age: 30 },
  { name: "Brayan", email: "brayan@academlo.com", age: 40 },
];
function getEmails(users) {
  // escribe tu solución aquí
  const userEmails = [];

  for (let i = 0; i < users.length; i++) {
    const newUsers = users[i];

    userEmails.push(newUsers.email);
  }

  return userEmails;
}

console.log(getEmail(userss));

/* ********************************************* */

// exercise 8

/* 

Instrucciones
Elimina un usuario del arreglo
La función deleteUser(users, email) recibe dos parámetros;

users Un arreglo de usuarios
email Una cadena de texto que contiene el correo del usuario
Tu labor es encontrar en el arreglo al usuario que tenga el correo recibido y eliminarlo, finalmente deberás retornar el arreglo sin el usuarios eliminado.

Entrada de muestra
users = [
  { name: 'Jesús', email: 'jesus@academlo.com' }, 
  { name: 'Andrés', email: 'andres@academlo.com' }, 
  { name: 'Brayan', email: 'brayan@gmail.com' }
]
    
email = "andres@academlo.com"

Salida de muestra
[
  { name: 'Jesús', email: 'jesus@academlo.com' }, 
  { name: 'Brayan', email: 'brayan@gmail.com' }
]

*/

const usersDeleted = [
  { name: "Jesús", email: "jesus@academlo.com" },
  { name: "Andrés", email: "andres@academlo.com" },
  { name: "Brayan", email: "brayan@gmail.com" },
];
function deleteUser(users, email) {
  // escribe tu solución aquí

  const newArr = [];

  for (let i = 0; i < users.length; i++) {
    const newUser = users[i];

    if (newUser.email !== email) {
      const newObj = {
        name: newUser.name,
        email: newUser.email,
      };
      newArr.push(newObj);
    }
  }
  return newArr;
}
console.log(deleteUser(usersDeleted));

/* ********************************************* */

// exercise 9

/* 

Instrucciones
Mezclando datos de 2 arreglos
La función mergeData(users, attendances) recibe 2 parámetros:

users Una lista de usuarios
attendances Una lista de asistencias
Donde attendance nos indica si el usuario asistió o no a sus clases de programación. Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información sin duplicar los datos.

Entrada de muestra
users = [
  { name: 'Jesús', email: 'jesus@academlo.com' },
  { name: 'Luis', email: 'luis@gmail.com' }
]
attendances = [
  { email: 'luis@gmail.com', attendance: false },
  { email: 'jesus@academlo.com', attendance: true }
]

Salida de muestra
[
    { name: 'Jesús', email: 'jesus@academlo.com', attendance: true },
    { name: 'Luis', email: 'luis@gmail.com', attendance: false }
]

*/

const mixingUsers = [
  { name: "Jesús", email: "jesus@academlo.com" },
  { name: "Luis", email: "luis@gmail.com" },
];

const attendances = [
  { email: "luis@gmail.com", attendance: false },
  { email: "jesus@academlo.com", attendance: true },
];
function mergeData(users, attendances) {
  // escribe tu solución aquí

  const newArr = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    for (let j = 0; j < attendances.length; j++) {
      const attendance = attendances[j];

      if (user.email === attendance.email) {
        const newObj = {
          name: user.name,
          email: user.email,
          attendance: attendance.attendance,
        };

        newArr.push(newObj);
      }
    }
  }
  return newArr;
}

console.log(mergeData(mixingUsers, attendances));

/* ********************************************* */

// exercise 10

/* 

Instrucciones
Ordena los estudiantes por su calificación
La función orderStudentsByScore(students) recibe como parámetro students que es un arreglo de "n" cantidad de estudiantes, tu labor es ordenarlo de "menor" a "mayor" utilizando como referencia la propiedad score. Deberás retornar el arreglo ordenado.

Entrada de muestra
students = [
  { name: 'Jesús', email: 'jesus@academlo.com', score: 100 },
  { name: 'David', email: 'david@gmail.com', score: 70 },
  { name: 'Ernesto', email: 'ernesto@gmail.com', score: 34 }
]

Salida de muestra
[
    { name: 'Ernesto', email: 'ernesto@gmail.com', score: 34 },
    { name: 'David', email: 'david@gmail.com', score: 70 },
    { name: 'Jesús', email: 'jesus@academlo.com', score: 100 }
]

*/

const orderingStudents = [
  { name: "Jesús", email: "jesus@academlo.com", score: 100 },
  { name: "David", email: "david@gmail.com", score: 70 },
  { name: "Ernesto", email: "ernesto@gmail.com", score: 34 },
];

function orderStudentsByScore(students) {
  // escribe tu solución aquí

  students.sort(function (a, b) {
    return a.score - b.score;
  });

  return students;
}

console.log(orderStudentsByScore(orderingStudents));

/* ********************************************* */

// exercise 11

/* 

Instrucciones
Encuentra la edad que más se repite
La función findMostCommonAge(students) recibe como parámetro students que es un arreglo de estudiantes, tu labor es encontrar y retornar la edad que se repite más veces.

Entrada de muestra
students = [
  { name: 'Daniela', age: 25 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 },
]

Salida de muestra
23

*/

const findCommonStudents = [
  { name: "Daniela", age: 25 },
  { name: "Andrea", age: 23 },
  { name: "José", age: 27 },
  { name: "Georg", age: 23 },
];

function findMostCommonAge(students) {
  // Escribe tu solución aquí

  let box = {};
  let max = 0;
  let edadComun;

  for (let i = 0; i < students.length; i++) {
    const estudiante = students[i];
    const edad = estudiante.age;

    if (box[edad]) {
      box[edad]++;
    } else {
      box[edad] = 1;
    }

    if (box[edad] > max) {
      max = box[edad];
      edadComun = edad;
    }
  }
  return edadComun;
}

console.log(findMostCommonAge(findCommonStudents));

/* ********************************************* */

// exercise 12

/* 

Instrucciones
Encuentra un usuario por su nombre
La función findUser(users, name) recibe 2 parámetros:

users Una lista de usuarios
name Una cadena de texto con el nombre del usuario
Tu labor es encontrar y retornar al usuario con el nombre recibido.

Entrada de muestra
users = [
  { name: 'Jesús', gender: 'male', age: 22 },
  { name: 'Luis', gender: 'male', age: 22 },
  { name: 'Andrés', gender: 'male', age: 49 },
  { name: 'María', gender: 'female', age: 35 }
]
name = 'Andrés'

Salida de muestra
{ name: 'Andrés', gender: 'male', age: 49 }

*/

const findUserss = [
  { name: "Jesús", gender: "male", age: 22 },
  { name: "Luis", gender: "male", age: 22 },
  { name: "Andrés", gender: "male", age: 49 },
  { name: "María", gender: "female", age: 35 },
];

const userName = "Andrés";
function findUser(users, name) {
  // escribe tu solución aquí
  //const newArr = []

  for (let i = 0; i < users.length; i++) {
    const newUser = users[i];

    if (newUser.name === name) {
      /*const newObj = {
        name: newUser.name,
        gender: newUser.gender,
        age: newUser.age
      }*/
      //newArr.push(newUser)
      return newUser;
    }
  }
  //return newArr
}

console.log(findUser(findUserss, userName));

/* ********************************************* */

// exercise 13

/* 

Instrucciones
Obtener a los estudiantes que han enviado su aplicación
En Academlo tenemos usuarios que crean una cuenta, pero no todos envían su aplicación para formar parte de los cursos.

La función getApplications(users) recibe como parámetro: users que es un arreglo de usuarios. Tu labor es obtener solo a los usuarios que hayan enviado su aplicación, para esto puedes tomar como referencia la propiedad application de cada usuario.

Entrada de muestra
users = [
  { 
    name: 'Andrés', 
    email: 'andres@academlo.com', 
    channel: 'youtube', 
    application: null 
  },
  { 
    name: 'Jesús', 
    email: 'jesus@gmail.com', 
    channel: 'facebook', 
    application: { country: 'Mexico', state: 'Campeche' }
  },
  { 
    name: 'Brayan', 
    email: 'brayan@gmail.com', 
    channel: 'youtube', 
    application: { country: 'Colombia', state: 'Bogotá' }
  }
]

Salida de muestra
[
  { 
    name: 'Jesús', 
    email: 'jesus@gmail.com', 
    channel: 'facebook', 
    application: { country: 'Mexico', state: 'Campeche' }
  },
  { 
    name: 'Brayan', 
    email: 'brayan@gmail.com', 
    channel: 'youtube', 
    application: { country: 'Colombia', state: 'Bogotá' }
  }
]

*/

const getUsers = [
  {
    name: "Andrés",
    email: "andres@academlo.com",
    channel: "youtube",
    application: null,
  },
  {
    name: "Jesús",
    email: "jesus@gmail.com",
    channel: "facebook",
    application: { country: "Mexico", state: "Campeche" },
  },
  {
    name: "Brayan",
    email: "brayan@gmail.com",
    channel: "youtube",
    application: { country: "Colombia", state: "Bogotá" },
  },
];

function getApplications(users) {
  // escribe tu solución aquí
  let userApp = [];

  for (const app of users) {
    if (app.application) {
      userApp.push(app);
    }
  }
  return userApp;
}
console.log(getApplications(getUsers));

/* ********************************************* */

// exercise 14

/* 

Instrucciones
Suma todos los números pares de un arreglo.
La función sumEvens(start, end) recibe 2 números como parámetro. El segundo número recibido siempre será mayor al primero. Tu labor es sumar todos los números pares que se encuentren en el rango entre estos dos números, Pero sin incluir los dos números recibidos. Deberás retornar el total.

Entrada de muestra
start = 20
end = 30

Salida de muestra
100

*/

const start = 20;
const end = 30;
function sumEvens(start, end) {
  // escribe tu solución aquí

  let sum = 0;
  for (let i = start + 1; i < end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumEvens(start, end));

/* ********************************************* */

// exercise 15

/* 

Instrucciones
Encuenta los múltiplos de un número
La función getMultiples(number, limit) recibe 2 números como parámetro. El segundo número recibido siempre será mayor al primero. Tu labor es encontrar y retornar un nuevo arreglo con todos los múltiplos del primer número (sin incluir este número).

Entrada de muestra
number = 20
limit = 100

Salida de muestra
[40, 60, 80]

*/
const numberss = 20;
const limit = 100;
function getMultiples(number, limit) {
  // escribe tu solución aquí
  let newMultiples = [];

  for (let i = number + 1; i < limit; i++) {
    if (i % number === 0) {
      newMultiples.push(i);
    }
  }
  return newMultiples;
}

console.log(getMultiples(numberss, limit));

/* ********************************************* */

// exercise 16

/* 

Instrucciones
Cuenta las veces que se repite una letra
La función countLetter(phrase, letter) recibe 2 parámetros:

phrase que es una cadena de texto culaquiera
letter que es una letra cualquiera
Tu labor es encontrar cuántas veces se repite esa letra en la cadena de texto y retornar el total.

Entrada de muestra
phrase = 'Es un buen día para aprender JavaScript'
letter = 'a'

Salida de muestra
6

*/

const phrase = "Es un buen día para aprender JavaScript";
const letter = "a";
function countLetter(phrase, letter) {
  // escribe tu solución aquí

  let counter = 0;

  for (i = 0; i < phrase.length; i++) {
    const str = phrase[i].toLowerCase().split("");
    const vowel = letter;

    if (str.includes(vowel)) {
      counter++;
    }
  }
  return counter;
}
console.log(countLetter(phrase, letter));

/* ********************************************* */

// exercise 17

/* 

Instrucciones
Cuenta las aplicaciones por canal
En Academlo estamos interesados en saber mediante que canal nos conocen nuestros estudiantes, por ejemplo, pueden conocernos por facebook, youtube, twitter, etc. Sabiendo eso, resuelve el siguiente ejercicio.

La función countApplicationsBychannel(students) recibe como parámetro students que es un arreglo de estudiantes. Tu labor es contar cuántas aplicaciones hay por cada canal, para esto debes apoyarte en la propiedad channel.

Algo muy importante es que solo tomaremos en cuenta a los estudiantes que hayan enviado su aplicación.

Entrada de muestra
students = [
  { 
    name: 'Andrea', 
    email: 'andrea@gmail.com', 
    channel: 'youtube', 
    application: null 
  },
  { 
    name: 'Daniela', 
    email: 'daniela@gmail.com', 
    channel: 'youtube', 
    application: { 
      country: 'Colombia', 
      state: 'Bogotá' 
    } 
  },
  { 
    name: 'Alondra', 
    email: 'alondra@gmail.com', 
    channel: 'twitter', 
    application: { 
      country: 'Colombia', 
      state: 'Bogotá' 
    } 
  },
  { 
    name: 'Luis', 
    email: 'luis@gmail.com', 
    channel: 'twitter', 
    application: { 
      country: 'México', 
      state: 'Nuevo León' 
    } 
  }]

Salida de muestra
{ youtube: 1, twitter: 2 }

*/

const studentsObj = [
  {
    name: "Andrea",
    email: "andrea@gmail.com",
    channel: "youtube",
    application: null,
  },
  {
    name: "Daniela",
    email: "daniela@gmail.com",
    channel: "youtube",
    application: {
      country: "Colombia",
      state: "Bogotá",
    },
  },
  {
    name: "Alondra",
    email: "alondra@gmail.com",
    channel: "twitter",
    application: {
      country: "Colombia",
      state: "Bogotá",
    },
  },
  {
    name: "Luis",
    email: "luis@gmail.com",
    channel: "twitter",
    application: {
      country: "México",
      state: "Nuevo León",
    },
  },
];

function countApplicationsByChannel(students) {
  // escribe tu solución aquí

  let appObj = {};

  for (let i = 0; i < students.length; i++) {
    const student = students[i].channel;
    const app = students[i].application;

    if (student !== null && app !== null) {
      if (appObj[student]) {
        appObj[student]++;
      } else {
        appObj[student] = 1;
      }
    }
  }
  return appObj;
}
console.log(countApplicationsByChannel(studentsObj));

/* ********************************************* */

// exercise 18

/* 

Instrucciones
Cuenta los estudiantes de un país
La función countStudents(students, countries, countryName) recibe 3 parámetros:

students es un arreglo de estudiantes
countries es un arreglo de países
countryName es una cadena de texto
Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función en countryName.

Entrada de muestra
students = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]
countries = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]
countryName = 'Colombia'

Salida de muestra
3

*/

const objStudents = [
  { name: "Georg", email: "georg@academlo.com", country_id: 1 },
  { name: "Andrea", email: "andrea@gmail.com", country_id: 2 },
  { name: "Daniela", email: "daniela@gmail.com", country_id: 2 },
  { name: "Mónica", email: "monica@gmail.com", country_id: 2 },
];
const countries = [
  { id: 1, name: "Mexico" },
  { id: 2, name: "Colombia" },
];
let countryName = "Colombia";

function countStudents(students, countries, countryName) {
  // escribe tu solución aquí

  // counter initialized
  let counter = 0;

  //nested for () students[i] and countries[j]
  for (let i = 0; i < students.length; i++) {
    const student = students[i].country_id;

    for (let j = 0; j < countries.length; j++) {
      const country = countries[j];

      //conditional if()
      if (student === country.id && country.name === countryName) {
        counter++;
      }
    }
  }

  return counter;
}
console.log(countStudents(objStudents, countries, countryName));
