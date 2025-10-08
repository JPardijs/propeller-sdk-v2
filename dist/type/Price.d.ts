import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { PriceDisplay } from '../enum/PriceDisplay';
import { CostPrice } from './CostPrice';
/**
 Object class for Price
 */
export declare class Price {
    /** Primary identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Product Id */
    private _productId;
    /** The quantity of items that the listed price will purchase. */
    private _per;
    /** The default sales price. */
    private _list;
    /** costPrices field */
    private _costPrices?;
    /** The manufacturer's or supplier's recommended retail price (RRP) for the product. */
    private _suggested?;
    /** The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies. */
    private _store?;
    /** The method used to apply discounts for bulk prices / volume discounts. */
    private _bulkPriceDiscountType;
    /** Default tax code */
    private _defaultTaxCode;
    /** Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'. */
    private _display?;
    /** cost field */
    /** @deprecated Deprecated in favor of using costPrices (quantity 1) */
    private _cost?;
    /**
     Creates a new instance of Price
     */
    constructor(data?: Partial<Price>);
    /**
     Primary identifier
     */
    get id(): string;
    /**
     Primary identifier
     */
    set id(value: string);
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
     Product Id
     */
    get productId(): number;
    /**
     Product Id
     */
    set productId(value: number);
    /**
     The quantity of items that the listed price will purchase.
     */
    get per(): number;
    /**
     The quantity of items that the listed price will purchase.
     */
    set per(value: number);
    /**
     The default sales price.
     */
    get list(): number;
    /**
     The default sales price.
     */
    set list(value: number);
    /**
     costPrices field
     */
    get costPrices(): CostPrice[] | undefined;
    /**
     costPrices field
     */
    set costPrices(value: CostPrice[] | undefined);
    /**
     The manufacturer's or supplier's recommended retail price (RRP) for the product.
     */
    get suggested(): number | undefined;
    /**
     The manufacturer's or supplier's recommended retail price (RRP) for the product.
     */
    set suggested(value: number | undefined);
    /**
     The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies.
     */
    get store(): number | undefined;
    /**
     The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies.
     */
    set store(value: number | undefined);
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    get bulkPriceDiscountType(): PriceDiscountType;
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    set bulkPriceDiscountType(value: PriceDiscountType);
    /**
     Default tax code
     */
    get defaultTaxCode(): Taxcode;
    /**
     Default tax code
     */
    set defaultTaxCode(value: Taxcode);
    /**
     Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'.
     */
    get display(): PriceDisplay | undefined;
    /**
     Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'.
     */
    set display(value: PriceDisplay | undefined);
    /**
     cost field
     */
    get cost(): number | undefined;
    /**
     cost field
     */
    set cost(value: number | undefined);
}
//# sourceMappingURL=Price.d.ts.map