import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeIntValue
 */
export declare class AttributeIntValue implements AttributeValue {
    /** Attribute value id */
    private _id;
    /** Attribute int value type */
    private _type;
    /** Attribute integer value */
    private _intValue;
    /**
     Creates a new instance of AttributeIntValue
     */
    constructor(data?: Partial<AttributeIntValue>);
    /**
     Attribute value id
     */
    get id(): string;
    /**
     Attribute value id
     */
    set id(value: string);
    /**
     Attribute int value type
     */
    get type(): AttributeType;
    /**
     Attribute int value type
     */
    set type(value: AttributeType);
    /**
     Attribute integer value
     */
    get intValue(): number;
    /**
     Attribute integer value
     */
    set intValue(value: number);
    /**
     Gets the attribute value (delegates to intValue)
     */
    get value(): any;
    /**
     Sets the attribute value (delegates to intValue)
     */
    set value(val: any);
}
//# sourceMappingURL=AttributeIntValue.d.ts.map