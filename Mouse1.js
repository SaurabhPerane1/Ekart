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
        name: 'Gaming Mouse',
        image: 'm1.PNG',
        price: 399
    },
    {
        id: 2,
        name: 'Logitech silent click',
        image: 'm2.WEBP',
        price: 499
    },
    {
        id: 3,
        name: 'Apple magic mouse',
        image: 'm3.PNG',
        price: 5999
    },
    {
        id: 4,
        name: 'Gigabyte gaming mouse',
        image: 'm4.PNG',
        price: 299
    },
    {
        id: 5,
        name: 'Microsoft mouse',
        image: 'm5.PNG',
        price: 399
    },
    {
        id: 6,
        name: 'Logitech mouse',
        image: 'm6.PNG',
        price: 499
    },
    {
        id:7,
        name: 'Microsoft silent click',
        image: 'm7.PNG',
        price: 699    
    },
    {
        id:7,
        name: 'Lenovo mouse',
        image: 'm8.WEBP',
        price: 499    
    },
    {
        id:7,
        name: 'Petronics mouse',
        image: 'm9.WEBP',
        price: 549    
    },
    {
        id:7,
        name: 'Realme ultra sensitive mouse',
        image: 'm10.WEBP',
        price: 499    
    },
    {
        id:7,
        name: 'Zebronics mouse',
        image: 'm11.WEBP',
        price: 699    
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
