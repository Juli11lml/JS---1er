const pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella',
        precio: 1000,
        ingredientes: ['Muzza'],
    },
    {
        id: 2,
        nombre: 'Especial',
        precio: 1200,
        ingredientes: ['Muzza', 'Jamón', 'Morrones'],
    },
    {
        id: 3,
        nombre: 'Napolitana',
        precio: 1100,
        ingredientes: ['Muzza', 'Tomate'],
    },
    {
        id: 4,
        nombre: 'Rúcula',
        precio: 1250,
        ingredientes: ['Muzza', 'Rúcula', 'Jamón crudo'],
    },
    {
        id: 5,
        nombre: 'Cuatro Quesos',
        precio: 1450,
        ingredientes: ['Muzza', 'Queso azul', 'Parmesano', 'Fontina'],
    },
    {
        id: 6,
        nombre: 'Capresse',
        precio: 1300,
        ingredientes: ['Muzza', 'Longaniza'],
    },
];

// Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $1200?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.


// a_
const pizzasPares = pizzas.filter((pizza) => pizza.id % 2 !== 1);
const imprimirPizzasPares = () => pizzasPares.forEach((pizza) => console.log(`La pizza ${pizza.nombre} es par porque está en la posición ${pizza.id}`));
imprimirPizzasPares();


// b_
const menosDe1200 = pizzas.filter((pizza) => pizza.precio < 1200);
// console.log(menosDe1200);
const imprimirMenosDe1200 = () => menosDe1200.forEach((pizza)=> console.log(`Las pizzas que salen menos de $1200 son: ${pizza.nombre} que sale $${pizza.precio}`));
imprimirMenosDe1200(); 


// c_
// const nombrePizzas = pizzas.map(({nombre}) => nombre);
// const imprimirNombrePizzas = () => nombrePizzas.forEach((pizza)=> console.log(`Pizza ${pizza.nombre}`));
// imprimirNombrePizzas();

const imprimirNombrePizzas = () => pizzas.forEach((pizza)=> console.log(`Pizza ${pizza.nombre}`));
imprimirNombrePizzas();


// d_
// const pizzaPrecio = pizzas.map(({precio}) => precio);
// console.log(pizzaPrecio);

const imprimirPrecioPizzas = () => pizzas.forEach((pizza)=> console.log(`Precio $${pizza.precio}`));
imprimirPrecioPizzas();


// e_
const imprimirNombreYPrecio = () => pizzas.forEach((pizza) => console.log(`La Pizza ${pizza.nombre} sale $${pizza.precio}`));
imprimirNombreYPrecio();


