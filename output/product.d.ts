declare class Product {
    private name;
    protected price: number;
    pId: number;
    inCart: boolean;
    isOrdered: boolean;
    constructor(name: string, price: number, pId: number);
    addToCart(): void;
    buyProduct(): string;
}
declare class Ordered extends Product {
    constructor();
    getPrice(): number;
}
declare var order: Ordered;
