type userDataType7Type = {
  // ye 3 keys required hai uppar wali agar ek bhi hatayi to error aayegi
  name: string;
  id: number;
  mobile: number;
  //   readonly [key: string]: number | string; taaki dusri keys add na ho sake
  [key: string]: number | string;
};

var userDataType7: userDataType7Type = {
  mobile: 8888,
  id: 100,
  marks: 50,
  age: 40,
  name: "john",
  semester: 4,
};
userDataType7.city = "indore";
