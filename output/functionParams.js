"use strict";
function totalPrice(items, price, text) {
    if (text) {
        console.log(text + price * items);
    }
    else {
        console.log(price * items);
    }
}
totalPrice(50, 30, "Total Price is : ");
// function simpleFunction(data: string | number | boolean) {
//   console.log(data);
// }
// simpleFunction(100);
function simpleFunction(data) {
    console.log(data);
}
simpleFunction(true);
