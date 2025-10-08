"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundlePrice = void 0;
/**
 Object class for BundlePrice
 */
class BundlePrice {
    /**
     Creates a new instance of BundlePrice
     */
    constructor(data = {}) {
        this._net = data.net;
        this._gross = data.gross;
        this._originalNet = data.originalNet;
        this._originalGross = data.originalGross;
    }
    /**
     Net price of the bundle after discounts applied
     */
    get net() {
        return this._net;
    }
    /**
     Net price of the bundle after discounts applied
     */
    set net(value) {
        this._net = value;
    }
    /**
     Gross price of the bundle after discounts applied
     */
    get gross() {
        return this._gross;
    }
    /**
     Gross price of the bundle after discounts applied
     */
    set gross(value) {
        this._gross = value;
    }
    /**
     Original net price of the bundle before discounts applied
     */
    get originalNet() {
        return this._originalNet;
    }
    /**
     Original net price of the bundle before discounts applied
     */
    set originalNet(value) {
        this._originalNet = value;
    }
    /**
     Original gross price of the bundle before discounts applied
     */
    get originalGross() {
        return this._originalGross;
    }
    /**
     Original gross price of the bundle before discounts applied
     */
    set originalGross(value) {
        this._originalGross = value;
    }
}
exports.BundlePrice = BundlePrice;
//# sourceMappingURL=BundlePrice.js.map