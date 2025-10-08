/**
 Carrier information for tender shipping options
 */
export declare class TenderCarrier {
    /** Unique identifier for the carrier */
    private _id;
    /** Carrier name */
    private _name;
    /** Carrier description */
    private _description?;
    /** Carrier's logo */
    private _logo?;
    /** Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules */
    private _amount?;
    /** Price for this carrier service */
    private _price;
    /** Expected delivery deadline for this carrier */
    private _deliveryDeadline?;
    /**
     Creates a new instance of TenderCarrier
     */
    constructor(data?: Partial<TenderCarrier>);
    /**
     Carrier name
     */
    get name(): string;
    /**
     Carrier name
     */
    set name(value: string);
    /**
     Carrier description
     */
    get description(): string | undefined;
    /**
     Carrier description
     */
    set description(value: string | undefined);
    /**
     Carrier's logo
     */
    get logo(): string | undefined;
    /**
     Carrier's logo
     */
    set logo(value: string | undefined);
    /**
     Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    get amount(): number | undefined;
    /**
     Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    set amount(value: number | undefined);
    /**
     Unique identifier for the carrier
     */
    get id(): string;
    /**
     Unique identifier for the carrier
     */
    set id(value: string);
    /**
     Price for this carrier service
     */
    get price(): number;
    /**
     Price for this carrier service
     */
    set price(value: number);
    /**
     Expected delivery deadline for this carrier
     */
    get deliveryDeadline(): string | undefined;
    /**
     Expected delivery deadline for this carrier
     */
    set deliveryDeadline(value: string | undefined);
}
//# sourceMappingURL=TenderCarrier.d.ts.map