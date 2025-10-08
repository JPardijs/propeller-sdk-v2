"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneTaxCode = void 0;
/**
 Object class for ZoneTaxCode
 */
class ZoneTaxCode {
    /**
     Creates a new instance of ZoneTaxCode
     */
    constructor(data = {}) {
        this._id = data.id;
        this._priceId = data.priceId;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._zone = data.zone;
        this._taxCode = data.taxCode;
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
     Price foreign identifier
     */
    get priceId() {
        return this._priceId;
    }
    /**
     Price foreign identifier
     */
    set priceId(value) {
        this._priceId = value;
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
     Zone code
     */
    get zone() {
        return this._zone;
    }
    /**
     Zone code
     */
    set zone(value) {
        this._zone = value;
    }
    /**
     Tax code for the specified zone
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     Tax code for the specified zone
     */
    set taxCode(value) {
        this._taxCode = value;
    }
}
exports.ZoneTaxCode = ZoneTaxCode;
//# sourceMappingURL=ZoneTaxCode.js.map