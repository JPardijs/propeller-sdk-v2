/**
 Object class for ClusterProductsActionData
 */
export declare class ClusterProductsActionData {
    /** Output message response [INFO/WARNING/ERROR] */
    private _message;
    /** Success status */
    private _success;
    /** Product key used for lookup */
    private _productId;
    /** Action performed [move] */
    private _action;
    /**
     Creates a new instance of ClusterProductsActionData
     */
    constructor(data?: Partial<ClusterProductsActionData>);
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
     Product key used for lookup
     */
    get productId(): number;
    /**
     Product key used for lookup
     */
    set productId(value: number);
    /**
     Action performed [move]
     */
    get action(): string;
    /**
     Action performed [move]
     */
    set action(value: string);
}
//# sourceMappingURL=ClusterProductsActionData.d.ts.map