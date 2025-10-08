import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeColorValue
 */
export declare class AttributeColorValue implements AttributeValue {
    /** Attribute value id */
    private _id;
    /** Attribute color value type */
    private _type;
    /** colorValue field */
    private _colorValue?;
    /**
     Creates a new instance of AttributeColorValue
     */
    constructor(data?: Partial<AttributeColorValue>);
    /**
     Attribute value id
     */
    get id(): string;
    /**
     Attribute value id
     */
    set id(value: string);
    /**
     Attribute color value type
     */
    get type(): AttributeType;
    /**
     Attribute color value type
     */
    set type(value: AttributeType);
    /**
     colorValue field
     */
    get colorValue(): string | undefined;
    /**
     colorValue field
     */
    set colorValue(value: string | undefined);
    /**
     Gets the attribute value (delegates to colorValue)
     */
    get value(): any;
    /**
     Sets the attribute value (delegates to colorValue)
     */
    set value(val: any);
}
//# sourceMappingURL=AttributeColorValue.d.ts.map