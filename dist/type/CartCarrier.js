"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartCarrier = void 0;
/**
 Object class for CartCarrier
 */
class CartCarrier {
    /**
     Creates a new instance of CartCarrier
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._logo = data.logo;
        this._price = data.price;
        this._deliveryDeadline = data.deliveryDeadline;
    }
    /**
     Carrier unique identifier
     */
    get id() {
        return this._id;
    }
    /**
     Carrier unique identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Carrier name
     */
    get name() {
        return this._name;
    }
    /**
     Carrier name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Carrier's logo
     */
    get logo() {
        return this._logo;
    }
    /**
     Carrier's logo
     */
    set logo(value) {
        this._logo = value;
    }
    /**
     Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    get price() {
        return this._price;
    }
    /**
     Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    set price(value) {
        this._price = value;
    }
    /**
     Carrier's delivery deadline
     */
    get deliveryDeadline() {
        return this._deliveryDeadline;
    }
    /**
     Carrier's delivery deadline
     */
    set deliveryDeadline(value) {
        this._deliveryDeadline = value;
    }
}
exports.CartCarrier = CartCarrier;
//# sourceMappingURL=CartCarrier.js.map