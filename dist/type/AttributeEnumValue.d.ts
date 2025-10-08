import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeEnumValue
 */
export declare class AttributeEnumValue implements AttributeValue {
    /** Attribute value id */
    private _id;
    /** Attribute enum value type */
    private _type;
    /** Attribute enum values */
    private _enumValues;
    /**
     Creates a new instance of AttributeEnumValue
     */
    constructor(data?: Partial<AttributeEnumValue>);
    /**
     Attribute value id
     */
    get id(): string;
    /**
     Attribute value id
     */
    set id(value: string);
    /**
     Attribute enum value type
     */
    get type(): AttributeType;
    /**
     Attribute enum value type
     */
    set type(value: AttributeType);
    /**
     Attribute enum values
     */
    get enumValues(): string[];
    /**
     Attribute enum values
     */
    set enumValues(value: string[]);
    /**
     Gets the attribute value (delegates to enumValues)
     */
    get value(): any;
    /**
     Sets the attribute value (delegates to enumValues)
     */
    set value(val: any);
}
//# sourceMappingURL=AttributeEnumValue.d.ts.map