enum WhoType {
  student = "student",
  teacher = "teacher",
  labStaff = "labStaff",
  management = "management",
}

var who: WhoType = WhoType.teacher;
console.log(who);

enum Fruit {
  a = "Apple",
  b = "Banana",
  c = "cherry",
}

var myFruit: Fruit = Fruit.a;
console.log(myFruit);

enum UserRole {
  admin,
  manager,
  developer,
  qa,
  user,
}

var userRoles: UserRole = UserRole.developer;
console.log(userRoles);
