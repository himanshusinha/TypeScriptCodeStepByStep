// typescript is type safe language cannot assign different type of value to same variable
// var userName: string = "himanshu";
// var age: number = 30;
// console.log(userName);
// console.log(age);
// TypeScript Data Types
// Categories
// Primitive Data Types
// Object
// Special
// Advanced
// Function
//Primitive Data Types
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt
// var userName = "himanshu";
// var age = 35;
// var isLoggedIn = true;
// var state = null;
// var city = undefined;
// var uniqueId = Symbol("id");
// var bigNumber = BigInt(9007199254741991);
// console.log("User Name:", userName);
// console.log("Age:", age);
// console.log("Is Logged In:", isLoggedIn);
// console.log("State:", state);
// console.log("City:", city);
// console.log("Unique ID:", uniqueId.toString());
// console.log("Big Number:", bigNumber);
// Object Data Types
// Array collection of same data types
var numbers = [1, 2, 3, 4, 5];
var persons = ["himanshu", "john", "doe"];
console.log(numbers);
console.log(persons);
// Tupple fixed length of array with different data types
var person = ["himanshu", 30];
console.log(person);
// Object key value pair collections
var employeeInfo = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: 9179917469,
};
console.log("Employee Info", employeeInfo);
// Special Data Types
// Any
// Unknown
// Never
// Void
// Any type can hold any type of value not recommended to use any type
var x = "Bob";
console.log(x);
// Unknown similar to any but requires type checking before use
var input = "Hello";
if (typeof input === "string")
    console.log(input.toUpperCase());
// Void used for functions that do not return any value
function logMessage() {
    console.log("This is message");
}
logMessage();
// Never used for functions that never return a value
function throwError() {
    throw new Error("This is an error");
}
// Advanced Data Types
// Union
// Intersection
// Literal
// Enum
//Union data type hold multiple types of values
var unionValue;
unionValue = "Hello";
console.log(unionValue);
var lead = { name: "Alice", department: "Sales" };
console.log(lead);
var userId = 12345;
userId = "abcde";
console.log(userId);
// Enum defined named constants
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log("User Role:", Role[userRole]);
//Literal data type hold specific values
var direction;
direction = "up";
console.log("Direction:", direction);
// Function Data Types
// Function parameter and return types
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(5, 10));
