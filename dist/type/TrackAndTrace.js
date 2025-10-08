"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackAndTrace = void 0;
/**
 Object class for TrackAndTrace
 */
class TrackAndTrace {
    /**
     Creates a new instance of TrackAndTrace
     */
    constructor(data = {}) {
        this._carrierId = data.carrierId;
        this._carrier = data.carrier;
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._code = data.code;
        this._shipmentId = data.shipmentId;
    }
    /**
     Carrier id
     */
    get carrierId() {
        return this._carrierId;
    }
    /**
     Carrier id
     */
    set carrierId(value) {
        this._carrierId = value;
    }
    /**
     Get carrier for track and trace
     */
    get carrier() {
        return this._carrier;
    }
    /**
     Get carrier for track and trace
     */
    set carrier(value) {
        this._carrier = value;
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
     Code
     */
    get code() {
        return this._code;
    }
    /**
     Code
     */
    set code(value) {
        this._code = value;
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
}
exports.TrackAndTrace = TrackAndTrace;
//# sourceMappingURL=TrackAndTrace.js.map