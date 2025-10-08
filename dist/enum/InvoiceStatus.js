"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceStatus = void 0;
/**
 * @enum InvoiceStatus
 Status enumeration for invoices in the system
 */
var InvoiceStatus;
(function (InvoiceStatus) {
    /** Invoice has been created but not yet sent */
    InvoiceStatus["DRAFT"] = "DRAFT";
    /** Invoice has been sent to customer */
    InvoiceStatus["SENT"] = "SENT";
    /** Invoice payment is pending */
    InvoiceStatus["PENDING"] = "PENDING";
    /** Invoice has been paid in full */
    InvoiceStatus["PAID"] = "PAID";
    /** Invoice is partially paid */
    InvoiceStatus["PARTIALLY_PAID"] = "PARTIALLY_PAID";
    /** Invoice is overdue */
    InvoiceStatus["OVERDUE"] = "OVERDUE";
    /** Invoice has been cancelled */
    InvoiceStatus["CANCELLED"] = "CANCELLED";
    /** Invoice has been refunded */
    InvoiceStatus["REFUNDED"] = "REFUNDED";
})(InvoiceStatus || (exports.InvoiceStatus = InvoiceStatus = {}));
//# sourceMappingURL=InvoiceStatus.js.map