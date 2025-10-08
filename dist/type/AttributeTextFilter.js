"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeTextFilter = void 0;
/**
 Object class for AttributeTextFilter
 */
class AttributeTextFilter {
    /**
     Creates a new instance of AttributeTextFilter
     */
    constructor(data = {}) {
        this._value = data.value;
        this._count = data.count;
        this._countTotal = data.countTotal;
        this._countActive = data.countActive;
        this._isSelected = data.isSelected;
    }
    /**
     The value of the attribute
     */
    get value() {
        return this._value;
    }
    /**
     The value of the attribute
     */
    set value(value) {
        this._value = value;
    }
    /**
     The number of products found with this attribute value with all attributes applied.
     */
    get count() {
        return this._count;
    }
    /**
     The number of products found with this attribute value with all attributes applied.
     */
    set count(value) {
        this._count = value;
    }
    /**
     The number of products found with this attribute value  without any attribute filters applied.
     */
    get countTotal() {
        return this._countTotal;
    }
    /**
     The number of products found with this attribute value  without any attribute filters applied.
     */
    set countTotal(value) {
        this._countTotal = value;
    }
    /**
     The number of products found with this attribute value without all attributes except it's own applied.
      This can be used to display the active filter's totals
     */
    get countActive() {
        return this._countActive;
    }
    /**
     The number of products found with this attribute value without all attributes except it's own applied.
      This can be used to display the active filter's totals
     */
    set countActive(value) {
        this._countActive = value;
    }
    /**
     Indicates whehter this values is currently selected
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     Indicates whehter this values is currently selected
     */
    set isSelected(value) {
        this._isSelected = value;
    }
}
exports.AttributeTextFilter = AttributeTextFilter;
//# sourceMappingURL=AttributeTextFilter.js.map