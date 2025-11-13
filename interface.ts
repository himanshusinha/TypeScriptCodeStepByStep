interface Info {
  name: string;
  age: number;
  college: string;
}
var studentObj: Info = {
  name: "Anil",
  age: 30,
  college: "IET",
};
interface Teacher extends Info {
  subject: string;
}
var teacherObj: Info = {
  name: "Ankit",
  age: 45,
  college: "DAVV",
};
var managementObj: Teacher = {
  name: "Rahul",
  age: 42,
  college: "SGSITS",
  subject: "Maths",
};
