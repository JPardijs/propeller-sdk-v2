"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentData = void 0;
/**
 Object class for OrderPaymentData
 */
class OrderPaymentData {
    /**
     Creates a new instance of OrderPaymentData
     */
    constructor(data = {}) {
        this._net = data.net;
        this._gross = data.gross;
        this._tax = data.tax;
        this._taxPercentage = data.taxPercentage;
        this._method = data.method;
        this._status = data.status;
        this._statusDate = data.statusDate;
        this._accountingId = data.accountingId;
        this._overruled = data.overruled;
    }
    /**
     The transaction cost including tax
     */
    get net() {
        return this._net;
    }
    /**
     The transaction cost including tax
     */
    set net(value) {
        this._net = value;
    }
    /**
     The transaction cost excluding tax
     */
    get gross() {
        return this._gross;
    }
    /**
     The transaction cost excluding tax
     */
    set gross(value) {
        this._gross = value;
    }
    /**
     The tax on the transaction costs
     */
    get tax() {
        return this._tax;
    }
    /**
     The tax on the transaction costs
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     The transaction costs tax percentage
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     The transaction costs tax percentage
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     The paymethod for this Order
     */
    get method() {
        return this._method;
    }
    /**
     The paymethod for this Order
     */
    set method(value) {
        this._method = value;
    }
    /**
     The transaction status
     */
    get status() {
        return this._status;
    }
    /**
     The transaction status
     */
    set status(value) {
        this._status = value;
    }
    /**
     Last time the transaction status was changed
     */
    get statusDate() {
        return this._statusDate;
    }
    /**
     Last time the transaction status was changed
     */
    set statusDate(value) {
        this._statusDate = value;
    }
    /**
     The accountingId that belongs to this order
     */
    get accountingId() {
        return this._accountingId;
    }
    /**
     The accountingId that belongs to this order
     */
    set accountingId(value) {
        this._accountingId = value;
    }
    /**
     Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    get overruled() {
        return this._overruled;
    }
    /**
     Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    set overruled(value) {
        this._overruled = value;
    }
}
exports.OrderPaymentData = OrderPaymentData;
//# sourceMappingURL=OrderPaymentData.js.map