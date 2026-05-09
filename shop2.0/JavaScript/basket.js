let product = document.querySelectorAll('.sell');
let addToBasket = document.querySelectorAll('.addtobasket');
let basket = document.querySelector('.basket');
let BasketContent = document.getElementById('basketContent');
let currentSum = 0;
const total1 = document.getElementById('totalprice');
const total2 = document.getElementById('totalpriceInBasket');
const openB = () => {
    basket.classList.add('open');
}
const closeB = () => {
    basket.classList.remove('open');
}

for (let i = 0; i < addToBasket.length; i++) {
    addToBasket[i].onclick = () => {
        let priceText = product[i].querySelector('.price').innerText;
        let priceValue = parseInt(priceText);
        currentSum += priceValue;
        total1.innerText = currentSum;
        total2.innerText = currentSum;
        let item = product[i].cloneNode(true);
        let btnInItem = item.querySelector("button");
        btnInItem.remove();
        BasketContent.appendChild(item);
        product[i].remove();
    }
}