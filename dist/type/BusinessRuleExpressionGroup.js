"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleExpressionGroup = void 0;
/**
 Represents a business rule expression group
 */
class BusinessRuleExpressionGroup {
    /**
     Creates a new instance of BusinessRuleExpressionGroup
     */
    constructor(data = {}) {
        this._id = data.id;
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
exports.BusinessRuleExpressionGroup = BusinessRuleExpressionGroup;
//# sourceMappingURL=BusinessRuleExpressionGroup.js.map