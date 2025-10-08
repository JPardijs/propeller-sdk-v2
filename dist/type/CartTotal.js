"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartTotal = void 0;
/**
 Object class for CartTotal
 */
class CartTotal {
    /**
     Creates a new instance of CartTotal
     */
    constructor(data = {}) {
        this._subTotal = data.subTotal;
        this._subTotalNet = data.subTotalNet;
        this._discountPercentage = data.discountPercentage;
        this._totalNet = data.totalNet;
        this._totalGross = data.totalGross;
        this._discountNet = data.discountNet;
        this._discount = data.discount;
    }
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Excluding  VAT
     */
    get subTotal() {
        return this._subTotal;
    }
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Excluding  VAT
     */
    set subTotal(value) {
        this._subTotal = value;
    }
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Including  VAT
     */
    get subTotalNet() {
        return this._subTotalNet;
    }
    /**
     Total payable amount of all items in this cart,
      excluding postage, paymethods costs and discounts. Including  VAT
     */
    set subTotalNet(value) {
        this._subTotalNet = value;
    }
    /**
     Discount percentage that is applied to the order total through one or multiple incentives.
     */
    get discountPercentage() {
        return this._discountPercentage;
    }
    /**
     Discount percentage that is applied to the order total through one or multiple incentives.
     */
    set discountPercentage(value) {
        this._discountPercentage = value;
    }
    /**
     Total payable amount for this cart. Including VAT
     */
    get totalNet() {
        return this._totalNet;
    }
    /**
     Total payable amount for this cart. Including VAT
     */
    set totalNet(value) {
        this._totalNet = value;
    }
    /**
     Total payable amount for this cart. Excluding VAT
     */
    get totalGross() {
        return this._totalGross;
    }
    /**
     Total payable amount for this cart. Excluding VAT
     */
    set totalGross(value) {
        this._totalGross = value;
    }
    /**
     Discount that is applied to the order total through one or multiple incentives. Including VAT.
     */
    get discountNet() {
        return this._discountNet;
    }
    /**
     Discount that is applied to the order total through one or multiple incentives. Including VAT.
     */
    set discountNet(value) {
        this._discountNet = value;
    }
    /**
     Discount that is applied to the order total through one or multiple incentives. Excluding VAT.
     */
    get discount() {
        return this._discount;
    }
    /**
     Discount that is applied to the order total through one or multiple incentives. Excluding VAT.
     */
    set discount(value) {
        this._discount = value;
    }
}
exports.CartTotal = CartTotal;
//# sourceMappingURL=CartTotal.js.map