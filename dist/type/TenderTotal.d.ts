import { OrderDiscountType } from '../enum/OrderDiscountType';
/**
 Object class for TenderTotal
 */
export declare class TenderTotal {
    /** The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding */
    private _subTotalGross;
    /** The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including */
    private _subTotalNet;
    /** Discount value that is applied to the tender/order total through one or multiple incentives */
    private _discount?;
    /** Discount percentage that is applied to the tender/order total through one or multiple incentives */
    private _discountPercentage?;
    /** Discount type */
    private _discountType?;
    /** The total payable amount for this tender/order. VAT including */
    private _totalNet;
    /** The total payable amount for this tender/order. VAT excluding */
    private _totalGross;
    /** Discount that is applied to the tender/order total through one or multiple incentives. VAT including */
    private _discountNet;
    /** Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding */
    private _discountGross;
    /** Total amount of tax that applies to this tender/order */
    private _totalTax;
    /**
     Creates a new instance of TenderTotal
     */
    constructor(data?: Partial<TenderTotal>);
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding
     */
    get subTotalGross(): number;
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding
     */
    set subTotalGross(value: number);
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including
     */
    get subTotalNet(): number;
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including
     */
    set subTotalNet(value: number);
    /**
     Discount value that is applied to the tender/order total through one or multiple incentives
     */
    get discount(): number | undefined;
    /**
     Discount value that is applied to the tender/order total through one or multiple incentives
     */
    set discount(value: number | undefined);
    /**
     Discount percentage that is applied to the tender/order total through one or multiple incentives
     */
    get discountPercentage(): number | undefined;
    /**
     Discount percentage that is applied to the tender/order total through one or multiple incentives
     */
    set discountPercentage(value: number | undefined);
    /**
     Discount type
     */
    get discountType(): OrderDiscountType | undefined;
    /**
     Discount type
     */
    set discountType(value: OrderDiscountType | undefined);
    /**
     The total payable amount for this tender/order. VAT including
     */
    get totalNet(): number;
    /**
     The total payable amount for this tender/order. VAT including
     */
    set totalNet(value: number);
    /**
     The total payable amount for this tender/order. VAT excluding
     */
    get totalGross(): number;
    /**
     The total payable amount for this tender/order. VAT excluding
     */
    set totalGross(value: number);
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT including
     */
    get discountNet(): number;
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT including
     */
    set discountNet(value: number);
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding
     */
    get discountGross(): number;
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding
     */
    set discountGross(value: number);
    /**
     Total amount of tax that applies to this tender/order
     */
    get totalTax(): number;
    /**
     Total amount of tax that applies to this tender/order
     */
    set totalTax(value: number);
}
//# sourceMappingURL=TenderTotal.d.ts.map