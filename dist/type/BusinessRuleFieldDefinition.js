"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleFieldDefinition = void 0;
/**
 Represents a business rule field definition
 */
class BusinessRuleFieldDefinition {
    /**
     Creates a new instance of BusinessRuleFieldDefinition
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._path = data.path;
        this._type = data.type;
        this._fields = data.fields;
        this._expressions = data.expressions;
    }
    /**
     The ID for this field definition
     */
    get id() {
        return this._id;
    }
    /**
     The ID for this field definition
     */
    set id(value) {
        this._id = value;
    }
    /**
     The descriptive name of the field
     */
    get name() {
        return this._name;
    }
    /**
     The descriptive name of the field
     */
    set name(value) {
        this._name = value;
    }
    /**
     The expected path to the field in the input payload
     */
    get path() {
        return this._path;
    }
    /**
     The expected path to the field in the input payload
     */
    set path(value) {
        this._path = value;
    }
    /**
     The expected type of the field
     */
    get type() {
        return this._type;
    }
    /**
     The expected type of the field
     */
    set type(value) {
        this._type = value;
    }
    /**
     The actionable sub-fields when the type is 'complex'
     */
    get fields() {
        return this._fields;
    }
    /**
     The actionable sub-fields when the type is 'complex'
     */
    set fields(value) {
        this._fields = value;
    }
    /**
     The potential sub-fields when the type is 'complex'
     */
    get expressions() {
        return this._expressions;
    }
    /**
     The potential sub-fields when the type is 'complex'
     */
    set expressions(value) {
        this._expressions = value;
    }
}
exports.BusinessRuleFieldDefinition = BusinessRuleFieldDefinition;
//# sourceMappingURL=BusinessRuleFieldDefinition.js.map