/**
 Multi-factor authentication details for the user
 */
export declare class EnrolledFactor {
    /** The unique identifier for the factor */
    private _factorId;
    /** The phoneNumber used for the factor */
    private _phoneNumber;
    /**
     Creates a new instance of EnrolledFactor
     */
    constructor(data?: Partial<EnrolledFactor>);
    /**
     The unique identifier for the factor
     */
    get factorId(): string;
    /**
     The unique identifier for the factor
     */
    set factorId(value: string);
    /**
     The phoneNumber used for the factor
     */
    get phoneNumber(): string;
    /**
     The phoneNumber used for the factor
     */
    set phoneNumber(value: string);
}
//# sourceMappingURL=EnrolledFactor.d.ts.map