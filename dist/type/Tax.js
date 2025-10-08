"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = void 0;
/**
 Object class for Tax
 */
class Tax {
    /**
     Creates a new instance of Tax
     */
    constructor(data = {}) {
        this._id = data.id;
        this._shopId = data.shopId;
        this._code = data.code;
        this._zone = data.zone;
        this._percentage = data.percentage;
        this._exportCode = data.exportCode;
        this._createdAt = data.createdAt;
        this._createdBy = data.createdBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._lastModifiedBy = data.lastModifiedBy;
    }
    /**
     Tax primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Tax primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Shop identifier for the tax to apply to
     */
    get shopId() {
        return this._shopId;
    }
    /**
     Shop identifier for the tax to apply to
     */
    set shopId(value) {
        this._shopId = value;
    }
    /**
     Tax code
     */
    get code() {
        return this._code;
    }
    /**
     Tax code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Tax zone
     */
    get zone() {
        return this._zone;
    }
    /**
     Tax zone
     */
    set zone(value) {
        this._zone = value;
    }
    /**
     Tax percentage
     */
    get percentage() {
        return this._percentage;
    }
    /**
     Tax percentage
     */
    set percentage(value) {
        this._percentage = value;
    }
    /**
     Tax export code
     */
    get exportCode() {
        return this._exportCode;
    }
    /**
     Tax export code
     */
    set exportCode(value) {
        this._exportCode = value;
    }
    /**
     Tax initial creation timestamp
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Tax initial creation timestamp
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Reference to the user that created the tax initially
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     Reference to the user that created the tax initially
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     Tax last update timestamp
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Tax last update timestamp
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Reference to the user that last modified the tax
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     Reference to the user that last modified the tax
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
}
exports.Tax = Tax;
//# sourceMappingURL=Tax.js.map