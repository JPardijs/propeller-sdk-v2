"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostPrice = void 0;
/**
 Object class for CostPrice
 */
class CostPrice {
    /**
     Creates a new instance of CostPrice
     */
    constructor(data = {}) {
        this._id = data.id;
        this._priceId = data.priceId;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._quantityFrom = data.quantityFrom;
        this._value = data.value;
    }
    /**
     Primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Price foreign identifier
     */
    get priceId() {
        return this._priceId;
    }
    /**
     Price foreign identifier
     */
    set priceId(value) {
        this._priceId = value;
    }
    /**
     Creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Indicates the minimum quantity threshold needed to qualify for the cost price.
     */
    get quantityFrom() {
        return this._quantityFrom;
    }
    /**
     Indicates the minimum quantity threshold needed to qualify for the cost price.
     */
    set quantityFrom(value) {
        this._quantityFrom = value;
    }
    /**
     The cost associated to acquire the product.
     */
    get value() {
        return this._value;
    }
    /**
     The cost associated to acquire the product.
     */
    set value(value) {
        this._value = value;
    }
}
exports.CostPrice = CostPrice;
//# sourceMappingURL=CostPrice.js.map