/**
 Object class for BulkResponseData
 */
export declare class BulkResponseData {
    /** Number of created items */
    private _created;
    /** Number of updated items */
    private _updated;
    /** Total number of created and updated items */
    private _total;
    /**
     Creates a new instance of BulkResponseData
     */
    constructor(data?: Partial<BulkResponseData>);
    /**
     Number of created items
     */
    get created(): number;
    /**
     Number of created items
     */
    set created(value: number);
    /**
     Number of updated items
     */
    get updated(): number;
    /**
     Number of updated items
     */
    set updated(value: number);
    /**
     Total number of created and updated items
     */
    get total(): number;
    /**
     Total number of created and updated items
     */
    set total(value: number);
}
//# sourceMappingURL=BulkResponseData.d.ts.map