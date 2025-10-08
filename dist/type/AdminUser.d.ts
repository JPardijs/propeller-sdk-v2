import { Gender } from '../enum/Gender';
import { TenantResponse } from './TenantResponse';
/**
 Object class for AdminUser
 */
export declare class AdminUser {
    /** id field */
    private _id;
    /** email field */
    private _email;
    /** gender field */
    private _gender?;
    /** firstName field */
    private _firstName?;
    /** middleName field */
    private _middleName?;
    /** lastName field */
    private _lastName?;
    /** language field */
    private _language?;
    /** phone field */
    private _phone?;
    /** job field */
    private _job?;
    /** createdAt field */
    private _createdAt;
    /** createdBy field */
    private _createdBy;
    /** lastModifiedAt field */
    private _lastModifiedAt;
    /** lastModifiedBy field */
    private _lastModifiedBy;
    /** tenants field */
    private _tenants;
    /**
     Creates a new instance of AdminUser
     */
    constructor(data?: Partial<AdminUser>);
    /**
     id field
     */
    get id(): string | number;
    /**
     id field
     */
    set id(value: string | number);
    /**
     email field
     */
    get email(): string;
    /**
     email field
     */
    set email(value: string);
    /**
     gender field
     */
    get gender(): Gender | undefined;
    /**
     gender field
     */
    set gender(value: Gender | undefined);
    /**
     firstName field
     */
    get firstName(): string | undefined;
    /**
     firstName field
     */
    set firstName(value: string | undefined);
    /**
     middleName field
     */
    get middleName(): string | undefined;
    /**
     middleName field
     */
    set middleName(value: string | undefined);
    /**
     lastName field
     */
    get lastName(): string | undefined;
    /**
     lastName field
     */
    set lastName(value: string | undefined);
    /**
     language field
     */
    get language(): string | undefined;
    /**
     language field
     */
    set language(value: string | undefined);
    /**
     phone field
     */
    get phone(): string | undefined;
    /**
     phone field
     */
    set phone(value: string | undefined);
    /**
     job field
     */
    get job(): string | undefined;
    /**
     job field
     */
    set job(value: string | undefined);
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
     tenants field
     */
    get tenants(): TenantResponse;
    /**
     tenants field
     */
    set tenants(value: TenantResponse);
}
//# sourceMappingURL=AdminUser.d.ts.map