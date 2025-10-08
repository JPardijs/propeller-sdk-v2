"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEventType = void 0;
/**
 * @enum EmailEventType
 Enumeration for EmailEventType values
 */
var EmailEventType;
(function (EmailEventType) {
    EmailEventType["ORDER_PLACED"] = "ORDER_PLACED";
    EmailEventType["ORDER_CONFIRMED"] = "ORDER_CONFIRMED";
    EmailEventType["ORDER_SHIPPED"] = "ORDER_SHIPPED";
    EmailEventType["ORDER_DELIVERED"] = "ORDER_DELIVERED";
    EmailEventType["PASSWORD_RESET"] = "PASSWORD_RESET";
    EmailEventType["WELCOME"] = "WELCOME";
    EmailEventType["NEWSLETTER"] = "NEWSLETTER";
})(EmailEventType || (exports.EmailEventType = EmailEventType = {}));
//# sourceMappingURL=EmailEventType.js.map