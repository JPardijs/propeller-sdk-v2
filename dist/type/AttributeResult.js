"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeResult = void 0;
/**
 The AttributeResult is an entity that gets returned when a search is done on attributes from a Class' perspective.
The AttributeResult has 3 fields,
- attributeDescription: The AttributeDescription Entity
- attribute: The Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on it.
- value: The AttributeValue, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
 */
class AttributeResult {
    /**
     Creates a new instance of AttributeResult
     */
    constructor(data = {}) {
        this._attribute = data.attribute;
        this._attributeDescription = data.attributeDescription;
        this._value = data.value;
    }
    /**
     The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on
     */
    get attribute() {
        return this._attribute;
    }
    /**
     The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on
     */
    set attribute(value) {
        this._attribute = value;
    }
    /**
     The Attribute Description
     */
    get attributeDescription() {
        return this._attributeDescription;
    }
    /**
     The Attribute Description
     */
    set attributeDescription(value) {
        this._attributeDescription = value;
    }
    /**
     The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
     */
    get value() {
        return this._value;
    }
    /**
     The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
     */
    set value(value) {
        this._value = value;
    }
}
exports.AttributeResult = AttributeResult;
//# sourceMappingURL=AttributeResult.js.map