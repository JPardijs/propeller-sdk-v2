"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedImage = void 0;
/**
 Object class for LocalizedImage
 */
class LocalizedImage {
    /**
     Creates a new instance of LocalizedImage
     */
    constructor(data = {}) {
        this._language = data.language;
        this._originalUrl = data.originalUrl;
        this._mimeType = data.mimeType;
    }
    /**
     Image language
     */
    get language() {
        return this._language;
    }
    /**
     Image language
     */
    set language(value) {
        this._language = value;
    }
    /**
     Original image url
     */
    get originalUrl() {
        return this._originalUrl;
    }
    /**
     Original image url
     */
    set originalUrl(value) {
        this._originalUrl = value;
    }
    /**
     The MIME type of the image.
     */
    get mimeType() {
        return this._mimeType;
    }
    /**
     The MIME type of the image.
     */
    set mimeType(value) {
        this._mimeType = value;
    }
}
exports.LocalizedImage = LocalizedImage;
//# sourceMappingURL=LocalizedImage.js.map