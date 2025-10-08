"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentStatus = void 0;
/**
 * @enum ShipmentStatus
 Shipment status enumeration
 */
var ShipmentStatus;
(function (ShipmentStatus) {
    /** Shipment has been created */
    ShipmentStatus["CREATED"] = "CREATED";
    /** Shipment is being processed */
    ShipmentStatus["PROCESSING"] = "PROCESSING";
    /** Shipment is in transit */
    ShipmentStatus["IN_TRANSIT"] = "IN_TRANSIT";
    /** Shipment is out for delivery */
    ShipmentStatus["OUT_FOR_DELIVERY"] = "OUT_FOR_DELIVERY";
    /** Shipment has been delivered */
    ShipmentStatus["DELIVERED"] = "DELIVERED";
    /** Shipment has been canceled */
    ShipmentStatus["CANCELED"] = "CANCELED";
    /** Shipment has been partially delivered */
    ShipmentStatus["PARTIALLY_DELIVERED"] = "PARTIALLY_DELIVERED";
    /** Delivery attempt failed */
    ShipmentStatus["FAILED_DELIVERY"] = "FAILED_DELIVERY";
    /** Shipment has an exception */
    ShipmentStatus["EXCEPTION"] = "EXCEPTION";
})(ShipmentStatus || (exports.ShipmentStatus = ShipmentStatus = {}));
//# sourceMappingURL=ShipmentStatus.js.map