var sym = Symbol();
var sym2 = Symbol();
var sym3 = Symbol("abc");
var sym4 = Symbol("abc");

console.log(sym == sym2);
console.log(sym3 == sym4);
console.log(sym);
console.log(sym2);
console.log(sym3);
console.log(sym4);

const dId = Symbol("id");
const obj = {
  name: "Himanshu",
  [dId]: 100,
};
console.log(obj[dId]);
