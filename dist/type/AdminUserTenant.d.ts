import { AdminUser } from './AdminUser';
/**
 Object class for AdminUserTenant
 */
export declare class AdminUserTenant {
    /** id field */
    private _id;
    /** tenant field */
    private _tenant;
    /** name field */
    private _name;
    /** default field */
    private _default;
    /** createdAt field */
    private _createdAt;
    /** createdBy field */
    private _createdBy;
    /** lastModifiedAt field */
    private _lastModifiedAt;
    /** lastModifiedBy field */
    private _lastModifiedBy;
    /** user field */
    private _user?;
    /**
     Creates a new instance of AdminUserTenant
     */
    constructor(data?: Partial<AdminUserTenant>);
    /**
     id field
     */
    get id(): string | number;
    /**
     id field
     */
    set id(value: string | number);
    /**
     tenant field
     */
    get tenant(): string;
    /**
     tenant field
     */
    set tenant(value: string);
    /**
     name field
     */
    get name(): string;
    /**
     name field
     */
    set name(value: string);
    /**
     default field
     */
    get default(): boolean;
    /**
     default field
     */
    set default(value: boolean);
    /**
     createdAt field
     */
    get createdAt(): string;
    /**
     createdAt field
     */
    set createdAt(value: string);
    /**
     createdBy field
     */
    get createdBy(): number;
    /**
     createdBy field
     */
    set createdBy(value: number);
    /**
     lastModifiedAt field
     */
    get lastModifiedAt(): string;
    /**
     lastModifiedAt field
     */
    set lastModifiedAt(value: string);
    /**
     lastModifiedBy field
     */
    get lastModifiedBy(): number;
    /**
     lastModifiedBy field
     */
    set lastModifiedBy(value: number);
    /**
     user field
     */
    get user(): AdminUser | undefined;
    /**
     user field
     */
    set user(value: AdminUser | undefined);
}
//# sourceMappingURL=AdminUserTenant.d.ts.map