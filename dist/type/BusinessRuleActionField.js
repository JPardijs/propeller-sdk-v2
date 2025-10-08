"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleActionField = void 0;
/**
 Object class for BusinessRuleActionField
 */
class BusinessRuleActionField {
    /**
     Creates a new instance of BusinessRuleActionField
     */
    constructor(data = {}) {
        this._name = data.name;
        this._path = data.path;
    }
    /**
     name field
     */
    get name() {
        return this._name;
    }
    /**
     name field
     */
    set name(value) {
        this._name = value;
    }
    /**
     path field
     */
    get path() {
        return this._path;
    }
    /**
     path field
     */
    set path(value) {
        this._path = value;
    }
}
exports.BusinessRuleActionField = BusinessRuleActionField;
//# sourceMappingURL=BusinessRuleActionField.js.map