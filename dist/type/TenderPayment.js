"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderPayment = void 0;
/**
 Object class for TenderPayment
 */
class TenderPayment {
    /**
     Creates a new instance of TenderPayment
     */
    constructor(data = {}) {
        this._price = data.price;
        this._priceNet = data.priceNet;
        this._overruled = data.overruled;
        this._tax = data.tax;
        this._taxPercentage = data.taxPercentage;
        this._method = data.method;
        this._status = data.status;
        this._statusDate = data.statusDate;
        this._accountingId = data.accountingId;
    }
    /**
     The costs associated with the selected paymethod on this tender/order. VAT including
     */
    get price() {
        return this._price;
    }
    /**
     The costs associated with the selected paymethod on this tender/order. VAT including
     */
    set price(value) {
        this._price = value;
    }
    /**
     The costs associated with the selected paymethod on this tender/order. VAT excluding
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     The costs associated with the selected paymethod on this tender/order. VAT excluding
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     If false, shipping costs are automatically calculated
     */
    get overruled() {
        return this._overruled;
    }
    /**
     If false, shipping costs are automatically calculated
     */
    set overruled(value) {
        this._overruled = value;
    }
    /**
     The tax associated with the selected paymethod on this tender/order
     */
    get tax() {
        return this._tax;
    }
    /**
     The tax associated with the selected paymethod on this tender/order
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     The tax percentage associated with the selected paymethod on this tender/order
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     The tax percentage associated with the selected paymethod on this tender/order
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     The selected payment method for this tender/order
     */
    get method() {
        return this._method;
    }
    /**
     The selected payment method for this tender/order
     */
    set method(value) {
        this._method = value;
    }
    /**
     Payment status for this tender/order
     */
    get status() {
        return this._status;
    }
    /**
     Payment status for this tender/order
     */
    set status(value) {
        this._status = value;
    }
    /**
     Payment status change date for this tender/order
     */
    get statusDate() {
        return this._statusDate;
    }
    /**
     Payment status change date for this tender/order
     */
    set statusDate(value) {
        this._statusDate = value;
    }
    /**
     Accounting ID for this tender/order
     */
    get accountingId() {
        return this._accountingId;
    }
    /**
     Accounting ID for this tender/order
     */
    set accountingId(value) {
        this._accountingId = value;
    }
}
exports.TenderPayment = TenderPayment;
//# sourceMappingURL=TenderPayment.js.map