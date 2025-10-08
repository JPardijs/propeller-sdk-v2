"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartPaymentData = void 0;
/**
 Object class for CartPaymentData
 */
class CartPaymentData {
    /**
     Creates a new instance of CartPaymentData
     */
    constructor(data = {}) {
        this._method = data.method;
        this._price = data.price;
        this._priceNet = data.priceNet;
        this._priceMode = data.priceMode;
        this._tax = data.tax;
        this._taxPercentage = data.taxPercentage;
        this._status = data.status;
        this._statusDate = data.statusDate;
    }
    /**
     Selected paymethod for this cart. Defaults to ACCOUNT.
     */
    get method() {
        return this._method;
    }
    /**
     Selected paymethod for this cart. Defaults to ACCOUNT.
     */
    set method(value) {
        this._method = value;
    }
    /**
     Costs associated with the selected paymethod on this cart. Excluding VAT.
     */
    get price() {
        return this._price;
    }
    /**
     Costs associated with the selected paymethod on this cart. Excluding VAT.
     */
    set price(value) {
        this._price = value;
    }
    /**
     Costs associated with the selected paymethod on this cart. Including VAT.
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     Costs associated with the selected paymethod on this cart. Including VAT.
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     priceMode field
     */
    get priceMode() {
        return this._priceMode;
    }
    /**
     priceMode field
     */
    set priceMode(value) {
        this._priceMode = value;
    }
    /**
     Tax associated with the selected paymethod on this cart.
     */
    get tax() {
        return this._tax;
    }
    /**
     Tax associated with the selected paymethod on this cart.
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     Tax percentage associated with the selected paymethod on this cart.
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     Tax percentage associated with the selected paymethod on this cart.
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     Payment status
     */
    get status() {
        return this._status;
    }
    /**
     Payment status
     */
    set status(value) {
        this._status = value;
    }
    /**
     Payment status date
     */
    get statusDate() {
        return this._statusDate;
    }
    /**
     Payment status date
     */
    set statusDate(value) {
        this._statusDate = value;
    }
}
exports.CartPaymentData = CartPaymentData;
//# sourceMappingURL=CartPaymentData.js.map