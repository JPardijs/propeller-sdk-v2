import { Gender } from '../enum/Gender';
import { AddressType } from '../enum/AddressType';
import { YesNo } from '../enum/YesNo';
/**
 Object class for OrderAddress
 */
export declare class OrderAddress {
    /** Address primary identifier */
    private _id;
    /** The ID of the Order the address belongs to */
    private _orderId;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** First name the address applies to */
    private _firstName?;
    /** Middle name the address applies to */
    private _middleName?;
    /** Last name the address applies to */
    private _lastName?;
    /** Gender the address applies to */
    private _gender;
    /** Company the address applies to */
    private _company?;
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
    /** Address type [one of: delivery, invoice, home] */
    private _type;
    /** ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad */
    private _icp;
    /** Address company domain url */
    private _url?;
    /** Address friendly descriptive name */
    private _name?;
    /**
     Creates a new instance of OrderAddress
     */
    constructor(data?: Partial<OrderAddress>);
    /**
     Address primary identifier
     */
    get id(): number;
    /**
     Address primary identifier
     */
    set id(value: number);
    /**
     The ID of the Order the address belongs to
     */
    get orderId(): number;
    /**
     The ID of the Order the address belongs to
     */
    set orderId(value: number);
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
     First name the address applies to
     */
    get firstName(): string | undefined;
    /**
     First name the address applies to
     */
    set firstName(value: string | undefined);
    /**
     Middle name the address applies to
     */
    get middleName(): string | undefined;
    /**
     Middle name the address applies to
     */
    set middleName(value: string | undefined);
    /**
     Last name the address applies to
     */
    get lastName(): string | undefined;
    /**
     Last name the address applies to
     */
    set lastName(value: string | undefined);
    /**
     Gender the address applies to
     */
    get gender(): Gender;
    /**
     Gender the address applies to
     */
    set gender(value: Gender);
    /**
     Company the address applies to
     */
    get company(): string | undefined;
    /**
     Company the address applies to
     */
    set company(value: string | undefined);
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
     Address type [one of: delivery, invoice, home]
     */
    get type(): AddressType;
    /**
     Address type [one of: delivery, invoice, home]
     */
    set type(value: AddressType);
    /**
     ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad
     */
    get icp(): YesNo;
    /**
     ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad
     */
    set icp(value: YesNo);
    /**
     Address company domain url
     */
    get url(): string | undefined;
    /**
     Address company domain url
     */
    set url(value: string | undefined);
    /**
     Address friendly descriptive name
     */
    get name(): string | undefined;
    /**
     Address friendly descriptive name
     */
    set name(value: string | undefined);
}
//# sourceMappingURL=OrderAddress.d.ts.map