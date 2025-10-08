/**
 Object class for BundlePrice
 */
export declare class BundlePrice {
    /** Net price of the bundle after discounts applied */
    private _net?;
    /** Gross price of the bundle after discounts applied */
    private _gross?;
    /** Original net price of the bundle before discounts applied */
    private _originalNet?;
    /** Original gross price of the bundle before discounts applied */
    private _originalGross?;
    /**
     Creates a new instance of BundlePrice
     */
    constructor(data?: Partial<BundlePrice>);
    /**
     Net price of the bundle after discounts applied
     */
    get net(): number | undefined;
    /**
     Net price of the bundle after discounts applied
     */
    set net(value: number | undefined);
    /**
     Gross price of the bundle after discounts applied
     */
    get gross(): number | undefined;
    /**
     Gross price of the bundle after discounts applied
     */
    set gross(value: number | undefined);
    /**
     Original net price of the bundle before discounts applied
     */
    get originalNet(): number | undefined;
    /**
     Original net price of the bundle before discounts applied
     */
    set originalNet(value: number | undefined);
    /**
     Original gross price of the bundle before discounts applied
     */
    get originalGross(): number | undefined;
    /**
     Original gross price of the bundle before discounts applied
     */
    set originalGross(value: number | undefined);
}
//# sourceMappingURL=BundlePrice.d.ts.map