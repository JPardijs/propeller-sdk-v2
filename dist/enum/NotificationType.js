"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = void 0;
/**
 * @enum NotificationType
 Types of notifications that can be sent to users
 */
var NotificationType;
(function (NotificationType) {
    /** Email notification */
    NotificationType["EMAIL"] = "EMAIL";
    /** SMS text message notification */
    NotificationType["SMS"] = "SMS";
    /** Push notification to mobile device */
    NotificationType["PUSH"] = "PUSH";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
//# sourceMappingURL=NotificationType.js.map