"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAttributeValueSearch = void 0;
/**
 Object class for CompanyAttributeValueSearch
 */
class CompanyAttributeValueSearch {
    /**
     Creates a new instance of CompanyAttributeValueSearch
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
    }
    /**
     AttributeValue id
     */
    get id() {
        return this._id;
    }
    /**
     AttributeValue id
     */
    set id(value) {
        this._id = value;
    }
    /**
     AttributeValue type
     */
    get type() {
        return this._type;
    }
    /**
     AttributeValue type
     */
    set type(value) {
        this._type = value;
    }
}
exports.CompanyAttributeValueSearch = CompanyAttributeValueSearch;
//# sourceMappingURL=CompanyAttributeValueSearch.js.map