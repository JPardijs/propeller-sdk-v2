import { DiscountType } from '../enum/DiscountType';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartIncentiveParams
 */
export declare class CartIncentiveParams {
    /** Minimum quantity of items to be affected by the incentive */
    private _quantity?;
    /** Incentive price */
    private _price?;
    /** Product identifier */
    private _productId?;
    /** Discount value */
    private _discount?;
    /** Discount type */
    private _discountType?;
    /** Value points amount */
    private _valuePoints?;
    /** Repeat incentive */
    private _repeat?;
    /** Action code */
    private _actionCode?;
    /**
     Creates a new instance of CartIncentiveParams
     */
    constructor(data?: Partial<CartIncentiveParams>);
    /**
     Minimum quantity of items to be affected by the incentive
     */
    get quantity(): number | undefined;
    /**
     Minimum quantity of items to be affected by the incentive
     */
    set quantity(value: number | undefined);
    /**
     Incentive price
     */
    get price(): number | undefined;
    /**
     Incentive price
     */
    set price(value: number | undefined);
    /**
     Product identifier
     */
    get productId(): number | undefined;
    /**
     Product identifier
     */
    set productId(value: number | undefined);
    /**
     Discount value
     */
    get discount(): number | undefined;
    /**
     Discount value
     */
    set discount(value: number | undefined);
    /**
     Discount type
     */
    get discountType(): DiscountType | undefined;
    /**
     Discount type
     */
    set discountType(value: DiscountType | undefined);
    /**
     Value points amount
     */
    get valuePoints(): number | undefined;
    /**
     Value points amount
     */
    set valuePoints(value: number | undefined);
    /**
     Repeat incentive
     */
    get repeat(): YesNo | undefined;
    /**
     Repeat incentive
     */
    set repeat(value: YesNo | undefined);
    /**
     Action code
     */
    get actionCode(): string | undefined;
    /**
     Action code
     */
    set actionCode(value: string | undefined);
}
//# sourceMappingURL=CartIncentiveParams.d.ts.map