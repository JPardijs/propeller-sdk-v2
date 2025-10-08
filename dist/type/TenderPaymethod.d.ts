/**
 Object class for TenderPaymethod
 */
export declare class TenderPaymethod {
    /** Payment method code */
    private _code;
    /** Payment method external code */
    private _externalCode?;
    /** Payment method type */
    private _type?;
    /** Payment method description */
    private _description;
    /** Payment method amount */
    private _amount;
    /** Indicates whether payment method is allowed for the tender user */
    private _allowed;
    /**
     Creates a new instance of TenderPaymethod
     */
    constructor(data?: Partial<TenderPaymethod>);
    /**
     Payment method code
     */
    get code(): string;
    /**
     Payment method code
     */
    set code(value: string);
    /**
     Payment method external code
     */
    get externalCode(): string | undefined;
    /**
     Payment method external code
     */
    set externalCode(value: string | undefined);
    /**
     Payment method type
     */
    get type(): string | undefined;
    /**
     Payment method type
     */
    set type(value: string | undefined);
    /**
     Payment method description
     */
    get description(): string;
    /**
     Payment method description
     */
    set description(value: string);
    /**
     Payment method amount
     */
    get amount(): number;
    /**
     Payment method amount
     */
    set amount(value: number);
    /**
     Indicates whether payment method is allowed for the tender user
     */
    get allowed(): boolean;
    /**
     Indicates whether payment method is allowed for the tender user
     */
    set allowed(value: boolean);
}
//# sourceMappingURL=TenderPaymethod.d.ts.map