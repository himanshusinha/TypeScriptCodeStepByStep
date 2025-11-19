type DataType = {
  name: string;
  email: string;
};
type a = { name: string };
type b = { email: string };

type c = a | b;
var empData1: DataType = {
  name: "Himanshu",
  email: "himanshu@test.com",
};
var studentData1: DataType = {
  name: "Sam",
  email: "sam@gmail.com",
};
