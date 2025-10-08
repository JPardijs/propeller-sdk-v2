"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartPostageData = void 0;
/**
 Object class for CartPostageData
 */
class CartPostageData {
    /**
     Creates a new instance of CartPostageData
     */
    constructor(data = {}) {
        this._method = data.method;
        this._taxPercentage = data.taxPercentage;
        this._requestDate = data.requestDate;
        this._price = data.price;
        this._priceNet = data.priceNet;
        this._priceMode = data.priceMode;
        this._carrier = data.carrier;
        this._partialDeliveryAllowed = data.partialDeliveryAllowed;
        this._pickUpLocationId = data.pickUpLocationId;
        this._warehouse = data.warehouse;
    }
    /**
     Selected shipping method for this cart. Defaults to DELIVERY.
     */
    get method() {
        return this._method;
    }
    /**
     Selected shipping method for this cart. Defaults to DELIVERY.
     */
    set method(value) {
        this._method = value;
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
     Preferred delivery date for this order as requested by the user.
     */
    get requestDate() {
        return this._requestDate;
    }
    /**
     Preferred delivery date for this order as requested by the user.
     */
    set requestDate(value) {
        this._requestDate = value;
    }
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT.
     */
    get price() {
        return this._price;
    }
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT.
     */
    set price(value) {
        this._price = value;
    }
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT.
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT.
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally
     */
    get priceMode() {
        return this._priceMode;
    }
    /**
     Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally
     */
    set priceMode(value) {
        this._priceMode = value;
    }
    /**
     Selected carrier for this cart.
     */
    get carrier() {
        return this._carrier;
    }
    /**
     Selected carrier for this cart.
     */
    set carrier(value) {
        this._carrier = value;
    }
    /**
     This order can be shipped in parts when items different delivery dates
     */
    get partialDeliveryAllowed() {
        return this._partialDeliveryAllowed;
    }
    /**
     This order can be shipped in parts when items different delivery dates
     */
    set partialDeliveryAllowed(value) {
        this._partialDeliveryAllowed = value;
    }
    /**
     Pick up location ID
     */
    get pickUpLocationId() {
        return this._pickUpLocationId;
    }
    /**
     Pick up location ID
     */
    set pickUpLocationId(value) {
        this._pickUpLocationId = value;
    }
    /**
     warehouse field
     */
    get warehouse() {
        return this._warehouse;
    }
    /**
     warehouse field
     */
    set warehouse(value) {
        this._warehouse = value;
    }
}
exports.CartPostageData = CartPostageData;
//# sourceMappingURL=CartPostageData.js.map