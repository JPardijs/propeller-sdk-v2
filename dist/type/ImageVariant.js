"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageVariant = void 0;
/**
 Object class for ImageVariant
 */
class ImageVariant {
    /**
     Creates a new instance of ImageVariant
     */
    constructor(data = {}) {
        this._name = data.name;
        this._language = data.language;
        this._url = data.url;
        this._mimeType = data.mimeType;
    }
    /**
     Friendly image name
     */
    get name() {
        return this._name;
    }
    /**
     Friendly image name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Image variant language
     */
    get language() {
        return this._language;
    }
    /**
     Image variant language
     */
    set language(value) {
        this._language = value;
    }
    /**
     Image variant transformation computed url
     */
    get url() {
        return this._url;
    }
    /**
     Image variant transformation computed url
     */
    set url(value) {
        this._url = value;
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
exports.ImageVariant = ImageVariant;
//# sourceMappingURL=ImageVariant.js.map