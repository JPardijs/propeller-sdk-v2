import { GCIPMetadata } from './GCIPMetadata';
import { GCIPProviderData } from './GCIPProviderData';
import { MultiFactor } from './MultiFactor';
/**
 Google Cloud Identity Platform User
 */
export declare class GCIPUser {
    /** Unique identifier for the user, either supplied by user creation or generated */
    private _uid;
    /** The email address of the user */
    private _email?;
    /** Flags whether the email address has been verified by the user */
    private _emailVerified?;
    /** The display name of the user */
    private _displayName?;
    /** The user's photo URL */
    private _photoUrl?;
    /** The phone number of the user */
    private _phoneNumber?;
    /** Flags whether the user had been disabled */
    private _disabled?;
    /** Flags whether the user is an anonymous user */
    private _isAnonymous?;
    /** Metadata associated with the user */
    private _metadata?;
    /** tokensValidAfterTime field */
    private _tokensValidAfterTime?;
    /** The tenant ID associated with the user */
    private _tenantId?;
    /** The providers associated with the user */
    private _providerData?;
    /** The password hash associated with the user */
    private _passwordHash?;
    /** The password salt associated with the user */
    private _passwordSalt?;
    /** The user's authentication domain */
    private _authDomain?;
    /** The last time the user logged in */
    private _lastLoginAt?;
    /** The creation time of the user */
    private _createdAt?;
    /** Access token for the user */
    private _accessToken;
    /** Refresh token for the user */
    private _refreshToken;
    /** The expiration time of the access token */
    private _expirationTime?;
    /** Multi-factor authentication details for the user */
    private _multiFactor?;
    /**
     Creates a new instance of GCIPUser
     */
    constructor(data?: Partial<GCIPUser>);
    /**
     Unique identifier for the user, either supplied by user creation or generated
     */
    get uid(): string;
    /**
     Unique identifier for the user, either supplied by user creation or generated
     */
    set uid(value: string);
    /**
     The email address of the user
     */
    get email(): string | undefined;
    /**
     The email address of the user
     */
    set email(value: string | undefined);
    /**
     Flags whether the email address has been verified by the user
     */
    get emailVerified(): boolean | undefined;
    /**
     Flags whether the email address has been verified by the user
     */
    set emailVerified(value: boolean | undefined);
    /**
     The display name of the user
     */
    get displayName(): string | undefined;
    /**
     The display name of the user
     */
    set displayName(value: string | undefined);
    /**
     The user's photo URL
     */
    get photoUrl(): string | undefined;
    /**
     The user's photo URL
     */
    set photoUrl(value: string | undefined);
    /**
     The phone number of the user
     */
    get phoneNumber(): string | undefined;
    /**
     The phone number of the user
     */
    set phoneNumber(value: string | undefined);
    /**
     Flags whether the user had been disabled
     */
    get disabled(): boolean | undefined;
    /**
     Flags whether the user had been disabled
     */
    set disabled(value: boolean | undefined);
    /**
     Flags whether the user is an anonymous user
     */
    get isAnonymous(): boolean | undefined;
    /**
     Flags whether the user is an anonymous user
     */
    set isAnonymous(value: boolean | undefined);
    /**
     Metadata associated with the user
     */
    get metadata(): GCIPMetadata | undefined;
    /**
     Metadata associated with the user
     */
    set metadata(value: GCIPMetadata | undefined);
    /**
     tokensValidAfterTime field
     */
    get tokensValidAfterTime(): string | undefined;
    /**
     tokensValidAfterTime field
     */
    set tokensValidAfterTime(value: string | undefined);
    /**
     The tenant ID associated with the user
     */
    get tenantId(): string | undefined;
    /**
     The tenant ID associated with the user
     */
    set tenantId(value: string | undefined);
    /**
     The providers associated with the user
     */
    get providerData(): GCIPProviderData[] | undefined;
    /**
     The providers associated with the user
     */
    set providerData(value: GCIPProviderData[] | undefined);
    /**
     The password hash associated with the user
     */
    get passwordHash(): string | undefined;
    /**
     The password hash associated with the user
     */
    set passwordHash(value: string | undefined);
    /**
     The password salt associated with the user
     */
    get passwordSalt(): string | undefined;
    /**
     The password salt associated with the user
     */
    set passwordSalt(value: string | undefined);
    /**
     The user's authentication domain
     */
    get authDomain(): string | undefined;
    /**
     The user's authentication domain
     */
    set authDomain(value: string | undefined);
    /**
     The last time the user logged in
     */
    get lastLoginAt(): string | undefined;
    /**
     The last time the user logged in
     */
    set lastLoginAt(value: string | undefined);
    /**
     The creation time of the user
     */
    get createdAt(): string | undefined;
    /**
     The creation time of the user
     */
    set createdAt(value: string | undefined);
    /**
     Access token for the user
     */
    get accessToken(): string;
    /**
     Access token for the user
     */
    set accessToken(value: string);
    /**
     Refresh token for the user
     */
    get refreshToken(): string;
    /**
     Refresh token for the user
     */
    set refreshToken(value: string);
    /**
     The expiration time of the access token
     */
    get expirationTime(): string | undefined;
    /**
     The expiration time of the access token
     */
    set expirationTime(value: string | undefined);
    /**
     Multi-factor authentication details for the user
     */
    get multiFactor(): MultiFactor | undefined;
    /**
     Multi-factor authentication details for the user
     */
    set multiFactor(value: MultiFactor | undefined);
}
//# sourceMappingURL=GCIPUser.d.ts.map