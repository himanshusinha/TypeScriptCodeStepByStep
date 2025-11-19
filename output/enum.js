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
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
    UserRole[UserRole["developer"] = 2] = "developer";
    UserRole[UserRole["qa"] = 3] = "qa";
    UserRole[UserRole["user"] = 4] = "user";
})(UserRole || (UserRole = {}));
var userRoles = UserRole.developer;
console.log(userRoles);
