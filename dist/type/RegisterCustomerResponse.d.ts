import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterCustomerResponse
 */
export declare class RegisterCustomerResponse {
    /** customer field */
    private _customer;
    /** session field */
    private _session;
    /**
     Creates a new instance of RegisterCustomerResponse
     */
    constructor(data?: Partial<RegisterCustomerResponse>);
    /**
     customer field
     */
    get customer(): IBaseUser;
    /**
     customer field
     */
    set customer(value: IBaseUser);
    /**
     session field
     */
    get session(): RegisterUserSession;
    /**
     session field
     */
    set session(value: RegisterUserSession);
}
//# sourceMappingURL=RegisterCustomerResponse.d.ts.map