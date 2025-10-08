"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatuses = void 0;
/**
 * @enum PaymentStatuses
 Enumeration for PaymentStatuses values
 */
var PaymentStatuses;
(function (PaymentStatuses) {
    PaymentStatuses["OPEN"] = "OPEN";
    PaymentStatuses["PENDING"] = "PENDING";
    PaymentStatuses["AUTHORIZED"] = "AUTHORIZED";
    PaymentStatuses["CANCELLED"] = "CANCELLED";
    PaymentStatuses["EXPIRED"] = "EXPIRED";
    PaymentStatuses["FAILED"] = "FAILED";
    PaymentStatuses["PAID"] = "PAID";
    PaymentStatuses["REFUNDED"] = "REFUNDED";
    PaymentStatuses["CHARGEBACK"] = "CHARGEBACK";
})(PaymentStatuses || (exports.PaymentStatuses = PaymentStatuses = {}));
//# sourceMappingURL=PaymentStatuses.js.map