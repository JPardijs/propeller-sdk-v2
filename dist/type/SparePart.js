"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePart = void 0;
/**
 Object class for SparePart
 */
class SparePart {
    /**
     Creates a new instance of SparePart
     */
    constructor(data = {}) {
        this._id = data.id;
        this._sku = data.sku;
        this._quantity = data.quantity;
        this._name = data.name;
        this._product = data.product;
    }
    /**
     Spare Part identifier
     */
    get id() {
        return this._id;
    }
    /**
     Spare Part identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Spare Part SKU
     */
    get sku() {
        return this._sku;
    }
    /**
     Spare Part SKU
     */
    set sku(value) {
        this._sku = value;
    }
    /**
     Spare Part quantity
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Spare Part quantity
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Spare Part name
     */
    get name() {
        return this._name;
    }
    /**
     Spare Part name
     */
    set name(value) {
        this._name = value;
    }
    /**
     product field
     */
    get product() {
        return this._product;
    }
    /**
     product field
     */
    set product(value) {
        this._product = value;
    }
}
exports.SparePart = SparePart;
//# sourceMappingURL=SparePart.js.map