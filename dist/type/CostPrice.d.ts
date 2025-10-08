/**
 Object class for CostPrice
 */
export declare class CostPrice {
    /** Primary identifier */
    private _id;
    /** Price foreign identifier */
    private _priceId;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Indicates the minimum quantity threshold needed to qualify for the cost price. */
    private _quantityFrom;
    /** The cost associated to acquire the product. */
    private _value;
    /**
     Creates a new instance of CostPrice
     */
    constructor(data?: Partial<CostPrice>);
    /**
     Primary identifier
     */
    get id(): string;
    /**
     Primary identifier
     */
    set id(value: string);
    /**
     Price foreign identifier
     */
    get priceId(): string;
    /**
     Price foreign identifier
     */
    set priceId(value: string);
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
     Indicates the minimum quantity threshold needed to qualify for the cost price.
     */
    get quantityFrom(): number;
    /**
     Indicates the minimum quantity threshold needed to qualify for the cost price.
     */
    set quantityFrom(value: number);
    /**
     The cost associated to acquire the product.
     */
    get value(): number;
    /**
     The cost associated to acquire the product.
     */
    set value(value: number);
}
//# sourceMappingURL=CostPrice.d.ts.map