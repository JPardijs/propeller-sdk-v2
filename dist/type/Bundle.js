"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundle = void 0;
/**
 Object class for Bundle
 */
class Bundle {
    /**
     Creates a new instance of Bundle
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._discount = data.discount;
        this._condition = data.condition;
        this._price = data.price;
        this._items = data.items;
        this._createdAt = data.createdAt;
        this._createdBy = data.createdBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._lastModifiedBy = data.lastModifiedBy;
    }
    /**
     Bundle primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Bundle primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Bundle name
     */
    get name() {
        return this._name;
    }
    /**
     Bundle name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Bundle description
     */
    get description() {
        return this._description;
    }
    /**
     Bundle description
     */
    set description(value) {
        this._description = value;
    }
    /**
     Bundle discount amount
     */
    get discount() {
        return this._discount;
    }
    /**
     Bundle discount amount
     */
    set discount(value) {
        this._discount = value;
    }
    /**
     Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL).
     */
    get condition() {
        return this._condition;
    }
    /**
     Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL).
     */
    set condition(value) {
        this._condition = value;
    }
    /**
     Bundle price
     */
    get price() {
        return this._price;
    }
    /**
     Bundle price
     */
    set price(value) {
        this._price = value;
    }
    /**
     Items in the bundle.
     */
    get items() {
        return this._items;
    }
    /**
     Items in the bundle.
     */
    set items(value) {
        this._items = value;
    }
    /**
     Bundle creation date [default: now]
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Bundle creation date [default: now]
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Bundle creator
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     Bundle creator
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     Last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Last modified by
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     Last modified by
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
}
exports.Bundle = Bundle;
//# sourceMappingURL=Bundle.js.map