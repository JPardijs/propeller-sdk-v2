"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleArrayExpression = void 0;
/**
 Represents a business rule array expression
 */
class BusinessRuleArrayExpression {
    /**
     Creates a new instance of BusinessRuleArrayExpression
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._operator = data.operator;
        this._string = data.string;
        this._number = data.number;
        this._path = data.path;
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
     operator field
     */
    get operator() {
        return this._operator;
    }
    /**
     operator field
     */
    set operator(value) {
        this._operator = value;
    }
    /**
     string field
     */
    get string() {
        return this._string;
    }
    /**
     string field
     */
    set string(value) {
        this._string = value;
    }
    /**
     number field
     */
    get number() {
        return this._number;
    }
    /**
     number field
     */
    set number(value) {
        this._number = value;
    }
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/array for options.
     */
    get path() {
        return this._path;
    }
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/array for options.
     */
    set path(value) {
        this._path = value;
    }
}
exports.BusinessRuleArrayExpression = BusinessRuleArrayExpression;
//# sourceMappingURL=BusinessRuleArrayExpression.js.map