import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { AttributeResultResponse } from './AttributeResultResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Pricesheet } from './Pricesheet';
import { Usergroup } from './Usergroup';
import { ContactsResponse } from './ContactsResponse';
import { IBaseUser } from './IBaseUser';
import { Source } from './Source';
import { PurchaseAuthorizationConfigResponse } from './PurchaseAuthorizationConfigResponse';
/**
 Object class for Company
 */
export declare class Company {
    /** The id of the company. */
    private _companyId;
    /** addresses field */
    private _addresses;
    /** Lists attributes for this company based on the search input. */
    private _attributes?;
    /** favoriteLists field */
    private _favoriteLists?;
    /** orderlists field */
    private _orderlists?;
    /** pricesheets field */
    private _pricesheets?;
    /** The name of the company. */
    private _name;
    /** The tax number of the company. */
    private _taxNumber?;
    /** The coc number of the company. */
    private _cocNumber?;
    /** The debtor ID of the company. */
    private _debtorId?;
    /** The phone number of the company. */
    private _phone?;
    /** The email of the company. */
    private _email?;
    /** Notes of the company. */
    private _notes?;
    /** Shows whether this company is hidden and should only be used for background operations. */
    private _hidden?;
    /** inheritProductList field */
    private _inheritProductList?;
    /** The path in id's to the root of the inheritance tree. */
    private _path?;
    /** The slug of the company. */
    private _slug?;
    /** The tag of the company. */
    private _tag?;
    /** createdAt field */
    private _createdAt?;
    /** lastModifiedAt field */
    private _lastModifiedAt?;
    /** parentUsergroupId field */
    private _parentUsergroupId;
    /** Parent usergroup of the company. */
    private _usergroup?;
    /** Children contacts of the company. */
    private _contacts?;
    /** Users/ contacts which are account managers of the company. */
    private _managers?;
    /** sources field */
    private _sources;
    /** usergroupPath field */
    private _usergroupPath;
    /** All purchase authorization config entities for this company */
    private _purchaseAuthorizationConfigs?;
    /**
     Creates a new instance of Company
     */
    constructor(data?: Partial<Company>);
    /**
     The id of the company.
     */
    get companyId(): number;
    /**
     The id of the company.
     */
    set companyId(value: number);
    /**
     addresses field
     */
    get addresses(): Address[];
    /**
     addresses field
     */
    set addresses(value: Address[]);
    /**
     Lists attributes for this company based on the search input.
     */
    get attributes(): AttributeResultResponse | undefined;
    /**
     Lists attributes for this company based on the search input.
     */
    set attributes(value: AttributeResultResponse | undefined);
    /**
     favoriteLists field
     */
    get favoriteLists(): FavoriteListsResponse | undefined;
    /**
     favoriteLists field
     */
    set favoriteLists(value: FavoriteListsResponse | undefined);
    /**
     orderlists field
     */
    get orderlists(): OrderlistsResponse | undefined;
    /**
     orderlists field
     */
    set orderlists(value: OrderlistsResponse | undefined);
    /**
     pricesheets field
     */
    get pricesheets(): Pricesheet[] | undefined;
    /**
     pricesheets field
     */
    set pricesheets(value: Pricesheet[] | undefined);
    /**
     The name of the company.
     */
    get name(): string;
    /**
     The name of the company.
     */
    set name(value: string);
    /**
     The tax number of the company.
     */
    get taxNumber(): string | undefined;
    /**
     The tax number of the company.
     */
    set taxNumber(value: string | undefined);
    /**
     The coc number of the company.
     */
    get cocNumber(): string | undefined;
    /**
     The coc number of the company.
     */
    set cocNumber(value: string | undefined);
    /**
     The debtor ID of the company.
     */
    get debtorId(): string | undefined;
    /**
     The debtor ID of the company.
     */
    set debtorId(value: string | undefined);
    /**
     The phone number of the company.
     */
    get phone(): string | undefined;
    /**
     The phone number of the company.
     */
    set phone(value: string | undefined);
    /**
     The email of the company.
     */
    get email(): string | undefined;
    /**
     The email of the company.
     */
    set email(value: string | undefined);
    /**
     Notes of the company.
     */
    get notes(): string | undefined;
    /**
     Notes of the company.
     */
    set notes(value: string | undefined);
    /**
     Shows whether this company is hidden and should only be used for background operations.
     */
    get hidden(): YesNo | undefined;
    /**
     Shows whether this company is hidden and should only be used for background operations.
     */
    set hidden(value: YesNo | undefined);
    /**
     inheritProductList field
     */
    get inheritProductList(): YesNo | undefined;
    /**
     inheritProductList field
     */
    set inheritProductList(value: YesNo | undefined);
    /**
     The path in id's to the root of the inheritance tree.
     */
    get path(): string | undefined;
    /**
     The path in id's to the root of the inheritance tree.
     */
    set path(value: string | undefined);
    /**
     The slug of the company.
     */
    get slug(): string | undefined;
    /**
     The slug of the company.
     */
    set slug(value: string | undefined);
    /**
     The tag of the company.
     */
    get tag(): string | undefined;
    /**
     The tag of the company.
     */
    set tag(value: string | undefined);
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
     parentUsergroupId field
     */
    get parentUsergroupId(): number;
    /**
     parentUsergroupId field
     */
    set parentUsergroupId(value: number);
    /**
     Parent usergroup of the company.
     */
    get usergroup(): Usergroup | undefined;
    /**
     Parent usergroup of the company.
     */
    set usergroup(value: Usergroup | undefined);
    /**
     Children contacts of the company.
     */
    get contacts(): ContactsResponse | undefined;
    /**
     Children contacts of the company.
     */
    set contacts(value: ContactsResponse | undefined);
    /**
     Users/ contacts which are account managers of the company.
     */
    get managers(): IBaseUser[] | undefined;
    /**
     Users/ contacts which are account managers of the company.
     */
    set managers(value: IBaseUser[] | undefined);
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
    /**
     All purchase authorization config entities for this company
     */
    get purchaseAuthorizationConfigs(): PurchaseAuthorizationConfigResponse | undefined;
    /**
     All purchase authorization config entities for this company
     */
    set purchaseAuthorizationConfigs(value: PurchaseAuthorizationConfigResponse | undefined);
}
//# sourceMappingURL=Company.d.ts.map