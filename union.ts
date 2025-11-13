var studentData: string | number | [] = "Himanshu";
studentData = 10000;
studentData = [];

function fruitsData(): string | string[] | number {
  var item = 1;
  if (item > 1) {
    return ["Apple", "Banana"];
  } else {
    return "Apple";
  }
}
console.log(fruitsData());

function studentInfo(name: string | number | boolean) {
  if (typeof name === "string") {
    return "Student name is: " + name;
  } else if (typeof name === "number") {
    return "Student roll number is: " + name;
  } else if (typeof name === "boolean") {
    return "Student active status is: " + name;
  } else {
    return "Invalid input";
  }
}

console.log(studentInfo("Rahul"));
console.log(studentInfo(101));
console.log(studentInfo(true));
