"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderPostage = void 0;
/**
 Object class for TenderPostage
 */
class TenderPostage {
    /**
     Creates a new instance of TenderPostage
     */
    constructor(data = {}) {
        this._method = data.method;
        this._taxPercentage = data.taxPercentage;
        this._requestDate = data.requestDate;
        this._carrier = data.carrier;
        this._price = data.price;
        this._priceNet = data.priceNet;
        this._tax = data.tax;
        this._overruled = data.overruled;
        this._partialDeliveryAllowed = data.partialDeliveryAllowed;
        this._pickUpLocationId = data.pickUpLocationId;
        this._warehouse = data.warehouse;
    }
    /**
     The selected shipping method for this tender/order
     */
    get method() {
        return this._method;
    }
    /**
     The selected shipping method for this tender/order
     */
    set method(value) {
        this._method = value;
    }
    /**
     Postage tax percentage
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     Postage tax percentage
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     The preferred delivery date for this order as requested by the user
     */
    get requestDate() {
        return this._requestDate;
    }
    /**
     The preferred delivery date for this order as requested by the user
     */
    set requestDate(value) {
        this._requestDate = value;
    }
    /**
     The selected carrier for this tender/order
     */
    get carrier() {
        return this._carrier;
    }
    /**
     The selected carrier for this tender/order
     */
    set carrier(value) {
        this._carrier = value;
    }
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding
     */
    get price() {
        return this._price;
    }
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding
     */
    set price(value) {
        this._price = value;
    }
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     The VAT associated with the selected shipping method and business rules that apply to this tender/order.
     */
    get tax() {
        return this._tax;
    }
    /**
     The VAT associated with the selected shipping method and business rules that apply to this tender/order.
     */
    set tax(value) {
        this._tax = value;
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
exports.TenderPostage = TenderPostage;
//# sourceMappingURL=TenderPostage.js.map