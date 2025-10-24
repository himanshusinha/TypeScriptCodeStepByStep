// typescript is type safe language cannot assign different type of value to same variable
// var userName: string = "himanshu";
// var age: number = 30;
// console.log(userName);
// console.log(age);

// TypeScript Data Types

//Primitive Data Types
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

var userName = "himanshu";
var age = 35;
var isLoggedIn = true;
var state = null;
var city = undefined;
var uniqueId = Symbol("id");
var bigNumber = BigInt(9007199254741991);

console.log("User Name:", userName);
console.log("Age:", age);
console.log("Is Logged In:", isLoggedIn);
console.log("State:", state);
console.log("City:", city);
console.log("Unique ID:", uniqueId.toString());
console.log("Big Number:", bigNumber);
