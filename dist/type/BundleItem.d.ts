import { YesNo } from '../enum/YesNo';
import { BundlePrice } from './BundlePrice';
import { Product } from './Product';
/**
 Object class for BundleItem
 */
export declare class BundleItem {
    /** The bundles primary product identifier */
    private _productId;
    /** Bundle price */
    private _price?;
    /** Indicates whether the product is leader for this bundle. */
    private _isLeader?;
    /** Bundle creation date */
    private _createdAt?;
    /** Bundle creator */
    private _createdBy?;
    /** Last modified date */
    private _lastModifiedAt?;
    /** Last modified by */
    private _lastModifiedBy?;
    /** product field */
    private _product;
    /**
     Creates a new instance of BundleItem
     */
    constructor(data?: Partial<BundleItem>);
    /**
     The bundles primary product identifier
     */
    get productId(): number;
    /**
     The bundles primary product identifier
     */
    set productId(value: number);
    /**
     Bundle price
     */
    get price(): BundlePrice | undefined;
    /**
     Bundle price
     */
    set price(value: BundlePrice | undefined);
    /**
     Indicates whether the product is leader for this bundle.
     */
    get isLeader(): YesNo | undefined;
    /**
     Indicates whether the product is leader for this bundle.
     */
    set isLeader(value: YesNo | undefined);
    /**
     Bundle creation date
     */
    get createdAt(): string | undefined;
    /**
     Bundle creation date
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
    /**
     product field
     */
    get product(): Product;
    /**
     product field
     */
    set product(value: Product);
}
//# sourceMappingURL=BundleItem.d.ts.map