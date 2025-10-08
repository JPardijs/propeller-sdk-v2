import { Firebase } from './Firebase';
/**
 Object class for VerifyToken
 */
export declare class VerifyToken {
    /** uid field */
    private _uid;
    /** name field */
    private _name;
    /** claims field */
    private _claims?;
    /** iss field */
    private _iss;
    /** aud field */
    private _aud;
    /** auth_time field */
    private _auth_time;
    /** user_id field */
    private _user_id;
    /** sub field */
    private _sub;
    /** iat field */
    private _iat;
    /** exp field */
    private _exp;
    /** email field */
    private _email;
    /** email_verified field */
    private _email_verified;
    /** firebase field */
    private _firebase?;
    /**
     Creates a new instance of VerifyToken
     */
    constructor(data?: Partial<VerifyToken>);
    /**
     uid field
     */
    get uid(): string;
    /**
     uid field
     */
    set uid(value: string);
    /**
     name field
     */
    get name(): string;
    /**
     name field
     */
    set name(value: string);
    /**
     claims field
     */
    get claims(): any | undefined;
    /**
     claims field
     */
    set claims(value: any | undefined);
    /**
     iss field
     */
    get iss(): string;
    /**
     iss field
     */
    set iss(value: string);
    /**
     aud field
     */
    get aud(): string;
    /**
     aud field
     */
    set aud(value: string);
    /**
     auth_time field
     */
    get auth_time(): number;
    /**
     auth_time field
     */
    set auth_time(value: number);
    /**
     user_id field
     */
    get user_id(): string;
    /**
     user_id field
     */
    set user_id(value: string);
    /**
     sub field
     */
    get sub(): string;
    /**
     sub field
     */
    set sub(value: string);
    /**
     iat field
     */
    get iat(): number;
    /**
     iat field
     */
    set iat(value: number);
    /**
     exp field
     */
    get exp(): number;
    /**
     exp field
     */
    set exp(value: number);
    /**
     email field
     */
    get email(): string;
    /**
     email field
     */
    set email(value: string);
    /**
     email_verified field
     */
    get email_verified(): boolean;
    /**
     email_verified field
     */
    set email_verified(value: boolean);
    /**
     firebase field
     */
    get firebase(): Firebase | undefined;
    /**
     firebase field
     */
    set firebase(value: Firebase | undefined);
}
//# sourceMappingURL=VerifyToken.d.ts.map