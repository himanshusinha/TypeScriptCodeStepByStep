interface CollegeType {
    name: string;
    getStudentName(): string[];
}
declare class CollegeData implements CollegeType {
    name: string;
    constructor(name: string);
    getStudentName(): string[];
}
declare var collegeData: CollegeData;
