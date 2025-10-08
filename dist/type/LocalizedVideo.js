"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedVideo = void 0;
/**
 Object class for LocalizedVideo
 */
class LocalizedVideo {
    /**
     Creates a new instance of LocalizedVideo
     */
    constructor(data = {}) {
        this._language = data.language;
        this._uri = data.uri;
        this._mimeType = data.mimeType;
    }
    /**
     Video language
     */
    get language() {
        return this._language;
    }
    /**
     Video language
     */
    set language(value) {
        this._language = value;
    }
    /**
     Video URI
     */
    get uri() {
        return this._uri;
    }
    /**
     Video URI
     */
    set uri(value) {
        this._uri = value;
    }
    /**
     The MIME type of the video.
     */
    get mimeType() {
        return this._mimeType;
    }
    /**
     The MIME type of the video.
     */
    set mimeType(value) {
        this._mimeType = value;
    }
}
exports.LocalizedVideo = LocalizedVideo;
//# sourceMappingURL=LocalizedVideo.js.map