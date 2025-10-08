"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAttributeSearch = void 0;
/**
 Object class for CompanyAttributeSearch
 */
class CompanyAttributeSearch {
    /**
     Creates a new instance of CompanyAttributeSearch
     */
    constructor(data = {}) {
        this._id = data.id;
        this._value = data.value;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
        this._attributeDescription = data.attributeDescription;
    }
    /**
     Attribute id
     */
    get id() {
        return this._id;
    }
    /**
     Attribute id
     */
    set id(value) {
        this._id = value;
    }
    /**
     Attribute value
     */
    get value() {
        return this._value;
    }
    /**
     Attribute value
     */
    set value(value) {
        this._value = value;
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
     Created by id
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     Created by id
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     Last modified by id
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     Last modified by id
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     Attribute Description
     */
    get attributeDescription() {
        return this._attributeDescription;
    }
    /**
     Attribute Description
     */
    set attributeDescription(value) {
        this._attributeDescription = value;
    }
}
exports.CompanyAttributeSearch = CompanyAttributeSearch;
//# sourceMappingURL=CompanyAttributeSearch.js.map