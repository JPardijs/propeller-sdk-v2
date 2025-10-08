import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeBulkResponse
 */
export declare class AttributeBulkResponse {
    /** ID of the created or updated attribute description */
    private _id?;
    /** Name of the created or updated attribute description */
    private _name;
    /** Success or error message */
    private _message?;
    /** Name of the attribute description the attribute is created for */
    private _key;
    /** The value for this attribute */
    private _value?;
    /** Action performed on the attribute description */
    private _action;
    /** Whether the action was successful or not */
    private _success;
    /** The productId of the attribute value */
    private _productId?;
    /** The categoryId of the attribute value */
    private _categoryId?;
    /** The clusterId of the attribute value */
    private _clusterId?;
    /** The companyId of the attribute value */
    private _companyId?;
    /** The contactId of the attribute value */
    private _contactId?;
    /** The customerId of the attribute value */
    private _customerId?;
    /**
     Creates a new instance of AttributeBulkResponse
     */
    constructor(data?: Partial<AttributeBulkResponse>);
    /**
     ID of the created or updated attribute description
     */
    get id(): string | undefined;
    /**
     ID of the created or updated attribute description
     */
    set id(value: string | undefined);
    /**
     Name of the created or updated attribute description
     */
    get name(): string;
    /**
     Name of the created or updated attribute description
     */
    set name(value: string);
    /**
     Success or error message
     */
    get message(): string | undefined;
    /**
     Success or error message
     */
    set message(value: string | undefined);
    /**
     Name of the attribute description the attribute is created for
     */
    get key(): string;
    /**
     Name of the attribute description the attribute is created for
     */
    set key(value: string);
    /**
     The value for this attribute
     */
    get value(): AttributeValue | undefined;
    /**
     The value for this attribute
     */
    set value(value: AttributeValue | undefined);
    /**
     Action performed on the attribute description
     */
    get action(): AttributeBulkResponse;
    /**
     Action performed on the attribute description
     */
    set action(value: AttributeBulkResponse);
    /**
     Whether the action was successful or not
     */
    get success(): boolean;
    /**
     Whether the action was successful or not
     */
    set success(value: boolean);
    /**
     The productId of the attribute value
     */
    get productId(): number | undefined;
    /**
     The productId of the attribute value
     */
    set productId(value: number | undefined);
    /**
     The categoryId of the attribute value
     */
    get categoryId(): number | undefined;
    /**
     The categoryId of the attribute value
     */
    set categoryId(value: number | undefined);
    /**
     The clusterId of the attribute value
     */
    get clusterId(): number | undefined;
    /**
     The clusterId of the attribute value
     */
    set clusterId(value: number | undefined);
    /**
     The companyId of the attribute value
     */
    get companyId(): number | undefined;
    /**
     The companyId of the attribute value
     */
    set companyId(value: number | undefined);
    /**
     The contactId of the attribute value
     */
    get contactId(): number | undefined;
    /**
     The contactId of the attribute value
     */
    set contactId(value: number | undefined);
    /**
     The customerId of the attribute value
     */
    get customerId(): number | undefined;
    /**
     The customerId of the attribute value
     */
    set customerId(value: number | undefined);
}
//# sourceMappingURL=AttributeBulkResponse.d.ts.map