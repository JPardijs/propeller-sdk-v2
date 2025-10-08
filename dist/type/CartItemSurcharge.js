"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemSurcharge = void 0;
/**
 Object class for CartItemSurcharge
 */
class CartItemSurcharge {
    /**
     Creates a new instance of CartItemSurcharge
     */
    constructor(data = {}) {
        this._names = data.names;
        this._descriptions = data.descriptions;
        this._type = data.type;
        this._value = data.value;
        this._taxCode = data.taxCode;
        this._taxPercentage = data.taxPercentage;
        this._quantity = data.quantity;
        this._price = data.price;
        this._totalPrice = data.totalPrice;
        this._priceNet = data.priceNet;
        this._totalPriceNet = data.totalPriceNet;
    }
    /**
     Localized names
     */
    get names() {
        return this._names;
    }
    /**
     Localized names
     */
    set names(value) {
        this._names = value;
    }
    /**
     Localized descriptions
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     Localized descriptions
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     Type
     */
    get type() {
        return this._type;
    }
    /**
     Type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Value
     */
    get value() {
        return this._value;
    }
    /**
     Value
     */
    set value(value) {
        this._value = value;
    }
    /**
     Tax code
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     Tax code
     */
    set taxCode(value) {
        this._taxCode = value;
    }
    /**
     Tax percentage
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     Tax percentage
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     Quantity
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Quantity
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Price
     */
    get price() {
        return this._price;
    }
    /**
     Price
     */
    set price(value) {
        this._price = value;
    }
    /**
     Total price
     */
    get totalPrice() {
        return this._totalPrice;
    }
    /**
     Total price
     */
    set totalPrice(value) {
        this._totalPrice = value;
    }
    /**
     Net price
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     Net price
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     Total net price
     */
    get totalPriceNet() {
        return this._totalPriceNet;
    }
    /**
     Total net price
     */
    set totalPriceNet(value) {
        this._totalPriceNet = value;
    }
}
exports.CartItemSurcharge = CartItemSurcharge;
//# sourceMappingURL=CartItemSurcharge.js.map