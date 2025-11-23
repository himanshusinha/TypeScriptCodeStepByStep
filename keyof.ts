type PersonT = {
  name: string;
  age: number;
  email: string;
};
let PersonDataY: PersonT = {
  name: "John",
  age: 30,
  email: "john@gmail.com",
};

type PersonY = keyof PersonT;
let PersonDataX: PersonY;
PersonDataX = "name";

let UserX: keyof typeof PersonDataY = "name";
