"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeIntValue = void 0;
/**
 Object class for AttributeIntValue
 */
class AttributeIntValue {
    /**
     Creates a new instance of AttributeIntValue
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._intValue = data.intValue;
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
     Attribute int value type
     */
    get type() {
        return this._type;
    }
    /**
     Attribute int value type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Attribute integer value
     */
    get intValue() {
        return this._intValue;
    }
    /**
     Attribute integer value
     */
    set intValue(value) {
        this._intValue = value;
    }
    /**
     Gets the attribute value (delegates to intValue)
     */
    get value() {
        return this._intValue;
    }
    /**
     Sets the attribute value (delegates to intValue)
     */
    set value(val) {
        this._intValue = val;
    }
}
exports.AttributeIntValue = AttributeIntValue;
//# sourceMappingURL=AttributeIntValue.js.map