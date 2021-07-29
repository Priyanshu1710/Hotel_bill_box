const roomType = document.querySelector('#roomType');
const lunch = document.querySelector('#lunch');
const dinner = document.querySelector('#dinner');
const calculate = document.querySelector('#bill');
const form = document.querySelector('form');
const acPrice = 700;
const nonAcPrice = 0;
let roomPrice;
calculate.addEventListener('click', () => {
    if (roomType.value === "AC") {
        roomPrice = acPrice;
    }
    else {
        roomPrice = nonAcPrice;
    }
    const lunchPrice = parseInt(lunch.value);
    const dinnerprice = parseInt(dinner.value);
    const total = roomPrice + lunchPrice + dinnerprice;
    window.alert(`Bill amount is Rs. ${total}`)
    form.reset();

})