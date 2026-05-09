let product = document.querySelectorAll('.sell');
let addToBasket = document.querySelectorAll('.addtobasket');
let basket = document.querySelector('.basket');
let box = document.querySelector('.box'); // Используем селектор класса, если ID нет
let currentSum = 0;
const total2 = document.getElementById('totalpriceInBasket');

const openB = () => {
    basket.classList.add('open');
}
const closeB = () => {
    basket.classList.remove('open');
}

for (let i = 0; i < addToBasket.length; i++) {
    addToBasket[i].onclick = () => {
        // 1. Считаем цену
        let priceText = product[i].querySelector('.price').innerText;
        let priceValue = parseInt(priceText.replace(/\D/g, '')); // Убираем лишние символы, если есть
        currentSum += priceValue;
        
        if (total2) total2.innerText = currentSum;

        // 2. Клонируем товар
        let item = product[i].cloneNode(true);
        product[i].remove()

        // Исправлено: ищем кнопку по классу '.addtobasket', а не по тегу
        let btnInItem = item.querySelector('.addtobasket');
        if (btnInItem) btnInItem.remove(); 
        
        box.appendChild(item);
    };
}

