interface CollegeType {
  name: string;
  getStudentName(): string[];
}
class CollegeData implements CollegeType {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getStudentName(): string[] {
    return ["Alice", "Bob", "Charlie"];
  }
}

var collegeData = new CollegeData("XYZ College");
console.log(collegeData.getStudentName());
console.log(collegeData.name);
