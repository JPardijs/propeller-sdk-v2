"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleFieldDefinitionGroup = void 0;
/**
 Represents a business rule field definition group
 */
class BusinessRuleFieldDefinitionGroup {
    /**
     Creates a new instance of BusinessRuleFieldDefinitionGroup
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._isRoot = data.isRoot;
        this._definitions = data.definitions;
    }
    /**
     The ID of the business rule field definition group
     */
    get id() {
        return this._id;
    }
    /**
     The ID of the business rule field definition group
     */
    set id(value) {
        this._id = value;
    }
    /**
     The name of the business rule field definition group
     */
    get name() {
        return this._name;
    }
    /**
     The name of the business rule field definition group
     */
    set name(value) {
        this._name = value;
    }
    /**
     Indicates whether the business rule field definition group is a root group or not
     */
    get isRoot() {
        return this._isRoot;
    }
    /**
     Indicates whether the business rule field definition group is a root group or not
     */
    set isRoot(value) {
        this._isRoot = value;
    }
    /**
     The business rule field definitions in the business rule field definition group
     */
    get definitions() {
        return this._definitions;
    }
    /**
     The business rule field definitions in the business rule field definition group
     */
    set definitions(value) {
        this._definitions = value;
    }
}
exports.BusinessRuleFieldDefinitionGroup = BusinessRuleFieldDefinitionGroup;
//# sourceMappingURL=BusinessRuleFieldDefinitionGroup.js.map