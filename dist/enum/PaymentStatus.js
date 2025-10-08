"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = void 0;
/**
 * @enum PaymentStatus
 Available payment statuses
 */
var PaymentStatus;
(function (PaymentStatus) {
    /** Payment is open and awaiting action */
    PaymentStatus["OPEN"] = "OPEN";
    /** Payment is pending confirmation */
    PaymentStatus["PENDING"] = "PENDING";
    /** Payment has been authorized but not yet captured */
    PaymentStatus["AUTHORIZED"] = "AUTHORIZED";
    /** Payment has been cancelled */
    PaymentStatus["CANCELLED"] = "CANCELLED";
    /** Payment authorization has expired */
    PaymentStatus["EXPIRED"] = "EXPIRED";
    /** Payment has failed */
    PaymentStatus["FAILED"] = "FAILED";
    /** Payment has been successfully completed */
    PaymentStatus["PAID"] = "PAID";
    /** Payment has been refunded */
    PaymentStatus["REFUNDED"] = "REFUNDED";
    /** Payment has been charged back */
    PaymentStatus["CHARGEBACK"] = "CHARGEBACK";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
//# sourceMappingURL=PaymentStatus.js.map