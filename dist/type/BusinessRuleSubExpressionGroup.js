"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleSubExpressionGroup = void 0;
/**
 Represents a business rule expression group when used as sub-expressions in a complex expression
 */
class BusinessRuleSubExpressionGroup {
    /**
     Creates a new instance of BusinessRuleSubExpressionGroup
     */
    constructor(data = {}) {
        this._id = data.id;
        this._field = data.field;
        this._expressions = data.expressions;
        this._operator = data.operator;
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
     field field
     */
    get field() {
        return this._field;
    }
    /**
     field field
     */
    set field(value) {
        this._field = value;
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
}
exports.BusinessRuleSubExpressionGroup = BusinessRuleSubExpressionGroup;
//# sourceMappingURL=BusinessRuleSubExpressionGroup.js.map