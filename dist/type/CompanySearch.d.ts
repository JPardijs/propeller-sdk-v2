import { CompanyAddressSearch } from './CompanyAddressSearch';
import { CompanyContactSearch } from './CompanyContactSearch';
import { CompanyAttributeSearch } from './CompanyAttributeSearch';
/**
 Object class for CompanySearch
 */
export declare class CompanySearch {
    /** Company id */
    private _id;
    /** Company name */
    private _name;
    /** Company tax number */
    private _taxNumber?;
    /** Company coc number */
    private _cocNumber?;
    /** Notes of the company */
    private _notes?;
    /** Company debtor identifier */
    private _debtorId?;
    /** Company email */
    private _email?;
    /** Company creation date */
    private _createdAt;
    /** Company last modified date */
    private _lastModifiedAt;
    /** Company deletion date */
    private _deletedAt?;
    /** Addresses assigned to this company. */
    private _addresses;
    /** Contacts part of this company. */
    private _contacts;
    /** Attributes of the company. */
    private _attributes;
    /**
     Creates a new instance of CompanySearch
     */
    constructor(data?: Partial<CompanySearch>);
    /**
     Company id
     */
    get id(): number;
    /**
     Company id
     */
    set id(value: number);
    /**
     Company name
     */
    get name(): string;
    /**
     Company name
     */
    set name(value: string);
    /**
     Company tax number
     */
    get taxNumber(): string | undefined;
    /**
     Company tax number
     */
    set taxNumber(value: string | undefined);
    /**
     Company coc number
     */
    get cocNumber(): string | undefined;
    /**
     Company coc number
     */
    set cocNumber(value: string | undefined);
    /**
     Notes of the company
     */
    get notes(): string | undefined;
    /**
     Notes of the company
     */
    set notes(value: string | undefined);
    /**
     Company debtor identifier
     */
    get debtorId(): string | undefined;
    /**
     Company debtor identifier
     */
    set debtorId(value: string | undefined);
    /**
     Company email
     */
    get email(): string | undefined;
    /**
     Company email
     */
    set email(value: string | undefined);
    /**
     Company creation date
     */
    get createdAt(): string;
    /**
     Company creation date
     */
    set createdAt(value: string);
    /**
     Company last modified date
     */
    get lastModifiedAt(): string;
    /**
     Company last modified date
     */
    set lastModifiedAt(value: string);
    /**
     Company deletion date
     */
    get deletedAt(): string | undefined;
    /**
     Company deletion date
     */
    set deletedAt(value: string | undefined);
    /**
     Addresses assigned to this company.
     */
    get addresses(): CompanyAddressSearch[];
    /**
     Addresses assigned to this company.
     */
    set addresses(value: CompanyAddressSearch[]);
    /**
     Contacts part of this company.
     */
    get contacts(): CompanyContactSearch[];
    /**
     Contacts part of this company.
     */
    set contacts(value: CompanyContactSearch[]);
    /**
     Attributes of the company.
     */
    get attributes(): CompanyAttributeSearch[];
    /**
     Attributes of the company.
     */
    set attributes(value: CompanyAttributeSearch[]);
}
//# sourceMappingURL=CompanySearch.d.ts.map