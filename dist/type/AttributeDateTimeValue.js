"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeDateTimeValue = void 0;
/**
 Object class for AttributeDateTimeValue
 */
class AttributeDateTimeValue {
    /**
     Creates a new instance of AttributeDateTimeValue
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._dateTimeValue = data.dateTimeValue;
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
     Attribute datetime value type
     */
    get type() {
        return this._type;
    }
    /**
     Attribute datetime value type
     */
    set type(value) {
        this._type = value;
    }
    /**
     dateTimeValue field
     */
    get dateTimeValue() {
        return this._dateTimeValue;
    }
    /**
     dateTimeValue field
     */
    set dateTimeValue(value) {
        this._dateTimeValue = value;
    }
    /**
     Gets the attribute value (delegates to dateTimeValue)
     */
    get value() {
        return this._dateTimeValue;
    }
    /**
     Sets the attribute value (delegates to dateTimeValue)
     */
    set value(val) {
        this._dateTimeValue = val;
    }
}
exports.AttributeDateTimeValue = AttributeDateTimeValue;
//# sourceMappingURL=AttributeDateTimeValue.js.map