"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypes = void 0;
/**
 * @enum TransactionTypes
 Enumeration for TransactionTypes values
 */
var TransactionTypes;
(function (TransactionTypes) {
    TransactionTypes["AUTHORIZATION"] = "AUTHORIZATION";
    TransactionTypes["CANCEL_AUTHORIZATION"] = "CANCEL_AUTHORIZATION";
    TransactionTypes["PAY"] = "PAY";
    TransactionTypes["REFUND"] = "REFUND";
    TransactionTypes["CHARGEBACK"] = "CHARGEBACK";
})(TransactionTypes || (exports.TransactionTypes = TransactionTypes = {}));
//# sourceMappingURL=TransactionTypes.js.map