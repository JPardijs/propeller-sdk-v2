import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartAddress
 */
export declare class CartAddress {
    /** Company name */
    private _company?;
    /** Gender */
    private _gender?;
    /** First name */
    private _firstName;
    /** Middle name */
    private _middleName?;
    /** Last name */
    private _lastName;
    /** Street */
    private _street;
    /** Street number */
    private _number?;
    /** Street number extension */
    private _numberExtension?;
    /** Postal code */
    private _postalCode;
    /** City */
    private _city;
    /** Region */
    private _region?;
    /** Country */
    private _country;
    /** Code */
    private _code?;
    /** Email */
    private _email?;
    /** Mobile phone number */
    private _mobile?;
    /** Phone number */
    private _phone?;
    /** Is this an ICP address? */
    private _icp?;
    /** Notes */
    private _notes?;
    /**
     Creates a new instance of CartAddress
     */
    constructor(data?: Partial<CartAddress>);
    /**
     Company name
     */
    get company(): string | undefined;
    /**
     Company name
     */
    set company(value: string | undefined);
    /**
     Gender
     */
    get gender(): Gender | undefined;
    /**
     Gender
     */
    set gender(value: Gender | undefined);
    /**
     First name
     */
    get firstName(): string;
    /**
     First name
     */
    set firstName(value: string);
    /**
     Middle name
     */
    get middleName(): string | undefined;
    /**
     Middle name
     */
    set middleName(value: string | undefined);
    /**
     Last name
     */
    get lastName(): string;
    /**
     Last name
     */
    set lastName(value: string);
    /**
     Street
     */
    get street(): string;
    /**
     Street
     */
    set street(value: string);
    /**
     Street number
     */
    get number(): string | undefined;
    /**
     Street number
     */
    set number(value: string | undefined);
    /**
     Street number extension
     */
    get numberExtension(): string | undefined;
    /**
     Street number extension
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
     Country
     */
    get country(): string;
    /**
     Country
     */
    set country(value: string);
    /**
     Code
     */
    get code(): string | undefined;
    /**
     Code
     */
    set code(value: string | undefined);
    /**
     Email
     */
    get email(): string | undefined;
    /**
     Email
     */
    set email(value: string | undefined);
    /**
     Mobile phone number
     */
    get mobile(): string | undefined;
    /**
     Mobile phone number
     */
    set mobile(value: string | undefined);
    /**
     Phone number
     */
    get phone(): string | undefined;
    /**
     Phone number
     */
    set phone(value: string | undefined);
    /**
     Is this an ICP address?
     */
    get icp(): YesNo | undefined;
    /**
     Is this an ICP address?
     */
    set icp(value: YesNo | undefined);
    /**
     Notes
     */
    get notes(): string | undefined;
    /**
     Notes
     */
    set notes(value: string | undefined);
}
//# sourceMappingURL=CartAddress.d.ts.map