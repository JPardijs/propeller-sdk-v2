/**
 Object class for CartTotal
 */
export declare class CartTotal {
    /** Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Excluding  VAT */
    private _subTotal;
    /** Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Including  VAT */
    private _subTotalNet;
    /** Discount percentage that is applied to the order total through one or multiple incentives. */
    private _discountPercentage;
    /** Total payable amount for this cart. Including VAT */
    private _totalNet;
    /** Total payable amount for this cart. Excluding VAT */
    private _totalGross;
    /** Discount that is applied to the order total through one or multiple incentives. Including VAT. */
    private _discountNet;
    /** Discount that is applied to the order total through one or multiple incentives. Excluding VAT. */
    private _discount;
    /**
     Creates a new instance of CartTotal
     */
    constructor(data?: Partial<CartTotal>);
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Excluding  VAT
     */
    get subTotal(): number;
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Excluding  VAT
     */
    set subTotal(value: number);
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Including  VAT
     */
    get subTotalNet(): number;
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Including  VAT
     */
    set subTotalNet(value: number);
    /**
     Discount percentage that is applied to the order total through one or multiple incentives.
     */
    get discountPercentage(): number;
    /**
     Discount percentage that is applied to the order total through one or multiple incentives.
     */
    set discountPercentage(value: number);
    /**
     Total payable amount for this cart. Including VAT
     */
    get totalNet(): number;
    /**
     Total payable amount for this cart. Including VAT
     */
    set totalNet(value: number);
    /**
     Total payable amount for this cart. Excluding VAT
     */
    get totalGross(): number;
    /**
     Total payable amount for this cart. Excluding VAT
     */
    set totalGross(value: number);
    /**
     Discount that is applied to the order total through one or multiple incentives. Including VAT.
     */
    get discountNet(): number;
    /**
     Discount that is applied to the order total through one or multiple incentives. Including VAT.
     */
    set discountNet(value: number);
    /**
     Discount that is applied to the order total through one or multiple incentives. Excluding VAT.
     */
    get discount(): number;
    /**
     Discount that is applied to the order total through one or multiple incentives. Excluding VAT.
     */
    set discount(value: number);
}
//# sourceMappingURL=CartTotal.d.ts.map