"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64File = void 0;
/**
 Object class for Base64File
 */
class Base64File {
    /**
     Creates a new instance of Base64File
     */
    constructor(data = {}) {
        this._base64 = data.base64;
        this._contentType = data.contentType;
        this._fileName = data.fileName;
    }
    /**
     The base64 representation of the file.
     */
    get base64() {
        return this._base64;
    }
    /**
     The base64 representation of the file.
     */
    set base64(value) {
        this._base64 = value;
    }
    /**
     The contentType of the base64 content.
     */
    get contentType() {
        return this._contentType;
    }
    /**
     The contentType of the base64 content.
     */
    set contentType(value) {
        this._contentType = value;
    }
    /**
     Indication of the fileName to use when converting the base64 to a file.
     */
    get fileName() {
        return this._fileName;
    }
    /**
     Indication of the fileName to use when converting the base64 to a file.
     */
    set fileName(value) {
        this._fileName = value;
    }
}
exports.Base64File = Base64File;
//# sourceMappingURL=Base64File.js.map