import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { AttributeResultResponse } from './AttributeResultResponse';
import { MagicToken } from './MagicToken';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Pricesheet } from './Pricesheet';
import { Usergroup } from './Usergroup';
import { Source } from './Source';
/**
 Object class for Customer
 */
export declare class Customer {
    /** The id of the customer. */
    private _customerId;
    /** addresses field */
    private _addresses;
    /** Lists attributes for this customer based on the search input. */
    private _attributes?;
    /** Get all magic tokens for a customer */
    private _magicTokens;
    /** favoriteLists field */
    private _favoriteLists?;
    /** orderlist field */
    private _orderlist?;
    /** orderlists field */
    private _orderlists;
    /** pricesheets field */
    private _pricesheets?;
    /** The unique identifier of the user. */
    private _userId?;
    /** debtorId field */
    private _debtorId?;
    /** The gender of the user. */
    private _gender?;
    /** The first name of the user. */
    private _firstName;
    /** The middle name of the user. */
    private _middleName?;
    /** The last name of the user. */
    private _lastName;
    /** The phone number of the user. */
    private _phone?;
    /** The mobile number of the user. */
    private _mobile?;
    /** The email of the user. */
    private _email;
    /** The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet. */
    private _login?;
    /** The International Bank Account Number of the user */
    private _iban?;
    /** The Bank Account Number of the user */
    private _bankAccount?;
    /** The Bank Identification Code of the user */
    private _bic?;
    /** notes field */
    private _notes?;
    /** The primary language of the user */
    private _primaryLanguage?;
    /** The expiration date of the contact. After this date expires contact will be disabled. */
    private _expires?;
    /** External ID */
    private _externalId?;
    /** The date of birth of the contact. */
    private _dateOfBirth?;
    /** mailingList field */
    private _mailingList?;
    /** isLoggedIn field */
    private _isLoggedIn?;
    /** createdAt field */
    private _createdAt?;
    /** lastModifiedAt field */
    private _lastModifiedAt?;
    /** The usergroup id of parent usergroup. */
    private _parentUsergroupId;
    /** usergroup field */
    /** @deprecated This field is deprecated and will be removed in a future */
    private _usergroup?;
    /** sources field */
    private _sources;
    /** usergroupPath field */
    private _usergroupPath;
    /**
     Creates a new instance of Customer
     */
    constructor(data?: Partial<Customer>);
    /**
     The id of the customer.
     */
    get customerId(): number;
    /**
     The id of the customer.
     */
    set customerId(value: number);
    /**
     addresses field
     */
    get addresses(): Address[];
    /**
     addresses field
     */
    set addresses(value: Address[]);
    /**
     Lists attributes for this customer based on the search input.
     */
    get attributes(): AttributeResultResponse | undefined;
    /**
     Lists attributes for this customer based on the search input.
     */
    set attributes(value: AttributeResultResponse | undefined);
    /**
     Get all magic tokens for a customer
     */
    get magicTokens(): MagicToken[];
    /**
     Get all magic tokens for a customer
     */
    set magicTokens(value: MagicToken[]);
    /**
     favoriteLists field
     */
    get favoriteLists(): FavoriteListsResponse | undefined;
    /**
     favoriteLists field
     */
    set favoriteLists(value: FavoriteListsResponse | undefined);
    /**
     orderlist field
     */
    get orderlist(): OrderlistsResponse | undefined;
    /**
     orderlist field
     */
    set orderlist(value: OrderlistsResponse | undefined);
    /**
     orderlists field
     */
    get orderlists(): OrderlistsResponse;
    /**
     orderlists field
     */
    set orderlists(value: OrderlistsResponse);
    /**
     pricesheets field
     */
    get pricesheets(): Pricesheet[] | undefined;
    /**
     pricesheets field
     */
    set pricesheets(value: Pricesheet[] | undefined);
    /**
     The unique identifier of the user.
     */
    get userId(): number | undefined;
    /**
     The unique identifier of the user.
     */
    set userId(value: number | undefined);
    /**
     debtorId field
     */
    get debtorId(): string | undefined;
    /**
     debtorId field
     */
    set debtorId(value: string | undefined);
    /**
     The gender of the user.
     */
    get gender(): Gender | undefined;
    /**
     The gender of the user.
     */
    set gender(value: Gender | undefined);
    /**
     The first name of the user.
     */
    get firstName(): string;
    /**
     The first name of the user.
     */
    set firstName(value: string);
    /**
     The middle name of the user.
     */
    get middleName(): string | undefined;
    /**
     The middle name of the user.
     */
    set middleName(value: string | undefined);
    /**
     The last name of the user.
     */
    get lastName(): string;
    /**
     The last name of the user.
     */
    set lastName(value: string);
    /**
     The phone number of the user.
     */
    get phone(): string | undefined;
    /**
     The phone number of the user.
     */
    set phone(value: string | undefined);
    /**
     The mobile number of the user.
     */
    get mobile(): string | undefined;
    /**
     The mobile number of the user.
     */
    set mobile(value: string | undefined);
    /**
     The email of the user.
     */
    get email(): string;
    /**
     The email of the user.
     */
    set email(value: string);
    /**
     The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet.
     */
    get login(): string | undefined;
    /**
     The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet.
     */
    set login(value: string | undefined);
    /**
     The International Bank Account Number of the user
     */
    get iban(): string | undefined;
    /**
     The International Bank Account Number of the user
     */
    set iban(value: string | undefined);
    /**
     The Bank Account Number of the user
     */
    get bankAccount(): string | undefined;
    /**
     The Bank Account Number of the user
     */
    set bankAccount(value: string | undefined);
    /**
     The Bank Identification Code of the user
     */
    get bic(): string | undefined;
    /**
     The Bank Identification Code of the user
     */
    set bic(value: string | undefined);
    /**
     notes field
     */
    get notes(): string | undefined;
    /**
     notes field
     */
    set notes(value: string | undefined);
    /**
     The primary language of the user
     */
    get primaryLanguage(): string | undefined;
    /**
     The primary language of the user
     */
    set primaryLanguage(value: string | undefined);
    /**
     The expiration date of the contact. After this date expires contact will be disabled.
     */
    get expires(): string | undefined;
    /**
     The expiration date of the contact. After this date expires contact will be disabled.
     */
    set expires(value: string | undefined);
    /**
     External ID
     */
    get externalId(): string | undefined;
    /**
     External ID
     */
    set externalId(value: string | undefined);
    /**
     The date of birth of the contact.
     */
    get dateOfBirth(): string | undefined;
    /**
     The date of birth of the contact.
     */
    set dateOfBirth(value: string | undefined);
    /**
     mailingList field
     */
    get mailingList(): YesNo | undefined;
    /**
     mailingList field
     */
    set mailingList(value: YesNo | undefined);
    /**
     isLoggedIn field
     */
    get isLoggedIn(): boolean | undefined;
    /**
     isLoggedIn field
     */
    set isLoggedIn(value: boolean | undefined);
    /**
     createdAt field
     */
    get createdAt(): string | undefined;
    /**
     createdAt field
     */
    set createdAt(value: string | undefined);
    /**
     lastModifiedAt field
     */
    get lastModifiedAt(): string | undefined;
    /**
     lastModifiedAt field
     */
    set lastModifiedAt(value: string | undefined);
    /**
     The usergroup id of parent usergroup.
     */
    get parentUsergroupId(): number;
    /**
     The usergroup id of parent usergroup.
     */
    set parentUsergroupId(value: number);
    /**
     usergroup field
     */
    get usergroup(): Usergroup | undefined;
    /**
     usergroup field
     */
    set usergroup(value: Usergroup | undefined);
    /**
     sources field
     */
    get sources(): Source[];
    /**
     sources field
     */
    set sources(value: Source[]);
    /**
     usergroupPath field
     */
    get usergroupPath(): Usergroup[];
    /**
     usergroupPath field
     */
    set usergroupPath(value: Usergroup[]);
}
//# sourceMappingURL=Customer.d.ts.map