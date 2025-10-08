/**
 Object class for CartTaxLevel
 */
export declare class CartTaxLevel {
    /** Tax level's percentage */
    private _taxPercentage;
    /** Total tax added for to the cart for the tax level's tax code */
    private _price;
    /** Total discount for the tax level's code */
    private _discount?;
    /**
     Creates a new instance of CartTaxLevel
     */
    constructor(data?: Partial<CartTaxLevel>);
    /**
     Tax level's percentage
     */
    get taxPercentage(): number;
    /**
     Tax level's percentage
     */
    set taxPercentage(value: number);
    /**
     Total tax added for to the cart for the tax level's tax code
     */
    get price(): number;
    /**
     Total tax added for to the cart for the tax level's tax code
     */
    set price(value: number);
    /**
     Total discount for the tax level's code
     */
    get discount(): number | undefined;
    /**
     Total discount for the tax level's code
     */
    set discount(value: number | undefined);
}
//# sourceMappingURL=CartTaxLevel.d.ts.map