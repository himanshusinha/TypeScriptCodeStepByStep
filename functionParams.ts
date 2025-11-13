function totalPrice(items: number, price: number, text?: string) {
  if (text) {
    console.log(text + price * items);
  } else {
    console.log(price * items);
  }
}
totalPrice(50, 30, "Total Price is : ");

function simple(data: string | number | boolean) {
  console.log(data);
}
simple(100);

function simple(data: any) {
  console.log(data);
}
simple(true);
