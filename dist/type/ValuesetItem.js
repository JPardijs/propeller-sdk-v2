"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValuesetItem = void 0;
/**
 Object class for ValuesetItem
 */
class ValuesetItem {
    /**
     Creates a new instance of ValuesetItem
     */
    constructor(data = {}) {
        this._id = data.id;
        this._valuesetId = data.valuesetId;
        this._value = data.value;
        this._descriptions = data.descriptions;
        this._extra = data.extra;
    }
    /**
     Valueset item primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Valueset item primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Valueset foreign identifier
     */
    get valuesetId() {
        return this._valuesetId;
    }
    /**
     Valueset foreign identifier
     */
    set valuesetId(value) {
        this._valuesetId = value;
    }
    /**
     Valueset item value
     */
    get value() {
        return this._value;
    }
    /**
     Valueset item value
     */
    set value(value) {
        this._value = value;
    }
    /**
     descriptions field
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     descriptions field
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     Valueset item extra value
     */
    get extra() {
        return this._extra;
    }
    /**
     Valueset item extra value
     */
    set extra(value) {
        this._extra = value;
    }
}
exports.ValuesetItem = ValuesetItem;
//# sourceMappingURL=ValuesetItem.js.map