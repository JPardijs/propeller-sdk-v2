"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusSet = void 0;
/**
 Object class for OrderStatusSet
 */
class OrderStatusSet {
    /**
     Creates a new instance of OrderStatusSet
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._orderStatuses = data.orderStatuses;
    }
    /**
     The primary order status set identifier
     */
    get id() {
        return this._id;
    }
    /**
     The primary order status set identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     The order status set name
     */
    get name() {
        return this._name;
    }
    /**
     The order status set name
     */
    set name(value) {
        this._name = value;
    }
    /**
     The order status set description
     */
    get description() {
        return this._description;
    }
    /**
     The order status set description
     */
    set description(value) {
        this._description = value;
    }
    /**
     The order statuses in this set
     */
    get orderStatuses() {
        return this._orderStatuses;
    }
    /**
     The order statuses in this set
     */
    set orderStatuses(value) {
        this._orderStatuses = value;
    }
}
exports.OrderStatusSet = OrderStatusSet;
//# sourceMappingURL=OrderStatusSet.js.map