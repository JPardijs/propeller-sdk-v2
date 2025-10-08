"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipment = void 0;
/**
 Object class for Shipment
 */
class Shipment {
    /**
     Creates a new instance of Shipment
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._expectedDeliveryAt = data.expectedDeliveryAt;
        this._status = data.status;
        this._orderId = data.orderId;
        this._items = data.items;
        this._trackAndTraces = data.trackAndTraces;
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
     Expected delivery date
     */
    get expectedDeliveryAt() {
        return this._expectedDeliveryAt;
    }
    /**
     Expected delivery date
     */
    set expectedDeliveryAt(value) {
        this._expectedDeliveryAt = value;
    }
    /**
     Shipment status
     */
    get status() {
        return this._status;
    }
    /**
     Shipment status
     */
    set status(value) {
        this._status = value;
    }
    /**
     The ID of the Order the shipment belongs to
     */
    get orderId() {
        return this._orderId;
    }
    /**
     The ID of the Order the shipment belongs to
     */
    set orderId(value) {
        this._orderId = value;
    }
    /**
     Shipment items
     */
    get items() {
        return this._items;
    }
    /**
     Shipment items
     */
    set items(value) {
        this._items = value;
    }
    /**
     Track and traces
     */
    get trackAndTraces() {
        return this._trackAndTraces;
    }
    /**
     Track and traces
     */
    set trackAndTraces(value) {
        this._trackAndTraces = value;
    }
}
exports.Shipment = Shipment;
//# sourceMappingURL=Shipment.js.map