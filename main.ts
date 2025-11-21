import { Auth } from "./inheritance";
import userType from "./type";

class Student extends Auth {}
var userInfo: userType = {
  name: "John Doe",
  age: 25,
  email: "johndoe@gmail.com",
  password: "123@John",
};
var s1 = new Student();
console.log(s1.login(userInfo.name, userInfo.password));
console.log(userInfo);
