import { LocalizedString } from './LocalizedString';
import { Contact } from './Contact';
import { ContactsResponse } from './ContactsResponse';
import { Customer } from './Customer';
import { CustomersResponse } from './CustomersResponse';
import { Company } from './Company';
import { CompaniesResponse } from './CompaniesResponse';
/**
 Object class for Pricesheet
 */
export declare class Pricesheet {
    /** Primary identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Pricesheet code */
    private _code;
    /** Pricesheet name */
    private _names?;
    /** Pricesheet description */
    private _descriptions?;
    /** Pricesheet priority */
    private _priority;
    /** Readonly */
    private _readonly;
    /** usergroups field */
    private _usergroups;
    /** Use contactsPaginated. */
    /** @deprecated Use contactsPaginated. */
    private _contacts;
    /** contactsPaginated field */
    private _contactsPaginated;
    /** Use customersPaginated. */
    /** @deprecated Use customersPaginated. */
    private _customers;
    /** customersPaginated field */
    private _customersPaginated;
    /** Use companiesPaginated. */
    /** @deprecated Use companiesPaginated. */
    private _companies;
    /** companiesPaginated field */
    private _companiesPaginated;
    /**
     Creates a new instance of Pricesheet
     */
    constructor(data?: Partial<Pricesheet>);
    /**
     Primary identifier
     */
    get id(): string;
    /**
     Primary identifier
     */
    set id(value: string);
    /**
     Creation date
     */
    get createdAt(): string;
    /**
     Creation date
     */
    set createdAt(value: string);
    /**
     Last modified date
     */
    get lastModifiedAt(): string;
    /**
     Last modified date
     */
    set lastModifiedAt(value: string);
    /**
     Pricesheet code
     */
    get code(): string;
    /**
     Pricesheet code
     */
    set code(value: string);
    /**
     Pricesheet name
     */
    get names(): LocalizedString[] | undefined;
    /**
     Pricesheet name
     */
    set names(value: LocalizedString[] | undefined);
    /**
     Pricesheet description
     */
    get descriptions(): LocalizedString[] | undefined;
    /**
     Pricesheet description
     */
    set descriptions(value: LocalizedString[] | undefined);
    /**
     Pricesheet priority
     */
    get priority(): number;
    /**
     Pricesheet priority
     */
    set priority(value: number);
    /**
     Readonly
     */
    get readonly(): boolean;
    /**
     Readonly
     */
    set readonly(value: boolean);
    /**
     usergroups field
     */
    get usergroups(): string[];
    /**
     usergroups field
     */
    set usergroups(value: string[]);
    /**
     Use contactsPaginated.
     */
    get contacts(): Contact[];
    /**
     Use contactsPaginated.
     */
    set contacts(value: Contact[]);
    /**
     contactsPaginated field
     */
    get contactsPaginated(): ContactsResponse;
    /**
     contactsPaginated field
     */
    set contactsPaginated(value: ContactsResponse);
    /**
     Use customersPaginated.
     */
    get customers(): Customer[];
    /**
     Use customersPaginated.
     */
    set customers(value: Customer[]);
    /**
     customersPaginated field
     */
    get customersPaginated(): CustomersResponse;
    /**
     customersPaginated field
     */
    set customersPaginated(value: CustomersResponse);
    /**
     Use companiesPaginated.
     */
    get companies(): Company[];
    /**
     Use companiesPaginated.
     */
    set companies(value: Company[]);
    /**
     companiesPaginated field
     */
    get companiesPaginated(): CompaniesResponse;
    /**
     companiesPaginated field
     */
    set companiesPaginated(value: CompaniesResponse);
}
//# sourceMappingURL=Pricesheet.d.ts.map