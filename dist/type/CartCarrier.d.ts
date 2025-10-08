/**
 Object class for CartCarrier
 */
export declare class CartCarrier {
    /** Carrier unique identifier */
    private _id;
    /** Carrier name */
    private _name;
    /** Carrier's logo */
    private _logo?;
    /** Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules */
    private _price;
    /** Carrier's delivery deadline */
    private _deliveryDeadline?;
    /**
     Creates a new instance of CartCarrier
     */
    constructor(data?: Partial<CartCarrier>);
    /**
     Carrier unique identifier
     */
    get id(): number;
    /**
     Carrier unique identifier
     */
    set id(value: number);
    /**
     Carrier name
     */
    get name(): string;
    /**
     Carrier name
     */
    set name(value: string);
    /**
     Carrier's logo
     */
    get logo(): string | undefined;
    /**
     Carrier's logo
     */
    set logo(value: string | undefined);
    /**
     Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    get price(): number;
    /**
     Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    set price(value: number);
    /**
     Carrier's delivery deadline
     */
    get deliveryDeadline(): string | undefined;
    /**
     Carrier's delivery deadline
     */
    set deliveryDeadline(value: string | undefined);
}
//# sourceMappingURL=CartCarrier.d.ts.map