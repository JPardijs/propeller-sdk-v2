"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeFilter = void 0;
/**
 Object class for AttributeFilter
 */
class AttributeFilter {
    /**
     Creates a new instance of AttributeFilter
     */
    constructor(data = {}) {
        this._id = data.id;
        this._attributeDescription = data.attributeDescription;
        this._type = data.type;
        this._textFilters = data.textFilters;
        this._integerRangeFilter = data.integerRangeFilter;
        this._decimalRangeFilter = data.decimalRangeFilter;
    }
    /**
     Attribute filter id
     */
    get id() {
        return this._id;
    }
    /**
     Attribute filter id
     */
    set id(value) {
        this._id = value;
    }
    /**
     attributeDescription field
     */
    get attributeDescription() {
        return this._attributeDescription;
    }
    /**
     attributeDescription field
     */
    set attributeDescription(value) {
        this._attributeDescription = value;
    }
    /**
     The type of the attribute.
          Possible values:
          - text
          - list
          - enum
          - enumlist
          - color
          - date
          - datetime
          - object
          - integer
          - decimal
     */
    get type() {
        return this._type;
    }
    /**
     The type of the attribute.
          Possible values:
          - text
          - list
          - enum
          - enumlist
          - color
          - date
          - datetime
          - object
          - integer
          - decimal
     */
    set type(value) {
        this._type = value;
    }
    /**
     All available attribute text values within this search result for this particular attribute.
     */
    get textFilters() {
        return this._textFilters;
    }
    /**
     All available attribute text values within this search result for this particular attribute.
     */
    set textFilters(value) {
        this._textFilters = value;
    }
    /**
     Minimum and maximum value range for integer attributes
     */
    get integerRangeFilter() {
        return this._integerRangeFilter;
    }
    /**
     Minimum and maximum value range for integer attributes
     */
    set integerRangeFilter(value) {
        this._integerRangeFilter = value;
    }
    /**
     Minimum and maximum value range for decimal attributes
     */
    get decimalRangeFilter() {
        return this._decimalRangeFilter;
    }
    /**
     Minimum and maximum value range for decimal attributes
     */
    set decimalRangeFilter(value) {
        this._decimalRangeFilter = value;
    }
}
exports.AttributeFilter = AttributeFilter;
//# sourceMappingURL=AttributeFilter.js.map