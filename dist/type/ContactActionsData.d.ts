/**
 Object class for ContactActionsData
 */
export declare class ContactActionsData {
    /** Output message response [INFO/WARNING/ERROR] */
    private _message;
    /** Success status */
    private _success;
    /** Company ID the action was performed to */
    private _companyId;
    /**
     Creates a new instance of ContactActionsData
     */
    constructor(data?: Partial<ContactActionsData>);
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
     Company ID the action was performed to
     */
    get companyId(): number;
    /**
     Company ID the action was performed to
     */
    set companyId(value: number);
}
//# sourceMappingURL=ContactActionsData.d.ts.map