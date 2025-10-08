"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderItemIncentive = void 0;
/**
 Object class for TenderItemIncentive
 */
class TenderItemIncentive {
    /**
     Creates a new instance of TenderItemIncentive
     */
    constructor(data = {}) {
        this._name = data.name;
        this._quantity = data.quantity;
        this._price = data.price;
        this._code = data.code;
    }
    /**
     name field
     */
    get name() {
        return this._name;
    }
    /**
     name field
     */
    set name(value) {
        this._name = value;
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
     code field
     */
    get code() {
        return this._code;
    }
    /**
     code field
     */
    set code(value) {
        this._code = value;
    }
}
exports.TenderItemIncentive = TenderItemIncentive;
//# sourceMappingURL=TenderItemIncentive.js.map