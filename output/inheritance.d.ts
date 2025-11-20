declare class Auth {
    login(name: string, password: string): "User LoggedIn" | "Invalid Credentials";
}
declare class Student extends Auth {
    result(marks: number): "Pass" | "Failed";
}
declare class Teacher extends Auth {
    subjectt(subject: string): string;
}
declare var t1: Teacher;
declare var s1: Student;
