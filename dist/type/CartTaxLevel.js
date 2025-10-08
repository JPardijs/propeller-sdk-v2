"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartTaxLevel = void 0;
/**
 Object class for CartTaxLevel
 */
class CartTaxLevel {
    /**
     Creates a new instance of CartTaxLevel
     */
    constructor(data = {}) {
        this._taxPercentage = data.taxPercentage;
        this._price = data.price;
        this._discount = data.discount;
    }
    /**
     Tax level's percentage
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     Tax level's percentage
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     Total tax added for to the cart for the tax level's tax code
     */
    get price() {
        return this._price;
    }
    /**
     Total tax added for to the cart for the tax level's tax code
     */
    set price(value) {
        this._price = value;
    }
    /**
     Total discount for the tax level's code
     */
    get discount() {
        return this._discount;
    }
    /**
     Total discount for the tax level's code
     */
    set discount(value) {
        this._discount = value;
    }
}
exports.CartTaxLevel = CartTaxLevel;
//# sourceMappingURL=CartTaxLevel.js.map