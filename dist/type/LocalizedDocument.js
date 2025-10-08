"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedDocument = void 0;
/**
 Object class for LocalizedDocument
 */
class LocalizedDocument {
    /**
     Creates a new instance of LocalizedDocument
     */
    constructor(data = {}) {
        this._language = data.language;
        this._originalUrl = data.originalUrl;
        this._mimeType = data.mimeType;
    }
    /**
     Document language
     */
    get language() {
        return this._language;
    }
    /**
     Document language
     */
    set language(value) {
        this._language = value;
    }
    /**
     Original document url
     */
    get originalUrl() {
        return this._originalUrl;
    }
    /**
     Original document url
     */
    set originalUrl(value) {
        this._originalUrl = value;
    }
    /**
     The MIME type of the document.
     */
    get mimeType() {
        return this._mimeType;
    }
    /**
     The MIME type of the document.
     */
    set mimeType(value) {
        this._mimeType = value;
    }
}
exports.LocalizedDocument = LocalizedDocument;
//# sourceMappingURL=LocalizedDocument.js.map