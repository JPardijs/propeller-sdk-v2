"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurchargeType = void 0;
/**
 * @enum SurchargeType
 Types of surcharges that can be applied to orders or products
 */
var SurchargeType;
(function (SurchargeType) {
    /** Percentage-based surcharge */
    SurchargeType["PERCENTAGE"] = "PERCENTAGE";
    /** Fixed amount surcharge */
    SurchargeType["FIXED_AMOUNT"] = "FIXED_AMOUNT";
    /** Shipping surcharge */
    SurchargeType["SHIPPING"] = "SHIPPING";
    /** Handling fee surcharge */
    SurchargeType["HANDLING"] = "HANDLING";
    /** Payment processing fee */
    SurchargeType["PAYMENT_FEE"] = "PAYMENT_FEE";
    /** Environmental fee */
    SurchargeType["ENVIRONMENTAL"] = "ENVIRONMENTAL";
    /** Service charge */
    SurchargeType["SERVICE"] = "SERVICE";
})(SurchargeType || (exports.SurchargeType = SurchargeType = {}));
//# sourceMappingURL=SurchargeType.js.map