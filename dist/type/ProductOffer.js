"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOffer = void 0;
/**
 Object class for ProductOffer
 */
class ProductOffer {
    /**
     Creates a new instance of ProductOffer
     */
    constructor(data = {}) {
        this._id = data.id;
        this._price = data.price;
        this._validFrom = data.validFrom;
        this._validTo = data.validTo;
        this._formula = data.formula;
    }
    /**
     The id of the offer.
     */
    get id() {
        return this._id;
    }
    /**
     The id of the offer.
     */
    set id(value) {
        this._id = value;
    }
    /**
     The calculated price for this offer.
     */
    get price() {
        return this._price;
    }
    /**
     The calculated price for this offer.
     */
    set price(value) {
        this._price = value;
    }
    /**
     validFrom field
     */
    get validFrom() {
        return this._validFrom;
    }
    /**
     validFrom field
     */
    set validFrom(value) {
        this._validFrom = value;
    }
    /**
     validTo field
     */
    get validTo() {
        return this._validTo;
    }
    /**
     validTo field
     */
    set validTo(value) {
        this._validTo = value;
    }
    /**
     formula field
     */
    get formula() {
        return this._formula;
    }
    /**
     formula field
     */
    set formula(value) {
        this._formula = value;
    }
}
exports.ProductOffer = ProductOffer;
//# sourceMappingURL=ProductOffer.js.map