// type personTA = { name: string };
// type personTB = { age: number };
// type personTC = personTA & personTB;

interface personTA {
  name: string;
}

interface personTB {
  age: number;
}

type personTC = personTA & personTB;
var PersonDataA: personTA = { name: "John" };
var PersonDataB: personTB = { age: 34 };

var PersonDataC: personTC = {
  name: "Doe",
  age: 45,
};
