import { Attribute } from './Attribute';
import { AttributeDescription } from './AttributeDescription';
import { AttributeValue } from './AttributeValue';
/**
 The AttributeResult is an entity that gets returned when a search is done on attributes from a Class' perspective.
The AttributeResult has 3 fields,
- attributeDescription: The AttributeDescription Entity
- attribute: The Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on it.
- value: The AttributeValue, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
 */
export declare class AttributeResult {
    /** The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on */
    private _attribute?;
    /** The Attribute Description */
    private _attributeDescription;
    /** The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue. */
    private _value;
    /**
     Creates a new instance of AttributeResult
     */
    constructor(data?: Partial<AttributeResult>);
    /**
     The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on
     */
    get attribute(): Attribute | undefined;
    /**
     The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on
     */
    set attribute(value: Attribute | undefined);
    /**
     The Attribute Description
     */
    get attributeDescription(): AttributeDescription;
    /**
     The Attribute Description
     */
    set attributeDescription(value: AttributeDescription);
    /**
     The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
     */
    get value(): AttributeValue;
    /**
     The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
     */
    set value(value: AttributeValue);
}
//# sourceMappingURL=AttributeResult.d.ts.map