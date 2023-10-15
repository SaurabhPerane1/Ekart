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
        name: 'BoAt Airpods 131',
        image: 'h1.JPG',
        price: 999
    },
    {
        id: 2,
        name: 'BoAt Airdopes 151',
        image: 'h2.JPG',
        price: 999
    },
    {
        id: 3,
        name: 'BoAt Airdopes 191',
        image: 'h3.JPG',
        price: 1699
    },
    {
        id: 4,
        name: 'boAt Airpods 161 black',
        image: 'h4.JPG',
        price: 1599
    },
    {
        id: 5,
        name: 'boAt Airpods 161 grey',
        image: 'h5.JPG',
        price: 1599
    },
    {
        id: 6,
        name: 'boAt Rockerz',
        image: 'h6.JPG',
        price: 1499
    },
    {
        id:7,
        name: 'boAt 171',
        image: 'h7.JPG',
        price: 1799    
    },
    {
        id:8,
        name: 'Gigabyte gaming headset',
        image: 'h8.JPG',
        price: 4999
    },
    {
        id:9,
        name: 'Oneplus Buds',
        image: 'h9.WEBP',
        price: 1999
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
