"use strict";
class Auth {
    login(name, password) {
        if (name && password) {
            return "User LoggedIn";
        }
        else {
            return "Invalid Credentials";
        }
    }
}
class Student extends Auth {
    result(marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "Failed";
        }
    }
}
class Teacher extends Auth {
    subjectt(subject) {
        return `He teaches ${subject}`;
    }
}
var t1 = new Teacher();
console.log(t1.subjectt("Maths"));
var s1 = new Student();
console.log(s1.result(60));
