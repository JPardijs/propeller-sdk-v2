/**
 Object class for Firebase
 */
export declare class Firebase {
    /** identities field */
    private _identities?;
    /** sign_in_provider field */
    private _sign_in_provider;
    /** sign_in_second_factor field */
    private _sign_in_second_factor?;
    /** second_factor_identifier field */
    private _second_factor_identifier?;
    /** tenant field */
    private _tenant?;
    /**
     Creates a new instance of Firebase
     */
    constructor(data?: Partial<Firebase>);
    /**
     identities field
     */
    get identities(): any | undefined;
    /**
     identities field
     */
    set identities(value: any | undefined);
    /**
     sign_in_provider field
     */
    get sign_in_provider(): string;
    /**
     sign_in_provider field
     */
    set sign_in_provider(value: string);
    /**
     sign_in_second_factor field
     */
    get sign_in_second_factor(): string | undefined;
    /**
     sign_in_second_factor field
     */
    set sign_in_second_factor(value: string | undefined);
    /**
     second_factor_identifier field
     */
    get second_factor_identifier(): string | undefined;
    /**
     second_factor_identifier field
     */
    set second_factor_identifier(value: string | undefined);
    /**
     tenant field
     */
    get tenant(): string | undefined;
    /**
     tenant field
     */
    set tenant(value: string | undefined);
}
//# sourceMappingURL=Firebase.d.ts.map