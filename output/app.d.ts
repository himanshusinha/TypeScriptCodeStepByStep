declare let numbers: number[];
declare let persons: Array<string>;
declare let person: [string, number];
declare let employeeInfo: {
    name: string;
    email: string;
    phone: number;
};
declare let x: any;
declare let input: unknown;
declare function logMessage(): void;
declare function throwError(): never;
declare let unionValue: string | number;
type Employee = {
    name: string;
};
type Manager = {
    department: string;
};
type Lead = Employee & Manager;
declare let lead: Lead;
type ID = string | number;
declare let userId: ID;
declare enum Role {
    Admin = 0,
    User = 1,
    Guest = 2
}
declare let userRole: Role;
declare let direction: "up" | "down" | "left" | "right";
declare function add(a: number, b: number): number;
