import { CompanyAttributeSearch } from './CompanyAttributeSearch';
/**
 Object class for CompanyContactSearch
 */
export declare class CompanyContactSearch {
    /** Contact id */
    private _id;
    /** First name of the contact. */
    private _firstName;
    /** Last name of the contact. */
    private _lastName?;
    /** Middle name of the contact. */
    private _middleName?;
    /** Phone number of the contact. */
    private _phone?;
    /** Mobile number of the contact. */
    private _mobile?;
    /** Email of the contact. */
    private _email;
    /** International Bank Account Number of the contact */
    private _iban?;
    /** Bank Account Number of the contact */
    private _bankAccount?;
    /** Bank Identification Code of the contact */
    private _bic?;
    /** Contact notes */
    private _notes?;
    /** Contact debtor identifier */
    /** @deprecated Deprecated in favor of company debtorId */
    private _debtorId?;
    /** Date of birth of the contact. */
    private _dateOfBirth?;
    /** Contract creation date */
    private _createdAt;
    /** Contact last modified date */
    private _lastModifiedAt;
    /** Attributes of the contact */
    private _attributes;
    /**
     Creates a new instance of CompanyContactSearch
     */
    constructor(data?: Partial<CompanyContactSearch>);
    /**
     Contact id
     */
    get id(): number;
    /**
     Contact id
     */
    set id(value: number);
    /**
     First name of the contact.
     */
    get firstName(): string;
    /**
     First name of the contact.
     */
    set firstName(value: string);
    /**
     Last name of the contact.
     */
    get lastName(): string | undefined;
    /**
     Last name of the contact.
     */
    set lastName(value: string | undefined);
    /**
     Middle name of the contact.
     */
    get middleName(): string | undefined;
    /**
     Middle name of the contact.
     */
    set middleName(value: string | undefined);
    /**
     Phone number of the contact.
     */
    get phone(): string | undefined;
    /**
     Phone number of the contact.
     */
    set phone(value: string | undefined);
    /**
     Mobile number of the contact.
     */
    get mobile(): string | undefined;
    /**
     Mobile number of the contact.
     */
    set mobile(value: string | undefined);
    /**
     Email of the contact.
     */
    get email(): string;
    /**
     Email of the contact.
     */
    set email(value: string);
    /**
     International Bank Account Number of the contact
     */
    get iban(): string | undefined;
    /**
     International Bank Account Number of the contact
     */
    set iban(value: string | undefined);
    /**
     Bank Account Number of the contact
     */
    get bankAccount(): string | undefined;
    /**
     Bank Account Number of the contact
     */
    set bankAccount(value: string | undefined);
    /**
     Bank Identification Code of the contact
     */
    get bic(): string | undefined;
    /**
     Bank Identification Code of the contact
     */
    set bic(value: string | undefined);
    /**
     Contact notes
     */
    get notes(): string | undefined;
    /**
     Contact notes
     */
    set notes(value: string | undefined);
    /**
     Contact debtor identifier
     */
    get debtorId(): string | undefined;
    /**
     Contact debtor identifier
     */
    set debtorId(value: string | undefined);
    /**
     Date of birth of the contact.
     */
    get dateOfBirth(): string | undefined;
    /**
     Date of birth of the contact.
     */
    set dateOfBirth(value: string | undefined);
    /**
     Contract creation date
     */
    get createdAt(): string;
    /**
     Contract creation date
     */
    set createdAt(value: string);
    /**
     Contact last modified date
     */
    get lastModifiedAt(): string;
    /**
     Contact last modified date
     */
    set lastModifiedAt(value: string);
    /**
     Attributes of the contact
     */
    get attributes(): CompanyAttributeSearch[];
    /**
     Attributes of the contact
     */
    set attributes(value: CompanyAttributeSearch[]);
}
//# sourceMappingURL=CompanyContactSearch.d.ts.map