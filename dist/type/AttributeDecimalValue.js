"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeDecimalValue = void 0;
/**
 Object class for AttributeDecimalValue
 */
class AttributeDecimalValue {
    /**
     Creates a new instance of AttributeDecimalValue
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._decimalValue = data.decimalValue;
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
     Attribute decimal value type
     */
    get type() {
        return this._type;
    }
    /**
     Attribute decimal value type
     */
    set type(value) {
        this._type = value;
    }
    /**
     decimalValue field
     */
    get decimalValue() {
        return this._decimalValue;
    }
    /**
     decimalValue field
     */
    set decimalValue(value) {
        this._decimalValue = value;
    }
    /**
     Gets the attribute value (delegates to decimalValue)
     */
    get value() {
        return this._decimalValue;
    }
    /**
     Sets the attribute value (delegates to decimalValue)
     */
    set value(val) {
        this._decimalValue = val;
    }
}
exports.AttributeDecimalValue = AttributeDecimalValue;
//# sourceMappingURL=AttributeDecimalValue.js.map