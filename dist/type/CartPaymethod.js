"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartPaymethod = void 0;
/**
 Object class for CartPaymethod
 */
class CartPaymethod {
    /**
     Creates a new instance of CartPaymethod
     */
    constructor(data = {}) {
        this._code = data.code;
        this._name = data.name;
        this._externalCode = data.externalCode;
        this._type = data.type;
        this._taxCode = data.taxCode;
        this._price = data.price;
    }
    /**
     Paymethod code
     */
    get code() {
        return this._code;
    }
    /**
     Paymethod code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Paymethod name
     */
    get name() {
        return this._name;
    }
    /**
     Paymethod name
     */
    set name(value) {
        this._name = value;
    }
    /**
     External code
     */
    get externalCode() {
        return this._externalCode;
    }
    /**
     External code
     */
    set externalCode(value) {
        this._externalCode = value;
    }
    /**
     Paymethod type
     */
    get type() {
        return this._type;
    }
    /**
     Paymethod type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Tax code
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     Tax code
     */
    set taxCode(value) {
        this._taxCode = value;
    }
    /**
     Paymethod price
     */
    get price() {
        return this._price;
    }
    /**
     Paymethod price
     */
    set price(value) {
        this._price = value;
    }
}
exports.CartPaymethod = CartPaymethod;
//# sourceMappingURL=CartPaymethod.js.map