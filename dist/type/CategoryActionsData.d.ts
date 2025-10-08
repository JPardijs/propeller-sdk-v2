/**
 Object class for CategoryActionsData
 */
export declare class CategoryActionsData {
    /** Output message response [INFO/WARNING/ERROR] */
    private _message;
    /** Success status */
    private _success;
    /** Product ID the action was performed to */
    private _productId?;
    /** Cluster ID the action was performed to */
    private _clusterId?;
    /**
     Creates a new instance of CategoryActionsData
     */
    constructor(data?: Partial<CategoryActionsData>);
    /**
     Output message response [INFO/WARNING/ERROR]
     */
    get message(): string;
    /**
     Output message response [INFO/WARNING/ERROR]
     */
    set message(value: string);
    /**
     Success status
     */
    get success(): boolean;
    /**
     Success status
     */
    set success(value: boolean);
    /**
     Product ID the action was performed to
     */
    get productId(): number | undefined;
    /**
     Product ID the action was performed to
     */
    set productId(value: number | undefined);
    /**
     Cluster ID the action was performed to
     */
    get clusterId(): number | undefined;
    /**
     Cluster ID the action was performed to
     */
    set clusterId(value: number | undefined);
}
//# sourceMappingURL=CategoryActionsData.d.ts.map