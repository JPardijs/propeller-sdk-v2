"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayMethod = void 0;
/**
 Object class for PayMethod
 */
class PayMethod {
    /**
     Creates a new instance of PayMethod
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._names = data.names;
        this._externalCode = data.externalCode;
        this._logo = data.logo;
    }
    /**
     Primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Name per language
     */
    get names() {
        return this._names;
    }
    /**
     Name per language
     */
    set names(value) {
        this._names = value;
    }
    /**
     External code
     */
    get externalCode() {
        return this._externalCode;
    }
    /**
     External code
     */
    set externalCode(value) {
        this._externalCode = value;
    }
    /**
     Logo url
     */
    get logo() {
        return this._logo;
    }
    /**
     Logo url
     */
    set logo(value) {
        this._logo = value;
    }
}
exports.PayMethod = PayMethod;
//# sourceMappingURL=PayMethod.js.map