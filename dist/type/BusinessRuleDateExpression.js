"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleDateExpression = void 0;
/**
 Represents a business rule date expression
 */
class BusinessRuleDateExpression {
    /**
     Creates a new instance of BusinessRuleDateExpression
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._number = data.number;
        this._date = data.date;
        this._string = data.string;
        this._operator = data.operator;
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
     Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months
     */
    get number() {
        return this._number;
    }
    /**
     Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months
     */
    set number(value) {
        this._number = value;
    }
    /**
     Use when operator is before or after.
     */
    get date() {
        return this._date;
    }
    /**
     Use when operator is before or after.
     */
    set date(value) {
        this._date = value;
    }
    /**
     Use on time based operators, 00:00:00 24h format.
     */
    get string() {
        return this._string;
    }
    /**
     Use on time based operators, 00:00:00 24h format.
     */
    set string(value) {
        this._string = value;
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
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options.
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
        Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options.
     */
    set path(value) {
        this._path = value;
    }
}
exports.BusinessRuleDateExpression = BusinessRuleDateExpression;
//# sourceMappingURL=BusinessRuleDateExpression.js.map