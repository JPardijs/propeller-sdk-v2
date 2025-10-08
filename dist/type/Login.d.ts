import { GCIPUser } from './GCIPUser';
/**
 Object class for Login
 */
export declare class Login {
    /** providerId field */
    private _providerId?;
    /** operationType field */
    private _operationType?;
    /** session field */
    private _session?;
    /**
     Creates a new instance of Login
     */
    constructor(data?: Partial<Login>);
    /**
     providerId field
     */
    get providerId(): string | undefined;
    /**
     providerId field
     */
    set providerId(value: string | undefined);
    /**
     operationType field
     */
    get operationType(): string | undefined;
    /**
     operationType field
     */
    set operationType(value: string | undefined);
    /**
     session field
     */
    get session(): GCIPUser | undefined;
    /**
     session field
     */
    set session(value: GCIPUser | undefined);
}
//# sourceMappingURL=Login.d.ts.map