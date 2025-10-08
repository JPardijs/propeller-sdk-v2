"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleItem = void 0;
/**
 Object class for BundleItem
 */
class BundleItem {
    /**
     Creates a new instance of BundleItem
     */
    constructor(data = {}) {
        this._productId = data.productId;
        this._price = data.price;
        this._isLeader = data.isLeader;
        this._createdAt = data.createdAt;
        this._createdBy = data.createdBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._lastModifiedBy = data.lastModifiedBy;
        this._product = data.product;
    }
    /**
     The bundles primary product identifier
     */
    get productId() {
        return this._productId;
    }
    /**
     The bundles primary product identifier
     */
    set productId(value) {
        this._productId = value;
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
     Indicates whether the product is leader for this bundle.
     */
    get isLeader() {
        return this._isLeader;
    }
    /**
     Indicates whether the product is leader for this bundle.
     */
    set isLeader(value) {
        this._isLeader = value;
    }
    /**
     Bundle creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Bundle creation date
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
exports.BundleItem = BundleItem;
//# sourceMappingURL=BundleItem.js.map