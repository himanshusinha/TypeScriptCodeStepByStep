class UserInfo {
  _name: string = "John";
  _email: string = "john@gmail.com";

  get name(): string {
    return "MR." + this._name;
  }

  set email(val: string) {
    this._email = "emp_" + val;
  }
}

var userInfo = new UserInfo();
userInfo.email = "johndoe@gmail.com";
console.log(userInfo._email);
