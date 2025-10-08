/**
 Object class for UserClaims
 */
export declare class UserClaims {
    /** userId field */
    private _userId;
    /** userDirectoryId field */
    private _userDirectoryId;
    /** adminUserId field */
    private _adminUserId;
    /** contactId field */
    private _contactId?;
    /** customerId field */
    private _customerId?;
    /** companyId field */
    private _companyId?;
    /** companyIds field */
    private _companyIds?;
    /** roles field */
    private _roles;
    /** discounts field */
    private _discounts;
    /** acllist field */
    private _acllist;
    /** class field */
    private _class;
    /** loginRoot field */
    private _loginRoot?;
    /** dateCreated field */
    private _dateCreated;
    /**
     Creates a new instance of UserClaims
     */
    constructor(data?: Partial<UserClaims>);
    /**
     userId field
     */
    get userId(): number;
    /**
     userId field
     */
    set userId(value: number);
    /**
     userDirectoryId field
     */
    get userDirectoryId(): number;
    /**
     userDirectoryId field
     */
    set userDirectoryId(value: number);
    /**
     adminUserId field
     */
    get adminUserId(): number;
    /**
     adminUserId field
     */
    set adminUserId(value: number);
    /**
     contactId field
     */
    get contactId(): number | undefined;
    /**
     contactId field
     */
    set contactId(value: number | undefined);
    /**
     customerId field
     */
    get customerId(): number | undefined;
    /**
     customerId field
     */
    set customerId(value: number | undefined);
    /**
     companyId field
     */
    get companyId(): number | undefined;
    /**
     companyId field
     */
    set companyId(value: number | undefined);
    /**
     companyIds field
     */
    get companyIds(): number[] | undefined;
    /**
     companyIds field
     */
    set companyIds(value: number[] | undefined);
    /**
     roles field
     */
    get roles(): string[];
    /**
     roles field
     */
    set roles(value: string[]);
    /**
     discounts field
     */
    get discounts(): string[];
    /**
     discounts field
     */
    set discounts(value: string[]);
    /**
     acllist field
     */
    get acllist(): number[];
    /**
     acllist field
     */
    set acllist(value: number[]);
    /**
     class field
     */
    get class(): string;
    /**
     class field
     */
    set class(value: string);
    /**
     loginRoot field
     */
    get loginRoot(): number | undefined;
    /**
     loginRoot field
     */
    set loginRoot(value: number | undefined);
    /**
     dateCreated field
     */
    get dateCreated(): string;
    /**
     dateCreated field
     */
    set dateCreated(value: string);
}
//# sourceMappingURL=UserClaims.d.ts.map