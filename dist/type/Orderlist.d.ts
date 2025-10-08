import { OrderlistType } from '../enum/OrderlistType';
import { YesNo } from '../enum/YesNo';
import { LocalizedString } from './LocalizedString';
import { ProductsResponse } from './ProductsResponse';
import { IBaseUser } from './IBaseUser';
import { UsersResponse } from './UsersResponse';
import { Company } from './Company';
import { CompaniesResponse } from './CompaniesResponse';
/**
 Object class for Orderlist
 */
export declare class Orderlist {
    /** Orderlist primary identifier */
    private _id;
    /** Orderlist creation date */
    private _createdAt;
    /** Orderlist last modified date */
    private _lastModifiedAt;
    /** Orderlist description per language */
    private _descriptions;
    /** Extra field per language */
    private _extras?;
    /** Orderlist code */
    private _code?;
    /** Valid from (Display only) */
    private _validFrom?;
    /** Valid to (Display only) */
    private _validTo?;
    /** Orderlist type */
    private _type;
    /** Partner entity */
    private _partnerEntity?;
    /** Shows if the orderlist is active */
    private _active;
    /** products field */
    private _products?;
    /** clusters field */
    private _clusters?;
    /** Use usersPaginated. */
    /** @deprecated Use usersPaginated. */
    private _users;
    /** usersPaginated field */
    private _usersPaginated;
    /** Use companiesPaginated. */
    /** @deprecated Use companiesPaginated. */
    private _companies;
    /** companiesPaginated field */
    private _companiesPaginated;
    /**
     Creates a new instance of Orderlist
     */
    constructor(data?: Partial<Orderlist>);
    /**
     Orderlist primary identifier
     */
    get id(): number;
    /**
     Orderlist primary identifier
     */
    set id(value: number);
    /**
     Orderlist creation date
     */
    get createdAt(): string;
    /**
     Orderlist creation date
     */
    set createdAt(value: string);
    /**
     Orderlist last modified date
     */
    get lastModifiedAt(): string;
    /**
     Orderlist last modified date
     */
    set lastModifiedAt(value: string);
    /**
     Orderlist description per language
     */
    get descriptions(): LocalizedString[];
    /**
     Orderlist description per language
     */
    set descriptions(value: LocalizedString[]);
    /**
     Extra field per language
     */
    get extras(): LocalizedString[] | undefined;
    /**
     Extra field per language
     */
    set extras(value: LocalizedString[] | undefined);
    /**
     Orderlist code
     */
    get code(): string | undefined;
    /**
     Orderlist code
     */
    set code(value: string | undefined);
    /**
     Valid from (Display only)
     */
    get validFrom(): string | undefined;
    /**
     Valid from (Display only)
     */
    set validFrom(value: string | undefined);
    /**
     Valid to (Display only)
     */
    get validTo(): string | undefined;
    /**
     Valid to (Display only)
     */
    set validTo(value: string | undefined);
    /**
     Orderlist type
     */
    get type(): OrderlistType;
    /**
     Orderlist type
     */
    set type(value: OrderlistType);
    /**
     Partner entity
     */
    get partnerEntity(): string | undefined;
    /**
     Partner entity
     */
    set partnerEntity(value: string | undefined);
    /**
     Shows if the orderlist is active
     */
    get active(): YesNo;
    /**
     Shows if the orderlist is active
     */
    set active(value: YesNo);
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
     Use usersPaginated.
     */
    get users(): IBaseUser[];
    /**
     Use usersPaginated.
     */
    set users(value: IBaseUser[]);
    /**
     usersPaginated field
     */
    get usersPaginated(): UsersResponse;
    /**
     usersPaginated field
     */
    set usersPaginated(value: UsersResponse);
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
//# sourceMappingURL=Orderlist.d.ts.map