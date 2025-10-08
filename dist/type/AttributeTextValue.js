"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeTextValue = void 0;
/**
 Object class for AttributeTextValue
 */
class AttributeTextValue {
    /**
     Creates a new instance of AttributeTextValue
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._textValues = data.textValues;
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
     Attribute text value type
     */
    get type() {
        return this._type;
    }
    /**
     Attribute text value type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Attribute textValues per language
     */
    get textValues() {
        return this._textValues;
    }
    /**
     Attribute textValues per language
     */
    set textValues(value) {
        this._textValues = value;
    }
    /**
     Gets the attribute value (delegates to textValues)
     */
    get value() {
        return this._textValues;
    }
    /**
     Sets the attribute value (delegates to textValues)
     */
    set value(val) {
        this._textValues = val;
    }
}
exports.AttributeTextValue = AttributeTextValue;
//# sourceMappingURL=AttributeTextValue.js.map