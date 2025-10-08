import { BundleCondition } from '../enum/BundleCondition';
import { BundlePrice } from './BundlePrice';
import { BundleItem } from './BundleItem';
/**
 Object class for Bundle
 */
export declare class Bundle {
    /** Bundle primary identifier */
    private _id;
    /** Bundle name */
    private _name?;
    /** Bundle description */
    private _description?;
    /** Bundle discount amount */
    private _discount?;
    /** Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL). */
    private _condition?;
    /** Bundle price */
    private _price?;
    /** Items in the bundle. */
    private _items?;
    /** Bundle creation date [default: now] */
    private _createdAt?;
    /** Bundle creator */
    private _createdBy?;
    /** Last modified date */
    private _lastModifiedAt?;
    /** Last modified by */
    private _lastModifiedBy?;
    /**
     Creates a new instance of Bundle
     */
    constructor(data?: Partial<Bundle>);
    /**
     Bundle primary identifier
     */
    get id(): string;
    /**
     Bundle primary identifier
     */
    set id(value: string);
    /**
     Bundle name
     */
    get name(): string | undefined;
    /**
     Bundle name
     */
    set name(value: string | undefined);
    /**
     Bundle description
     */
    get description(): string | undefined;
    /**
     Bundle description
     */
    set description(value: string | undefined);
    /**
     Bundle discount amount
     */
    get discount(): number | undefined;
    /**
     Bundle discount amount
     */
    set discount(value: number | undefined);
    /**
     Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL).
     */
    get condition(): BundleCondition | undefined;
    /**
     Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL).
     */
    set condition(value: BundleCondition | undefined);
    /**
     Bundle price
     */
    get price(): BundlePrice | undefined;
    /**
     Bundle price
     */
    set price(value: BundlePrice | undefined);
    /**
     Items in the bundle.
     */
    get items(): BundleItem[] | undefined;
    /**
     Items in the bundle.
     */
    set items(value: BundleItem[] | undefined);
    /**
     Bundle creation date [default: now]
     */
    get createdAt(): string | undefined;
    /**
     Bundle creation date [default: now]
     */
    set createdAt(value: string | undefined);
    /**
     Bundle creator
     */
    get createdBy(): number | undefined;
    /**
     Bundle creator
     */
    set createdBy(value: number | undefined);
    /**
     Last modified date
     */
    get lastModifiedAt(): string | undefined;
    /**
     Last modified date
     */
    set lastModifiedAt(value: string | undefined);
    /**
     Last modified by
     */
    get lastModifiedBy(): number | undefined;
    /**
     Last modified by
     */
    set lastModifiedBy(value: number | undefined);
}
//# sourceMappingURL=Bundle.d.ts.map