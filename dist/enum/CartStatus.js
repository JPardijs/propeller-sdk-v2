"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartStatus = void 0;
/**
 * @enum CartStatus
 Status enumeration for shopping carts
 */
var CartStatus;
(function (CartStatus) {
    /** Cart is open and items can be added/modified */
    CartStatus["OPEN"] = "OPEN";
    /** Cart is awaiting purchase authorization */
    CartStatus["PENDING_PURCHASE_AUTHORIZATION"] = "PENDING_PURCHASE_AUTHORIZATION";
})(CartStatus || (exports.CartStatus = CartStatus = {}));
//# sourceMappingURL=CartStatus.js.map