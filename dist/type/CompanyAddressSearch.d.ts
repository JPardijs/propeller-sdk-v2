import { YesNo } from '../enum/YesNo';
import { AddressType } from '../enum/AddressType';
/**
 Object class for CompanyAddressSearch
 */
export declare class CompanyAddressSearch {
    /** Address primary identifier */
    private _id;
    /** First name the address applies to */
    private _firstName?;
    /** Last name the address applies to */
    private _lastName?;
    /** Address street */
    private _street;
    /** Address street number */
    private _number?;
    /** Address street number extension */
    private _numberExtension?;
    /** Address postal code */
    private _postalCode;
    /** Address city */
    private _city;
    /** Address region */
    private _region?;
    /** Address country */
    private _country;
    /** Fixed phone number that applies to this address [min: 6, max: 30] */
    private _phone?;
    /** Mobile phone number that applies to this address [min: 6, max: 30] */
    private _mobile?;
    /** Email that applies to this address [valid email format needed] */
    private _email?;
    /** Address code */
    private _code?;
    /** Address delivery notes */
    private _notes?;
    /** Address friendly descriptive name */
    private _name?;
    /** Indicates whether the address is default for its type */
    private _isDefault;
    /** Address type [one of 'home', 'delivery', 'invoice'] */
    private _type;
    /** Indicates whether the address is active */
    private _active?;
    /** Date when the address was created */
    private _createdAt;
    /** Date when the address was last modified */
    private _lastModifiedAt;
    /**
     Creates a new instance of CompanyAddressSearch
     */
    constructor(data?: Partial<CompanyAddressSearch>);
    /**
     Address primary identifier
     */
    get id(): number;
    /**
     Address primary identifier
     */
    set id(value: number);
    /**
     First name the address applies to
     */
    get firstName(): string | undefined;
    /**
     First name the address applies to
     */
    set firstName(value: string | undefined);
    /**
     Last name the address applies to
     */
    get lastName(): string | undefined;
    /**
     Last name the address applies to
     */
    set lastName(value: string | undefined);
    /**
     Address street
     */
    get street(): string;
    /**
     Address street
     */
    set street(value: string);
    /**
     Address street number
     */
    get number(): string | undefined;
    /**
     Address street number
     */
    set number(value: string | undefined);
    /**
     Address street number extension
     */
    get numberExtension(): string | undefined;
    /**
     Address street number extension
     */
    set numberExtension(value: string | undefined);
    /**
     Address postal code
     */
    get postalCode(): string;
    /**
     Address postal code
     */
    set postalCode(value: string);
    /**
     Address city
     */
    get city(): string;
    /**
     Address city
     */
    set city(value: string);
    /**
     Address region
     */
    get region(): string | undefined;
    /**
     Address region
     */
    set region(value: string | undefined);
    /**
     Address country
     */
    get country(): string;
    /**
     Address country
     */
    set country(value: string);
    /**
     Fixed phone number that applies to this address [min: 6, max: 30]
     */
    get phone(): string | undefined;
    /**
     Fixed phone number that applies to this address [min: 6, max: 30]
     */
    set phone(value: string | undefined);
    /**
     Mobile phone number that applies to this address [min: 6, max: 30]
     */
    get mobile(): string | undefined;
    /**
     Mobile phone number that applies to this address [min: 6, max: 30]
     */
    set mobile(value: string | undefined);
    /**
     Email that applies to this address [valid email format needed]
     */
    get email(): string | undefined;
    /**
     Email that applies to this address [valid email format needed]
     */
    set email(value: string | undefined);
    /**
     Address code
     */
    get code(): string | undefined;
    /**
     Address code
     */
    set code(value: string | undefined);
    /**
     Address delivery notes
     */
    get notes(): string | undefined;
    /**
     Address delivery notes
     */
    set notes(value: string | undefined);
    /**
     Address friendly descriptive name
     */
    get name(): string | undefined;
    /**
     Address friendly descriptive name
     */
    set name(value: string | undefined);
    /**
     Indicates whether the address is default for its type
     */
    get isDefault(): YesNo;
    /**
     Indicates whether the address is default for its type
     */
    set isDefault(value: YesNo);
    /**
     Address type [one of 'home', 'delivery', 'invoice']
     */
    get type(): AddressType;
    /**
     Address type [one of 'home', 'delivery', 'invoice']
     */
    set type(value: AddressType);
    /**
     Indicates whether the address is active
     */
    get active(): YesNo | undefined;
    /**
     Indicates whether the address is active
     */
    set active(value: YesNo | undefined);
    /**
     Date when the address was created
     */
    get createdAt(): string;
    /**
     Date when the address was created
     */
    set createdAt(value: string);
    /**
     Date when the address was last modified
     */
    get lastModifiedAt(): string;
    /**
     Date when the address was last modified
     */
    set lastModifiedAt(value: string);
}
//# sourceMappingURL=CompanyAddressSearch.d.ts.map