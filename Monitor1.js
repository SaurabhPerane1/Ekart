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
        name: 'LG Smart monitor',
        image: '1a.JPG',
        price: 19999
    },
    {
        id: 2,
        name: 'MI Smart TV',
        image: '1b.PNG',
        price: 21999
    },
    {
        id: 3,
        name: 'Samsung Smart Monitor',
        image: '1c.WEBP',
        price: 31999
    },
    {
        id: 4,
        name: 'Sony Bravia Monitor',
        image: '1d.PNG',
        price: 41999
    },
    {
        id: 5,
        name: 'Samsung 120Hz Monitor',
        image: '1e.PNG',
        price: 22999
    },
    {
        id: 6,
        name: 'samsung curved monitor',
        image: '1f.PNG',
        price: 25999
    },
    {
        id:7,
        name: 'Samsung LED Monitor',
        image: '1g.JPG',
        price: 18999    
    },
    {
        id:8,
        name: 'LG Smart Monitor',
        image: '1h.WEBP',
        price: 17999
    },
    {
        id:9,
        name: 'LG Smart Monitor 2',
        image: '1i.WEBP',
        price: 15999
    },
    {
        id:10,
        name: 'DELL 2 in 1 monitor',
        image: '1n.PNG',
        price: 28999
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
