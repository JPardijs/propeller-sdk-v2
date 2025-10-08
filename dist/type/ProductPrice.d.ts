import { PriceElementType } from '../enum/PriceElementType';
import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { IDiscount } from './IDiscount';
/**
 Object class for ProductPrice
 */
export declare class ProductPrice {
    /** productId field */
    private _productId;
    /** type field */
    private _type;
    /** discountType field */
    private _discountType;
    /** list field */
    private _list?;
    /** cost field */
    private _cost?;
    /** net field */
    private _net?;
    /** gross field */
    private _gross?;
    /** discount field */
    private _discount?;
    /** taxCode field */
    private _taxCode?;
    /** quantity field */
    private _quantity;
    /**
     Creates a new instance of ProductPrice
     */
    constructor(data?: Partial<ProductPrice>);
    /**
     productId field
     */
    get productId(): number;
    /**
     productId field
     */
    set productId(value: number);
    /**
     type field
     */
    get type(): PriceElementType;
    /**
     type field
     */
    set type(value: PriceElementType);
    /**
     discountType field
     */
    get discountType(): PriceDiscountType;
    /**
     discountType field
     */
    set discountType(value: PriceDiscountType);
    /**
     list field
     */
    get list(): number | undefined;
    /**
     list field
     */
    set list(value: number | undefined);
    /**
     cost field
     */
    get cost(): number | undefined;
    /**
     cost field
     */
    set cost(value: number | undefined);
    /**
     net field
     */
    get net(): number | undefined;
    /**
     net field
     */
    set net(value: number | undefined);
    /**
     gross field
     */
    get gross(): number | undefined;
    /**
     gross field
     */
    set gross(value: number | undefined);
    /**
     discount field
     */
    get discount(): IDiscount | undefined;
    /**
     discount field
     */
    set discount(value: IDiscount | undefined);
    /**
     taxCode field
     */
    get taxCode(): Taxcode | undefined;
    /**
     taxCode field
     */
    set taxCode(value: Taxcode | undefined);
    /**
     quantity field
     */
    get quantity(): number;
    /**
     quantity field
     */
    set quantity(value: number);
}
//# sourceMappingURL=ProductPrice.d.ts.map