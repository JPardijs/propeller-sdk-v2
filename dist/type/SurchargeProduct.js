"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurchargeProduct = void 0;
/**
 Object class for SurchargeProduct
 */
class SurchargeProduct {
    /**
     Creates a new instance of SurchargeProduct
     */
    constructor(data = {}) {
        this._surchargeId = data.surchargeId;
        this._productId = data.productId;
        this._surcharge = data.surcharge;
    }
    /**
     The surcharge identifier
     */
    get surchargeId() {
        return this._surchargeId;
    }
    /**
     The surcharge identifier
     */
    set surchargeId(value) {
        this._surchargeId = value;
    }
    /**
     The product identifier
     */
    get productId() {
        return this._productId;
    }
    /**
     The product identifier
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     The surcharge object
     */
    get surcharge() {
        return this._surcharge;
    }
    /**
     The surcharge object
     */
    set surcharge(value) {
        this._surcharge = value;
    }
}
exports.SurchargeProduct = SurchargeProduct;
//# sourceMappingURL=SurchargeProduct.js.map