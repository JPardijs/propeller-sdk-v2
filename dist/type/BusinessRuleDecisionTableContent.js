"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleDecisionTableContent = void 0;
/**
 Object class for BusinessRuleDecisionTableContent
 */
class BusinessRuleDecisionTableContent {
    /**
     Creates a new instance of BusinessRuleDecisionTableContent
     */
    constructor(data = {}) {
        this._hitPolicy = data.hitPolicy;
        this._rows = data.rows;
        this._inputs = data.inputs;
        this._outputs = data.outputs;
    }
    /**
     The table's hitPolicy.
    Possible values: first, collect.
    'first' means that the first matching row is used.
    'collect' means that all matching rows are used.
     */
    get hitPolicy() {
        return this._hitPolicy;
    }
    /**
     The table's hitPolicy.
    Possible values: first, collect.
    'first' means that the first matching row is used.
    'collect' means that all matching rows are used.
     */
    set hitPolicy(value) {
        this._hitPolicy = value;
    }
    /**
     The table's rows
     */
    get rows() {
        return this._rows;
    }
    /**
     The table's rows
     */
    set rows(value) {
        this._rows = value;
    }
    /**
     The table's input columns
     */
    get inputs() {
        return this._inputs;
    }
    /**
     The table's input columns
     */
    set inputs(value) {
        this._inputs = value;
    }
    /**
     The table's output columns
     */
    get outputs() {
        return this._outputs;
    }
    /**
     The table's output columns
     */
    set outputs(value) {
        this._outputs = value;
    }
}
exports.BusinessRuleDecisionTableContent = BusinessRuleDecisionTableContent;
//# sourceMappingURL=BusinessRuleDecisionTableContent.js.map