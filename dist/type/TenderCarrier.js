"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderCarrier = void 0;
/**
 Carrier information for tender shipping options
 */
class TenderCarrier {
    /**
     Creates a new instance of TenderCarrier
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._logo = data.logo;
        this._amount = data.amount;
        this._price = data.price;
        this._deliveryDeadline = data.deliveryDeadline;
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
     Carrier description
     */
    get description() {
        return this._description;
    }
    /**
     Carrier description
     */
    set description(value) {
        this._description = value;
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
     Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    get amount() {
        return this._amount;
    }
    /**
     Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
     */
    set amount(value) {
        this._amount = value;
    }
    /**
     Unique identifier for the carrier
     */
    get id() {
        return this._id;
    }
    /**
     Unique identifier for the carrier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Price for this carrier service
     */
    get price() {
        return this._price;
    }
    /**
     Price for this carrier service
     */
    set price(value) {
        this._price = value;
    }
    /**
     Expected delivery deadline for this carrier
     */
    get deliveryDeadline() {
        return this._deliveryDeadline;
    }
    /**
     Expected delivery deadline for this carrier
     */
    set deliveryDeadline(value) {
        this._deliveryDeadline = value;
    }
}
exports.TenderCarrier = TenderCarrier;
//# sourceMappingURL=TenderCarrier.js.map