//RESUELVE LOS EJERCICIOS AQUI

//EJERCICIO 1 crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.

let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
  return numbers.map((numero) => numero ** 2);
}

let resultNumbers = elevados(numbers);
console.log(resultNumbers);

//EJERCICIO 2 generar un segundo array que consiga generar de salida el resultado esperado.

let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let lugar = ["Italia", "Japón", "Valencia", ""];

let resultado = foodList.map((comida, sitio) => {
  if (comida === `Entrecot`) {
    return "Aunque no como carne, el " + comida + " es sabroso";
  } else {
    return "Como soy de " + lugar[sitio] + ", amo comer " + comida;
  }
});
console.log(resultado);

//EJERCICIO 3 crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

let resultado1 = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(
    " y "
  )}.`;
});

console.log(resultado1);

//EJERCICIO 4  crea un array que muestre solo los impares de numbers2

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado2 = numbers2.filter((numero) => numero % 2 !== 0);

console.log(resultado2);

//EJERCICIO 5 Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

let resultado3 = foodList2
  .filter((comida) => !comida.isVeggie)
  .map((comida) => `¡Que rico ${comida.name} me voy a comer!`);

console.log(resultado3);

//EJERCICIO 6  Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

let resultado4 = inventory.filter((dato) => dato.price > 300);

console.log(resultado4);

//EJERCICIO 6 obten la multiplicación de todos los elementos del array

const arr4 = [39, 2, 4, 25, 62];

const multiplicacion = arr4.reduce(
  (resultado, numero) => resultado * numero,
  1
);

console.log(multiplicacion);

//EJERCICIO 7 Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  "Me",
  "llamo",
  `Gonzalo`,
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const fraseUnida1 = sentenceElements.join(` `);

console.log(fraseUnida1);

const fraseUnida2 = sentenceElements.reduce((accumulator, currentValue) => {
  // Si el currentValue es igual a una cadena vacía, no lo añade a la frase
  if (currentValue !== "") {
    // Si el acumulador no es una cadena vacía, añade un espacio antes de currentValue
    if (accumulator !== "") {
      accumulator += " ";
    }
    accumulator += currentValue;
  }
  return accumulator;
}, "");

console.log(fraseUnida2);

//EJERCICIO 8 Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];

const resultado5 = books
  .filter((book) => book.category === "code") // Filtrar solo los libros de la categoría "code"
  .reduce((acc, book) => acc + book.price, 0); // Sumar los precios de los libros filtrados

console.log("Monto total de los libros de la categoría 'code':", resultado5);
