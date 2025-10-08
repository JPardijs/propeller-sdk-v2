"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeEnumValue = void 0;
/**
 Object class for AttributeEnumValue
 */
class AttributeEnumValue {
    /**
     Creates a new instance of AttributeEnumValue
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._enumValues = data.enumValues;
    }
    /**
     Attribute value id
     */
    get id() {
        return this._id;
    }
    /**
     Attribute value id
     */
    set id(value) {
        this._id = value;
    }
    /**
     Attribute enum value type
     */
    get type() {
        return this._type;
    }
    /**
     Attribute enum value type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Attribute enum values
     */
    get enumValues() {
        return this._enumValues;
    }
    /**
     Attribute enum values
     */
    set enumValues(value) {
        this._enumValues = value;
    }
    /**
     Gets the attribute value (delegates to enumValues)
     */
    get value() {
        return this._enumValues;
    }
    /**
     Sets the attribute value (delegates to enumValues)
     */
    set value(val) {
        this._enumValues = val;
    }
}
exports.AttributeEnumValue = AttributeEnumValue;
//# sourceMappingURL=AttributeEnumValue.js.map