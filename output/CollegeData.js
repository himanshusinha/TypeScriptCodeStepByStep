"use strict";
class CollegeData {
    constructor(name) {
        this.name = name;
    }
    getStudentName() {
        return ["Alice", "Bob", "Charlie"];
    }
}
var collegeData = new CollegeData("XYZ College");
console.log(collegeData.getStudentName());
console.log(collegeData.name);
