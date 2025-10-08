import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Object class for TenderAddress
 */
export declare class TenderAddress {
    /** Address company */
    private _company?;
    /** Address contact gender */
    private _gender?;
    /** Address contact first name */
    private _firstName?;
    /** Address contact middle name */
    private _middleName?;
    /** Address contact last name */
    private _lastName?;
    /** Street */
    private _street;
    /** Number */
    private _number?;
    /** Number extension */
    private _numberExtension?;
    /** Postal code */
    private _postalCode;
    /** City */
    private _city;
    /** Region */
    private _region?;
    /** Country code */
    private _country;
    /** Address code */
    private _code?;
    /** Address contact email */
    private _email?;
    /** Address contact mobile phone number */
    private _mobile?;
    /** Address contact phone number */
    private _phone?;
    /** ICP is Yes when taxes do not apply for shipping to the given address/ country */
    private _icp?;
    /** Notes, remarks, etc. */
    private _notes?;
    /**
     Creates a new instance of TenderAddress
     */
    constructor(data?: Partial<TenderAddress>);
    /**
     Address company
     */
    get company(): string | undefined;
    /**
     Address company
     */
    set company(value: string | undefined);
    /**
     Address contact gender
     */
    get gender(): Gender | undefined;
    /**
     Address contact gender
     */
    set gender(value: Gender | undefined);
    /**
     Address contact first name
     */
    get firstName(): string | undefined;
    /**
     Address contact first name
     */
    set firstName(value: string | undefined);
    /**
     Address contact middle name
     */
    get middleName(): string | undefined;
    /**
     Address contact middle name
     */
    set middleName(value: string | undefined);
    /**
     Address contact last name
     */
    get lastName(): string | undefined;
    /**
     Address contact last name
     */
    set lastName(value: string | undefined);
    /**
     Street
     */
    get street(): string;
    /**
     Street
     */
    set street(value: string);
    /**
     Number
     */
    get number(): string | undefined;
    /**
     Number
     */
    set number(value: string | undefined);
    /**
     Number extension
     */
    get numberExtension(): string | undefined;
    /**
     Number extension
     */
    set numberExtension(value: string | undefined);
    /**
     Postal code
     */
    get postalCode(): string;
    /**
     Postal code
     */
    set postalCode(value: string);
    /**
     City
     */
    get city(): string;
    /**
     City
     */
    set city(value: string);
    /**
     Region
     */
    get region(): string | undefined;
    /**
     Region
     */
    set region(value: string | undefined);
    /**
     Country code
     */
    get country(): string;
    /**
     Country code
     */
    set country(value: string);
    /**
     Address code
     */
    get code(): string | undefined;
    /**
     Address code
     */
    set code(value: string | undefined);
    /**
     Address contact email
     */
    get email(): string | undefined;
    /**
     Address contact email
     */
    set email(value: string | undefined);
    /**
     Address contact mobile phone number
     */
    get mobile(): string | undefined;
    /**
     Address contact mobile phone number
     */
    set mobile(value: string | undefined);
    /**
     Address contact phone number
     */
    get phone(): string | undefined;
    /**
     Address contact phone number
     */
    set phone(value: string | undefined);
    /**
     ICP is Yes when taxes do not apply for shipping to the given address/ country
     */
    get icp(): YesNo | undefined;
    /**
     ICP is Yes when taxes do not apply for shipping to the given address/ country
     */
    set icp(value: YesNo | undefined);
    /**
     Notes, remarks, etc.
     */
    get notes(): string | undefined;
    /**
     Notes, remarks, etc.
     */
    set notes(value: string | undefined);
}
//# sourceMappingURL=TenderAddress.d.ts.map