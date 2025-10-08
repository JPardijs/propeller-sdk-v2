import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
import { LocalizedStringArray } from './LocalizedStringArray';
/**
 Object class for AttributeTextValue
 */
export declare class AttributeTextValue implements AttributeValue {
    /** Attribute value id */
    private _id;
    /** Attribute text value type */
    private _type;
    /** Attribute textValues per language */
    private _textValues;
    /**
     Creates a new instance of AttributeTextValue
     */
    constructor(data?: Partial<AttributeTextValue>);
    /**
     Attribute value id
     */
    get id(): string;
    /**
     Attribute value id
     */
    set id(value: string);
    /**
     Attribute text value type
     */
    get type(): AttributeType;
    /**
     Attribute text value type
     */
    set type(value: AttributeType);
    /**
     Attribute textValues per language
     */
    get textValues(): LocalizedStringArray[];
    /**
     Attribute textValues per language
     */
    set textValues(value: LocalizedStringArray[]);
    /**
     Gets the attribute value (delegates to textValues)
     */
    get value(): any;
    /**
     Sets the attribute value (delegates to textValues)
     */
    set value(val: any);
}
//# sourceMappingURL=AttributeTextValue.d.ts.map