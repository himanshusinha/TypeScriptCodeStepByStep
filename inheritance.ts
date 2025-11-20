class Auth {
  login(name: string, password: string) {
    if (name && password) {
      return "User LoggedIn";
    } else {
      return "Invalid Credentials";
    }
  }
}

class Student extends Auth {
  result(marks: number) {
    if (marks > 33) {
      return "Pass";
    } else {
      return "Failed";
    }
  }
}

class Teacher extends Auth {
  subjectt(subject: string) {
    return `He teaches ${subject}`;
  }
}

var t1 = new Teacher();
console.log(t1.subjectt("Maths"));

var s1 = new Student();
console.log(s1.result(60));
