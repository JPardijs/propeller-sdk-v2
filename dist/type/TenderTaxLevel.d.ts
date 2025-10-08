/**
 Object class for TenderTaxLevel
 */
export declare class TenderTaxLevel {
    /** percentage field */
    private _percentage;
    /** total field */
    private _total;
    /** tax field */
    private _tax?;
    /** discount field */
    private _discount?;
    /**
     Creates a new instance of TenderTaxLevel
     */
    constructor(data?: Partial<TenderTaxLevel>);
    /**
     percentage field
     */
    get percentage(): number;
    /**
     percentage field
     */
    set percentage(value: number);
    /**
     total field
     */
    get total(): number;
    /**
     total field
     */
    set total(value: number);
    /**
     tax field
     */
    get tax(): number | undefined;
    /**
     tax field
     */
    set tax(value: number | undefined);
    /**
     discount field
     */
    get discount(): number | undefined;
    /**
     discount field
     */
    set discount(value: number | undefined);
}
//# sourceMappingURL=TenderTaxLevel.d.ts.map