"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeType = void 0;
/**
 * @enum AttributeType
 Types of attributes supported in the system
 */
var AttributeType;
(function (AttributeType) {
    /** Text/string attribute type */
    AttributeType["TEXT"] = "TEXT";
    /** Enumeration attribute type with predefined values */
    AttributeType["ENUM"] = "ENUM";
    /** Color attribute type for hex/rgb values */
    AttributeType["COLOR"] = "COLOR";
    /** Date and time attribute type */
    AttributeType["DATETIME"] = "DATETIME";
    /** Integer number attribute type */
    AttributeType["INT"] = "INT";
    /** Decimal/float number attribute type */
    AttributeType["DECIMAL"] = "DECIMAL";
})(AttributeType || (exports.AttributeType = AttributeType = {}));
//# sourceMappingURL=AttributeType.js.map