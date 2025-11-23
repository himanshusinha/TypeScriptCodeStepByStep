type PersonT = {
    name: string;
    age: number;
    email: string;
};
declare let PersonDataY: PersonT;
type PersonY = keyof PersonT;
declare let PersonDataX: PersonY;
declare let UserX: keyof typeof PersonDataY;
