/**
 Object class for BulkPrice
 */
export declare class BulkPrice {
    /** Primary identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type. */
    private _value;
    /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
    private _quantityFrom;
    /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
    private _validFrom?;
    /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
    private _validTo?;
    /** Price foreign identifier */
    private _priceId;
    /**
     Creates a new instance of BulkPrice
     */
    constructor(data?: Partial<BulkPrice>);
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
     Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type.
     */
    get value(): number;
    /**
     Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type.
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
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    get validTo(): string | undefined;
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    set validTo(value: string | undefined);
    /**
     Price foreign identifier
     */
    get priceId(): string;
    /**
     Price foreign identifier
     */
    set priceId(value: string);
}
//# sourceMappingURL=BulkPrice.d.ts.map