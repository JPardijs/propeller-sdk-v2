import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Category } from './Category';
import { Pricesheet } from './Pricesheet';
import { Product } from './Product';
/**
 Object class for Discount
 */
export declare class Discount {
    /** Category Id */
    private _categoryId?;
    /** category field */
    private _category?;
    /** Primary identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Discount value, either percentage or fixed amount */
    private _value;
    /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
    private _quantityFrom;
    /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
    private _validFrom?;
    /** End date of the bulk pricing offer. Must be a valid ISO 8601 date string. */
    private _validTo?;
    /** pricesheet foreign identifier */
    private _pricesheetId;
    /** Product Id */
    private _productId?;
    /** Price group */
    private _priceGroup?;
    /** The method used to apply discounts for bulk prices / volume discounts. */
    private _discountType;
    /** AUTH: Role=[pricing.OWNER] */
    private _pricesheet?;
    /** product field */
    private _product?;
    /**
     Creates a new instance of Discount
     */
    constructor(data?: Partial<Discount>);
    /**
     Category Id
     */
    get categoryId(): number | undefined;
    /**
     Category Id
     */
    set categoryId(value: number | undefined);
    /**
     category field
     */
    get category(): Category | undefined;
    /**
     category field
     */
    set category(value: Category | undefined);
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
     Discount value, either percentage or fixed amount
     */
    get value(): number;
    /**
     Discount value, either percentage or fixed amount
     */
    set value(value: number);
    /**
     Indicates the minimum quantity threshold needed to qualify for the bulk price.
     */
    get quantityFrom(): number;
    /**
     Indicates the minimum quantity threshold needed to qualify for the bulk price.
     */
    set quantityFrom(value: number);
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    get validFrom(): string | undefined;
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    set validFrom(value: string | undefined);
    /**
     End date of the bulk pricing offer. Must be a valid ISO 8601 date string.
     */
    get validTo(): string | undefined;
    /**
     End date of the bulk pricing offer. Must be a valid ISO 8601 date string.
     */
    set validTo(value: string | undefined);
    /**
     pricesheet foreign identifier
     */
    get pricesheetId(): string;
    /**
     pricesheet foreign identifier
     */
    set pricesheetId(value: string);
    /**
     Product Id
     */
    get productId(): number | undefined;
    /**
     Product Id
     */
    set productId(value: number | undefined);
    /**
     Price group
     */
    get priceGroup(): string | undefined;
    /**
     Price group
     */
    set priceGroup(value: string | undefined);
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    get discountType(): PriceDiscountType;
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    set discountType(value: PriceDiscountType);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheet(): Pricesheet | undefined;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheet(value: Pricesheet | undefined);
    /**
     product field
     */
    get product(): Product | undefined;
    /**
     product field
     */
    set product(value: Product | undefined);
}
//# sourceMappingURL=Discount.d.ts.map