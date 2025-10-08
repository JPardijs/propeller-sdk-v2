"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventToWebHookConfig = void 0;
/**
 The configuration for posting a payload to a WebHook when an event gets triggered which has the url as a field to store where to post the payload to.
 */
class EventToWebHookConfig {
    /**
     Creates a new instance of EventToWebHookConfig
     */
    constructor(data = {}) {
        this._id = data.id;
        this._trigger = data.trigger;
        this._code = data.code;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
        this._names = data.names;
        this._url = data.url;
    }
    /**
     The ID of the event, uuid v7 format
     */
    get id() {
        return this._id;
    }
    /**
     The ID of the event, uuid v7 format
     */
    set id(value) {
        this._id = value;
    }
    /**
     The event to trigger the action defined in the event action config
     */
    get trigger() {
        return this._trigger;
    }
    /**
     The event to trigger the action defined in the event action config
     */
    set trigger(value) {
        this._trigger = value;
    }
    /**
     The event code to use when the trigger is [CUSTOM_EVENT]
     */
    get code() {
        return this._code;
    }
    /**
     The event code to use when the trigger is [CUSTOM_EVENT]
     */
    set code(value) {
        this._code = value;
    }
    /**
     The creation date of this EventActionConfig
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The creation date of this EventActionConfig
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The last modified date of this EventActionConfig
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The last modified date of this EventActionConfig
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     ID of the user who created this EventActionConfig
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     ID of the user who created this EventActionConfig
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     ID of the user who last modified this EventActionConfig
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     ID of the user who last modified this EventActionConfig
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     names field
     */
    get names() {
        return this._names;
    }
    /**
     names field
     */
    set names(value) {
        this._names = value;
    }
    /**
     The URL of the webhook to send the payload to
     */
    get url() {
        return this._url;
    }
    /**
     The URL of the webhook to send the payload to
     */
    set url(value) {
        this._url = value;
    }
}
exports.EventToWebHookConfig = EventToWebHookConfig;
//# sourceMappingURL=EventToWebHookConfig.js.map