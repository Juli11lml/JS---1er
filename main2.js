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
        ingredientes: ['Muzza', ' Jamón', ' Morrones'],
    },
    {
        id: 3,
        nombre: 'Napolitana',
        precio: 1100,
        ingredientes: ['Muzza', ' Tomate'],
    },
    {
        id: 4,
        nombre: 'Rúcula',
        precio: 1250,
        ingredientes: ['Muzza', ' Rúcula', ' Jamón crudo'],
    },
    {
        id: 5,
        nombre: 'Cuatro Quesos',
        precio: 1450,
        ingredientes: ['Muzza', ' Queso azul', ' Parmesano', ' Fontina'],
    },
    {
        id: 6,
        nombre: 'Capresse',
        precio: 1300,
        ingredientes: ['Muzza', ' Longaniza'],
    },
];

const input = document.querySelector('.input-number');
const btnPick = document.querySelector('.pick-btn');
const cardContainer = document.querySelector('.card-container');
const numId = document.getElementById('numberId');


// Función para crear la card de la pizza
const createCard = (pizza) => {
    const {nombre, precio, ingredientes} = pizza;
    return `<div class="pizza-card">
            <h2>Pediste: Pizza ${nombre}</h2>
            <h4>$${precio}</h4>
            <p>Tiene: ${ingredientes}</p>
    </div>`;
};

// Función para mapear el array de pizzas y devolver la card
const renderPizzaCard = pizzas => {
    cardContainer.innerHTML = pizzas.map(pizza => createCard(pizza)).join('');
};



// Función para guardar en una variable la info del input
const pizzaPick = (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();

    if(inputValue > 6){
        alert('Tenés que elegir un número del 1 al 6');
        return;
    } else if(inputValue < 1){
        alert('Tenés que elegir un número del 1 al 6');
        return;
    };

    input.value = '';
    renderPizzaCard(pizzas);
};


const init = () => {
    btnPick.addEventListener('click', pizzaPick);
};

init();