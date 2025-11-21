"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheritance_1 = require("./inheritance");
class Student extends inheritance_1.Auth {
}
var userInfo = {
    name: "John Doe",
    age: 25,
    email: "johndoe@gmail.com",
    password: "123@John",
};
var s1 = new Student();
console.log(s1.login(userInfo.name, userInfo.password));
console.log(userInfo);
