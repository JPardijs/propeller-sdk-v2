"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
/**
 * @enum LogLevel
 Log level enumeration for system logging
 */
var LogLevel;
(function (LogLevel) {
    /** Debug level for detailed diagnostic information */
    LogLevel["DEBUG"] = "DEBUG";
    /** Info level for general information messages */
    LogLevel["INFO"] = "INFO";
    /** Warning level for potentially harmful situations */
    LogLevel["WARN"] = "WARN";
    /** Error level for error events that allow application to continue */
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
//# sourceMappingURL=LogLevel.js.map