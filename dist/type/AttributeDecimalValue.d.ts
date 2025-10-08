import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeDecimalValue
 */
export declare class AttributeDecimalValue implements AttributeValue {
    /** Attribute value id */
    private _id;
    /** Attribute decimal value type */
    private _type;
    /** decimalValue field */
    private _decimalValue;
    /**
     Creates a new instance of AttributeDecimalValue
     */
    constructor(data?: Partial<AttributeDecimalValue>);
    /**
     Attribute value id
     */
    get id(): string;
    /**
     Attribute value id
     */
    set id(value: string);
    /**
     Attribute decimal value type
     */
    get type(): AttributeType;
    /**
     Attribute decimal value type
     */
    set type(value: AttributeType);
    /**
     decimalValue field
     */
    get decimalValue(): number;
    /**
     decimalValue field
     */
    set decimalValue(value: number);
    /**
     Gets the attribute value (delegates to decimalValue)
     */
    get value(): any;
    /**
     Sets the attribute value (delegates to decimalValue)
     */
    set value(val: any);
}
//# sourceMappingURL=AttributeDecimalValue.d.ts.map