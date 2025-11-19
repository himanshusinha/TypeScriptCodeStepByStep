"use strict";
var WhoType;
(function (WhoType) {
    WhoType["student"] = "student";
    WhoType["teacher"] = "teacher";
    WhoType["labStaff"] = "labStaff";
    WhoType["management"] = "management";
})(WhoType || (WhoType = {}));
var who = WhoType.teacher;
console.log(who);
var Fruit;
(function (Fruit) {
    Fruit["a"] = "Apple";
    Fruit["b"] = "Banana";
    Fruit["c"] = "cherry";
})(Fruit || (Fruit = {}));
var myFruit = Fruit.a;
console.log(myFruit);
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["developer"] = 2] = "developer";
    Role[Role["qa"] = 3] = "qa";
    Role[Role["user"] = 4] = "user";
})(Role || (Role = {}));
var userRoles = Role.developer;
console.log(userRoles);
