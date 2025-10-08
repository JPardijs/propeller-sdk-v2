"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkPrice = void 0;
/**
 Object class for BulkPrice
 */
class BulkPrice {
    /**
     Creates a new instance of BulkPrice
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._value = data.value;
        this._quantityFrom = data.quantityFrom;
        this._validFrom = data.validFrom;
        this._validTo = data.validTo;
        this._priceId = data.priceId;
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
     Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type.
     */
    get value() {
        return this._value;
    }
    /**
     Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type.
     */
    set value(value) {
        this._value = value;
    }
    /**
     Indicates the minimum quantity threshold needed to qualify for the bulk price.
     */
    get quantityFrom() {
        return this._quantityFrom;
    }
    /**
     Indicates the minimum quantity threshold needed to qualify for the bulk price.
     */
    set quantityFrom(value) {
        this._quantityFrom = value;
    }
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    get validFrom() {
        return this._validFrom;
    }
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    set validFrom(value) {
        this._validFrom = value;
    }
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    get validTo() {
        return this._validTo;
    }
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    set validTo(value) {
        this._validTo = value;
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
}
exports.BulkPrice = BulkPrice;
//# sourceMappingURL=BulkPrice.js.map