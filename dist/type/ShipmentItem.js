"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentItem = void 0;
/**
 Object class for ShipmentItem
 */
class ShipmentItem {
    /**
     Creates a new instance of ShipmentItem
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._name = data.name;
        this._sku = data.sku;
        this._quantity = data.quantity;
        this._shipmentId = data.shipmentId;
        this._orderItemId = data.orderItemId;
        this._orderItem = data.orderItem;
    }
    /**
     Unique identifier
     */
    get id() {
        return this._id;
    }
    /**
     Unique identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Creation date
     */
    set createdAt(value) {
        this._createdAt = value;
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
     Shipment item name
     */
    get name() {
        return this._name;
    }
    /**
     Shipment item name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Product SKU
     */
    get sku() {
        return this._sku;
    }
    /**
     Product SKU
     */
    set sku(value) {
        this._sku = value;
    }
    /**
     Shipment item quantity
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Shipment item quantity
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Shipment unique identifier
     */
    get shipmentId() {
        return this._shipmentId;
    }
    /**
     Shipment unique identifier
     */
    set shipmentId(value) {
        this._shipmentId = value;
    }
    /**
     Order item id
     */
    get orderItemId() {
        return this._orderItemId;
    }
    /**
     Order item id
     */
    set orderItemId(value) {
        this._orderItemId = value;
    }
    /**
     orderItem field
     */
    get orderItem() {
        return this._orderItem;
    }
    /**
     orderItem field
     */
    set orderItem(value) {
        this._orderItem = value;
    }
}
exports.ShipmentItem = ShipmentItem;
//# sourceMappingURL=ShipmentItem.js.map