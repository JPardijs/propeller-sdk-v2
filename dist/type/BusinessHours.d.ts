/**
 Object class for BusinessHours
 */
export declare class BusinessHours {
    /** dayOfWeek field */
    private _dayOfWeek;
    /** openingTime field */
    private _openingTime?;
    /** closingTime field */
    private _closingTime?;
    /** lunchBeakStartTime field */
    private _lunchBeakStartTime?;
    /** lunchBeakEndTime field */
    private _lunchBeakEndTime?;
    /**
     Creates a new instance of BusinessHours
     */
    constructor(data?: Partial<BusinessHours>);
    /**
     dayOfWeek field
     */
    get dayOfWeek(): number;
    /**
     dayOfWeek field
     */
    set dayOfWeek(value: number);
    /**
     openingTime field
     */
    get openingTime(): string | undefined;
    /**
     openingTime field
     */
    set openingTime(value: string | undefined);
    /**
     closingTime field
     */
    get closingTime(): string | undefined;
    /**
     closingTime field
     */
    set closingTime(value: string | undefined);
    /**
     lunchBeakStartTime field
     */
    get lunchBeakStartTime(): string | undefined;
    /**
     lunchBeakStartTime field
     */
    set lunchBeakStartTime(value: string | undefined);
    /**
     lunchBeakEndTime field
     */
    get lunchBeakEndTime(): string | undefined;
    /**
     lunchBeakEndTime field
     */
    set lunchBeakEndTime(value: string | undefined);
}
//# sourceMappingURL=BusinessHours.d.ts.map