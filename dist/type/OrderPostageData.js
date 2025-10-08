"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPostageData = void 0;
/**
 Object class for OrderPostageData
 */
class OrderPostageData {
    /**
     Creates a new instance of OrderPostageData
     */
    constructor(data = {}) {
        this._method = data.method;
        this._taxPercentage = data.taxPercentage;
        this._requestDate = data.requestDate;
        this._gross = data.gross;
        this._net = data.net;
        this._tax = data.tax;
        this._partialDeliveryAllowed = data.partialDeliveryAllowed;
        this._pickUpLocationId = data.pickUpLocationId;
        this._carrier = data.carrier;
        this._overruled = data.overruled;
        this._warehouse = data.warehouse;
    }
    /**
     The chosen shipping method
     */
    get method() {
        return this._method;
    }
    /**
     The chosen shipping method
     */
    set method(value) {
        this._method = value;
    }
    /**
     The shipping costs tax percentage
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     The shipping costs tax percentage
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     The preferred delivery date for the Order
     */
    get requestDate() {
        return this._requestDate;
    }
    /**
     The preferred delivery date for the Order
     */
    set requestDate(value) {
        this._requestDate = value;
    }
    /**
     The shipping costs excluding tax
     */
    get gross() {
        return this._gross;
    }
    /**
     The shipping costs excluding tax
     */
    set gross(value) {
        this._gross = value;
    }
    /**
     The shipping costs including tax
     */
    get net() {
        return this._net;
    }
    /**
     The shipping costs including tax
     */
    set net(value) {
        this._net = value;
    }
    /**
     The tax on the shipping costs
     */
    get tax() {
        return this._tax;
    }
    /**
     The tax on the shipping costs
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     Is partial delivery allowed for this Order
     */
    get partialDeliveryAllowed() {
        return this._partialDeliveryAllowed;
    }
    /**
     Is partial delivery allowed for this Order
     */
    set partialDeliveryAllowed(value) {
        this._partialDeliveryAllowed = value;
    }
    /**
     ID of the pick up location when the Order's shipping method is PICKUP
     */
    get pickUpLocationId() {
        return this._pickUpLocationId;
    }
    /**
     ID of the pick up location when the Order's shipping method is PICKUP
     */
    set pickUpLocationId(value) {
        this._pickUpLocationId = value;
    }
    /**
     The selected carrier for this Order
     */
    get carrier() {
        return this._carrier;
    }
    /**
     The selected carrier for this Order
     */
    set carrier(value) {
        this._carrier = value;
    }
    /**
     Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    get overruled() {
        return this._overruled;
    }
    /**
     Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    set overruled(value) {
        this._overruled = value;
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
exports.OrderPostageData = OrderPostageData;
//# sourceMappingURL=OrderPostageData.js.map