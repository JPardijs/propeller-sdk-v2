/**
 Object class for RefreshTokenResponse
 */
export declare class RefreshTokenResponse {
    /** access_token field */
    private _access_token;
    /** refresh_token field */
    private _refresh_token;
    /** expires_in field */
    private _expires_in;
    /** token_type field */
    private _token_type;
    /** user_id field */
    private _user_id;
    /**
     Creates a new instance of RefreshTokenResponse
     */
    constructor(data?: Partial<RefreshTokenResponse>);
    /**
     access_token field
     */
    get access_token(): string;
    /**
     access_token field
     */
    set access_token(value: string);
    /**
     refresh_token field
     */
    get refresh_token(): string;
    /**
     refresh_token field
     */
    set refresh_token(value: string);
    /**
     expires_in field
     */
    get expires_in(): number;
    /**
     expires_in field
     */
    set expires_in(value: number);
    /**
     token_type field
     */
    get token_type(): string;
    /**
     token_type field
     */
    set token_type(value: string);
    /**
     user_id field
     */
    get user_id(): string;
    /**
     user_id field
     */
    set user_id(value: string);
}
//# sourceMappingURL=RefreshTokenResponse.d.ts.map