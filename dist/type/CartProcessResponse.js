"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProcessResponse = void 0;
/**
 Object class for CartProcessResponse
 */
class CartProcessResponse {
    /**
     Creates a new instance of CartProcessResponse
     */
    constructor(data = {}) {
        this._cartOrderId = data.cartOrderId;
        this._cart = data.cart;
        this._order = data.order;
    }
    /**
     Cart order unique identifier
     */
    get cartOrderId() {
        return this._cartOrderId;
    }
    /**
     Cart order unique identifier
     */
    set cartOrderId(value) {
        this._cartOrderId = value;
    }
    /**
     Cart object
     */
    get cart() {
        return this._cart;
    }
    /**
     Cart object
     */
    set cart(value) {
        this._cart = value;
    }
    /**
     order field
     */
    get order() {
        return this._order;
    }
    /**
     order field
     */
    set order(value) {
        this._order = value;
    }
}
exports.CartProcessResponse = CartProcessResponse;
//# sourceMappingURL=CartProcessResponse.js.map