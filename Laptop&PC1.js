let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Lenovo ideapad Slim 3',
        image: 'l1.WEBP',
        price: 33999
    },
    {
        id: 2,
        name: 'Lenovo Ryzen 3 5300u',
        image: 'l2.WEBP',
        price: 32999
    },
    {
        id: 3,
        name: 'Realme book slim',
        image: 'l3.WEBP',
        price: 35999
    },
    {
        id: 4,
        name: 'HP 15s i5 12th gen',
        image: 'l4.WEBP',
        price: 56999
    },
    {
        id: 5,
        name: 'Asus TUF Gaming F15',
        image: 'l5.WEBP',
        price: 54999
    },
    {
        id: 6,
        name: 'Apple MAC Book pro m2 pro',
        image: 'l6.WEBP',
        price: 199990
    },
    {
        id:7,
        name: 'MSI Ryzen 5 5600H',
        image: 'l7.WEBP',
        price: 18999    
    },
    {
        id:8,
        name: 'Lenovo Ryzen 5 Hexa Core 5500U ',
        image: 'l8.WEBP',
        price: 38999
    },
    {
        id:9,
        name: 'acer Aspire 7 Ryzen 5 Hexa Core 5500U',
        image: 'l9.WEBP',
        price: 47999
    },
    {
        id:10,
        name: 'Lenovo IdeaPad 5 Intel Core i5 11th Gen',
        image: 'l10.WEBP',
        price: 59999
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
