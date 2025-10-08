"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleComplexExpression = void 0;
/**
 Represents a business rule  complex expression
 */
class BusinessRuleComplexExpression {
    /**
     Creates a new instance of BusinessRuleComplexExpression
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._operator = data.operator;
        this._action = data.action;
        this._field = data.field;
        this._path = data.path;
        this._number = data.number;
        this._expressions = data.expressions;
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
     The action to execute with this complex expression
          , either 'sum' a sub field that is present in the expression's path
          or 'count' to count the length of the filtered array.
     */
    get action() {
        return this._action;
    }
    /**
     The action to execute with this complex expression
          , either 'sum' a sub field that is present in the expression's path
          or 'count' to count the length of the filtered array.
     */
    set action(value) {
        this._action = value;
    }
    /**
     The path to the field to apply the action to in case the action equals 'sum'
     */
    get field() {
        return this._field;
    }
    /**
     The path to the field to apply the action to in case the action equals 'sum'
     */
    set field(value) {
        this._field = value;
    }
    /**
     The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression
     */
    get path() {
        return this._path;
    }
    /**
     The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression
     */
    set path(value) {
        this._path = value;
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
     expressions field
     */
    get expressions() {
        return this._expressions;
    }
    /**
     expressions field
     */
    set expressions(value) {
        this._expressions = value;
    }
}
exports.BusinessRuleComplexExpression = BusinessRuleComplexExpression;
//# sourceMappingURL=BusinessRuleComplexExpression.js.map