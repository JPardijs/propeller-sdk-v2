"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressType = void 0;
/**
 * @enum AddressType
 Types of addresses used in the system
 */
var AddressType;
(function (AddressType) {
    /** Delivery address for shipping orders */
    AddressType["delivery"] = "delivery";
    /** Invoice/billing address for financial transactions */
    AddressType["invoice"] = "invoice";
    /** Home address of the customer */
    AddressType["home"] = "home";
})(AddressType || (exports.AddressType = AddressType = {}));
//# sourceMappingURL=AddressType.js.map