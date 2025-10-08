"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderItemSurcharge = void 0;
/**
 Object class for TenderItemSurcharge
 */
class TenderItemSurcharge {
    /**
     Creates a new instance of TenderItemSurcharge
     */
    constructor(data = {}) {
        this._names = data.names;
        this._taxCode = data.taxCode;
        this._taxPercentage = data.taxPercentage;
        this._quantity = data.quantity;
        this._price = data.price;
        this._totalPrice = data.totalPrice;
        this._priceNet = data.priceNet;
        this._totalPriceNet = data.totalPriceNet;
    }
    /**
     names field
     */
    get names() {
        return this._names;
    }
    /**
     names field
     */
    set names(value) {
        this._names = value;
    }
    /**
     taxCode field
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     taxCode field
     */
    set taxCode(value) {
        this._taxCode = value;
    }
    /**
     taxPercentage field
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     taxPercentage field
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     quantity field
     */
    get quantity() {
        return this._quantity;
    }
    /**
     quantity field
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     price field
     */
    get price() {
        return this._price;
    }
    /**
     price field
     */
    set price(value) {
        this._price = value;
    }
    /**
     totalPrice field
     */
    get totalPrice() {
        return this._totalPrice;
    }
    /**
     totalPrice field
     */
    set totalPrice(value) {
        this._totalPrice = value;
    }
    /**
     priceNet field
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     priceNet field
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     totalPriceNet field
     */
    get totalPriceNet() {
        return this._totalPriceNet;
    }
    /**
     totalPriceNet field
     */
    set totalPriceNet(value) {
        this._totalPriceNet = value;
    }
}
exports.TenderItemSurcharge = TenderItemSurcharge;
//# sourceMappingURL=TenderItemSurcharge.js.map