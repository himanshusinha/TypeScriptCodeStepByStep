function totalPrice(items: number, price: number, text?: string) {
  if (text) {
    console.log(text + price * items);
  } else {
    console.log(price * items);
  }
}
totalPrice(50, 30, "Total Price is : ");

// function simpleFunction(data: string | number | boolean) {
//   console.log(data);
// }
// simpleFunction(100);

function simpleFunction(data: any) {
  console.log(data);
}
simpleFunction(true);
