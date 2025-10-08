/**
 Object class for TenderResponseData
 */
export declare class TenderResponseData {
    /** Response data */
    private _data;
    /** Error */
    private _error;
    /** Response message(s) */
    private _messages?;
    /**
     Creates a new instance of TenderResponseData
     */
    constructor(data?: Partial<TenderResponseData>);
    /**
     Response data
     */
    get data(): any;
    /**
     Response data
     */
    set data(value: any);
    /**
     Error
     */
    get error(): boolean;
    /**
     Error
     */
    set error(value: boolean);
    /**
     Response message(s)
     */
    get messages(): string[] | undefined;
    /**
     Response message(s)
     */
    set messages(value: string[] | undefined);
}
//# sourceMappingURL=TenderResponseData.d.ts.map