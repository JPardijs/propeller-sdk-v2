"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartUnOrderableItem = void 0;
/**
 Object class for CartUnOrderableItem
 */
class CartUnOrderableItem {
    /**
     Creates a new instance of CartUnOrderableItem
     */
    constructor(data = {}) {
        this._itemId = data.itemId;
        this._parentItemUUID = data.parentItemUUID;
        this._priceMode = data.priceMode;
        this._quantity = data.quantity;
        this._price = data.price;
        this._notes = data.notes;
        this._productId = data.productId;
        this._clusterId = data.clusterId;
        this._bundleId = data.bundleId;
    }
    /**
     Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
     */
    get itemId() {
        return this._itemId;
    }
    /**
     Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
     */
    set itemId(value) {
        this._itemId = value;
    }
    /**
     Id of the parent cart item.
     */
    get parentItemUUID() {
        return this._parentItemUUID;
    }
    /**
     Id of the parent cart item.
     */
    set parentItemUUID(value) {
        this._parentItemUUID = value;
    }
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    get priceMode() {
        return this._priceMode;
    }
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    set priceMode(value) {
        this._priceMode = value;
    }
    /**
     Quantity for the cart item
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Quantity for the cart item
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Price for the cart item, used when priceMode === EXTERNAL
     */
    get price() {
        return this._price;
    }
    /**
     Price for the cart item, used when priceMode === EXTERNAL
     */
    set price(value) {
        this._price = value;
    }
    /**
     Customer notes for the cart item
     */
    get notes() {
        return this._notes;
    }
    /**
     Customer notes for the cart item
     */
    set notes(value) {
        this._notes = value;
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
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    get clusterId() {
        return this._clusterId;
    }
    /**
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    /**
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    get bundleId() {
        return this._bundleId;
    }
    /**
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    set bundleId(value) {
        this._bundleId = value;
    }
}
exports.CartUnOrderableItem = CartUnOrderableItem;
//# sourceMappingURL=CartUnOrderableItem.js.map