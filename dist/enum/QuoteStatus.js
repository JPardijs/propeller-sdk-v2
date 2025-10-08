"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteStatus = void 0;
/**
 * @enum QuoteStatus
 Status enumeration for quotes in the system
 */
var QuoteStatus;
(function (QuoteStatus) {
    /** Quote is in draft state and not yet sent */
    QuoteStatus["DRAFT"] = "DRAFT";
    /** Quote has been sent to customer */
    QuoteStatus["SENT"] = "SENT";
    /** Quote has been accepted by customer */
    QuoteStatus["ACCEPTED"] = "ACCEPTED";
    /** Quote has been rejected by customer */
    QuoteStatus["REJECTED"] = "REJECTED";
})(QuoteStatus || (exports.QuoteStatus = QuoteStatus = {}));
//# sourceMappingURL=QuoteStatus.js.map