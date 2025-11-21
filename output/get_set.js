"use strict";
class UserInfo {
    constructor() {
        this._name = "John";
        this._email = "john@gmail.com";
    }
    get name() {
        return "MR." + this._name;
    }
    set email(val) {
        this._email = "emp_" + val;
    }
}
var userInfo = new UserInfo();
userInfo.email = "johndoe@gmail.com";
console.log(userInfo._email);
