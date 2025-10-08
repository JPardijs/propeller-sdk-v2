import { ProductsResponse } from './ProductsResponse';
import { Company } from './Company';
import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Object class for FavoriteList
 */
export declare class FavoriteList {
    /** Favorite List unique identifier */
    private _id;
    /** Favorite List name */
    private _name;
    /** Favorite List company ID */
    private _companyId?;
    /** Favorite List contact ID */
    private _contactId?;
    /** Favorite List customer ID */
    private _customerId?;
    /** Default Favorite List */
    private _isDefault;
    /** Favorite List slug */
    private _slug;
    /** Favorite List date created */
    private _createdAt;
    /** Favorite List date modified */
    private _updatedAt;
    /** products field */
    private _products?;
    /** clusters field */
    private _clusters?;
    /** company field */
    private _company?;
    /** contact field */
    private _contact?;
    /** customer field */
    private _customer?;
    /**
     Creates a new instance of FavoriteList
     */
    constructor(data?: Partial<FavoriteList>);
    /**
     Favorite List unique identifier
     */
    get id(): string | number;
    /**
     Favorite List unique identifier
     */
    set id(value: string | number);
    /**
     Favorite List name
     */
    get name(): string;
    /**
     Favorite List name
     */
    set name(value: string);
    /**
     Favorite List company ID
     */
    get companyId(): number | undefined;
    /**
     Favorite List company ID
     */
    set companyId(value: number | undefined);
    /**
     Favorite List contact ID
     */
    get contactId(): number | undefined;
    /**
     Favorite List contact ID
     */
    set contactId(value: number | undefined);
    /**
     Favorite List customer ID
     */
    get customerId(): number | undefined;
    /**
     Favorite List customer ID
     */
    set customerId(value: number | undefined);
    /**
     Default Favorite List
     */
    get isDefault(): boolean;
    /**
     Default Favorite List
     */
    set isDefault(value: boolean);
    /**
     Favorite List slug
     */
    get slug(): string;
    /**
     Favorite List slug
     */
    set slug(value: string);
    /**
     Favorite List date created
     */
    get createdAt(): string;
    /**
     Favorite List date created
     */
    set createdAt(value: string);
    /**
     Favorite List date modified
     */
    get updatedAt(): string;
    /**
     Favorite List date modified
     */
    set updatedAt(value: string);
    /**
     products field
     */
    get products(): ProductsResponse | undefined;
    /**
     products field
     */
    set products(value: ProductsResponse | undefined);
    /**
     clusters field
     */
    get clusters(): ProductsResponse | undefined;
    /**
     clusters field
     */
    set clusters(value: ProductsResponse | undefined);
    /**
     company field
     */
    get company(): Company | undefined;
    /**
     company field
     */
    set company(value: Company | undefined);
    /**
     contact field
     */
    get contact(): Contact | undefined;
    /**
     contact field
     */
    set contact(value: Contact | undefined);
    /**
     customer field
     */
    get customer(): Customer | undefined;
    /**
     customer field
     */
    set customer(value: Customer | undefined);
}
//# sourceMappingURL=FavoriteList.d.ts.map