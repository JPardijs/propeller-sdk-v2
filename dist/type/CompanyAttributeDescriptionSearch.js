"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAttributeDescriptionSearch = void 0;
/**
 Object class for CompanyAttributeDescriptionSearch
 */
class CompanyAttributeDescriptionSearch {
    /**
     Creates a new instance of CompanyAttributeDescriptionSearch
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
    }
    /**
     AttributeDescription id
     */
    get id() {
        return this._id;
    }
    /**
     AttributeDescription id
     */
    set id(value) {
        this._id = value;
    }
    /**
     Descriptive identifier for this AttributeDescription
     */
    get name() {
        return this._name;
    }
    /**
     Descriptive identifier for this AttributeDescription
     */
    set name(value) {
        this._name = value;
    }
}
exports.CompanyAttributeDescriptionSearch = CompanyAttributeDescriptionSearch;
//# sourceMappingURL=CompanyAttributeDescriptionSearch.js.map