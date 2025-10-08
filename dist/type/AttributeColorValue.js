"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeColorValue = void 0;
/**
 Object class for AttributeColorValue
 */
class AttributeColorValue {
    /**
     Creates a new instance of AttributeColorValue
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._colorValue = data.colorValue;
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
     Attribute color value type
     */
    get type() {
        return this._type;
    }
    /**
     Attribute color value type
     */
    set type(value) {
        this._type = value;
    }
    /**
     colorValue field
     */
    get colorValue() {
        return this._colorValue;
    }
    /**
     colorValue field
     */
    set colorValue(value) {
        this._colorValue = value;
    }
    /**
     Gets the attribute value (delegates to colorValue)
     */
    get value() {
        return this._colorValue;
    }
    /**
     Sets the attribute value (delegates to colorValue)
     */
    set value(val) {
        this._colorValue = val;
    }
}
exports.AttributeColorValue = AttributeColorValue;
//# sourceMappingURL=AttributeColorValue.js.map