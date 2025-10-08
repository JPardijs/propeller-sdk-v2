"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPrice = void 0;
/**
 Object class for ProductPrice
 */
class ProductPrice {
    /**
     Creates a new instance of ProductPrice
     */
    constructor(data = {}) {
        this._productId = data.productId;
        this._type = data.type;
        this._discountType = data.discountType;
        this._list = data.list;
        this._cost = data.cost;
        this._net = data.net;
        this._gross = data.gross;
        this._discount = data.discount;
        this._taxCode = data.taxCode;
        this._quantity = data.quantity;
    }
    /**
     productId field
     */
    get productId() {
        return this._productId;
    }
    /**
     productId field
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     type field
     */
    get type() {
        return this._type;
    }
    /**
     type field
     */
    set type(value) {
        this._type = value;
    }
    /**
     discountType field
     */
    get discountType() {
        return this._discountType;
    }
    /**
     discountType field
     */
    set discountType(value) {
        this._discountType = value;
    }
    /**
     list field
     */
    get list() {
        return this._list;
    }
    /**
     list field
     */
    set list(value) {
        this._list = value;
    }
    /**
     cost field
     */
    get cost() {
        return this._cost;
    }
    /**
     cost field
     */
    set cost(value) {
        this._cost = value;
    }
    /**
     net field
     */
    get net() {
        return this._net;
    }
    /**
     net field
     */
    set net(value) {
        this._net = value;
    }
    /**
     gross field
     */
    get gross() {
        return this._gross;
    }
    /**
     gross field
     */
    set gross(value) {
        this._gross = value;
    }
    /**
     discount field
     */
    get discount() {
        return this._discount;
    }
    /**
     discount field
     */
    set discount(value) {
        this._discount = value;
    }
    /**
     taxCode field
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     taxCode field
     */
    set taxCode(value) {
        this._taxCode = value;
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
}
exports.ProductPrice = ProductPrice;
//# sourceMappingURL=ProductPrice.js.map