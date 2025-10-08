/**
 Object class for ProductOffer
 */
export declare class ProductOffer {
    /** The id of the offer. */
    private _id;
    /** The calculated price for this offer. */
    private _price;
    /** validFrom field */
    private _validFrom;
    /** validTo field */
    private _validTo;
    /** formula field */
    private _formula;
    /**
     Creates a new instance of ProductOffer
     */
    constructor(data?: Partial<ProductOffer>);
    /**
     The id of the offer.
     */
    get id(): string;
    /**
     The id of the offer.
     */
    set id(value: string);
    /**
     The calculated price for this offer.
     */
    get price(): number;
    /**
     The calculated price for this offer.
     */
    set price(value: number);
    /**
     validFrom field
     */
    get validFrom(): string;
    /**
     validFrom field
     */
    set validFrom(value: string);
    /**
     validTo field
     */
    get validTo(): string;
    /**
     validTo field
     */
    set validTo(value: string);
    /**
     formula field
     */
    get formula(): string;
    /**
     formula field
     */
    set formula(value: string);
}
//# sourceMappingURL=ProductOffer.d.ts.map