"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTrigger = void 0;
/**
* @enum EventTrigger
Enumeration for EventTrigger values
*/
var EventTrigger;
(function (EventTrigger) {
    EventTrigger["ORDER_CREATED"] = "ORDER_CREATED";
    EventTrigger["ORDER_UPDATED"] = "ORDER_UPDATED";
    EventTrigger["ORDER_CANCELLED"] = "ORDER_CANCELLED";
    EventTrigger["CUSTOMER_REGISTERED"] = "CUSTOMER_REGISTERED";
    EventTrigger["CART_ABANDONED"] = "CART_ABANDONED";
    EventTrigger["PAYMENT_COMPLETED"] = "PAYMENT_COMPLETED";
    EventTrigger["PRODUCT_VIEWED"] = "PRODUCT_VIEWED";
})(EventTrigger || (exports.EventTrigger = EventTrigger = {}));
//# sourceMappingURL=EventTrigger.js.map