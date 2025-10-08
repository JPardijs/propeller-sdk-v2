"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTotals = void 0;
/**
 Object class for OrderTotals
 */
class OrderTotals {
    /**
     Creates a new instance of OrderTotals
     */
    constructor(data = {}) {
        this._orderId = data.orderId;
        this._gross = data.gross;
        this._net = data.net;
        this._tax = data.tax;
        this._discountType = data.discountType;
        this._discountValue = data.discountValue;
        this._taxPercentages = data.taxPercentages;
    }
    /**
     The orderId of this Order
     */
    get orderId() {
        return this._orderId;
    }
    /**
     The orderId of this Order
     */
    set orderId(value) {
        this._orderId = value;
    }
    /**
     The total of this Order excluding tax
     */
    get gross() {
        return this._gross;
    }
    /**
     The total of this Order excluding tax
     */
    set gross(value) {
        this._gross = value;
    }
    /**
     The total of this Order including tax
     */
    get net() {
        return this._net;
    }
    /**
     The total of this Order including tax
     */
    set net(value) {
        this._net = value;
    }
    /**
     The total amount of tax for this Order
     */
    get tax() {
        return this._tax;
    }
    /**
     The total amount of tax for this Order
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     The type of global discount
     */
    get discountType() {
        return this._discountType;
    }
    /**
     The type of global discount
     */
    set discountType(value) {
        this._discountType = value;
    }
    /**
     The discount value, can be absolute or a percentage depending on the discountType
     */
    get discountValue() {
        return this._discountValue;
    }
    /**
     The discount value, can be absolute or a percentage depending on the discountType
     */
    set discountValue(value) {
        this._discountValue = value;
    }
    /**
     The totals per tax percentage
     */
    get taxPercentages() {
        return this._taxPercentages;
    }
    /**
     The totals per tax percentage
     */
    set taxPercentages(value) {
        this._taxPercentages = value;
    }
}
exports.OrderTotals = OrderTotals;
//# sourceMappingURL=OrderTotals.js.map