import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterContactResponse
 */
export declare class RegisterContactResponse {
    /** contact field */
    private _contact;
    /** session field */
    private _session;
    /**
     Creates a new instance of RegisterContactResponse
     */
    constructor(data?: Partial<RegisterContactResponse>);
    /**
     contact field
     */
    get contact(): IBaseUser;
    /**
     contact field
     */
    set contact(value: IBaseUser);
    /**
     session field
     */
    get session(): RegisterUserSession;
    /**
     session field
     */
    set session(value: RegisterUserSession);
}
//# sourceMappingURL=RegisterContactResponse.d.ts.map