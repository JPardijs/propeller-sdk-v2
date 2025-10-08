"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartIncentiveParams = void 0;
/**
 Object class for CartIncentiveParams
 */
class CartIncentiveParams {
    /**
     Creates a new instance of CartIncentiveParams
     */
    constructor(data = {}) {
        this._quantity = data.quantity;
        this._price = data.price;
        this._productId = data.productId;
        this._discount = data.discount;
        this._discountType = data.discountType;
        this._valuePoints = data.valuePoints;
        this._repeat = data.repeat;
        this._actionCode = data.actionCode;
    }
    /**
     Minimum quantity of items to be affected by the incentive
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Minimum quantity of items to be affected by the incentive
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Incentive price
     */
    get price() {
        return this._price;
    }
    /**
     Incentive price
     */
    set price(value) {
        this._price = value;
    }
    /**
     Product identifier
     */
    get productId() {
        return this._productId;
    }
    /**
     Product identifier
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     Discount value
     */
    get discount() {
        return this._discount;
    }
    /**
     Discount value
     */
    set discount(value) {
        this._discount = value;
    }
    /**
     Discount type
     */
    get discountType() {
        return this._discountType;
    }
    /**
     Discount type
     */
    set discountType(value) {
        this._discountType = value;
    }
    /**
     Value points amount
     */
    get valuePoints() {
        return this._valuePoints;
    }
    /**
     Value points amount
     */
    set valuePoints(value) {
        this._valuePoints = value;
    }
    /**
     Repeat incentive
     */
    get repeat() {
        return this._repeat;
    }
    /**
     Repeat incentive
     */
    set repeat(value) {
        this._repeat = value;
    }
    /**
     Action code
     */
    get actionCode() {
        return this._actionCode;
    }
    /**
     Action code
     */
    set actionCode(value) {
        this._actionCode = value;
    }
}
exports.CartIncentiveParams = CartIncentiveParams;
//# sourceMappingURL=CartIncentiveParams.js.map