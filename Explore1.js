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
        name: 'LG Smart Monitor',
        image: '1a.JPG',
        price: 19999
    },
    {
        id: 2,
        name: 'Mi Smart monitor',
        image: '1b.PNG',
        price: 21999
    },
    {
        id: 3,
        name: 'Samsung Curved Monitor',
        image: '1c.WEBP',
        price: 31999
    },
    {
        id: 4,
        name: 'Sony Bravia smart monitor',
        image: '1d.PNG',
        price: 41999
    },
    {
        id: 5,
        name: 'LG 144 Hz Monitor',
        image: '1e.PNG',
        price: 22999
    },
    {
        id: 6,
        name: 'Samsung Curved Monitor',
        image: '1f.PNG',
        price: 25999
    },
    {
        id:7,
        name: 'PRODUCT NAME 7',
        image: '1g.JPG',
        price: 18999    
    },
    {
        id: 8,
        name: 'Gaming Mouse',
        image: 'm1.PNG',
        price: 399
    },
    {
        id: 9,
        name: 'Logitech silent click',
        image: 'm2.WEBP',
        price: 499
    },
    {
        id: 10,
        name: 'Apple magic mouse',
        image: 'm3.PNG',
        price: 5999
    },
    {
        id: 11,
        name: 'Gigabyte gaming mouse',
        image: 'm4.PNG',
        price: 299
    },
    {
        id: 12,
        name: 'Microsoft mouse',
        image: 'm5.PNG',
        price: 399
    },
    {
        id: 13,
        name: 'Logitech mouse',
        image: 'm6.PNG',
        price: 499
    },
    {
        id: 14,
        name: 'Lenovo ideapad Slim 3',
        image: 'l1.WEBP',
        price: 33999
    },
    {
        id: 15,
        name: 'Lenovo Ryzen 3 5300u',
        image: 'l2.WEBP',
        price: 32999
    },
    {
        id: 16,
        name: 'Realme book slim',
        image: 'l3.WEBP',
        price: 35999
    },
    {
        id: 17,
        name: 'HP 15s i5 12th gen',
        image: 'l4.WEBP',
        price: 56999
    },
    {
        id: 18,
        name: 'Asus TUF Gaming F15',
        image: 'l5.WEBP',
        price: 54999
    },
    {
        id: 19,
        name: 'Realme 10 pro 5G',
        image: 'p1.WEBP',
        price: 19999
    },
    {
        id: 20,
        name: 'Iphone 14 blue',
        image: 'p2.WEBP',
        price: 49999
    },
    {
        id: 21,
        name: 'Iphone 14 red',
        image: 'p3.WEBP',
        price: 49999
    },
    {
        id: 22,
        name: 'Pixel 7a',
        image: 'p4.WEBP',
        price: 41999
    },
    {
        id: 23,
        name: 'Logitech Keyboard',
        image: 'k1.PNG',
        price: 1599
    },
    {
        id: 24,
        name: 'Logi Keyboard',
        image: 'k2.PNG',
        price: 1199
    },
    {
        id: 25,
        name: 'Gigabyte Keyboard',
        image: 'k3.PNG',
        price: 1099
    },
    {
        id: 26,
        name: 'Gaming Keyboard rgb',
        image: 'k4.PNG',
        price: 1249
    },
    {
        id: 27,
        name: 'A4 TECH Keyboard',
        image: 'k5.PNG',
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
