"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedAttachment = void 0;
/**
 Object class for LocalizedAttachment
 */
class LocalizedAttachment {
    /**
     Creates a new instance of LocalizedAttachment
     */
    constructor(data = {}) {
        this._language = data.language;
        this._originalUrl = data.originalUrl;
        this._mimeType = data.mimeType;
    }
    /**
     Attachment language
     */
    get language() {
        return this._language;
    }
    /**
     Attachment language
     */
    set language(value) {
        this._language = value;
    }
    /**
     Original Attachment url
     */
    get originalUrl() {
        return this._originalUrl;
    }
    /**
     Original Attachment url
     */
    set originalUrl(value) {
        this._originalUrl = value;
    }
    /**
     The MIME type of the Attachment.
     */
    get mimeType() {
        return this._mimeType;
    }
    /**
     The MIME type of the Attachment.
     */
    set mimeType(value) {
        this._mimeType = value;
    }
}
exports.LocalizedAttachment = LocalizedAttachment;
//# sourceMappingURL=LocalizedAttachment.js.map