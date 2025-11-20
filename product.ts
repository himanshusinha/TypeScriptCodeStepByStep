class Product {
  private name: string;
  protected price: number;
  pId: number;
  inCart = false;
  isOrdered = false;

  constructor(name: string, price: number, pId: number) {
    this.name = name;
    this.price = price;
    this.pId = pId;
  }
  addToCart(): void {
    this.inCart = true;
  }
  buyProduct(): string {
    if (this.inCart) {
      return `product ${this.name} is ordered in ${this.price}`;
    } else {
      return `no product in cart`;
    }
  }
}
// var product1 = new Product("Samsung", 100000, 101);

// product1.addToCart();
// console.log(product1.buyProduct());
// console.log(product1.name);
// console.log(product1.price);

class Ordered extends Product {
  constructor() {
    super("Laptop", 100000, 400);
  }
  getPrice() {
    return this.price;
  }
}
var order = new Ordered();
console.log(order.getPrice());
