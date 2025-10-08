"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeIntegerRangeFilter = void 0;
/**
 Object class for AttributeIntegerRangeFilter
 */
class AttributeIntegerRangeFilter {
    /**
     Creates a new instance of AttributeIntegerRangeFilter
     */
    constructor(data = {}) {
        this._min = data.min;
        this._max = data.max;
    }
    /**
     Minumum value for this attribute
     */
    get min() {
        return this._min;
    }
    /**
     Minumum value for this attribute
     */
    set min(value) {
        this._min = value;
    }
    /**
     The number of products found with this attribute value.
     */
    get max() {
        return this._max;
    }
    /**
     The number of products found with this attribute value.
     */
    set max(value) {
        this._max = value;
    }
}
exports.AttributeIntegerRangeFilter = AttributeIntegerRangeFilter;
//# sourceMappingURL=AttributeIntegerRangeFilter.js.map