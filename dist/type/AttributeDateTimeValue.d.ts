import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeDateTimeValue
 */
export declare class AttributeDateTimeValue implements AttributeValue {
    /** Attribute value id */
    private _id;
    /** Attribute datetime value type */
    private _type;
    /** dateTimeValue field */
    private _dateTimeValue?;
    /**
     Creates a new instance of AttributeDateTimeValue
     */
    constructor(data?: Partial<AttributeDateTimeValue>);
    /**
     Attribute value id
     */
    get id(): string;
    /**
     Attribute value id
     */
    set id(value: string);
    /**
     Attribute datetime value type
     */
    get type(): AttributeType;
    /**
     Attribute datetime value type
     */
    set type(value: AttributeType);
    /**
     dateTimeValue field
     */
    get dateTimeValue(): string | undefined;
    /**
     dateTimeValue field
     */
    set dateTimeValue(value: string | undefined);
    /**
     Gets the attribute value (delegates to dateTimeValue)
     */
    get value(): any;
    /**
     Sets the attribute value (delegates to dateTimeValue)
     */
    set value(val: any);
}
//# sourceMappingURL=AttributeDateTimeValue.d.ts.map