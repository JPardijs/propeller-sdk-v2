import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Object class for MagicToken
 */
export declare class MagicToken {
    /** Magic token primary identifier */
    private _id;
    /** Identifier of the associated contact, use either contactId or customerId */
    private _contactId?;
    /** Identifier of the associated customer, use either customerId or contactId */
    private _customerId?;
    /** Expiration date and time of the magic token */
    private _expiresAt?;
    /** Last accessed date and time of the magic token */
    private _lastAccessedAt?;
    /** Number of failed login attempts using the magic token */
    private _failedLogins?;
    /** Number of successful login attempts using the magic token */
    private _successfulLogins?;
    /** Indicates if the magic token is for one-time use only */
    private _oneTimeUse;
    /** Additional information or metadata associated with the magic token */
    private _extra?;
    /** contact field */
    private _contact?;
    /** customer field */
    private _customer?;
    /**
     Creates a new instance of MagicToken
     */
    constructor(data?: Partial<MagicToken>);
    /**
     Magic token primary identifier
     */
    get id(): string;
    /**
     Magic token primary identifier
     */
    set id(value: string);
    /**
     Identifier of the associated contact, use either contactId or customerId
     */
    get contactId(): number | undefined;
    /**
     Identifier of the associated contact, use either contactId or customerId
     */
    set contactId(value: number | undefined);
    /**
     Identifier of the associated customer, use either customerId or contactId
     */
    get customerId(): number | undefined;
    /**
     Identifier of the associated customer, use either customerId or contactId
     */
    set customerId(value: number | undefined);
    /**
     Expiration date and time of the magic token
     */
    get expiresAt(): string | undefined;
    /**
     Expiration date and time of the magic token
     */
    set expiresAt(value: string | undefined);
    /**
     Last accessed date and time of the magic token
     */
    get lastAccessedAt(): string | undefined;
    /**
     Last accessed date and time of the magic token
     */
    set lastAccessedAt(value: string | undefined);
    /**
     Number of failed login attempts using the magic token
     */
    get failedLogins(): number | undefined;
    /**
     Number of failed login attempts using the magic token
     */
    set failedLogins(value: number | undefined);
    /**
     Number of successful login attempts using the magic token
     */
    get successfulLogins(): number | undefined;
    /**
     Number of successful login attempts using the magic token
     */
    set successfulLogins(value: number | undefined);
    /**
     Indicates if the magic token is for one-time use only
     */
    get oneTimeUse(): boolean;
    /**
     Indicates if the magic token is for one-time use only
     */
    set oneTimeUse(value: boolean);
    /**
     Additional information or metadata associated with the magic token
     */
    get extra(): string[] | undefined;
    /**
     Additional information or metadata associated with the magic token
     */
    set extra(value: string[] | undefined);
    /**
     contact field
     */
    get contact(): Contact | undefined;
    /**
     contact field
     */
    set contact(value: Contact | undefined);
    /**
     customer field
     */
    get customer(): Customer | undefined;
    /**
     customer field
     */
    set customer(value: Customer | undefined);
}
//# sourceMappingURL=MagicToken.d.ts.map