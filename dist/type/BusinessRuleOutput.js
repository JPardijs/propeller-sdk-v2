"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleOutput = void 0;
/**
 Object class for BusinessRuleOutput
 */
class BusinessRuleOutput {
    /**
     Creates a new instance of BusinessRuleOutput
     */
    constructor(data = {}) {
        this._type = data.type;
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
    }
    /**
     type field
     */
    get type() {
        return this._type;
    }
    /**
     type field
     */
    set type(value) {
        this._type = value;
    }
    /**
     id field
     */
    get id() {
        return this._id;
    }
    /**
     id field
     */
    set id(value) {
        this._id = value;
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
     description field
     */
    get description() {
        return this._description;
    }
    /**
     description field
     */
    set description(value) {
        this._description = value;
    }
}
exports.BusinessRuleOutput = BusinessRuleOutput;
//# sourceMappingURL=BusinessRuleOutput.js.map