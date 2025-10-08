"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateErrorLog = void 0;
/**
 Error log entry for template processing failures
 * Records detailed information about errors that occur during template rendering or custom query execution, including stack traces, error messages, and context information for debugging and monitoring purposes.
 */
class TemplateErrorLog {
    /**
     Creates a new instance of TemplateErrorLog
     */
    constructor(data = {}) {
        this._id = data.id;
        this._stackTrace = data.stackTrace;
        this._createdAt = data.createdAt;
        this._eventInstance = data.eventInstance;
        this._topicName = data.topicName;
        this._errorType = data.errorType;
        this._errorMessage = data.errorMessage;
        this._templateId = data.templateId;
        this._fieldName = data.fieldName;
    }
    /**
     Unique identifier for the error log
     */
    get id() {
        return this._id;
    }
    /**
     Unique identifier for the error log
     */
    set id(value) {
        this._id = value;
    }
    /**
     Stack trace of the error
     */
    get stackTrace() {
        return this._stackTrace;
    }
    /**
     Stack trace of the error
     */
    set stackTrace(value) {
        this._stackTrace = value;
    }
    /**
     When the error occurred
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     When the error occurred
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Event instance data that caused the error
     */
    get eventInstance() {
        return this._eventInstance;
    }
    /**
     Event instance data that caused the error
     */
    set eventInstance(value) {
        this._eventInstance = value;
    }
    /**
     Topic name for the event
     */
    get topicName() {
        return this._topicName;
    }
    /**
     Topic name for the event
     */
    set topicName(value) {
        this._topicName = value;
    }
    /**
     Type of error that occurred
     */
    get errorType() {
        return this._errorType;
    }
    /**
     Type of error that occurred
     */
    set errorType(value) {
        this._errorType = value;
    }
    /**
     Error message
     */
    get errorMessage() {
        return this._errorMessage;
    }
    /**
     Error message
     */
    set errorMessage(value) {
        this._errorMessage = value;
    }
    /**
     ID of the template that caused the error
     */
    get templateId() {
        return this._templateId;
    }
    /**
     ID of the template that caused the error
     */
    set templateId(value) {
        this._templateId = value;
    }
    /**
     Name of the specific field that caused the render error
     */
    get fieldName() {
        return this._fieldName;
    }
    /**
     Name of the specific field that caused the render error
     */
    set fieldName(value) {
        this._fieldName = value;
    }
}
exports.TemplateErrorLog = TemplateErrorLog;
//# sourceMappingURL=TemplateErrorLog.js.map