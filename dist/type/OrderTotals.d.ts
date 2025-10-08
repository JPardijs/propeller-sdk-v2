import { OrderDiscountType } from '../enum/OrderDiscountType';
import { OrderTotalTaxPercentage } from './OrderTotalTaxPercentage';
/**
 Object class for OrderTotals
 */
export declare class OrderTotals {
    /** The orderId of this Order */
    private _orderId;
    /** The total of this Order excluding tax */
    private _gross;
    /** The total of this Order including tax */
    private _net;
    /** The total amount of tax for this Order */
    private _tax;
    /** The type of global discount */
    private _discountType;
    /** The discount value, can be absolute or a percentage depending on the discountType */
    private _discountValue;
    /** The totals per tax percentage */
    private _taxPercentages;
    /**
     Creates a new instance of OrderTotals
     */
    constructor(data?: Partial<OrderTotals>);
    /**
     The orderId of this Order
     */
    get orderId(): number;
    /**
     The orderId of this Order
     */
    set orderId(value: number);
    /**
     The total of this Order excluding tax
     */
    get gross(): number;
    /**
     The total of this Order excluding tax
     */
    set gross(value: number);
    /**
     The total of this Order including tax
     */
    get net(): number;
    /**
     The total of this Order including tax
     */
    set net(value: number);
    /**
     The total amount of tax for this Order
     */
    get tax(): number;
    /**
     The total amount of tax for this Order
     */
    set tax(value: number);
    /**
     The type of global discount
     */
    get discountType(): OrderDiscountType;
    /**
     The type of global discount
     */
    set discountType(value: OrderDiscountType);
    /**
     The discount value, can be absolute or a percentage depending on the discountType
     */
    get discountValue(): number;
    /**
     The discount value, can be absolute or a percentage depending on the discountType
     */
    set discountValue(value: number);
    /**
     The totals per tax percentage
     */
    get taxPercentages(): OrderTotalTaxPercentage[];
    /**
     The totals per tax percentage
     */
    set taxPercentages(value: OrderTotalTaxPercentage[]);
}
//# sourceMappingURL=OrderTotals.d.ts.map