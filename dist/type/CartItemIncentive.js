"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemIncentive = void 0;
/**
 Object class for CartItemIncentive
 */
class CartItemIncentive {
    /**
     Creates a new instance of CartItemIncentive
     */
    constructor(data = {}) {
        this._name = data.name;
        this._quantity = data.quantity;
        this._price = data.price;
        this._code = data.code;
    }
    /**
     Cart item incentive name
     */
    get name() {
        return this._name;
    }
    /**
     Cart item incentive name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Quantity of cart items to be affected by the incentive
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Quantity of cart items to be affected by the incentive
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Cart item incentive price
     */
    get price() {
        return this._price;
    }
    /**
     Cart item incentive price
     */
    set price(value) {
        this._price = value;
    }
    /**
     Cart item incentive code
     */
    get code() {
        return this._code;
    }
    /**
     Cart item incentive code
     */
    set code(value) {
        this._code = value;
    }
}
exports.CartItemIncentive = CartItemIncentive;
//# sourceMappingURL=CartItemIncentive.js.map