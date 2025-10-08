"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderType = void 0;
/**
 * @enum OrderType
 Types of orders in the e-commerce system
 */
var OrderType;
(function (OrderType) {
    /** Dropshipment order - shipped directly from supplier */
    OrderType["dropshipment"] = "dropshipment";
    /** Purchase order - standard buying transaction */
    OrderType["purchase"] = "purchase";
    /** Quotation order - price quote request */
    OrderType["quotation"] = "quotation";
    /** Stock order - from available inventory */
    OrderType["stock"] = "stock";
})(OrderType || (exports.OrderType = OrderType = {}));
//# sourceMappingURL=OrderType.js.map