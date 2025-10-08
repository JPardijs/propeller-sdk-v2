/**
 Object class for RegisterUserSession
 */
export declare class RegisterUserSession {
    /** JWT Bearer access token */
    private _accessToken?;
    /** Refresh token */
    private _refreshToken?;
    /** Expiration time */
    private _expirationTime?;
    /**
     Creates a new instance of RegisterUserSession
     */
    constructor(data?: Partial<RegisterUserSession>);
    /**
     JWT Bearer access token
     */
    get accessToken(): string | undefined;
    /**
     JWT Bearer access token
     */
    set accessToken(value: string | undefined);
    /**
     Refresh token
     */
    get refreshToken(): string | undefined;
    /**
     Refresh token
     */
    set refreshToken(value: string | undefined);
    /**
     Expiration time
     */
    get expirationTime(): string | undefined;
    /**
     Expiration time
     */
    set expirationTime(value: string | undefined);
}
//# sourceMappingURL=RegisterUserSession.d.ts.map