"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartShippingMethod = void 0;
/**
 Object class for CartShippingMethod
 */
class CartShippingMethod {
    /**
     Creates a new instance of CartShippingMethod
     */
    constructor(data = {}) {
        this._name = data.name;
        this._code = data.code;
    }
    /**
     Shipping method name
     */
    get name() {
        return this._name;
    }
    /**
     Shipping method name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Shipping method code
     */
    get code() {
        return this._code;
    }
    /**
     Shipping method code
     */
    set code(value) {
        this._code = value;
    }
}
exports.CartShippingMethod = CartShippingMethod;
//# sourceMappingURL=CartShippingMethod.js.map