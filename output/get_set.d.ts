declare class UserInfo {
    _name: string;
    _email: string;
    get name(): string;
    set email(val: string);
}
declare var userInfo: UserInfo;
