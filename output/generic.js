"use strict";
function fruit(name) {
    return name;
}
let onlyFruit = fruit("apple");
let onlyNum = fruit(100);
let onlyBool = fruit(true);
// Single Array
function User11(data) {
    return data[0];
}
let userCollection = User11(["Himanshu"]);
console.log(userCollection);
//Multiple Array
function User12(data) {
    return data;
}
let userCollection2 = User12(["Himanshu", "Dakshit"]);
console.log(userCollection2);
