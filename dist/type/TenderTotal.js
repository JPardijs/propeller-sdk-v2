"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderTotal = void 0;
/**
 Object class for TenderTotal
 */
class TenderTotal {
    /**
     Creates a new instance of TenderTotal
     */
    constructor(data = {}) {
        this._subTotalGross = data.subTotalGross;
        this._subTotalNet = data.subTotalNet;
        this._discount = data.discount;
        this._discountPercentage = data.discountPercentage;
        this._discountType = data.discountType;
        this._totalNet = data.totalNet;
        this._totalGross = data.totalGross;
        this._discountNet = data.discountNet;
        this._discountGross = data.discountGross;
        this._totalTax = data.totalTax;
    }
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding
     */
    get subTotalGross() {
        return this._subTotalGross;
    }
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding
     */
    set subTotalGross(value) {
        this._subTotalGross = value;
    }
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including
     */
    get subTotalNet() {
        return this._subTotalNet;
    }
    /**
     The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including
     */
    set subTotalNet(value) {
        this._subTotalNet = value;
    }
    /**
     Discount value that is applied to the tender/order total through one or multiple incentives
     */
    get discount() {
        return this._discount;
    }
    /**
     Discount value that is applied to the tender/order total through one or multiple incentives
     */
    set discount(value) {
        this._discount = value;
    }
    /**
     Discount percentage that is applied to the tender/order total through one or multiple incentives
     */
    get discountPercentage() {
        return this._discountPercentage;
    }
    /**
     Discount percentage that is applied to the tender/order total through one or multiple incentives
     */
    set discountPercentage(value) {
        this._discountPercentage = value;
    }
    /**
     Discount type
     */
    get discountType() {
        return this._discountType;
    }
    /**
     Discount type
     */
    set discountType(value) {
        this._discountType = value;
    }
    /**
     The total payable amount for this tender/order. VAT including
     */
    get totalNet() {
        return this._totalNet;
    }
    /**
     The total payable amount for this tender/order. VAT including
     */
    set totalNet(value) {
        this._totalNet = value;
    }
    /**
     The total payable amount for this tender/order. VAT excluding
     */
    get totalGross() {
        return this._totalGross;
    }
    /**
     The total payable amount for this tender/order. VAT excluding
     */
    set totalGross(value) {
        this._totalGross = value;
    }
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT including
     */
    get discountNet() {
        return this._discountNet;
    }
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT including
     */
    set discountNet(value) {
        this._discountNet = value;
    }
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding
     */
    get discountGross() {
        return this._discountGross;
    }
    /**
     Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding
     */
    set discountGross(value) {
        this._discountGross = value;
    }
    /**
     Total amount of tax that applies to this tender/order
     */
    get totalTax() {
        return this._totalTax;
    }
    /**
     Total amount of tax that applies to this tender/order
     */
    set totalTax(value) {
        this._totalTax = value;
    }
}
exports.TenderTotal = TenderTotal;
//# sourceMappingURL=TenderTotal.js.map