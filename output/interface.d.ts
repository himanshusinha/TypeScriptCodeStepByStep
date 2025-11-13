interface Info {
    name: string;
    age: number;
    college: string;
}
declare var studentObj: Info;
interface Teacher extends Info {
    subject: string;
}
declare var teacherObj: Info;
declare var managementObj: Teacher;
