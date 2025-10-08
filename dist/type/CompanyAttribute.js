"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAttribute = void 0;
/**
 Object class for CompanyAttribute
 */
class CompanyAttribute {
    /**
     Creates a new instance of CompanyAttribute
     */
    constructor(data = {}) {
        this._id = data.id;
        this._value = data.value;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
        this._attributeDescription = data.attributeDescription;
        this._companyId = data.companyId;
    }
    /**
     The ID of the attribute
     */
    get id() {
        return this._id;
    }
    /**
     The ID of the attribute
     */
    set id(value) {
        this._id = value;
    }
    /**
     The value of the attribute
     */
    get value() {
        return this._value;
    }
    /**
     The value of the attribute
     */
    set value(value) {
        this._value = value;
    }
    /**
     The date when the attribute was created
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The date when the attribute was created
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The date when the attribute was last modified
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The date when the attribute was last modified
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     The ID of the user that created the attribute
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     The ID of the user that created the attribute
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     The ID of the user that last modified the attribute
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     The ID of the user that last modified the attribute
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     attributeDescription field
     */
    get attributeDescription() {
        return this._attributeDescription;
    }
    /**
     attributeDescription field
     */
    set attributeDescription(value) {
        this._attributeDescription = value;
    }
    /**
     The ID of the company this attribute belongs to
     */
    get companyId() {
        return this._companyId;
    }
    /**
     The ID of the company this attribute belongs to
     */
    set companyId(value) {
        this._companyId = value;
    }
}
exports.CompanyAttribute = CompanyAttribute;
//# sourceMappingURL=CompanyAttribute.js.map